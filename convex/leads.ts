import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

// ─── submitLead ─────────────────────────────────────────────────────────────
// Called from: index.html (#contact form)
// Purpose: Initial low-friction lead capture (name + email only)
// Also stores: engagementPreference (if user clicked Jumpstart/Co-Pilot/Fully Managed)
// Also stores: source = "index"
export const submitLead = mutation({
    args: {
        firstName: v.string(),
        lastName: v.string(),
        email: v.string(),
        engagementPreference: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        // Check if lead already exists (e.g., came from value.html first)
        const existingLead = await ctx.db
            .query("leads")
            .withIndex("by_email", (q) => q.eq("email", args.email))
            .first();

        if (existingLead) {
            // Update with new info, preserve existing fields
            await ctx.db.patch(existingLead._id, {
                firstName: args.firstName,
                lastName: args.lastName,
                ...(args.engagementPreference && { engagementPreference: args.engagementPreference }),
                source: existingLead.source || "index",
            });
            return existingLead._id;
        }

        const leadId = await ctx.db.insert("leads", {
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            timestamp: Date.now(),
            status: "new",
            source: "index",
            ...(args.engagementPreference && { engagementPreference: args.engagementPreference }),
        });

        // ─── Twilio SMS Alert ───────────────────────────────────────────────
        await ctx.scheduler.runAfter(0, internal.twilio.notifyNewLead, {
            leadId,
            firstName: args.firstName,
            email: args.email,
            source: "index",
        });

        return leadId;
    },
});

// ─── submitValueLead ────────────────────────────────────────────────────────
// Called from: value.html (Exo Vault / free resources form)
// Purpose: Captures lead + resource interest + company info before redirect to x-scale
// Stores: leadInterest (which resource they clicked), company, companySize, revenue, newsletter
export const submitValueLead = mutation({
    args: {
        firstName: v.string(),
        lastName: v.string(),
        email: v.string(),
        company: v.optional(v.string()),
        companySize: v.optional(v.string()),
        annualRevenue: v.optional(v.string()),
        leadInterest: v.optional(v.string()),
        newsletterOptIn: v.optional(v.boolean()),
    },
    handler: async (ctx, args) => {
        const existingLead = await ctx.db
            .query("leads")
            .withIndex("by_email", (q) => q.eq("email", args.email))
            .first();

        let leadId;

        if (existingLead) {
            await ctx.db.patch(existingLead._id, {
                firstName: args.firstName,
                lastName: args.lastName,
                company: args.company,
                companySize: args.companySize,
                annualRevenue: args.annualRevenue,
                leadInterest: args.leadInterest,
                newsletterOptIn: args.newsletterOptIn,
                source: existingLead.source || "value",
            });
            leadId = existingLead._id;
        } else {
            leadId = await ctx.db.insert("leads", {
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                company: args.company,
                companySize: args.companySize,
                annualRevenue: args.annualRevenue,
                leadInterest: args.leadInterest,
                newsletterOptIn: args.newsletterOptIn,
                timestamp: Date.now(),
                status: "new",
                source: "value",
            });

            // ─── Twilio SMS Alert (new leads only) ─────────────────────────
            await ctx.scheduler.runAfter(0, internal.twilio.notifyNewLead, {
                leadId,
                firstName: args.firstName,
                email: args.email,
                source: "value",
            });
        }

        // ─── Mailchimp Integration ──────────────────────────────────────────
        // Automatically subscribe to Exo-B2B audience
        try {
            await ctx.scheduler.runAfter(0, internal.mailchimp.addSubscriber, {
                email: args.email,
                firstName: args.firstName,
                lastName: args.lastName,
                brandType: "exo_b2b",
                company: args.company,
            });
        } catch (error) {
            console.error("Failed to schedule Mailchimp subscription:", error);
            // Settle for just the database entry if this fails
        }

        return leadId;
    },
});

// ─── submitApplication ──────────────────────────────────────────────────────
// Called from: x-scale.html (qualification form)
// Purpose: Full application with phone, revenue, investment, price qualifier
// Also stores: engagementPreference (carried over from index.html via sessionStorage)
export const submitApplication = mutation({
    args: {
        firstName: v.string(),
        lastName: v.string(),
        email: v.string(),
        phone: v.string(),
        annualRevenue: v.string(),
        investmentCapability: v.string(),
        priceQualifier: v.string(),
        engagementPreference: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        // Check if lead exists by email
        const existingLead = await ctx.db
            .query("leads")
            .withIndex("by_email", (q) => q.eq("email", args.email))
            .first();

        if (existingLead) {
            // Update existing — merge all qualification data
            await ctx.db.patch(existingLead._id, {
                phone: args.phone,
                annualRevenue: args.annualRevenue,
                investmentCapability: args.investmentCapability,
                priceQualifier: args.priceQualifier,
                ...(args.engagementPreference && { engagementPreference: args.engagementPreference }),
                status: "application_submitted",
            });

            // ─── Twilio SMS Alert (always fire for applications) ────────────
            await ctx.scheduler.runAfter(0, internal.twilio.notifyNewLead, {
                leadId: existingLead._id,
                firstName: args.firstName,
                email: args.email,
                source: "x-scale",
            });

            return existingLead._id;
        } else {
            // Create new if somehow missed earlier steps
            const leadId = await ctx.db.insert("leads", {
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                phone: args.phone,
                annualRevenue: args.annualRevenue,
                investmentCapability: args.investmentCapability,
                priceQualifier: args.priceQualifier,
                ...(args.engagementPreference && { engagementPreference: args.engagementPreference }),
                timestamp: Date.now(),
                status: "application_submitted",
                source: "x-scale",
            });

            // ─── Twilio SMS Alert ───────────────────────────────────────────
            await ctx.scheduler.runAfter(0, internal.twilio.notifyNewLead, {
                leadId,
                firstName: args.firstName,
                email: args.email,
                source: "x-scale",
            });

            return leadId;
        }
    },
});

export const updateLeadPhone = mutation({
    args: {
        id: v.id("leads"),
        phone: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            phone: args.phone,
        });
    },
});
