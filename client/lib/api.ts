import { hc } from 'hono/client';
import { type WebSocketApp } from '../../server';

export const client = hc<WebSocketApp>(import.meta.env['SERVER'] ?? 'http://localhost:3000');