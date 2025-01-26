import OpenAI from 'openai';
import { createCanvas, loadImage, GlobalFonts } from '@napi-rs/canvas';
import { timeout } from 'hono/timeout'



import Replicate from "replicate";
import { Hono } from 'hono'
import { stream, streamText, streamSSE } from 'hono/streaming'
import { swaggerUI } from '@hono/swagger-ui'
import { cors } from 'hono/cors'
import { createBunWebSocket, serveStatic } from 'hono/bun'
import { enhance } from './zenstack/enhance';
import { randomUUIDv7, type ServerWebSocket } from 'bun'
import { WSContext } from 'hono/ws'
import { createHonoHandler } from '@zenstackhq/server/hono';
import { PrismaClient } from './prisma/generated/client';
import { app as user} from './routes/user';

const _font = './RobotoCondensed-SemiBold.ttf';

GlobalFonts.registerFromPath(_font, 'Roboto');

const prisma = new PrismaClient();
const replicate = new Replicate();

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
  baseURL: 'https://api.deepseek.com/',
});

async function overlayText(imageBuffer: Buffer, outputPath: string, params: any[]) {
  const canvas = createCanvas(1216, 832); // Match the image dimensions
  const ctx = canvas.getContext("2d");

  // Load the generated image
  const image = await loadImage(imageBuffer);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  // {
  //   "text": "Discount on my hairdresser business services",
  //   "font": "bold 60px Arial",
  //   "fillStyle": "#FFFFFF",
  //   "strokeStyle": "#000000",
  //   "lineWidth": 2,
  //   "textX": 608,
  //   "textY": 416,
  //   "textAlign": "center"
  // }
  // Add crisp, sharp text
  params.forEach((param: any) => {
    ctx.font = param.font.replace('Arial', 'Roboto');
    ctx.fillStyle = param.fillStyle;
    ctx.strokeStyle = param.strokeStyle;
    ctx.lineWidth = param.lineWidth;

    ctx.textAlign = param.textAlign;
    ctx.strokeText(param.text, param.textX, param.textY);
    ctx.fillText(param.text, param.textX, param.textY);
  });

  // Save the output image
  const buffer = canvas.toBuffer("image/png");
  Bun.write(outputPath, buffer);
  console.log(`Image saved to ${outputPath}`);
}

const { upgradeWebSocket, websocket } =
  createBunWebSocket<ServerWebSocket>();

async function* asyncNumberGenerator(start = 1, end = 5, delay = 500) {
  for (let i = start; i <= end; i++) {
    await new Promise((resolve) => setTimeout(resolve, delay)); // Simulates a delay
    yield i;
  }
}
  
const clientDomain = process.env['NODE_ENV'] === 'production' ? 'https://client.hashmani.taskmate.ae' : 'http://localhost:3001';
let subscribers: { tableName: string, ws: WSContext<ServerWebSocket<undefined>> }[] = [];
const app = new Hono().use('/*', timeout(30000)).use('/*', cors({
  origin: clientDomain,
  credentials: true,
})).get('/ui', swaggerUI({ url: '/doc' })).use(
  '/api/model/*',
  createHonoHandler({
    getPrisma: (ctx) => {
      // return enhance(prisma, { user: getCurrentUser(ctx) });
      return enhance(prisma);
    },
  })
).get(
  '/ws',
  upgradeWebSocket((c) => {
    return {
      onOpen(_event, ws) {

      },
      onMessage(event, ws) {
        const data = JSON.parse(event.data.toString());
        if (data.type === 'subscribe') {
          subscribers.push({ tableName: data.tableName, ws });
          console.log(event.data, 'subscribed');
        }
      }
    }
  })
).post('/stuff', async (c) => {
  const body = await c.req.parseBody();
  const { text } = body;
  return streamText(c, async (stream) => {
    await stream.writeln('Running image generator');
    const output = await replicate.run(
      "black-forest-labs/flux-1.1-pro",
      {
        input: {
          prompt: `With the following prompt: 
          "${text}"
          
          And the using the following colors:
          - #FFD700
          - #000000
  
          A social media post image ideally for a whatsapp template, do not write any text on the image, do not use any animals in the image, have a clean background meant for overlay text, and have a modern design.`,
          output_format: 'jpg',
          aspect_ratio: "3:2",
          output_quality: 80,
          safety_tolerance: 2,
          prompt_upsampling: true
        }, 
      }
    );
    console.log(output);
    const _blob = await (output as any).blob();
    const imageBuffer = Buffer.from(await _blob.arrayBuffer()); // Convert
    await stream.writeln('Generating text'); 
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ 
        role: 'user', content: `Assume an social media image of size 1216x832,
        I want to overlay with a marketing text related but not exactly this prompt:
        "${text}"
  
        its better to have multiple lines of text in different styles
        
        I want an array of canvas parameters with this format:
        
        text
        font
        fillStyle
        strokeStyle
        lineWidth
        textX
        textY
        textAlign
  
        in JSON format to be used with the canvas API to overlay text, make sure to make the text crisp and sharp, do not output anything other than the JSON, make sure the text does not exceed the image dimensions.
        `,
      }],
      model: 'deepseek-chat',
    });
    console.log('Chat Response:', chatCompletion?.choices?.[0]?.message?.content);
    const finalParams = JSON.parse(chatCompletion?.choices?.[0]?.message?.content?.replace('\`\`\`json', '').replace('\`\`\`', '') ?? '[]');

    const _finalPath = `_generated/output_final${randomUUIDv7()}.png`;
    await overlayText(imageBuffer, _finalPath, finalParams);
    await stream.write(_finalPath);
  })
}).route('/users', user).
  get('/doc', serveStatic({ path: '/openapi.json' }))
 .use('/_generated/*', serveStatic({ root: './' }))
;

export default {
  port: 3061,
  fetch: app.fetch,
  websocket,
}

export type WebSocketApp = typeof app;
