import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    leads: defineTable({
        firstName: v.string(),
        lastName: v.string(),
        email: v.string(),
        timestamp: v.number(),
        status: v.string(), // e.g., "new", "contacted", "qualified"
    }).index("by_email", ["email"]),
});
