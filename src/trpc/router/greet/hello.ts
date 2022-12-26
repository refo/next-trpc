import { trpcServer } from "src/trpc/trpcServer";
import { z } from "zod";

export const hello = trpcServer.procedure
  .input(
    z
      .object({
        text: z.string().nullish(),
      })
      .nullish()
  )
  .query(async ({ input }) => {
    return {
      greeting: `Hello ${input?.text ?? "world"}`,
    };
  });
