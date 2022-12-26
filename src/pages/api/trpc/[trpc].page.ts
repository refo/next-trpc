import { createNextApiHandler } from "@trpc/server/adapters/next";
import { createContext } from "src/trpc/context";
import { appRouter } from "src/trpc/router";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext,
});
