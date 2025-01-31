import { ANYONE_CAN, definePermissions } from "@rocicorp/zero";

import { schema as generatedSchema, Schema } from "./prisma/generated/zero/schema";

// The contents of your decoded JWT.
type AuthData = {
  sub: string | null;
};

export const schema = generatedSchema;
export const permissions = definePermissions<AuthData, Schema>(generatedSchema, () => ({
  days: {
    row: {
      select: ANYONE_CAN
    }
  }
}));

