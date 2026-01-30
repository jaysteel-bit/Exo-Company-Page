# Exo Enterprise & Convex Backend Integration Guide

This document outlines how your static website (`index.html`, `x-scale.html`) communicates with your **Convex** backend database. It serves as a manual for understanding the current data flow and a playbook for making future changes. Should be updated as changes are made.

---

## 1. High-Level Architecture

Your website uses a **"Serverless"** architecture. You do not have a traditional backend server (like Node.js or Python) running 24/7. Instead, your static HTML pages talk directly to the Convex Cloud database using JavaScript.

*   **Frontend**: Vanilla HTML + JavaScript (No framework like React).
*   **Backend**: Convex (Database + API Functions).
*   **Bridge**: The `convex-client.js` file handles the connection.

---

## 2. Current Data Flow (The "Lead Journey")

The lead capture process is split across two pages. Here is exactly how data moves:

### Step 1: The "Hook" (`index.html`)
1.  **User Action**: Visitor fills out First Name, Last Name, and Email on the home page.
2.  **Exo Logic**:
    *   Calls the `submitLead` mutation in Convex.
    *   **Result**: A new record is created in the `leads` table. status: `"new"`.
    *   **Persistence**: The form data is *also* saved to the browser's `sessionStorage` (temporary memory).
    *   **Redirect**: User is sent to `x-scale.html`.

### Step 2: The Lead Application "Close" (`x-scale.html`)
1.  **Auto-Fill**: On load, the page checks `sessionStorage`. If it finds data from Step 1, it auto-fills the hidden Name/Email fields.
2.  **User Action**: User enters Phone (triggering dynamic fields) and answers the 3 qualification questions.
3.  **Exo Logic**:
    *   Calls the `submitApplication` mutation in Convex.
    *   **Smart Update**: The backend looks for an existing lead with that **Email**.
        *   **If found**: It *updates* the existing record with the new phone/qualifier data. Status changes to `"application_submitted"`.
        *   **If NOT found** (user skipped Step 1): It creates a brand new record with all data.

---

## 3. The Database Schema (`convex/schema.ts`)

This file defines the "shape" of your data. If it's not here, Convex won't save it.

**Current Fields in `leads` table:**
*   `firstName` (String)
*   `lastName` (String)
*   `email` (String) - *Indexed for fast lookups*
*   `phone` (String, Optional) - *Formatted as (555) 123-4567*
*   `annualRevenue` (String, Optional)
*   `investmentCapability` (String, Optional)
*   `priceQualifier` (String, Optional)
*   `status` (String) - *e.g., "new", "application_submitted"*
*   `timestamp` 

---

## 4. How to Add/Edit Fields (The Playbook)

If you want to ask a new question (e.g., "Company Size"), you must update **3 layers** in this specific order:

### Phase 1: The Database (Backend)
1.  Open `convex/schema.ts`.
2.  Add the new field inside the `defineTable` block:
    ```typescript
    companySize: v.number(), // or v.string(), v.boolean()
    ```
3.  **Save**. Convex will automatically update your database structure.

### Phase 2: The Logic (API)
1.  Open `convex/leads.ts`.
2.  Update the `args` list in the `submitApplication` mutation to accept the new data:
    ```typescript
    companySize: v.number(),
    ```
3.  Update the `handler` function to actually save it to the database:
    ```typescript
    await ctx.db.patch(existingLead._id, {
        // ... existing fields ...
        companySize: args.companySize,
    });
    ```

### Phase 3: The Website (Frontend)
1.  Open `x-scale.html`.
2.  **Add the Input**: Create your HTML input or dropdown. Give it a unique `id` (e.g., `id="company-size"`).
3.  **Update the Script**: Scroll down to the JavaScript section.
    *   Grab the value: `const size = document.getElementById('company-size').value;`
    *   Pass it to the mutation:
        ```javascript
        await client.mutation("leads:submitApplication", {
            // ... existing args ...
            companySize: size
        });
        ```

---

## 5. Troubleshooting & Management

### "The form is stuck / spinning"
*   **Check the Console**: Right-click the page -> Inspect -> "Console" tab. Red errors usually explain the issue (e.g., "Field 'phone' is required but was not found").
*   **Check `npx serve`**: Are you running the local server? You cannot open these files directly ( `file://` ); they must be served (`http://localhost...`).

### "Where is data?"
*   Access the **Convex Dashboard** (run `npx convex dashboard` in your terminal).
*   Go to the **Data** tab. You can see, edit, and delete rows manually here. This is your "Excel sheet" for the database. **Be careful not to delete any data that we may need** 

### "How do I add a new field?"
*   See **Phase 1, 2, and 3** above for examples and step-by-step instructions. 

### Deployment & Local Development
* To deploy the website to convex, run `npx convex deploy` in the terminal. 
* To run the website locally, run `npx serve` in the terminal. 

  - During development (now): Run npx convex dev locally to test forms and data flow
  - When ready to deploy: Run npx convex deploy once — this pushes your code to Convex's servers
  - After deployment: Convex runs on their cloud 24/7. You don't run anything. Users just visit your site.

  So it's like:
  1. Dev phase: npx convex dev (only when you're actively building)
  2. Push to production: npx convex deploy (one-time command)
     - Production URL: https://perfect-goshawk-242.convex.cloud
  3. Forever after: Nothing — Convex handles it in the cloud

### "How do I add to this documentation page?"
* Make sure you have the correct permissions to edit this file. Then make sure after you edit you place your name and timestamp of when you edited the file. 