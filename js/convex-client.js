import { ConvexClient } from "https://esm.sh/convex@1.31.6/browser";

// This URL comes from your .env.local file
const convexUrl = "https://academic-puma-597.convex.cloud";

export const client = new ConvexClient(convexUrl);

console.log("Convex Client Initialized");
