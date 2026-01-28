import { query } from "./_generated/server";

export const hello = query({
  args: {},
  handler: async (ctx) => {
    return "Connection Successful: Hello from your Convex Database!";
  },
});
