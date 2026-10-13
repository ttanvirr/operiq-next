<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Operiq Next.js Landing Page Documentation

## 1. Project Overview & Architecture
Operiq is a high-converting, neo-brutalist landing page for a GoHighLevel (GHL) implementation and business automation agency.

- **Framework**: Next.js 16 (App Router with Turbopack)
- **UI & React**: React 19
- **Styling**: Tailwind CSS v4, Lucide Icons, Custom design system with neo-brutalist accents (`btn`, `btn-primary`, `btn-outline`, `card`, `font-number`, tabular data)
- **Design Base**: Warm parchment canvas (`#f5f4f0`), emerald mint accents (`#86efac`), blue actions (`#1b6ef3`), clean dark typography (`#0a0a0a`), and rounded pill geometry.

## 2. Directory Structure
```
operiq-next/
├── app/
│   ├── globals.css          # Design system tokens, typography scales, neo-brutalist button utilities, and animations
│   ├── layout.tsx           # Root layout with Inter font, SEO meta tags, OpenGraph, and viewport config
│   ├── page.tsx             # Complete landing page aggregating all sections + JSON-LD Schema.org
├── components/
│   ├── AnnouncementBanner.tsx # Top notification bar with link to strategy booking
│   ├── Navbar.tsx             # Sticky navigation with dropdown menus, mobile navigation drawer
│   ├── HeroSection.tsx        # High-impact hero section with value proposition and trust badges
│   ├── LogoMarquee.tsx        # Infinite ticker of client brand logos with linear mask fading
│   ├── CommandCentre.tsx      # Interactive SVG GHL command centre diagram + 3 live KPI metric cards
│   ├── ServicesSection.tsx    # 3D coverflow carousel on desktop & swipeable carousel on mobile
│   ├── CapabilitiesGrid.tsx   # 6 core GoHighLevel implementation capability cards
│   ├── ProcessSection.tsx     # 5-step structured implementation timeline (horizontal desktop / vertical mobile)
│   ├── IndustriesSection.tsx  # Industry-tailored solutions with niche tags and quick links
│   ├── TestimonialsSection.tsx# Verified client quotes carousel with pagination controls
│   ├── PricingSection.tsx     # 3-tier transparent pricing table (Starter, Growth, Scale)
│   ├── FaqSection.tsx         # 8-item interactive FAQ accordion
│   ├── CtaSection.tsx         # High-converting strategy call card
│   └── Footer.tsx             # Multi-column footer with brand info, partner badge, social links, and legal terms
```

## 3. Styling Conventions
- **Neo-Brutalism Buttons**: `.btn` class with `border: 2px solid #0a0a0a`, `border-radius: 9999px`, and solid box shadow `4px 4px #0a0a0a`. Primary variant (`.btn-primary`) uses `#86efac`.
- **Backgrounds**: Body uses `#f5f4f0` for warm, paper-like feel. Cards use clean white `#ffffff` with subtle borders (`#e5e7eb` / `#d1d5db`).
- **Typography**: Headings use `.text-display` and `.text-headline` with tight letter spacing (`-0.03em` to `-0.035em`) for bold modern punchiness. Numbers use `.font-number` with tabular figures.
- **Micro-Animations**: SVG flowing dashes, infinite marquee ticker, expanding accordions, and 3D depth transitions.

## 4. Development & Build Commands
- `npm run dev`: Start Turbopack local development server
- `npm run build`: Compile production static bundle and verify type-safety
- `npm run start`: Serve production build
- `npm run lint`: Run ESLint checks
