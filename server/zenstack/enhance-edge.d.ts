import { type EnhancementContext, type EnhancementOptions, type AuthUser } from '@zenstackhq/runtime';
import { type PrismaClient } from '../prisma/generated/client';
export type { PrismaClient };
export declare function enhance<DbClient extends object>(prisma: DbClient, context?: EnhancementContext<AuthUser>, options?: EnhancementOptions): DbClient;
