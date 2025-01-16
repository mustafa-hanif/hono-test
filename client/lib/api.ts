import { hc } from 'hono/client';
import { type WebSocketApp } from '../../server';

export const client = hc<WebSocketApp>('http://localhost:3000');