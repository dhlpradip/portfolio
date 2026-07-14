# Pradeep Dahal — Portfolio

Personal portfolio site built with the **Source & Verse** design system: a developer-poet identity with dual typography (JetBrains Mono + Fraunces), line-number gutter, and dark/light themes.

## Stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** + shadcn/ui (new-york)
- **Framer Motion** (scroll reveals)
- **next-themes** (dark/light)
- **Sonner** (toasts)
- **@vercel/analytics**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Environment Variables

Add to `.env.local`:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key

# Writings section — hidden from nav/search until you set true
NEXT_PUBLIC_WRITINGS_PUBLIC=false
```

Firebase keys are already present for future backend integration. Contact form submissions go through `app/api/contact/route.ts` — writings will use `lib/writings.ts` and `app/api/writings/route.ts` as the Firestore seam.

## Project Structure

```
app/                  # App Router pages + API routes
components/site/      # Portfolio sections (hero, about, projects, etc.)
components/ui/        # shadcn/ui primitives
lib/data.ts           # All site content (typed)
lib/types.ts          # TypeScript types
lib/writings.ts       # Writings content + Firestore seam
lib/features.ts       # Feature flags (writings visibility)
public/               # Static assets
```

## Routes

| Path | Content |
|------|---------|
| `/` | Home — hero, about preview, 6 projects, experience, contact CTA |
| `/about` | Full bio, skills, education |
| `/projects` | All 13 projects |
| `/experience` | Work timeline |
| `/contact` | Contact form + details |
| `/writings` | Poems & essays (unlisted until `NEXT_PUBLIC_WRITINGS_PUBLIC=true`) |
| `/writings/[slug]` | Individual piece |

## Branching

- `main` — original Pages Router site (preserved)
- `redesign` — TypeScript + App Router rebuild

## Deploy

Deploy on [Vercel](https://vercel.com) with `NEXT_PUBLIC_WEB3FORMS_KEY` set in project environment variables (Web3Forms keys are public by design — submissions go client-side).
