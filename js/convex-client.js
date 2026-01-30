import { ConvexClient } from "https://esm.sh/convex@1.31.6/browser";

// This URL comes from your .env.local file
const convexUrl = "https://perfect-goshawk-242.convex.cloud"; // Production
// const convexUrl = "https://academic-puma-597.convex.cloud"; // Dev

export const client = new ConvexClient(convexUrl);

console.log("Convex Client Initialized");
