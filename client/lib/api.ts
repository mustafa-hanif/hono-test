import { hc } from 'hono/client';
import { type WebSocketApp } from '../../server';

export const client = hc<WebSocketApp>(import.meta.env['PROD'] ? 'https://bun.hashmani.taskmate.ae' : 'http://localhost:3000');