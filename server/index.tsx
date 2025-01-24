import OpenAI from "openai";
import { Hono } from 'hono'
import { stream, streamText, streamSSE } from 'hono/streaming'
import { swaggerUI } from '@hono/swagger-ui'
import { cors } from 'hono/cors'
import { createBunWebSocket, serveStatic } from 'hono/bun'
import { enhance } from './zenstack/enhance';
import type { ServerWebSocket } from 'bun'
import { WSContext } from 'hono/ws'
import { createHonoHandler } from '@zenstackhq/server/hono';
import { PrismaClient } from './prisma/generated/client';
import { app as user} from './routes/user';

const prisma = new PrismaClient();



const openai = new OpenAI({
    organization: "org-qeVAVf08YWHaB7EWAHcm5Yys",
    project: "proj_ICScjEEtgPYYKUPdinrKwqFh",
});

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
const app = new Hono().use('/*', cors({
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
).get('/stuff', (c) => {
  return c.json({
    message: 'created!',
  })
}).get('/streaming', (c) => {
  return streamText(c, async (stream) => {
    const stream2 = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: "Say this is a test, and a meaningless long text" }],
      store: true,
      stream: true,
    });
    for await (const chunk of stream2) {
      await stream.write(chunk.choices[0]?.delta?.content || "") 
    }
  })
})
.route('/users', user).
  get('/doc', serveStatic({ path: '/openapi.json' }));

export default {
  port: 3061,
  fetch: app.fetch,
  websocket,
}

export type WebSocketApp = typeof app;
