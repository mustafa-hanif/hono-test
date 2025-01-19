import { defineConfig } from 'drizzle-kit';
import path from 'path'
export default defineConfig({
  out: './server/drizzle',
  schema: './server/schema/',
  dialect: 'sqlite',
  dbCredentials: {
    url: path.resolve(__dirname, '../data/data.db'),
  },
});