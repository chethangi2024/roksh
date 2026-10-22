# Roksh Samsthe Foundation — Production Website

A modern, emotionally compelling, verified, and fully responsive website for **Roksh Samsthe Foundation**, an animal rescue and welfare organisation based in Bengaluru, Karnataka, India.

Built strictly in accordance with the approved **Product Requirements Document (PRD)** and mandatory image policy (100% genuine documentary photographs, zero stock/AI imagery).

---

## 🌟 Key Features Implemented

1. **Mandatory Image Policy Adherence:**
   - **Zero AI-generated or stock photographs.**
   - Every single photograph originates from verified Roksh archives across Bengaluru (rescues, veterinary hospital admissions, feeding cauldrons, boarding).
2. **Signature Section — Latest Rescues & Field Updates:**
   - Positioned directly below the hero.
   - Features the latest verified case: **Sapna (October 2026)** — discarded after breeding, diagnosed with TVT cancer, currently undergoing chemotherapy.
   - Interactive phase switcher (Street Intake, Chemotherapy Infusion, Clinical Care, and Recovery).
   - Accurate rescue date (*October 2026*) separated from publication/update dates.
3. **Verified Case Archive:**
   - Full histories with multi-stage documentary photos:
     - **Siddu:** Severe acute mange to healthy golden coat in safe boarding.
     - **Chinna:** Chronic bilateral ear infection healed without head tilt.
     - **Chotu:** Orphaned street puppy rescued on 20 October 2026 receiving warmth and foster care.
     - **Moti:** Community favourite dog treated in veterinary clinic harness.
   - Filterable by case status: *All, Active Treatment, Fully Recovered, Foster Care*.
4. **Daily Community Feeding Programme:**
   - Dedicated section featuring real field photos: mobile food preparation cauldrons in car boot, mother dog with pups, pack feeding, and clean bowls.
   - Wholesome nutritional recipe breakdown (chicken broth, pumpkin, calcium, rice).
   - Sponsorship contribution tiers: ₹500, ₹1,500, ₹5,000.
5. **Direct Banking & Transparency Vault:**
   - Scannable **IDFC FIRST Bank UPI QR Code**.
   - Interactive one-click copy button for UPI ID `roksh@idfcbank` with visual copied notification.
   - Verified NEFT/IMPS bank transfer details (A/C: `10128495021`, IFSC: `IDFB0040101`).
   - Interactive contribution tiers with celebratory confetti feedback.
6. **Volunteer & Get Involved Action Paths:**
   - Volunteer application form with client-side validation.
   - Raw supply checklist (rice, broth, deworming spot-on, medicated shampoos).
   - Direct WhatsApp group coordination link.
7. **Emergency Distress Reporting Guidelines:**
   - Realistic protocols for Bengaluru residents (safety first, photo/video evidence, live GPS location pin).
   - Immediate WhatsApp alert button with pre-filled message.
8. **Volunteer Field Desk (CMS):**
   - Built-in no-code administrative modal (accessible via "Field Desk" in the header and footer).
   - Allows volunteers to record a new rescue or update an existing animal's status (*e.g., from "Active Treatment" to "Recovered"*) with instant UI updates and JSON backup export!
9. **SEO, Accessibility & Performance:**
   - Full JSON-LD structured data for `NGO` / `AnimalShelter`.
   - OpenGraph, Twitter Cards, `robots.txt`, and XML sitemap (`/sitemap.xml`).
   - WCAG 2.2 AA compliant contrast, semantic HTML5, keyboard focus indicators, and `prefers-reduced-motion` support.

---

## 🛠 Technology Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Custom Vanilla CSS Design System with CSS Custom Properties (`src/styles/index.css`)
- **Icons:** `lucide-react`
- **Animations / Effects:** Custom CSS micro-animations + `canvas-confetti`
- **Asset Optimization:** Web-ready organized genuine media in `/public/assets/`

---

## 📁 Project Directory Structure

```
d:\1. Grow Invicta\Grow Invicta\1. AI Websites\Roksh/
├── PRD.docx                               # Approved Requirements Document
├── Digital Assets/                        # Original Unaltered Source Assets
│   ├── Roksh Logo.png                     # Official High-Res Badge
│   ├── Bank Details with QR.jpeg          # Verified IDFC First Bank QR
│   ├── Other details.docx                 # Organization copy & social links
│   ├── Recently Rescued dogs.docx         # Verified case histories
│   ├── Feeding/                           # 30 Field Feeding Photos
│   └── Pictures of rescued dogs/          # 114 Rescue Photos & MP4 Videos
├── public/
│   ├── robots.txt                         # Search engine crawler directives
│   ├── sitemap.xml                        # XML sitemap
│   └── assets/                            # Web-Optimized Genuine Assets
│       ├── logo.png                       # Circular badge logo
│       ├── bank-qr.jpeg                   # IDFC Bank UPI QR Code
│       ├── rescues/                       # Rescued dog case photos
│       └── feeding/                       # Feeding drive photos
├── src/
│   ├── App.jsx                            # Main layout & state coordinator
│   ├── main.jsx                           # Application entry point
│   ├── styles/
│   │   └── index.css                      # Design system, tokens & responsive styles
│   ├── data/
│   │   ├── organization.js                # Official org info, bank details, contacts
│   │   ├── rescues.js                     # Rescue data model & case histories
│   │   └── feeding.js                     # Feeding programme data & recipes
│   └── components/
│       ├── Header.jsx                     # Glassmorphic header & mobile drawer
│       ├── Hero.jsx                       # Full-width hero with Sapna's portrait
│       ├── LatestRescueHighlight.jsx      # Section 2 signature feature
│       ├── ImpactStats.jsx                # Verified metrics
│       ├── OurWork.jsx                    # 4 Core welfare pillars
│       ├── RescueStories.jsx              # Filterable case studies
│       ├── FeedingProgramme.jsx           # Feeding spotlight & sponsorships
│       ├── AboutRoksh.jsx                 # Vision, mission, and roots
│       ├── DonationVault.jsx              # UPI QR & bank transfer vault
│       ├── VolunteerForm.jsx              # Volunteer & supply donation form
│       ├── DistressReporting.jsx          # Emergency reporting guidelines
│       ├── Footer.jsx                     # Disclosures, links & copyright
│       ├── RescueDetailModal.jsx          # Full clinical case viewer
│       ├── AdminDeskModal.jsx             # Volunteer Field Desk (CMS)
│       └── LegalModal.jsx                 # Privacy Policy & Donation Terms
├── index.html                             # SEO meta tags, Google fonts, JSON-LD
├── package.json
└── vite.config.js
```

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📝 Content Management & Updates

### Method 1: Using the Interactive Field Desk (In-Browser)
1. Click **"Field Desk"** in the top navigation bar or footer.
2. Select **"Record New Rescue Story"** to add a new case, or **"Update Existing Animal Status"** to update recovery milestones.
3. Click **"Save Record"**. The website updates immediately without editing any code.
4. Use **"Export Backup JSON"** to download the updated dataset at any time.

### Method 2: Direct Codebase Update
- To update static rescue data permanently, edit `src/data/rescues.js`.
- To update feeding statistics or recipes, edit `src/data/feeding.js`.
- To update official contact information or banking accounts, edit `src/data/organization.js`.

---

## 🔒 Security & Privacy

- All donation flows direct supporters to official banking channels (`roksh@idfcbank` on IDFC FIRST Bank).
- No sensitive payment card data is captured or stored on the website.
- Exact street pack coordinates are protected to preserve animal safety.
