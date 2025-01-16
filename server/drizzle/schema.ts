import { sqliteTable, AnySQLiteColumn, integer, index, text, numeric, uniqueIndex } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const migrations = sqliteTable("_migrations", {
	file: text({ length: 255 }).primaryKey().notNull(),
	applied: integer().notNull(),
});

export const collections = sqliteTable("_collections", {
	id: text().primaryKey().notNull(),
	system: numeric().default(sql`(FALSE)`).notNull(),
	type: text().default("sql`("base")`").notNull(),
	name: text().notNull(),
	fields: numeric().default(sql`("[]")`).notNull(),
	indexes: numeric().default(sql`("[]")`).notNull(),
	listRule: text().default("sql`(NULL)`"),
	viewRule: text().default("sql`(NULL)`"),
	createRule: text().default("sql`(NULL)`"),
	updateRule: text().default("sql`(NULL)`"),
	deleteRule: text().default("sql`(NULL)`"),
	options: numeric().default(sql`("{}")`).notNull(),
	created: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	updated: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
},
(table) => [
	index("idx__collections_type").on(table.type),
]);

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
},
(table) => [
	uniqueIndex("__pb_users_auth__tokenKey_idx").on(table.tokenKey),
	uniqueIndex("__pb_users_auth__email_idx").on(table.email),
	uniqueIndex("__pb_users_auth__username_idx").on(table.username),
]);

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

export const superusers = sqliteTable("_superusers", {
	created: text().default("").notNull(),
	email: text().default("").notNull(),
	emailVisibility: numeric().default(sql`(FALSE)`).notNull(),
	id: text().default("sql`('r'||lower(hex(randomblob(7))))`").primaryKey().notNull(),
	password: text().default("").notNull(),
	tokenKey: text().default("").notNull(),
	updated: text().default("").notNull(),
	verified: numeric().default(sql`(FALSE)`).notNull(),
},
(table) => [
	uniqueIndex("idx_email_pbc_3142635823").on(table.email),
	uniqueIndex("idx_tokenKey_pbc_3142635823").on(table.tokenKey),
]);

export const sqliteStat4 = sqliteTable("sqlite_stat4", {
	tbl: numeric(),
	idx: numeric(),
	neq: numeric(),
	nlt: numeric(),
	ndlt: numeric(),
	sample: numeric(),
});

export const params = sqliteTable("_params", {
	id: text().default("sql`('r'||lower(hex(randomblob(7))))`").primaryKey().notNull(),
	value: numeric().default(sql`(NULL)`),
	created: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
	updated: text().default("sql`(strftime('%Y-%m-%d %H:%M:%fZ'))`").notNull(),
});

export const externalAuths = sqliteTable("_externalAuths", {
	collectionRef: text().default("").notNull(),
	created: text().default("").notNull(),
	id: text().default("sql`('r'||lower(hex(randomblob(7))))`").primaryKey().notNull(),
	provider: text().default("").notNull(),
	providerId: text().default("").notNull(),
	recordRef: text().default("").notNull(),
	updated: text().default("").notNull(),
},
(table) => [
	uniqueIndex("idx_externalAuths_collection_provider").on(table.collectionRef, table.provider, table.providerId),
	uniqueIndex("idx_externalAuths_record_provider").on(table.collectionRef, table.recordRef, table.provider),
]);

export const mfas = sqliteTable("_mfas", {
	collectionRef: text().default("").notNull(),
	created: text().default("").notNull(),
	id: text().default("sql`('r'||lower(hex(randomblob(7))))`").primaryKey().notNull(),
	method: text().default("").notNull(),
	recordRef: text().default("").notNull(),
	updated: text().default("").notNull(),
},
(table) => [
	index("idx_mfas_collectionRef_recordRef").on(table.collectionRef, table.recordRef),
]);

export const otps = sqliteTable("_otps", {
	collectionRef: text().default("").notNull(),
	created: text().default("").notNull(),
	id: text().default("sql`('r'||lower(hex(randomblob(7))))`").primaryKey().notNull(),
	password: text().default("").notNull(),
	recordRef: text().default("").notNull(),
	sentTo: text().default("").notNull(),
	updated: text().default("").notNull(),
},
(table) => [
	index("idx_otps_collectionRef_recordRef").on(table.collectionRef, table.recordRef),
]);

export const authOrigins = sqliteTable("_authOrigins", {
	collectionRef: text().default("").notNull(),
	created: text().default("").notNull(),
	fingerprint: text().default("").notNull(),
	id: text().default("sql`('r'||lower(hex(randomblob(7))))`").primaryKey().notNull(),
	recordRef: text().default("").notNull(),
	updated: text().default("").notNull(),
},
(table) => [
	uniqueIndex("idx_authOrigins_unique_pairs").on(table.collectionRef, table.recordRef, table.fingerprint),
]);

export const sqliteStat1 = sqliteTable("sqlite_stat1", {
});

