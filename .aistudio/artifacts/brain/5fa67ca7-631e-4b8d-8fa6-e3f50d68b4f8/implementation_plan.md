# Lantern Serviced Apartments — Executive Meeting & Digital Showcase Portal

A mobile-first, high-converting digital showcase and portfolio portal for Lantern Serviced Apartments (Chemilil Road, Parklands, Nairobi). Designed specifically for in-person client meetings, executive introductions, and instant QR-code scanning, combining the residential suites, executive boardroom/conference packages, dining, and direct WhatsApp booking into a single luxury web experience.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Key Architectural & Phasing Structure**:
> - **Primary Objective**: Serve as an instant, prestigious introduction portal when the client shares her QR code during business meetings, as well as a standalone luxury booking catalog.
> - **Brand System**: Faithful translation of the official Lantern Serviced Apartments identity using warm gold/brass accents (`#C9A86C`), dark espresso wood tones (`#3A3027`), cream canvas (`#FDFBF7`), and refined typography pairing (`Cormorant Garamond` headers + `Plus Jakarta Sans` body).
> - **Phased Rollout Strategy**: Broken into 4 distinct, manageable phases so you can review and approve each stage before continuing to the next.

- **Phase 1 (Foundation & Executive Presentation)**: Digital business card & QR code drawer, hero section with Lantern branding, contact quick-actions (WhatsApp, Call, Email, Save vCard), and property overview.
- **Phase 2 (Residential Suites & Pricing Catalog)**: Complete 4-tier suite catalog (Normal Studio, Deluxe Studio, 1-Bedroom, 2-Bedroom) with Room Only vs. Bed & Breakfast toggles, photo galleries using local uploaded images, and instant WhatsApp reservation triggers.
- **Phase 3 (Conference & Dining Facilities Showcase)**: Executive Boardroom packages (Half Day KSh 1,500, Full Day KSh 4,000, Full Board KSh 10,000) with delegate inclusions, Lantern Dining highlights, and catering inquiries.
- **Phase 4 (Interactive Rate Estimator, Map & Polish)**: Live stay calculator with weekend (5%) and long-stay (10%) discount rules, location guide (Parklands proximity to Westlands/CBD/hospitals), and offline PWA/QR modal readiness.

---

## 1. Overview & Core Concept

- **What It Does**: Combines content from `lantern.co.ke/facilities/` and `lantern.co.ke/our-apartments/` into an executive digital profile and rate catalog. When scanned via QR code in a meeting, it presents a bespoke digital brochure that explains Lantern's suites, boardroom facilities, pricing, and offers with 1-tap booking.
- **Target Audience / Persona**:
  - Corporate clients, meeting delegates, and executives being introduced to Lantern during business meetings.
  - Business travelers, expatriates, and medical tourists seeking serviced living in Parklands, Nairobi.
- **Key Value**: Replaces heavy physical brochures or disjointed website pages with a single polished, mobile-optimized experience where clients can review suites, inspect boardroom packages, and initiate bookings via WhatsApp in seconds.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Meeting Introduction & Scan Flow**:
   - Client scans the QR code or opens the link during an introduction.
   - Immediate high-impact header displays the official Lantern logo, Khadija Kuria's executive profile badge, and 1-tap contact buttons (Direct WhatsApp, Call, Email, Map).
   - Floating / Header "Share QR Code" trigger opens an interactive QR code modal for scanning by meeting attendees.

2. **Apartment Discovery & Rate Toggle Flow**:
   - User navigates to the Apartment Suites section.
   - Interactive toggle switches pricing between **Room Only** (KSh 4,000–8,000) and **Bed & Breakfast** (KSh 4,700–8,700).
   - Tapping any suite opens a photo gallery lightbox featuring the 19 authentic high-resolution property photos uploaded for the project.
   - "Book on WhatsApp" button pre-populates a structured inquiry message with the selected suite, pricing tier, and guest details.

3. **Conference & Meeting Inquiries Flow**:
   - User reviews the Executive Boardroom section featuring the walnut conference room imagery.
   - Clear comparison cards for Half Day (KSh 1,500), Full Day (KSh 4,000), and Full Board (KSh 10,000) with detailed itemized inclusions (HD screen, stationery, tea breaks, buffet lunch, 50+ Mbps fiber).
   - 1-tap "Reserve Boardroom" drawer with date picker and delegate count.

4. **Interactive Rate Estimator Flow**:
   - Dynamic calculator where guests select suite type, check-in/check-out dates, and board plan.
   - Automatically calculates total nights and applies the 5% Weekend Discount (Fri–Sun) or 10% Long-Stay Privilege (5+ nights).
   - Displays transparent itemized totals and one-click WhatsApp submission.

