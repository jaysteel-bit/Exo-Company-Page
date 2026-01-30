import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    leads: defineTable({
        firstName: v.string(),
        lastName: v.string(),
        email: v.string(),
        timestamp: v.number(),
        status: v.string(), // e.g., "new", "contacted", "qualified"
        // Expanded qualifier fields
        phone: v.optional(v.string()),
        annualRevenue: v.optional(v.string()),
        investmentCapability: v.optional(v.string()),
        priceQualifier: v.optional(v.string()),
    }).index("by_email", ["email"]),
});
