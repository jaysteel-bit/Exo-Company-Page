import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submitLead = mutation({
    args: {
        firstName: v.string(),
        lastName: v.string(),
        email: v.string(),
    },
    handler: async (ctx, args) => {
        const leadId = await ctx.db.insert("leads", {
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            timestamp: Date.now(),
            status: "new",
        });
        return leadId;
    },
});

export const submitApplication = mutation({
    args: {
        firstName: v.string(),
        lastName: v.string(),
        email: v.string(),
        phone: v.string(),
        annualRevenue: v.string(),
        investmentCapability: v.string(),
        priceQualifier: v.string(),
    },
    handler: async (ctx, args) => {
        // Check if lead exists by email
        const existingLead = await ctx.db
            .query("leads")
            .withIndex("by_email", (q) => q.eq("email", args.email))
            .first();

        if (existingLead) {
            // Update existing
            await ctx.db.patch(existingLead._id, {
                phone: args.phone,
                annualRevenue: args.annualRevenue,
                investmentCapability: args.investmentCapability,
                priceQualifier: args.priceQualifier,
                status: "application_submitted",
            });
            return existingLead._id;
        } else {
            // Create new if somehow missed step 1
            const leadId = await ctx.db.insert("leads", {
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                phone: args.phone,
                annualRevenue: args.annualRevenue,
                investmentCapability: args.investmentCapability,
                priceQualifier: args.priceQualifier,
                timestamp: Date.now(),
                status: "application_submitted",
            });
            return leadId;
        }
    },
});