### Visual Identity & Theme
- **Color Palette**:
  - Neutral Canvas: Soft warm ivory/cream (`#FDFBF7`) and crisp white (`#FFFFFF`)
  - Primary Brand Accent: Rich Gold / Warm Brass (`#C9A86C` / `#B39355`)
  - Deep Contrast / Wood Tone: Dark Walnut Espresso (`#30261E` / `#1F1813`)
  - Text: Charcoal (`#221F1C`) for body; deep espresso for headings
  - WhatsApp Accent: Official green (`#25D366`) for instant booking buttons
- **Typography**:
  - Display / Headings: `Cormorant Garamond` (editorial serif evoking boutique hospitality luxury)
  - Body & UI: `Plus Jakarta Sans` (ultra-clean, highly legible geometric sans-serif)
  - Numerals & Pricing: `tabular-nums font-mono` for crisp financial and pricing clarity
- **Spatial Rhythm & Anti-Slop Discipline**:
  - No generic purple gradients or AI capsule pills.
  - Authentic photography loaded directly from workspace assets (`/assets/aistudio/...`).
  - Strict Top Bar Contract: Brand wordmark/logo + clean single-line navigation + 1 primary action button ("Book Direct").

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Mobile-First Responsive Layout with Meeting Card Kicker**
  - *Chosen Approach*: Place a quick executive identity bar at the top with a modal QR code generator so the site functions both as an executive digital business card during in-person meetings and as a full desktop web catalog.
  - *Why*: Directly addresses the client's explicit meeting workflow ("she just shows people the QR code and once they scan it, it takes them to their website").
- **Decision 2: Direct WhatsApp Integration vs. Complex Payment Gateway**
  - *Chosen Approach*: One-tap WhatsApp booking pre-formatted with chosen apartment tier, dates, and dietary preferences, routing to `+254 718 199 663` and `+254 715 832 131`.
  - *Why*: Standard Kenyan hospitality booking practice; provides immediate conversion with zero friction or cart abandonment.
- **Decision 3: Zero Fragile External Dependencies**
  - *Chosen Approach*: All 19 user-uploaded assets are mapped from `/assets/aistudio/` and bundled with structured metadata from `src/data/lanternData.ts`.
  - *Why*: Ensures 100% reliable image loading and zero broken links in any environment.

---

## 4. Technical Architecture & Phased Execution

```
┌────────────────────────────────────────────────────────────────────────┐
│                       Lantern Showcase Web App                         │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Phase 1: Header, Executive Intro, QR Code Generator & Hero        │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                │                                       │
│  ┌─────────────────────────────┴────────────────────────────────────┐  │
│  │ Phase 2: Residential Suites Catalog & Interactive Photo Lightbox │  │
│  │ (Normal Studio, Deluxe Studio, 1-Bed, 2-Bed + Rate Toggle)       │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                │                                       │
│  ┌─────────────────────────────┴────────────────────────────────────┐  │
│  │ Phase 3: Conference Boardroom Packages & Lantern Dining Showcase │  │
│  │ (Half Day KSh 1,500 | Full Day KSh 4,000 | Inclusions Breakdown) │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                │                                       │
│  ┌─────────────────────────────┴────────────────────────────────────┐  │
│  │ Phase 4: Live Rate Estimator, Location & Parklands Sanctuary Map │  │
│  │ (Automated 5% Weekend & 10% Long-Stay Discounts + WhatsApp Send) │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### Proposed Phased Implementation Steps

* **Phase 1: Brand Foundation, Navigation & Executive Meeting Header**
  - Modern navigation bar following Top Bar Contract (Lantern logo, section links, WhatsApp CTA).
  - Executive introduction banner highlighting Khadija Kuria & Lantern Serviced Apartments with a "Show QR Code" modal for instant meeting scans.
  - Hero section establishing the Parklands sanctuary concept with key highlights.

* **Phase 2: Apartments & Suites Catalog**
  - Interactive pricing toggle: "Room Only" vs. "Bed & Breakfast".
  - 4 apartment tier cards with real specs, amenities, and photo carousels utilizing the uploaded bedroom and interior images.
  - Image lightbox modal for full-screen inspection of suites.
  - Pre-filled WhatsApp booking links per suite.

* **Phase 3: Executive Boardroom & Dining Showcase**
  - Boardroom package cards (Half Day, Full Day, Full Board) detailing inclusions (projection, stationery, tea breaks, lunch).
  - Dining section highlighting restaurant hours (7:00 AM – 10:00 PM), breakfast buffet, and catering.
  - Open Sky Atrium feature displaying architectural photos.

* **Phase 4: Stay Cost Estimator, Neighborhood Guide & Footer**
  - Interactive rate calculator computing nights, meal plans, and applying 5% weekend or 10% long-stay discounts.
  - Location and neighbourhood guide (Chemilil Road, Parklands; distance to Westlands, CBD, Aga Khan, MP Shah).
  - Clean footer with all official phone numbers, emails, and address.
