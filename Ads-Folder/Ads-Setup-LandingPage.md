# Current Site Ad Setup:

Pushed. Here's what went live:

  Meta Pixel + Tracking:
  - Pixel installed (ID: 1715251733215249) — fires PageView on load
  - Lead event fires on CTA button clicks to /x-scale.html (only styled buttons, not nav/footer links)
  - ViewContent fires when visitors scroll into key sections (how-it-works, services, modules, integrations)

  Copy/Structure:
  - Meta description updated — no longer uses the overused "build the rig" phrase
  - *2 ROUNDS PER MONTH added under final CTA scarcity (4 engagements × 2 rounds = 8)
  - Integrations footer link → #integrations (marquee section)
  - Duplicate marquee images now have img-protected

  For Facebook Ads setup remaining on your end:
  1. Verify your domain in Meta Business Suite (Settings > Brand Safety > Domains)
  2. Test the pixel — go to your page, open Facebook Pixel Helper Chrome extension to confirm events fire
  3. Create a Custom Conversion in Events Manager for the Lead event if you want to optimize ad delivery for consultation bookings
  4. Consider Conversions API (CAPI) later for server-side redundancy — PostHog can potentially feed into this


● Done. Meta Pixel is now on all 12 pages:

  ┌────────────────┬──────────┬──────────────────────────────────────────────────┐
  │      Page      │  Pixel   │                      Events                      │
  ├────────────────┼──────────┼──────────────────────────────────────────────────┤
  │ index.html     │ PageView │                                                  │
  ├────────────────┼──────────┼──────────────────────────────────────────────────┤
  │ flow.html      │ PageView │ Lead (CTA clicks), ViewContent (section scrolls) │
  ├────────────────┼──────────┼──────────────────────────────────────────────────┤
  │ firm.html      │ PageView │                                                  │
  ├────────────────┼──────────┼──────────────────────────────────────────────────┤
  │ steel.html     │ PageView │                                                  │
  ├────────────────┼──────────┼──────────────────────────────────────────────────┤
  │ careers.html   │ PageView │                                                  │
  ├────────────────┼──────────┼──────────────────────────────────────────────────┤
  │ x-scale.html   │ PageView │                                                  │
  ├────────────────┼──────────┼──────────────────────────────────────────────────┤
  │ value.html     │ PageView │                                                  │
  ├────────────────┼──────────┼──────────────────────────────────────────────────┤
  │ thank-you.html │ PageView │ Lead (fires on page load = form completed)       │
  ├────────────────┼──────────┼──────────────────────────────────────────────────┤
  │ privacy.html   │ PageView │                                                  │
  ├────────────────┼──────────┼──────────────────────────────────────────────────┤
  │ terms.html     │ PageView │                                                  │
  ├────────────────┼──────────┼──────────────────────────────────────────────────┤
  │ 404.html       │ PageView │                                                  │
  ├────────────────┼──────────┼──────────────────────────────────────────────────┤
  │ not-ready.html │ PageView │                                                  │
  └────────────────┴──────────┴──────────────────────────────────────────────────┘

  The key tracking flow for ads: Visitor sees ad → lands on flow.html (PageView) → clicks CTA (Lead event on click) → goes to x-scale.html (PageView)   → submits form → lands on thank-you.html (Lead event confirms conversion).

  Use the Facebook Pixel Helper Chrome extension to verify events are firing on each page.

Facebook/Meta Lead Ads — How to Set Up

  Ad 1: Service + Guarantee Offer (Flow OS)

  - Objective: Leads
  - Audience: Business owners/ops directors, $2M-$50M revenue, interests in business automation, operations management, AI tools, Salesforce/HubSpot 
  users
  - Hook: Lead with the pain (operational chaos, tool sprawl, key-person dependency) then the guarantee
  - Copy direction:
  "Your operation runs on memory, momentum, and whoever happens to remember how things work. Flow OS changes that — one system, every workflow, every   agent, every decision. 90 days to full ownership. 55% efficiency gains or we keep working until you hit it. Book your Architecture Session."      
  - CTA: "Book Now" or "Learn More" → exoent.co/flow or directly to exoent.co/x-scale
  - Format: Single image or short video (15s showing the dashboard/CardStack). Carousel also works (one card per module).
  - Landing page: exoent.co/flow (the deep-dive) or exoent.co/x-scale (direct booking)

  Ad 2: Free Lead Magnet (AI Audit + Resources)

  - Objective: Leads
  - Audience: Broader — anyone interested in AI for business, operations efficiency
  - Hook: Lead with the free value, lower barrier
  - Copy direction:
  "We'll audit your workflows, identify the biggest automation candidates, and give you a custom blueprint — free. No pitch. No commitment. If we    
  can't find 55% in efficiency gains, the session's on us. Grab your free AI audit."
  - CTA: "Get Free Audit" → exoent.co/x-scale or use Meta's native Lead Form (collects name/email in-app, no landing page needed — lower friction)   
  - Format: Static image with clear text overlay. Lead forms built natively in Meta perform better for top-of-funnel.
  - Landing page: exoent.co/value (for resource downloads) or exoent.co/x-scale (for audit booking)

  Best practice: Run Ad 2 (free audit) as top-of-funnel to build a warm audience, then retarget those who clicked but didn't convert with Ad 1       
  (service + guarantee).

  ---
  #3: Custom Conversions

  Not done yet — this is configured in Meta Events Manager, not in code.

  Here's what to do:
  1. Go to Meta Events Manager → Custom Conversions
  2. Create new: Name it "Consultation Booking"
  3. Rule: URL contains thank-you (or the exact thank-you page URL)
  4. Category: Lead
  5. This tells Meta "when someone hits the thank-you page, that's a conversion" — so your ad delivery optimizes for people likely to complete the   
  form

  Alternatively, since we already fire fbq('track', 'Lead') on the thank-you page, you can skip Custom Conversions and just use the standard Lead    
  event as your optimization event when building the ad. Meta will see the Lead event automatically. Custom Conversions are only needed if you want  
  URL-based rules on top.

  My recommendation: Use the standard Lead event. It's already firing. When you build the ad campaign, under "Optimization & Delivery," select "Lead"   as the conversion event. Done.

  ---
  #4: Conversions API (CAPI)

  What it is: Server-side event tracking that sends conversion data directly from your server to Meta — bypasses browser blockers, iOS privacy       
  restrictions, etc. Pairs with the pixel for redundancy.

  Current state: You said you started signup. CAPI requires:
  1. A server sending events to Meta's API (not just client-side JS)
  2. An access token from Meta Events Manager
  3. Either a custom server endpoint OR a partner integration (like Zapier, PostHog, or a cloud function)

  For your setup, the simplest path would be:
  - PostHog → Meta CAPI integration — PostHog can forward events to Meta server-side. This would give you redundant tracking without building a      
  custom server.
  - OR use Zapier/Make — when a form submission happens (via Convex or whatever your x-scale form uses), Zapier sends the Lead event server-side to  
  Meta.

  My recommendation: Don't rush CAPI. Your pixel is live and the Lead event fires on the thank-you page. That's enough to launch ads and optimize.   
  CAPI becomes important when you're spending $5K+/month and need better attribution accuracy. Revisit after your first campaign cycle.

  ---
  TL;DR next steps for you:
  1. Install the Facebook Pixel Helper Chrome extension — visit your pages, confirm green checkmarks
  2. In Events Manager, verify the Lead event shows up under "Test Events" tab
  3. Build Ad 1 (service) and Ad 2 (free audit) using the copy directions above
  4. When setting up the ad, optimize for the Lead event
  5. Skip CAPI for now — revisit when ad spend justifies it.