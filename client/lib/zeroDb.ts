import { useZero } from "@rocicorp/zero/react";
import { Schema } from "@/prisma/zero/schema";

export const useMyZero = () => {
  const z = useZero<Schema>();
  return z
}