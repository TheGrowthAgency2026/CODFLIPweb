# CODFLIP Website

Official marketing website for **CODFLIP** — built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, GSAP, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP + Framer Motion
- **Icons:** Lucide React

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ProblemSection.tsx
│   ├── AgencySection.tsx
│   ├── FeaturesSection.tsx
│   ├── HowItWorks.tsx
│   ├── PricingSection.tsx
│   ├── SocialProofBar.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
└── hooks/
    ├── useScrollReveal.ts
    └── useCountUp.ts
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

Deploy on [Vercel](https://vercel.com) for the best Next.js experience.
