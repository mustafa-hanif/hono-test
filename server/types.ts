import { InferSelectModel } from "drizzle-orm";
import { sessionTable, users } from "./schema/schema";

export type User = InferSelectModel<typeof users>;
export type Session = InferSelectModel<typeof sessionTable>;