import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './server/drizzle',
  schema: './server/schema/',
  dialect: 'sqlite',
  dbCredentials: {
    url: 'data.db',
  },
});