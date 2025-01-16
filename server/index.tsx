import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { createBunWebSocket } from 'hono/bun'
import * as schema from './schema/schema'
import type { ServerWebSocket } from 'bun'
import { WSContext } from 'hono/ws'
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator'

import {
  getCookie,
  setCookie,
} from 'hono/cookie'

import { db } from './db'
import { createSession, generateSessionToken, validateSessionToken } from './session'

const { upgradeWebSocket, websocket } =
  createBunWebSocket<ServerWebSocket>();

let subscribers: { tableName: string, ws: WSContext<ServerWebSocket<undefined>>}[] = [];
const app = new Hono().use('/*', cors({
  origin: process.env['NODE_ENV'] === 'production' ? 'https://hono.wetarseel.ai' : 'http://localhost:3000',
  credentials: true,
})).get(
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
}).get('/users', async (c) => {
  const users = db.select().from(schema.users).all();
  return c.json(users)
}).post('/users/login', zValidator('form', z.object({
  username: z.string(),
  password: z.string(),
})), async (c) => {
  const origin = c.req.header('Origin');
  const { username, password } = c.req.valid('form');
  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.username, username),
  });
  if (!user) {
    return c.json(
      {
        message: 'user not found',
      },
      400
    )
  }
  const valid = await Bun.password.verify(password, user.password, "argon2d");
  if (valid) {
    let { user: sUser, session } = validateSessionToken(user.tokenKey);
    console.log(user, sUser, session);
    if (!session) {
      session = createSession(user.tokenKey, Number(user.id));
    }
    setCookie(c, 'token', user.tokenKey, {
      sameSite: 'None',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    });
    return c.json(
      {
        username, session
      },
      200
    )  
  }
  return c.json({ message: 'invalid password' }, 400);
}).post('/users/register', zValidator('form', z.object({  
  username: z.string(),
  password: z.string(),
})), async (c) => {
  const { username, password } = c.req.valid('form');
  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.username, username),
  });
  if (user) {
    return c.json(
      {
        message: 'user already exists',
      },
      400
    )
  }
  const token = generateSessionToken();
  const hash = await Bun.password.hash(password, "argon2d")
  db.insert(schema.users).values({ 
    password: hash,
    tokenKey: token,
    username: username
  }).run();
  setCookie(c, 'token', token, {
    sameSite: 'None',
  });
  return c.json(
    {
      username, password,
    },
    200
  )
}).get('/users/checklogin', async (c) => {
  const token = getCookie(c, 'token');
  console.log({ token });
  if (!token) {
    return c.json({ session: null, user: null }, 401);
  }
  const { session, user } = validateSessionToken(token);
  return c.json({ session, user }, 200);
});

export default {
  port: 3061,
  fetch: app.fetch,
  websocket,
}

export type WebSocketApp = typeof app
