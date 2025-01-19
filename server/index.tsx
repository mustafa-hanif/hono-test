import { Hono } from 'hono'
import { swaggerUI } from '@hono/swagger-ui'
import { cors } from 'hono/cors'
import { createBunWebSocket, serveStatic } from 'hono/bun'
import { enhance } from '@zenstackhq/runtime';
import type { ServerWebSocket } from 'bun'
import { WSContext } from 'hono/ws'
import { createHonoHandler } from '@zenstackhq/server/hono';
import { PrismaClient } from '@prisma/client'
import { app as user} from './routes/user';

const prisma = new PrismaClient();

const { upgradeWebSocket, websocket } =
  createBunWebSocket<ServerWebSocket>();

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
}).route('/users', user).
  get('/doc', serveStatic({ path: '/openapi.json' }));

export default {
  port: 3000,
  fetch: app.fetch,
  websocket,
}

export type WebSocketApp = typeof app;
