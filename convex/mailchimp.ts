"use node";

/**
 * Dual-Brand Mailchimp Integration
 * Exo Enterprise (B2B Parent) + Steel by Exo (B2C Child)
 *
 * Routes subscribers to separate Mailchimp accounts for:
 * - Reputation isolation (B2C spam won't affect B2B deliverability)
 * - Clean data separation (different merge fields per brand)
 * - Independent analytics per audience
 */

import { action } from "./_generated/server";
import { v } from "convex/values";

// Mailchimp Marketing SDK
const mailchimp = require("@mailchimp/mailchimp_marketing");

// ─── Brand Config Router ────────────────────────────────────────────────────

function getBrandConfig(brandType: "exo_b2b" | "steel_b2c") {
    if (brandType === "exo_b2b") {
        return {
            apiKey: process.env.MAILCHIMP_API_KEY_B2B,
            audienceId: process.env.MAILCHIMP_AUDIENCE_ID_B2B,
            server: process.env.MAILCHIMP_SERVER_B2B || "us3",
            brandTag: "Exo-B2B",
        };
    } else {
        return {
            apiKey: process.env.MAILCHIMP_API_KEY_B2C,
            audienceId: process.env.MAILCHIMP_AUDIENCE_ID_B2C,
            server: process.env.MAILCHIMP_SERVER_B2C || "us1",
            brandTag: "Steel-B2C",
        };
    }
}

// ─── Add Subscriber ─────────────────────────────────────────────────────────

export const addSubscriber = action({
    args: {
        email: v.string(),
        firstName: v.string(),
        lastName: v.string(),
        brandType: v.union(v.literal("exo_b2b"), v.literal("steel_b2c")),
        // B2B-specific optional fields
        company: v.optional(v.string()),
        jobTitle: v.optional(v.string()),
        // Shared optional fields
        phone: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        try {
            const config = getBrandConfig(args.brandType);

            if (!config.apiKey || !config.audienceId) {
                throw new Error(
                    `Missing Mailchimp configuration for brand: ${args.brandType}`
                );
            }

            // Initialize Mailchimp client with brand-specific credentials
            mailchimp.setConfig({
                apiKey: config.apiKey,
                server: config.server,
            });

            // Build merge fields based on brand type
            const mergeFields: Record<string, string> = {
                FNAME: args.firstName,
                LNAME: args.lastName,
            };

            if (args.phone) mergeFields.PHONE = args.phone;

            // Add B2B-specific fields for Exo Enterprise
            if (args.brandType === "exo_b2b") {
                if (args.company) mergeFields.COMPANY = args.company;
                if (args.jobTitle) mergeFields.JOBTITLE = args.jobTitle;
            }

            // Add subscriber to the correct Mailchimp audience
            const response = await mailchimp.lists.addListMember(config.audienceId, {
                email_address: args.email,
                status: "subscribed",
                merge_fields: mergeFields,
                tags: [config.brandTag],
            });

            console.log(`✅ Subscriber added to ${args.brandType}:`, response.id);

            return {
                success: true,
                subscriberId: response.id,
                brand: args.brandType,
                audienceId: config.audienceId,
            };
        } catch (error: any) {
            console.error(`❌ Mailchimp error for ${args.brandType}:`, error);

            // Handle "Member Exists" gracefully
            if (
                error.status === 400 &&
                error.response?.body?.title === "Member Exists"
            ) {
                return {
                    success: true,
                    subscriberId: null,
                    message: "Email already subscribed",
                    brand: args.brandType,
                };
            }

            return {
                success: false,
                error: error.message || "Failed to subscribe",
                brand: args.brandType,
            };
        }
    },
});

// ─── Update Subscriber (for PostHog sync later) ────────────────────────────

export const updateSubscriber = action({
    args: {
        email: v.string(),
        brandType: v.union(v.literal("exo_b2b"), v.literal("steel_b2c")),
        mergeFields: v.optional(v.any()),
        tags: v.optional(v.array(v.string())),
    },
    handler: async (ctx, args) => {
        try {
            const config = getBrandConfig(args.brandType);

            mailchimp.setConfig({
                apiKey: config.apiKey,
                server: config.server,
            });

            // MD5 hash of lowercase email = Mailchimp subscriber ID
            const crypto = require("crypto");
            const subscriberHash = crypto
                .createHash("md5")
                .update(args.email.toLowerCase())
                .digest("hex");

            const updateData: Record<string, any> = {};
            if (args.mergeFields) updateData.merge_fields = args.mergeFields;
            if (args.tags) updateData.tags = args.tags;

            const response = await mailchimp.lists.updateListMember(
                config.audienceId,
                subscriberHash,
                updateData
            );

            console.log(`✅ Subscriber updated in ${args.brandType}:`, response.id);

            return { success: true, subscriberId: response.id };
        } catch (error: any) {
            console.error("❌ Update subscriber error:", error);
            return { success: false, error: error.message };
        }
    },
});