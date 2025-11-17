# **PRD — Corrections & Content Update**

**Project:** Marketing Landing Page (Revision)

---

## **1. Objective**

Ensure the landing page accurately represents the developer’s skills and professional context. Remove misleading agency/enterprise-level language and replace it with neutral portfolio-appropriate content.

---

## **2. Scope of Work**

### **In Scope**

* Update a complete set of text content across the site
* Ensure form behavior and messaging matches capabilities
* Correct repository and deployment links
* Add clarity that this is a portfolio project
* Improve validation feedback on contact form
* Add screenshots to README

### **Out of Scope**

* Visual redesign
* New pages or features
* Backend integrations
* Pricing models or service automation

---

## **3. Content Changes Required**

### **3.1 Brand / Identity correction**

Replace all mentions of “Aura Studio” and similar elements.

**New identity options:**

* “Marketing Site Template”

Remove false claims:

* “San Francisco”
* “Remote-first since 2016”
* “$60k–$250k” engagement
* VC-stage targeting (Seed, Series B, etc.)

**Goal:** Avoid assumptions that conflict with your actual profile.

---

### **3.2 Service copy correction**

Remove claims of operating as an agency.

Replace with:

* “Landing page builds”
* “Frontend sections and UI components”
* “Next.js website templates”

Avoid any reference to:

* High-budget clients
* Long operating history
* Full studio capabilities

---

### **3.3 Contact section copy alignment**

Current text promises:

* Under-48-hour response
* Scoping and proposal process
  These imply full commercial service.

Update to:

* “Demo contact form for portfolio purposes”
* “Submits input to a serverless API route”

If needed:

* Add a tooltip or small inline note: “Message is not stored.”

---

## **4. Functional Adjustments**

### **4.1 Form behavior**

**Required**

* Validate name, email, message fields
* Show inline validation for empty fields and invalid email
* Disable button during submit
* Show success block on 200 response

**Optional**

* Return server error message on 400 responses

**API remains unchanged**.

---

## **5. Repository Updates**

### **5.1 README**

* Replace placeholder “your-vercel-url” with actual deployment URL:
  `https://marketing-site-five-kohl.vercel.app/`
* Add a “Screenshots” section with at least one screenshot
* Add a factual project purpose sentence:

```
Portfolio project demonstrating a marketing landing page built with Next.js (App Router), TypeScript, and Tailwind.
```

### **5.2 GitHub About Section**

* Update website link to the correct URL
* Add short repo description consistent with README

---

## **6. Non-Functional Requirements**

* Maintain responsiveness across all breakpoints
* No console or build warnings
* Keep Tailwind as sole styling system

---

## **7. Acceptance Criteria Checklist**

| Requirement                                     | Status |
| ----------------------------------------------- | :----: |
| Studio/agency branding removed                  |    ☐   |
| Unrealistic pricing/location references removed |    ☐   |
| Content rewritten to match portfolio purpose    |    ☐   |
| Contact form behavior corrected                 |    ☐   |
| Demo messaging added to contact section         |    ☐   |
| README URL corrected                            |    ☐   |
| Screenshot added to README                      |    ☐   |
| Repo About link updated                         |    ☐   |

Item must be checked only when fully implemented.

---

## **8. Deliverables**

* Revised live deployment
* Updated GitHub repo
* Updated Featured item description (if applicable)