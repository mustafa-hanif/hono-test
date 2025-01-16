-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `_migrations` (
	`file` text(255) PRIMARY KEY NOT NULL,
	`applied` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `_collections` (
	`id` text PRIMARY KEY NOT NULL,
	`system` numeric DEFAULT (FALSE) NOT NULL,
	`type` text DEFAULT ("base") NOT NULL,
	`name` text NOT NULL,
	`fields` numeric DEFAULT ("[]") NOT NULL,
	`indexes` numeric DEFAULT ("[]") NOT NULL,
	`listRule` text DEFAULT (NULL),
	`viewRule` text DEFAULT (NULL),
	`createRule` text DEFAULT (NULL),
	`updateRule` text DEFAULT (NULL),
	`deleteRule` text DEFAULT (NULL),
	`options` numeric DEFAULT ("{}") NOT NULL,
	`created` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`updated` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx__collections_type` ON `_collections` (`type`);--> statement-breakpoint
CREATE TABLE `users` (
	`avatar` text DEFAULT '' NOT NULL,
	`created` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`email` text DEFAULT '' NOT NULL,
	`emailVisibility` numeric DEFAULT (FALSE) NOT NULL,
	`id` text PRIMARY KEY DEFAULT ('r'||lower(hex(randomblob(7)))) NOT NULL,
	`name` text DEFAULT '' NOT NULL,
	`password` text NOT NULL,
	`tokenKey` text NOT NULL,
	`updated` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`username` text NOT NULL,
	`verified` numeric DEFAULT (FALSE) NOT NULL,
	`type` text DEFAULT '' NOT NULL,
	`wallet` text DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `__pb_users_auth__tokenKey_idx` ON `users` (`tokenKey`);--> statement-breakpoint
CREATE UNIQUE INDEX `__pb_users_auth__email_idx` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `__pb_users_auth__username_idx` ON `users` (`username`);--> statement-breakpoint
CREATE TABLE `headings` (
	`created` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`id` text PRIMARY KEY DEFAULT ('r'||lower(hex(randomblob(7)))) NOT NULL,
	`name` text DEFAULT '' NOT NULL,
	`updated` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`day` text DEFAULT '' NOT NULL,
	`active` numeric DEFAULT (FALSE) NOT NULL,
	`heading_number` numeric DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `days` (
	`created` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`description` text DEFAULT '' NOT NULL,
	`id` text PRIMARY KEY DEFAULT ('r'||lower(hex(randomblob(7)))) NOT NULL,
	`name` text DEFAULT '' NOT NULL,
	`updated` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`active` numeric DEFAULT (FALSE) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `stocks` (
	`bank_name` text DEFAULT '' NOT NULL,
	`created` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`id` text PRIMARY KEY DEFAULT ('r'||lower(hex(randomblob(7)))) NOT NULL,
	`updated` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `competition` (
	`active` numeric DEFAULT (FALSE) NOT NULL,
	`created` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`id` text PRIMARY KEY DEFAULT ('r'||lower(hex(randomblob(7)))) NOT NULL,
	`pause` numeric DEFAULT (FALSE) NOT NULL,
	`updated` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`ended` numeric DEFAULT (FALSE) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `timer` (
	`active` numeric DEFAULT (FALSE) NOT NULL,
	`competition_end` text DEFAULT '' NOT NULL,
	`competition_start` text DEFAULT '' NOT NULL,
	`created` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`id` text PRIMARY KEY DEFAULT ('r'||lower(hex(randomblob(7)))) NOT NULL,
	`updated` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`round_time` numeric DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `stocks_headings` (
	`created` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`headings` text DEFAULT '' NOT NULL,
	`id` text PRIMARY KEY DEFAULT ('r'||lower(hex(randomblob(7)))) NOT NULL,
	`stocks` text DEFAULT '' NOT NULL,
	`updated` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`previous_price` numeric DEFAULT 0 NOT NULL,
	`current_price` numeric DEFAULT 0 NOT NULL,
	`change_in_price` numeric DEFAULT 0 NOT NULL,
	`percentage_change_in_price` text DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `stocks_users` (
	`created` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`id` text PRIMARY KEY DEFAULT ('r'||lower(hex(randomblob(7)))) NOT NULL,
	`stocks` text DEFAULT '' NOT NULL,
	`updated` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`users` text DEFAULT '' NOT NULL,
	`share_count` text DEFAULT '' NOT NULL,
	`balance_when_shorting` text DEFAULT '' NOT NULL,
	`short_share_count` text DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `_superusers` (
	`created` text DEFAULT '' NOT NULL,
	`email` text DEFAULT '' NOT NULL,
	`emailVisibility` numeric DEFAULT (FALSE) NOT NULL,
	`id` text PRIMARY KEY DEFAULT ('r'||lower(hex(randomblob(7)))) NOT NULL,
	`password` text DEFAULT '' NOT NULL,
	`tokenKey` text DEFAULT '' NOT NULL,
	`updated` text DEFAULT '' NOT NULL,
	`verified` numeric DEFAULT (FALSE) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_email_pbc_3142635823` ON `_superusers` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `idx_tokenKey_pbc_3142635823` ON `_superusers` (`tokenKey`);--> statement-breakpoint
CREATE TABLE `sqlite_stat4` (
	`tbl` numeric,
	`idx` numeric,
	`neq` numeric,
	`nlt` numeric,
	`ndlt` numeric,
	`sample` numeric
);
--> statement-breakpoint
CREATE TABLE `_params` (
	`id` text PRIMARY KEY DEFAULT ('r'||lower(hex(randomblob(7)))) NOT NULL,
	`value` numeric DEFAULT (NULL),
	`created` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
	`updated` text DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `_externalAuths` (
	`collectionRef` text DEFAULT '' NOT NULL,
	`created` text DEFAULT '' NOT NULL,
	`id` text PRIMARY KEY DEFAULT ('r'||lower(hex(randomblob(7)))) NOT NULL,
	`provider` text DEFAULT '' NOT NULL,
	`providerId` text DEFAULT '' NOT NULL,
	`recordRef` text DEFAULT '' NOT NULL,
	`updated` text DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_externalAuths_collection_provider` ON `_externalAuths` (`collectionRef`,`provider`,`providerId`);--> statement-breakpoint
CREATE UNIQUE INDEX `idx_externalAuths_record_provider` ON `_externalAuths` (`collectionRef`,`recordRef`,`provider`);--> statement-breakpoint
CREATE TABLE `_mfas` (
	`collectionRef` text DEFAULT '' NOT NULL,
	`created` text DEFAULT '' NOT NULL,
	`id` text PRIMARY KEY DEFAULT ('r'||lower(hex(randomblob(7)))) NOT NULL,
	`method` text DEFAULT '' NOT NULL,
	`recordRef` text DEFAULT '' NOT NULL,
	`updated` text DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_mfas_collectionRef_recordRef` ON `_mfas` (`collectionRef`,`recordRef`);--> statement-breakpoint
CREATE TABLE `_otps` (
	`collectionRef` text DEFAULT '' NOT NULL,
	`created` text DEFAULT '' NOT NULL,
	`id` text PRIMARY KEY DEFAULT ('r'||lower(hex(randomblob(7)))) NOT NULL,
	`password` text DEFAULT '' NOT NULL,
	`recordRef` text DEFAULT '' NOT NULL,
	`sentTo` text DEFAULT '' NOT NULL,
	`updated` text DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_otps_collectionRef_recordRef` ON `_otps` (`collectionRef`,`recordRef`);--> statement-breakpoint
CREATE TABLE `_authOrigins` (
	`collectionRef` text DEFAULT '' NOT NULL,
	`created` text DEFAULT '' NOT NULL,
	`fingerprint` text DEFAULT '' NOT NULL,
	`id` text PRIMARY KEY DEFAULT ('r'||lower(hex(randomblob(7)))) NOT NULL,
	`recordRef` text DEFAULT '' NOT NULL,
	`updated` text DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_authOrigins_unique_pairs` ON `_authOrigins` (`collectionRef`,`recordRef`,`fingerprint`);--> statement-breakpoint
CREATE TABLE `sqlite_stat1` (

);

*/