import { ConvexClient } from "convex/browser";

const convexUrl = "https://academic-puma-597.convex.cloud";
const client = new ConvexClient(convexUrl);

async function testMutation() {
    console.log("Submitting test lead...");
    try {
        const result = await client.mutation("leads:submitLead", {
            firstName: "Jay",
            lastName: "steel",
            email: "jay@exo.com"
        });
        console.log("Success! Lead ID:", result);
        process.exit(0);
    } catch (error) {
        console.error("Mutation failed:", error);
        process.exit(1);
    }
}

testMutation();
