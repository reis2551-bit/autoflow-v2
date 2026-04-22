# Autoflow V2

Next.js 14 website for Autoflow — Portuguese automation agency for micro-businesses.

## Quick Start

```bash
cp .env.example .env.local
# Fill in env vars (see below)

npm install
npm run dev
# → http://localhost:3000
```

## Scripts

```bash
npm run dev      # Dev server
npm run build    # Production build + sitemap
npm run lint     # ESLint
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Optional | Email delivery for audit form (logs to console if missing) |
| `GHL_WEBHOOK_URL` | Optional | GoHighLevel CRM webhook |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Yes | Without `+` or spaces, e.g. `351910000000` |
| `NEXT_PUBLIC_EMAIL` | Yes | Contact email |
| `NEXT_PUBLIC_PHONE` | Yes | Display phone number |

## Deploy to Vercel

1. Push to GitHub
2. Import in [vercel.com](https://vercel.com)
3. Add env vars in project settings
4. Deploy

## How to Change Prices

Edit `src/config/site.ts` — `pricing` object. All components read from here.

## How to Add a Niche

1. Add to `src/data/niches.ts` (see existing entries for shape)
2. Add demo responses to `src/data/demoResponses.ts`
3. Route `/nichos/[slug]` generates automatically

## How to Change Scarcity Band

Edit `vagasRestantes` and `vagasMes` in `src/config/site.ts`.
