import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    leads: defineTable({
        firstName: v.string(),
        lastName: v.string(),
        email: v.string(),
        timestamp: v.number(),
        status: v.string(), // e.g., "new", "contacted", "qualified", "application_submitted"
        // Expanded qualifier fields (from x-scale.html form)
        phone: v.optional(v.string()),
        annualRevenue: v.optional(v.string()),
        investmentCapability: v.optional(v.string()),
        priceQualifier: v.optional(v.string()),
        // Engagement & interest tracking (from index.html + value.html)
        engagementPreference: v.optional(v.string()), // "Jumpstart" | "Co-Pilot" | "Fully Managed"
        leadInterest: v.optional(v.string()),          // "Roadmap" | "Hiring Archetypes" | "Process Maps" | "AI Frameworks" | "General"
        source: v.optional(v.string()),                // "index" | "value" | "x-scale" — where the lead originated
        // Value.html specific fields
        company: v.optional(v.string()),
        companySize: v.optional(v.string()),           // "1-10" | "11-50" | "51-200" | "201-500" | "500+"
        newsletterOptIn: v.optional(v.boolean()),
    }).index("by_email", ["email"]),
});
