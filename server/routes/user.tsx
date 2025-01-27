import { Hono } from 'hono'
import { PrismaClient } from '../prisma/generated/client';
import { enhance } from '../zenstack/enhance';
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod';
import {
  getCookie,
  setCookie,
} from 'hono/cookie'

import { createSession, generateSessionToken, validateSessionToken } from '../session'
import type { CookieOptions } from 'hono/utils/cookie'

const cookieConfig: CookieOptions = process.env['NODE_ENV'] === 'production' ? {
  sameSite: 'None',
  secure: true,
  domain: '.uae.wetarseel.ai',
  expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
} : {
  sameSite: 'Lax',
  expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
}

const prisma = new PrismaClient();
const db = enhance(prisma);

const app = new Hono().get('/', async (c) => {
  const users = await db.users.findMany();
  console.log(users);
  return c.json(users)
}).post('/login', zValidator('form', z.object({
  username: z.string(),
  password: z.string(),
})), async (c) => {
  const { username, password } = c.req.valid('form');
  console.time('login');
  const user = await db.users.findFirst({
    where: {
      username: username,
    },
  });
  if (!user) {
    return c.json(
      {
        message: 'user not found',
      },
      400
    )
  }
  console.timeEnd('login');
  const valid = await Bun.password.verify(password, user.password, "argon2d");
  if (valid) {
    let { user: sUser, session } = await validateSessionToken(user.tokenKey);
    console.log(user, sUser, session);
    if (!session) {
      session = await createSession(user.tokenKey, user.id);
    }
    setCookie(c, 'token', user.tokenKey, cookieConfig);
    return c.json(
      {
        username, session
      },
      200
    )
  }
  return c.json({ message: 'invalid password' }, 400);
}).post('/register', zValidator('form', z.object({
  username: z.string(),
  password: z.string(),
})), async (c) => {
  const { username, password } = c.req.valid('form');
  const user = await db.users.findFirst({
    where: {
      username: username,
    },
  });
  if (user) {
    return c.json(
      {
        username,
        message: 'NO',
      },
      400
    )
  }
  const token = generateSessionToken();
  const hash = await Bun.password.hash(password, "argon2d")
  const user1 = await db.users.create({
    data: {
      password: hash,
      tokenKey: token,
      username: username
    }
  });
  await createSession(token, user1.id);
  setCookie(c, 'token', token, cookieConfig);
  return c.json(
    {
      username, message: 'OK',
    },
    200
  )
}).get('/checklogin', async (c) => {
  const token = getCookie(c, 'token');
  console.log({ token });
  if (!token) {
    return c.json({ session: null, user: null }, 401);
  }
  const { session, user } = await validateSessionToken(token);
  return c.json({ session, user }, 200);
}).post('/logout', async (c) => {
  const token = getCookie(c, 'token');
  if (!token) {
    return c.json({ message: 'no token' }, 400);
  }
  const { session } = await validateSessionToken(token);
  if (!session) {
    return c.json({ message: 'no session' }, 400);
  }
  await db.session.delete({
    where: {
      id: session.id
    }
  });
  return c.json({ message: 'OK' }, 200);
})
export { app }