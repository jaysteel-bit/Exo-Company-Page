# Twilio Setup

## Everything looks correct. Now set the 4 Convex env vars (run these in your terminal one by one):

  npx convex env set TWILIO_ACCOUNT_SID [REDACTED] --prod
  npx convex env set TWILIO_AUTH_TOKEN [REDACTED] --prod
  npx convex env set TWILIO_FROM_NUMBER "[REDACTED]" --prod
  npx convex env set ALERT_TO_NUMBER "[REDACTED]" --prod

  Note: 929-202-1268 → E.164 format is +19292021268 (US numbers need the +1 prefix).

  ---
  ## What was built — full summary

  New file: convex/twilio.ts

  An internalAction called notifyNewLead that:
  - Reads all credentials from Convex env vars (never hardcoded)
  - Calls the Twilio REST API directly via fetch (no SDK needed, works in Convex's Node runtime)
  - Builds the SMS body based on source:

  ┌───────────────┬──────────────────────────────────┬──────────────────────────────────────────────┐        
  │ source value  │           Who sent it            │               SMS you receive                │        
  ├───────────────┼──────────────────────────────────┼──────────────────────────────────────────────┤        
  │ "index"       │ Homepage form                    │ New Website Lead: Jane – jane@co.com         │        
  ├───────────────┼──────────────────────────────────┼──────────────────────────────────────────────┤        
  │ "value"       │ Vault/value.html form            │ New Website Lead: Jane – jane@co.com         │        
  ├───────────────┼──────────────────────────────────┼──────────────────────────────────────────────┤        
  │ "x-scale"     │ Full qualification app           │ 🚨 Application Submitted: Jane – jane@co.com │        
  ├───────────────┼──────────────────────────────────┼──────────────────────────────────────────────┤        
  │ "fb_ads"      │ Facebook/IG paid ad (future)     │ 🚨 FB AD LEAD: Jane – jane@co.com            │        
  ├───────────────┼──────────────────────────────────┼──────────────────────────────────────────────┤        
  │ anything else │ Future source, e.g. "google_ads" │ New Lead [google_ads]: Jane – jane@co.com    │        
  └───────────────┴──────────────────────────────────┴──────────────────────────────────────────────┘        

  - Logs errors but never throws, so a failed SMS never breaks lead creation

  Updated: convex/leads.ts

  Mutation: submitLead
  Page: index.html
  SMS fires when: Only on new leads (not returning visitors)
  ────────────────────────────────────────
  Mutation: submitValueLead
  Page: value.html
  SMS fires when: Only on new leads (not returning visitors)
  ────────────────────────────────────────
  Mutation: submitApplication
  Page: x-scale.html
  SMS fires when: Always — both updates and new inserts, because this is your highest-value conversion       

  No frontend changes needed. source is already set server-side in each mutation handler — it's not passed   
  from the browser. This is intentional and more secure (a client can't fake a source value).

  ---
  How to test

  1. Open your live site and submit the homepage contact form with a test email
  2. Check the Convex dashboard → Logs → you should see [Twilio] SMS sent. SID: SM...
  3. Check your phone — you should receive: New Website Lead: John – john@test.com
  4. Check the Convex dashboard → Data → leads table → confirm the new row has source: "index"
  5. Repeat by going all the way through to x-scale.html — you'll get a second 🚨 Application Submitted: SMS 
  when they submit the full form