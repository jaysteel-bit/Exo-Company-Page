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
