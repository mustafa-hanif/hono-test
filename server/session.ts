import { Session, User } from "./types";
import { eq } from "drizzle-orm";
import { sha256 } from "@oslojs/crypto/sha2";
import { db } from './db'
import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from "@oslojs/encoding";
import { sessionTable, users } from "./schema/schema";
import { invariant } from "@tanstack/react-router";
import { Context } from "hono";
import { setCookie } from "hono/cookie";

export function generateSessionToken(): string {
	const bytes = new Uint8Array(20);
	crypto.getRandomValues(bytes);
	const token = encodeBase32LowerCaseNoPadding(bytes);
	return token;
}

export function createSession(token: string, userId: number): Session {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const session: Session = {
		id: sessionId,
		userId,
		expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
	};
	db.insert(sessionTable).values(session).run();
	return session;
}

export function validateSessionToken(token: string): SessionValidationResult {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const result = db
		.select({ user: users, session: sessionTable })
		.from(sessionTable)
		.innerJoin(users, eq(sessionTable.userId, users.id))
		.where(eq(sessionTable.id, sessionId)).all();
	if (result.length < 1) {
		return { session: null, user: null };
	}
  invariant(result[0], 'we have a session');
	const { user, session } = result[0];
	if (Date.now() >= session.expiresAt.getTime()) {
		db.delete(sessionTable).where(eq(sessionTable.id, session.id)).run();
		return { session: null, user: null };
	}
	if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
		session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
		db
			.update(sessionTable)
			.set({
				expiresAt: session.expiresAt
			})
			.where(eq(sessionTable.id, session.id)).run();
	}
	return { session, user };
}

export function invalidateSession(sessionId: string): void {
  db.delete(sessionTable).where(eq(sessionTable.id, sessionId)).run();
}

export type SessionValidationResult =
	| { session: Session; user: User }
	| { session: null; user: null };


  export function setSessionTokenCookie(c: Context, token: string): void {
    // When deployed over HTTP (localhost)
    setCookie(c, 'session', token, {
      sameSite: 'None',
    });
  }