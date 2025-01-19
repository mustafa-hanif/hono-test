import { Database } from 'bun:sqlite'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import * as schema from './schema/schema'
import path from 'path'

const sqlite = new Database(path.resolve(__dirname, '../data/data.db'))
export const db = drizzle(sqlite, { schema })