import { trpcServer } from "src/trpc/trpcServer";
import { greet } from "./greet";

export const appRouter = trpcServer.router({
  greet,
});

export type AppRouter = typeof appRouter;
