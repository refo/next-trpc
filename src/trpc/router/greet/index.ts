import { trpcServer } from "src/trpc/trpcServer";
import { hello } from "./hello";

export const greet = trpcServer.router({ hello });
