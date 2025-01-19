import { useRouterState } from "@tanstack/react-router";
import { ContextType } from "./types";

export const useTanContext = () => {
  const matches = useRouterState({ select: (s) => s.matches })
  const context: ContextType = matches?.[0]?.context ?? { user: null, session: null };
  return context;
}