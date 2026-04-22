# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**AutoflowZero** — Next.js 14 V2 website for Autoflow, a Portuguese B2B automation agency selling Website + WhatsApp IA + Rececionista IA (+ CRM in Total tier) to micro-businesses in Portugal.

All copy in **European Portuguese (pt-PT)**.

## Environment

- **OS**: Windows 11 Pro
- **Shell**: Git Bash (Unix syntax — forward slashes, `/dev/null`, etc.)
- **Working directory**: `C:\Users\alexr\Desktop\AUTOFLOWZERO`

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — brand tokens via CSS custom properties in `globals.css`
- **shadcn/ui** components — manually implemented in `src/components/ui/`
- **Framer Motion** — for animations (check `prefers-reduced-motion`)
- **React Hook Form + Zod** — audit form at `/auditoria`
- **Resend** — email via Route Handler `/api/audit`
- **next-sitemap** — runs as `postbuild`

## Development Commands

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build + sitemap generation
npm run lint       # ESLint
```

## Project Structure

```
src/
  app/                     # Next.js App Router
    page.tsx               # Homepage (assembles section components)
    layout.tsx             # Root layout (fonts, NicheProvider)
    api/audit/route.ts     # POST: Resend email + optional GHL webhook
    precos/                # Detailed pricing page
    como-funciona/         # 7-day onboarding timeline
    casos/[slug]/          # Dynamic case study pages
    faq/                   # FAQ with search
    sobre/                 # About page
    contacto/              # Contact page
    auditoria/             # Audit form landing
    obrigado/              # Post-submit thank you
    servicos/              # 4 service detail pages
    nichos/[slug]/         # 9 dynamic niche pages
    rgpd/ termos/ subprocessadores/ cookies/   # Legal pages
  components/
    layout/                # Navbar, Footer, StickyContactBar
    sections/              # Homepage section components
    ui/                    # button, card, badge, accordion
    Logo.tsx               # 3 diagonal strokes SVG with animation
    PhoneMockup.tsx        # Animated iPhone/WhatsApp conversation
    ROICalculator.tsx      # Interactive sliders + CountUp output
    WhatsAppDemo.tsx       # Client-side keyword-matching chat demo
    NicheSelector.tsx      # 9 pill chips updating NicheContext
    PricingCard.tsx        # Pricing plan card + plan data array
    ComparisonTable.tsx    # 4-column comparison table
    NicheInitializer.tsx   # Sets NicheContext from slug on niche pages
  data/
    niches.ts              # NicheData[] — 9 niches with ROI defaults, conversations, FAQs
    demoResponses.ts       # Keyword → response map for WhatsApp demo
    faqs.ts                # FAQ categories and questions
    caseStudies.ts         # 3 case studies with before/after metrics
  config/
    site.ts                # Single source of truth: prices, phone, vagas, email
  providers/
    NicheProvider.tsx      # React context for activeNiche state
  lib/
    utils.ts               # cn(), formatEuro()
    validations.ts         # Zod schema for audit form
```

## Key Architecture Pattern

**NicheContext** (`src/providers/NicheProvider.tsx`) is the central state — it wraps the entire app in `layout.tsx`. Components that change per-niche (`HeroSection`, `ProblemSection`, `ROICalculator`, `PhoneMockup`, `WhatsAppDemo`) all call `useNiche()`. Selecting a chip in `NicheSelector` updates context → all components re-render with niche-specific data.

## Brand Design System

**CSS custom properties** defined in `src/app/globals.css` `:root`:

```css
--accent:    #FF6A00   /* primary orange — ALL CTAs */
--accent-h:  #FF7A1A   /* hover */
--bg:        #0A0A0A
--bg-2:      #111111
--bg-3:      #171717
--border:    #2A2A2A
--text:      #F2F2F2
--muted:     #888888
--green:     #25D366   /* WhatsApp only */
--red:       #EF4444
--success:   #10B981
```

**Fonts**: Space Grotesk (headings) + Inter (body) + JetBrains Mono (numbers/prices) — via `next/font`.

**Logo**: `src/components/Logo.tsx` — 3 diagonal orange SVG strokes with stroke-dasharray animation.

## Pricing (do NOT change)

| Plan | Monthly | Setup |
|---|---|---|
| Arrancar | €39/mês | €199 |
| Crescer *(featured)* | €149/mês | €349 |
| Total | €379/mês | €590 |

All defined in `src/config/site.ts`. Components consume via `siteConfig.pricing`.

## Copy Rules (always enforce)

- "tu" not "você" — always informal
- pt-PT vocabulary: marcação, telemóvel, ecrã, canalizador, ficheiro
- No "revolucionário", "inovador", "disruptivo"
- CTAs: imperative + action — "Ver preços", "Falar agora"
- Numbers: €1.234 · 1.º · 25 %

## How to Add a New Niche

1. Add entry to `src/data/niches.ts` with all required fields
2. Add demo responses to `src/data/demoResponses.ts`
3. The page at `/nichos/[slug]` is generated automatically via `generateStaticParams`
4. Add to `NicheSelector.tsx` pill order if desired

## How to Change Prices

Edit `src/config/site.ts` — all components read from `siteConfig.pricing`.

## How to Change Vagas (Scarcity)

Edit `vagasRestantes` and `vagasMes` in `src/config/site.ts`.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```
RESEND_API_KEY=         # Email delivery (optional in dev — logs to console)
GHL_WEBHOOK_URL=        # GoHighLevel webhook (optional)
NEXT_PUBLIC_WHATSAPP_NUMBER=351910000000
NEXT_PUBLIC_EMAIL=hello@autoflow.pt
NEXT_PUBLIC_PHONE=+351910000000
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel
3. Add env vars in Vercel project settings
4. Deploy — zero config needed

## Reference Files (V1)

- Full V1 website: `C:\Users\alexr\Desktop\AUTOFLOW\index.html`
- Sales plan: `C:\Users\alexr\Desktop\AUTOFLOW\Plano_Vendas_Autoflow.pdf`
- Logo source: `C:\Users\alexr\Desktop\AUTOFLOW\Logo 1.png`
