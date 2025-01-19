-- CreateTable
CREATE TABLE "competition" (
    "active" BOOLEAN NOT NULL DEFAULT false,
    "created" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')',
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT '''r''||lower(hex(randomblob(7)))',
    "pause" BOOLEAN NOT NULL DEFAULT false,
    "updated" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')',
    "ended" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "days" (
    "created" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')',
    "description" TEXT NOT NULL DEFAULT '',
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT '''r''||lower(hex(randomblob(7)))',
    "name" TEXT NOT NULL DEFAULT '',
    "updated" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')',
    "active" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "headings" (
    "created" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')',
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT '''r''||lower(hex(randomblob(7)))',
    "name" TEXT NOT NULL DEFAULT '',
    "updated" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')',
    "day" TEXT NOT NULL DEFAULT '',
    "active" BOOLEAN NOT NULL DEFAULT false,
    "heading_number" DECIMAL NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "stocks" (
    "bank_name" TEXT NOT NULL DEFAULT '',
    "created" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')',
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT '''r''||lower(hex(randomblob(7)))',
    "updated" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')'
);

-- CreateTable
CREATE TABLE "stocks_headings" (
    "created" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')',
    "headings" TEXT NOT NULL DEFAULT '',
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT '''r''||lower(hex(randomblob(7)))',
    "stocks" TEXT NOT NULL DEFAULT '',
    "updated" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')',
    "previous_price" DECIMAL NOT NULL DEFAULT 0,
    "current_price" DECIMAL NOT NULL DEFAULT 0,
    "change_in_price" DECIMAL NOT NULL DEFAULT 0,
    "percentage_change_in_price" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "stocks_users" (
    "created" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')',
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT '''r''||lower(hex(randomblob(7)))',
    "stocks" TEXT NOT NULL DEFAULT '',
    "updated" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')',
    "users" TEXT NOT NULL DEFAULT '',
    "share_count" TEXT NOT NULL DEFAULT '',
    "balance_when_shorting" TEXT NOT NULL DEFAULT '',
    "short_share_count" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "timer" (
    "active" BOOLEAN NOT NULL DEFAULT false,
    "competition_end" TEXT NOT NULL DEFAULT '',
    "competition_start" TEXT NOT NULL DEFAULT '',
    "created" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')',
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT '''r''||lower(hex(randomblob(7)))',
    "updated" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')',
    "round_time" DECIMAL NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "users" (
    "avatar" TEXT NOT NULL DEFAULT '',
    "created" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')',
    "email" TEXT NOT NULL DEFAULT '',
    "emailVisibility" BOOLEAN NOT NULL DEFAULT false,
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT '''r''||lower(hex(randomblob(7)))',
    "name" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL,
    "tokenKey" TEXT NOT NULL,
    "updated" TEXT NOT NULL DEFAULT 'strftime(''%Y-%m-%d %H:%M:%fZ'')',
    "username" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "type" TEXT NOT NULL DEFAULT '',
    "wallet" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT '''r''||lower(hex(randomblob(7)))',
    "userId" TEXT NOT NULL,
    "expiresAt" TEXT NOT NULL,
    CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "__pb_users_auth__tokenKey_idx" ON "users"("tokenKey");

-- CreateIndex
CREATE UNIQUE INDEX "__pb_users_auth__username_idx" ON "users"("username");

