import { sha256 } from "@oslojs/crypto/sha2";

import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from "@oslojs/encoding";
import { Context } from "hono";
import { setCookie } from "hono/cookie";
import { PrismaClient, session, users } from './prisma/generated/client';
import { enhance } from './zenstack/enhance';

const prisma = new PrismaClient();
const db = enhance(prisma);

export function generateSessionToken(): string {
	const bytes = new Uint8Array(20);
	crypto.getRandomValues(bytes);
	const token = encodeBase32LowerCaseNoPadding(bytes);
	return token;
}

export async function createSession(token: string, userId: string): Promise<session> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	console.log('createSession', { token, sessionId });
	const session: session = {
		id: sessionId,
		userId,
		expiresAt: (new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)).toDateString()
	};
	// db.insert(sessionTable).values(session).run();
	await db.session.create({
		data: {
			id: session.id,
			userId: session.userId,
			expiresAt: session.expiresAt
		}
	});
	return session;
}

export async function validateSessionToken(token: string): Promise<SessionValidationResult> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	console.log('validateSessionToken', { token, sessionId });
	const session = await db.session.findFirst({
		where: {
			id: sessionId
		},
		include: {
			user: true
		}
	});
	if (!session) {
		return { session: null, user: null };
	}
	const { user } = session;
	const _time = new Date(session.expiresAt).getTime();
	if (Date.now() >= _time) {
		await db.session.delete({
			where: {
				id: session.id
			}
		});
		return { session: null, user: null };
	}
	if (Date.now() >= _time - 1000 * 60 * 60 * 24 * 15) {
		session.expiresAt = (new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)).toDateString();
		await db.session.update({
			where: {
				id: session.id
			},
			data: {
				expiresAt: session.expiresAt
			}
		});
	}
	return { session, user };
}

export async function invalidateSession(sessionId: string): Promise<void> {
  await db.session.delete({
		where: {
			id: sessionId
		}
	});
}

export type SessionValidationResult =
	| { session: session; user: users }
	| { session: null; user: null };


  export function setSessionTokenCookie(c: Context, token: string): void {
    // When deployed over HTTP (localhost)
    setCookie(c, 'session', token, {
      sameSite: 'None',
    });
  }