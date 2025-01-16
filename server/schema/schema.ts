import { sqliteTable, AnySQLiteColumn, integer, index, text, numeric, uniqueIndex } from "drizzle-orm/sqlite-core"
  import { InferSelectModel, sql } from "drizzle-orm"

export const migrations = sqliteTable("_migrations", {
	file: text({ length: 255 }).primaryKey().notNull(),
	applied: integer().notNull(),
});

export const collections = sqliteTable("_collections", {
	id: text().primaryKey().notNull(),
	system: numeric().default(sql`(FALSE)`).notNull(),
	name: text().notNull(),
	listRule: text().default("sql`(NULL)`"),
	viewRule: text().default("sql`(NULL)`"),
	createRule: text().default("sql`(NULL)`"),
	updateRule: text().default("sql`(NULL)`"),
	deleteRule: text().default("sql`(NULL)`"),
	options: numeric().default(sql`('{}')`).notNull(),
	created: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	updated: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
});

export const users = sqliteTable("users", {
	avatar: text().default("").notNull(),
	created: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	email: text().default("").notNull(),
	emailVisibility: numeric().default(sql`(FALSE)`).notNull(),
	id: text().default("sql`('r'||lower(hex(randomblob(7))))`").primaryKey().notNull(),
	name: text().default("").notNull(),
	password: text().notNull(),
	tokenKey: text().notNull(),
	updated: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	username: text().notNull(),
	verified: numeric().default(sql`(FALSE)`).notNull(),
	type: text().default("").notNull(),
	wallet: text().default("").notNull(),
});

export const sessionTable = sqliteTable("session", {
	id: text("id").primaryKey(),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id),
	expiresAt: integer("expires_at", {
		mode: "timestamp"
	}).notNull()
});

export const headings = sqliteTable("headings", {
	created: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	id: text().default("sql`('r'||lower(hex(randomblob(7))))`").primaryKey().notNull(),
	name: text().default("").notNull(),
	updated: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	day: text().default("").notNull(),
	active: numeric().default(sql`(FALSE)`).notNull(),
	headingNumber: numeric("heading_number").notNull(),
});

export const days = sqliteTable("days", {
	created: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	description: text().default("").notNull(),
	id: text().default("sql`('r'||lower(hex(randomblob(7))))`").primaryKey().notNull(),
	name: text().default("").notNull(),
	updated: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	active: numeric().default(sql`(FALSE)`).notNull(),
});

export const stocks = sqliteTable("stocks", {
	bankName: text("bank_name").default("").notNull(),
	created: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	id: text().default("sql`('r'||lower(hex(randomblob(7))))`").primaryKey().notNull(),
	updated: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
});

export const competition = sqliteTable("competition", {
	active: numeric().default(sql`(FALSE)`).notNull(),
	created: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	id: text().default("sql`('r'||lower(hex(randomblob(7))))`").primaryKey().notNull(),
	pause: numeric().default(sql`(FALSE)`).notNull(),
	updated: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	ended: numeric().default(sql`(FALSE)`).notNull(),
});

export const timer = sqliteTable("timer", {
	active: numeric().default(sql`(FALSE)`).notNull(),
	competitionEnd: text("competition_end").default("").notNull(),
	competitionStart: text("competition_start").default("").notNull(),
	created: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	id: text().default("sql`('r'||lower(hex(randomblob(7))))`").primaryKey().notNull(),
	updated: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	roundTime: numeric("round_time").notNull(),
});

export const stocksHeadings = sqliteTable("stocks_headings", {
	created: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	headings: text().default("").notNull(),
	id: text().default("sql`('r'||lower(hex(randomblob(7))))`").primaryKey().notNull(),
	stocks: text().default("").notNull(),
	updated: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	previousPrice: numeric("previous_price").notNull(),
	currentPrice: numeric("current_price").notNull(),
	changeInPrice: numeric("change_in_price").notNull(),
	percentageChangeInPrice: text("percentage_change_in_price").default("").notNull(),
});

export const stocksUsers = sqliteTable("stocks_users", {
	created: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	id: text().default("sql`('r'||lower(hex(randomblob(7))))`").primaryKey().notNull(),
	stocks: text().default("").notNull(),
	updated: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	users: text().default("").notNull(),
	shareCount: text("share_count").default("").notNull(),
	balanceWhenShorting: text("balance_when_shorting").default("").notNull(),
	shortShareCount: text("short_share_count").default("").notNull(),
});