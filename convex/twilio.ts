"use node";

/**
 * Twilio SMS Alert Integration
 *
 * Sends an internal SMS to the business owner whenever a new lead is created.
 * Message content is templated based on the lead `source` field so we can
 * distinguish website organic leads from paid ad leads in the future.
 *
 * Required Convex env vars (set with `npx convex env set <KEY> <VALUE>`):
 *   TWILIO_ACCOUNT_SID   – Your Twilio Account SID (starts with AC...)
 *   TWILIO_AUTH_TOKEN    – Your Twilio Auth Token
 *   TWILIO_FROM_NUMBER   – Your Twilio phone number in E.164 format (+1...)
 *   ALERT_TO_NUMBER      – Your personal phone number in E.164 format (+1...)
 */

import { internalAction } from "./_generated/server";
import { v } from "convex/values";

// ─── Source → SMS Template ───────────────────────────────────────────────────
//
//  source value     | meaning                          | SMS template
//  -----------------+----------------------------------+--------------------------------
//  "index"          | Homepage contact form            | New Website Lead: Name – email
//  "value"          | Exo Vault / value.html form      | New Website Lead: Name – email
//  "x-scale"        | Full qualification application   | 🚨 Application: Name – email
//  "fb_ads"         | Facebook / Instagram paid ads    | 🚨 FB AD LEAD: Name – email
//  anything else    | Future source (e.g. "google_ads")| New Lead [source]: Name – email
//
function buildSmsBody(source: string, firstName: string, email: string): string {
    switch (source) {
        case "index":
        case "value":
            return `New Website Lead: ${firstName} – ${email}`;
        case "x-scale":
            return `🚨 Application Submitted: ${firstName} – ${email}`;
        case "fb_ads":
            return `🚨 FB AD LEAD: ${firstName} – ${email}`;
        default:
            return `New Lead [${source}]: ${firstName} – ${email}`;
    }
}

// ─── notifyNewLead ───────────────────────────────────────────────────────────
// Called via ctx.scheduler.runAfter(0, internal.twilio.notifyNewLead, {...})
// from leads mutations. Runs async so it never blocks the HTTP response.

export const notifyNewLead = internalAction({
    args: {
        leadId: v.id("leads"),
        firstName: v.string(),
        email: v.string(),
        source: v.string(),
    },
    handler: async (_ctx, args) => {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const fromNumber = process.env.TWILIO_FROM_NUMBER;
        const toNumber = process.env.ALERT_TO_NUMBER;

        if (!accountSid || !authToken || !fromNumber || !toNumber) {
            console.error(
                "[Twilio] Missing env vars. Set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, " +
                "TWILIO_FROM_NUMBER, and ALERT_TO_NUMBER via `npx convex env set`."
            );
            return;
        }

        const body = buildSmsBody(args.source, args.firstName, args.email);

        try {
            const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
            const credentials = Buffer.from(`${accountSid}:${authToken}`).toString("base64");

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    Authorization: `Basic ${credentials}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    From: fromNumber,
                    To: toNumber,
                    Body: body,
                }).toString(),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`[Twilio] API error ${response.status}:`, errorText);
            } else {
                const result = (await response.json()) as { sid: string };
                console.log(`[Twilio] SMS sent. SID: ${result.sid} | Lead: ${args.leadId} | Source: ${args.source}`);
            }
        } catch (error) {
            // Log but never throw — a failed SMS must not break the lead creation flow
            console.error("[Twilio] Failed to send SMS:", error);
        }
    },
});
