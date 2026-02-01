# Mesfney Love Foundation - Technical Architecture Document

---

## 1. Architecture Overview

### Stack Summary

| Layer          | Technology                        | Version  |
| :------------- | :-------------------------------- | :------- |
| Framework      | Next.js (App Router, Turbopack)   | 15.x     |
| Language       | TypeScript                        | 5.6+     |
| UI Library     | React                             | 19.x     |
| Styling        | Tailwind CSS + shadcn/ui          | 3.4 / latest |
| Hosting        | Netlify, AWS Amplify, Self-hosted (Docker) | -        |
| Email          | Resend                            | 4.x      |
| i18n           | next-intl (cookie-based)          | 3.25+    |
| Validation     | Zod                               | 3.23+    |
| Icons          | Lucide React                      | 0.460+   |

### Rendering Strategy

All pages use **Static Site Generation (SSG)** at build time. Content lives in TypeScript data files, not a database. Every page is pre-rendered to HTML and served from a web server or CDN. The only server-side runtime behaviour is form submissions via Server Actions (POST requests).

### Deployment Model

```
Git Repository (e.g., GitHub, GitLab)
        |
        v
  CI/CD Pipeline (e.g., GitHub Actions, Jenkins)
        |
        v
  Build Step (`next build`)
        |
        v
  Deploy to Hosting Provider (e.g., Netlify, AWS, custom server)
        |
        v
  Custom domain (mesfneylove.org)
```

Every git push to the `main` branch can be configured to trigger a production deploy. Pull requests can be configured to generate preview URLs for stakeholder feedback, depending on the hosting provider's capabilities.

---

## 2. Project Structure

```
mesfney/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── team/
│   │   └── og-image.jpg              # OpenGraph fallback (1200x630)
│   ├── fonts/                         # Self-hosted fonts (Tigrinya support)
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout: html, body, header, footer, providers
│   │   ├── page.tsx                   # Home (/)
│   │   ├── not-found.tsx              # Custom 404
│   │   ├── globals.css                # Tailwind directives + CSS custom properties
│   │   ├── sitemap.ts                 # Dynamic sitemap generation
│   │   ├── robots.ts                  # robots.txt generation
│   │   ├── about/page.tsx             # Origin story + mission
│   │   ├── achievements/page.tsx      # Project timeline + financial impact
│   │   ├── donate/page.tsx            # Donation & membership
│   │   ├── volunteer/page.tsx         # Volunteer signup form
│   │   ├── team/page.tsx              # Meet the team
│   │   ├── events/page.tsx            # Upcoming events
│   │   └── contact/page.tsx           # Contact form & details
│   │
│   ├── components/
│   │   ├── ui/                        # shadcn/ui components (auto-generated)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx              # Mobile nav drawer
│   │   │   ├── tabs.tsx
│   │   │   ├── toast.tsx
│   │   │   └── toaster.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── header.tsx             # Site header with navigation
│   │   │   ├── footer.tsx             # Footer with registration number
│   │   │   ├── mobile-nav.tsx         # Hamburger menu (client component)
│   │   │   ├── language-toggle.tsx    # EN/TI switcher (client component)
│   │   │   └── section-wrapper.tsx    # Consistent max-width/padding wrapper
│   │   │
│   │   ├── home/
│   │   │   ├── hero-section.tsx
│   │   │   ├── impact-stats.tsx
│   │   │   ├── mission-preview.tsx
│   │   │   └── cta-banner.tsx
│   │   │
│   │   ├── about/
│   │   │   ├── origin-story.tsx
│   │   │   ├── mission-section.tsx
│   │   │   └── bilingual-content.tsx  # EN/TI toggle display (client component)
│   │   │
│   │   ├── achievements/
│   │   │   ├── project-timeline.tsx
│   │   │   ├── project-card.tsx
│   │   │   └── financial-summary.tsx
│   │   │
│   │   ├── donate/
│   │   │   ├── donation-options.tsx
│   │   │   ├── membership-info.tsx
│   │   │   └── bank-details-card.tsx
│   │   │
│   │   ├── team/
│   │   │   ├── team-grid.tsx
│   │   │   └── team-member-card.tsx
│   │   │
│   │   ├── events/
│   │   │   └── event-card.tsx
│   │   │
│   │   ├── forms/
│   │   │   ├── contact-form.tsx       # Client component
│   │   │   ├── volunteer-form.tsx     # Client component
│   │   │   └── form-success.tsx
│   │   │
│   │   └── shared/
│   │       ├── page-header.tsx        # Reusable page title + breadcrumb
│   │       ├── charity-badge.tsx      # "Registered Charity No. 1139089"
│   │       ├── donate-cta.tsx         # Reusable donate button/banner
│   │       └── json-ld.tsx            # Structured data helper
│   │
│   ├── lib/
│   │   ├── utils.ts                   # shadcn cn() helper
│   │   ├── constants.ts               # Site-wide constants (name, reg #, contact)
│   │   ├── metadata.ts                # Shared metadata helpers
│   │   ├── schemas.ts                 # Zod validation schemas (shared client/server)
│   │   └── email.ts                   # Resend client setup
│   │
│   ├── actions/
│   │   ├── contact.ts                 # Contact form Server Action
│   │   └── volunteer.ts               # Volunteer form Server Action
│   │
│   ├── data/
│   │   ├── projects.ts                # 5 historical projects
│   │   ├── team.ts                    # Current team members
│   │   ├── financials.ts              # Financial records
│   │   ├── events.ts                  # Events data
│   │   └── content/
│   │       ├── en.json                # English translations
│   │       └── ti.json                # Tigrinya translations
│   │
│   ├── types/
│   │   └── index.ts                   # All TypeScript interfaces
│   │
│   ├── hooks/
│   │   └── use-language.ts            # Language toggle hook
│   │
│   └── providers/
│       └── language-provider.tsx       # Language context (client component)
│
├── .env.local                         # Local environment variables
├── .env.example                       # Env var template
├── .gitignore
├── components.json                    # shadcn/ui configuration
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

### Why This Structure

- **`src/` directory**: Separates app code from root config files. Standard Next.js convention.
- **Flat `app/` routes**: Only 9 pages with a single shared layout. Route groups `(public)/(admin)` would be premature. Add them later if needed.
- **`data/` directory**: All static content in typed TS files. When migrating to a CMS, only these files change - components stay untouched.
- **`actions/` directory**: Server Actions isolated by concern, not buried in page files. Testable and reusable.

---

## 3. Component Architecture

### Server vs Client Split

```
Server Components (default - no directive):
├── All page.tsx files
├── layout.tsx
├── header.tsx (static shell)
├── footer.tsx
├── hero-section.tsx
├── impact-stats.tsx
├── project-timeline.tsx, project-card.tsx
├── team-grid.tsx, team-member-card.tsx
├── page-header.tsx
├── json-ld.tsx
└── All components that only read data and render HTML

Client Components ("use client"):
├── mobile-nav.tsx          (hamburger toggle state)
├── language-toggle.tsx     (cookie mutation)
├── contact-form.tsx        (form state + validation)
├── volunteer-form.tsx      (form state + validation)
├── bilingual-content.tsx   (toggle interaction)
├── toast/toaster.tsx       (notification state)
└── language-provider.tsx   (context provider)
```

### Root Layout Composition

```tsx
// src/app/layout.tsx - conceptual structure
<html lang="en">
  <body className={fontClasses}>
    <LanguageProvider>
      <Header />               {/* Server shell, client mobile-nav inside */}
      <main className="min-h-screen">
        {children}             {/* Page content */}
      </main>
      <Footer />               {/* Server component */}
      <Toaster />              {/* Client component */}
    </LanguageProvider>
    <JsonLd />                 {/* Organization structured data */}
  </body>
</html>
```

### Page Composition Pattern

Every interior page follows the same pattern:

```tsx
// src/app/about/page.tsx - conceptual
export const metadata = { /* page-specific SEO */ };

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Our Story" subtitle="..." />
      <OriginStory />           {/* Server component - static content */}
      <MissionSection />        {/* Server component */}
      <BilingualContent />      {/* Client component - language toggle */}
    </>
  );
}
```

### Shared Components

**`SectionWrapper`** - consistent spacing across all pages:
```tsx
// Provides: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24
<SectionWrapper className="bg-muted">
  {children}
</SectionWrapper>
```

**`PageHeader`** - consistent interior page titles:
```tsx
<PageHeader
  title="What We Have Achieved"
  subtitle="15 years of supporting sick children in Eritrea"
/>
```

**`CharityBadge`** - registration number display:
```tsx
<CharityBadge />  // Renders: "Registered Charity No. 1139089"
```

---

## 4. Data Layer

### TypeScript Interfaces

```typescript
// src/types/index.ts

export interface Project {
  id: string;
  yearStart: number;
  yearEnd?: number;
  title: string;
  partner?: string;
  achievement: string;
  description?: string;
  images?: string[];
  amountSpent?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: TeamRole;
  title?: string;
  isCurrent: boolean;
  isFounder: boolean;
  photo?: string;
  order: number;
}

export type TeamRole = 'chair' | 'secretary' | 'finances' | 'fundraiser' | 'volunteer';

export interface FinancialRecord {
  id: string;
  period: string;
  yearStart: number;
  yearEnd?: number;
  amountSpent: number;
  amountRaised?: number;
  notes: string;
  projectId?: string;
}

export interface MLFEvent {
  id: string;
  title: string;
  date: string;               // ISO 8601
  endDate?: string;
  location?: string;
  description: string;
  status: 'upcoming' | 'ongoing' | 'past';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interests: VolunteerInterest[];
  experience?: string;
  availability?: string;
  message?: string;
}

export type VolunteerInterest = 'fundraising' | 'publicity' | 'events' | 'admin' | 'other';

export type Locale = 'en' | 'ti';
```

### Static Data Files

```typescript
// src/data/projects.ts
import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'orota-playroom-2010',
    yearStart: 2010,
    title: 'Inside Playroom at Orota Hospital',
    achievement: 'Built playroom (just MLF)',
    amountSpent: 2338.25,
  },
  {
    id: 'era-playground-2013',
    yearStart: 2013,
    title: 'Playground & Education Materials',
    partner: 'Era',
    achievement: 'Built playground and education material for kids with Autism & Down Syndrome',
  },
  {
    id: 'abraha-bahter-2017',
    yearStart: 2017,
    yearEnd: 2024,
    title: 'Deaf Children Support',
    partner: 'Abraha Bahter & Era',
    achievement: 'Helped deaf children; provided walking sticks, blankets, TVs',
    amountSpent: 15148.36,
  },
  {
    id: 'boarding-school-2024',
    yearStart: 2024,
    title: 'Boarding School Support',
    achievement: 'Purchased a washing machine and a printer',
  },
  {
    id: 'laptops-2025',
    yearStart: 2025,
    title: 'Kids Support - Laptops',
    achievement: 'Purchased 16 laptops for kids',
    amountSpent: 6208,
  },
];
```

### Future CMS Migration Path

The `src/data/` files are a data access layer. Today they export static arrays. When migrating to a CMS (e.g. Sanity), only the data files change:

```
Today:    Component --> import { projects } from '@/data/projects'  (static array)
Future:   Component --> const projects = await getProjects()        (CMS API call)
```

The CMS migration requires changing `src/data/` files from static exports to async functions. Component code stays the same since page components are async Server Components by default.

---

## 5. Styling

### Brand Colour Palette

| Token        | Hex       | Usage                          |
| :----------- | :-------- | :----------------------------- |
| `brand-500`  | `#ec7a10` | Primary CTA, links, highlights |
| `brand-600`  | `#dd5f06` | Hover states                   |
| `brand-100`  | `#fdedd3` | Light backgrounds              |
| `accent-500` | `#0ea5e9` | Secondary actions, info badges |
| `accent-600` | `#0284c7` | Hover states                   |

**Rationale**: Warm orange conveys compassion and energy (appropriate for a children's charity). Trust blue provides visual hierarchy and conveys reliability (common in UK charity sector). This mirrors the tone of the inspiration sites (KIDS, ERA-UK).

### Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef7ee', 100: '#fdedd3', 200: '#f9d7a5',
          300: '#f5ba6d', 400: '#f09432', 500: '#ec7a10',
          600: '#dd5f06', 700: '#b84508', 800: '#93370e',
          900: '#7a2f0f',
        },
        accent: {
          50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd',
          300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9',
          600: '#0284c7', 700: '#0369a1', 800: '#075985',
          900: '#0c4a6e',
        },
        // shadcn/ui semantic tokens (CSS variables)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

### CSS Custom Properties

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --primary: 24 95% 50%;              /* brand-500 warm orange */
    --primary-foreground: 0 0% 100%;
    --secondary: 199 89% 48%;           /* accent-500 trust blue */
    --secondary-foreground: 0 0% 100%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 24 95% 50%;
    --radius: 0.5rem;
  }
}
```

### shadcn/ui Configuration

```json
// components.json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

**Components to install** (only what's needed - 10 total):

```bash
npx shadcn@latest add button card input textarea badge separator sheet tabs toast
```

---

## 6. Form Handling

### Pattern: Server Actions + Zod + Resend

Forms use native HTML form elements with `useActionState` (React 19). No React Hook Form needed - the forms are simple enough without it.

### Validation Schemas (shared client/server)

```typescript
// src/lib/schemas.ts
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const volunteerFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  interests: z.array(z.enum([
    'fundraising', 'publicity', 'events', 'admin', 'other'
  ])).min(1, 'Please select at least one area of interest'),
  experience: z.string().optional(),
  availability: z.string().optional(),
  message: z.string().optional(),
});

export type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};
```

### Server Action Pattern

```typescript
// src/actions/contact.ts
'use server';

import { contactFormSchema, type FormState } from '@/lib/schemas';
import { sendEmail } from '@/lib/email';

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = Object.fromEntries(formData);
  const result = contactFormSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      message: 'Please fix the errors below.',
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await sendEmail({
      to: 'mesfneylove@gmail.com',
      subject: `Website Contact: ${result.data.subject}`,
      replyTo: result.data.email,
      text: `From: ${result.data.name} (${result.data.email})\n\n${result.data.message}`,
    });
    return { success: true, message: 'Thank you! We will be in touch soon.' };
  } catch {
    return { success: false, message: 'Something went wrong. Please try again or email us directly.' };
  }
}
```

### Email Client

```typescript
// src/lib/email.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(options: {
  to: string;
  subject: string;
  replyTo?: string;
  text?: string;
}) {
  return resend.emails.send({
    from: 'Mesfney Love Foundation <noreply@mesfneylove.org>',
    ...options,
  });
}
```

### Donate Page Strategy (Phase 1)

No payment processing in the initial build. The donate page displays:
- Bank account details (name, sort code, account number - from trustees)
- Membership tiers and benefits
- "Contact us to set up regular giving" CTA
- Optional: embed a JustGiving widget if available

This avoids PCI compliance complexity and gets the site live faster. Stripe Checkout can be added in Phase 5.

---

## 7. i18n / Bilingual Support

### Approach: Route-Based Locale with i18next

All pages live under `/[locale]/` (e.g. `/en/about`, `/ti/about`). Middleware redirects `/` to `/en` and validates the locale segment.

- `i18next` + `react-i18next` handles client-side translations via `useTranslation()`
- `src/lib/get-translations.ts` provides server-side translation access
- `src/middleware.ts` handles locale redirects and sets `x-locale` header for the root layout
- Locale is extracted from the URL path, not cookies

### Translation Files

```
messages/
├── en.json    # English (complete)
└── ti.json    # Tigrinya (nav/CTAs done, about section has placeholders)
```

Keys cover: `LanguageToggle`, `Header`, `nav`, `home`, `about`, `footer`, `common`.

### Language Toggle Component

```tsx
// src/components/language-switcher.tsx
// Simple toggle button: "EN | ትግ"
// Swaps the locale segment in the URL path via router.push()
```

### Tigrinya Font Support

Tigrinya uses the Ge'ez (Ethiopic) script. Most modern browsers render it natively, but for consistency load **Noto Sans Ethiopic** via `next/font/google` as a fallback for `[lang="ti"]` elements.

### Translation Scope

| Scope | Translated? | Notes |
| :---- | :---------- | :---- |
| Navigation labels | Yes | Both languages |
| Common CTAs | Yes | Donate, Volunteer, Contact |
| About page content | Yes | Origin story, mission statement |
| Form labels/validation | No | English only |
| Financial figures | No | English only |
| Team member names | No | English only |
| Event details | No | English only |

---

## 8. SEO

### Metadata Strategy

**Root layout** provides default metadata with a template:

```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://mesfneylove.org'),
  title: {
    default: 'Mesfney Love Foundation | Supporting Sick Children in Eritrea',
    template: '%s | Mesfney Love Foundation',
  },
  description: 'UK registered charity #1139089 supporting sick children in Eritrea through healthcare, education, and play since 2008.',
  keywords: ['charity', 'Eritrea', 'children', 'healthcare', 'education',
             'Mesfney Love Foundation', 'MLF', 'donate'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Mesfney Love Foundation',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};
```

**Each page** exports its own `metadata` object that overrides the defaults:

```typescript
// src/app/about/page.tsx
export const metadata: Metadata = {
  title: 'Our Story',  // Renders as "Our Story | Mesfney Love Foundation"
  description: 'Founded in memory of Mesfin Hiruy to support sick children in Eritrea.',
};
```

### JSON-LD Structured Data

**Organization schema** (global, in root layout):

```json
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Mesfney Love Foundation",
  "alternateName": "Mesfiney Love Fund",
  "url": "https://mesfneylove.org",
  "logo": "https://mesfneylove.org/images/logo.svg",
  "foundingDate": "2008-07-04",
  "founder": { "@type": "Person", "name": "Nebiat Yoseph" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7A Fordwych Road",
    "addressLocality": "London",
    "postalCode": "NW2 3TN",
    "addressCountry": "GB"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44-20-8452-9312",
    "email": "mesfneylove@gmail.com"
  },
  "nonprofitStatus": "Registered",
  "identifier": "1139089"
}
```

Additional schemas: `Event` on `/events`, `DonateAction` on `/donate`.

### Sitemap

```typescript
// src/app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mesfneylove.org';
  const routes = ['', '/about', '/achievements', '/donate',
                  '/volunteer', '/team', '/events', '/contact'];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/events' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/donate' ? 0.9 : 0.7,
  }));
}
```

---

## 9. Deployment & Hosting

### Vercel Setup

1. Push code to GitHub
2. Import repository in Vercel dashboard (vercel.com)
3. Framework preset: **Next.js** (auto-detected)
4. Build command: `next build` (default)
5. Output directory: `.next` (default)
6. Deploy

### Environment Variables

```bash
# .env.example

# Email service
RESEND_API_KEY=re_xxxxxxxxxxxx

# Site URL (for metadata, sitemap, OpenGraph)
NEXT_PUBLIC_SITE_URL=https://mesfneylove.org
```

Set in Vercel dashboard: **Project Settings > Environment Variables**
- `RESEND_API_KEY`: Production + Preview
- `NEXT_PUBLIC_SITE_URL`: `https://mesfneylove.org` for Production, auto for Preview

### Preview Deploys (Feedback Loop)

Every pull request automatically gets a unique preview URL:
```
https://mesfney-git-feature-about-page-username.vercel.app
```

Share this URL with the MLF team for feedback before merging. This is built into Vercel's free tier with zero configuration.

### Custom Domain

1. Register domain (recommended: `mesfneylove.org` - `.org` is standard for charities)
2. Add domain in Vercel dashboard
3. Update DNS records (Vercel provides instructions)
4. SSL is automatic and free

### Branch Strategy

```
main        --> Production deploy (mesfneylove.org)
feature/*   --> Preview deploys (auto-generated URLs)
```

No staging environment needed for a site this size.

---

## 10. Development Phases

### Phase 1: Foundation + Home Page -- "Get Something Live"

**Goal**: Deployable skeleton with branded home page on Vercel.

- [x] Run `npx create-next-app@latest` with TypeScript, Tailwind, App Router, src dir
- [x] Initialise shadcn/ui and install base components (`button`, `card`, `separator`)
- [x] Configure Tailwind CSS with brand colours (using Tailwind CSS v4 / CSS custom properties)
- [x] Create `src/lib/constants.ts` with charity details
- [x] Build root `layout.tsx` with Header and Footer
- [x] Build Home page: hero, impact stats (£24,694.61 / 20+ kids), CTAs
- [x] Push to GitHub, connect to Netlify (switched from Vercel to Netlify)
- [ ] Share preview URL for immediate feedback

**Deliverable**: Live URL with branded home page, working nav (links to placeholder pages).

### Phase 2: Content Pages -- "Tell the Story"

**Goal**: All informational pages with real content.

- [x] Create `src/types/index.ts` with all interfaces
- [x] Create `src/data/` files (projects, team, financials, events)
- [x] Build About page with origin story + constitutional mission
- [x] Build Achievements page with project timeline + financial summary
- [x] Build Team page with member cards
- [x] Build Events page with May 2026 fundraiser
- [x] Build Donate page with bank details and membership info
- [x] Add `PageHeader` component for consistent interior headers
- [x] Add per-page metadata

**Deliverable**: All 8 content pages populated and navigable.

### Phase 3: Forms + Interactivity -- "Make It Functional"

**Goal**: Working forms, email delivery, bilingual toggle.

- [ ] Set up Resend account and add API key (requires account creation)
- [x] Create Zod validation schemas (`src/lib/schemas.ts`)
- [x] Build Contact form + Server Action (`src/components/forms/contact-form.tsx`, `src/actions/contact.ts`)
- [x] Build Volunteer form + Server Action (`src/components/forms/volunteer-form.tsx`, `src/actions/volunteer.ts`)
- [x] Build Contact page (page exists, form integrated)
- [x] Set up i18n with route-based locale (using i18next with `[locale]` routing instead of next-intl cookie-based)
- [x] Add language toggle component (EN / ትግ)
- [x] Add Tigrinya translations for About page (structure added with placeholders for Background PDF text)
- [x] Add toast notifications for form feedback (Sonner toast integrated)

**Deliverable**: Forms submit (email delivery pending Resend setup). Language toggle works across all pages.

**Note**: Server Actions (`src/actions/contact.ts`, `src/actions/volunteer.ts`) currently log to console. Email delivery requires Resend API key setup.

### Phase 4: Polish + SEO + Launch -- "Make It Professional"

**Goal**: Production-ready.

- [x] Add JSON-LD structured data (Organization in layout, Event on `/events`, DonateAction on `/donate`)
- [x] Create `sitemap.ts` and `robots.ts`
- [x] Add locale middleware (`src/middleware.ts`) for `/` redirect and locale validation
- [x] Dynamic `<html lang>` attribute based on current locale
- [ ] Add OpenGraph images per page (requires image assets)
- [ ] Optimise all images via `next/image` (no images in use yet - site is icon-only)
- [x] Self-host fonts via `next/font` (Inter configured)
- [x] Custom 404 page
- [ ] Complete Tigrinya translations (about section has placeholders, needs Background PDF text)
- [ ] Set up Resend and wire email delivery in server actions
- [ ] Cross-browser + mobile testing
- [ ] Lighthouse audit (target 90+ all categories)
- [ ] Configure production domain
- [ ] Final review with MLF team

**Deliverable**: Production launch on custom domain.

### Phase 5: Post-Launch Enhancements (Future)

- Google Analytics integration
- Stripe Checkout for online donations
- CMS migration (Sanity or Contentful)
- Photo galleries for achievements
- Blog/news section
- Email newsletter signup
- Social media integration

---

## 11. Dependencies

### package.json

```json
{
  "name": "mesfney",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next-intl": "^3.25.0",
    "resend": "^4.0.0",
    "zod": "^3.23.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.5.0",
    "lucide-react": "^0.460.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.0",
    "@radix-ui/react-dialog": "^1.1.0"
  },
  "devDependencies": {
    "typescript": "^5.6.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "tailwindcss-animate": "^1.0.7",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.1.0"
  }
}
```

### Dependency Justifications

| Package | Why |
| :------ | :-- |
| `next` 15.x | Stable App Router, Server Actions, Turbopack dev server |
| `react` 19.x | Required by Next.js 15; provides `useActionState` for forms |
| `i18next` + `react-i18next` | i18n library; route-based locale with `[locale]` URL segments |
| `resend` | Email delivery; free tier (100/day); simple API (not yet wired up) |
| `zod` | TypeScript-first validation; works on both client and server |
| `class-variance-authority` | Component variants; required by shadcn/ui |
| `clsx` + `tailwind-merge` | Class merging; required by shadcn/ui `cn()` helper |
| `lucide-react` | Icons; tree-shakeable; default shadcn/ui icon set |
| `@radix-ui/*` | Accessible primitives; installed per-component by shadcn/ui |
| `tailwindcss-animate` | CSS animations; required by shadcn/ui |

### What Is Deliberately Excluded

| Package | Why not |
| :------ | :------ |
| `react-hook-form` | Forms are simple enough for native `useActionState` |
| `framer-motion` | CSS animations suffice for a small charity site |
| `next-seo` | Next.js built-in Metadata API covers all needs |
| `next-themes` | No dark mode required |
| `stripe` | Payment integration deferred to Phase 5 |
| `@vercel/analytics` | Not needed at launch; add in Phase 5 |

---

## 12. Scripts & Commands

### Initial Project Setup

```bash
# 1. Create Next.js project
npx create-next-app@latest mesfney --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# 2. Move into project
cd mesfney

# 3. Initialise shadcn/ui
npx shadcn@latest init

# 4. Install required shadcn components
npx shadcn@latest add button card input textarea badge separator sheet tabs toast

# 5. Install additional dependencies
npm install next-intl resend zod

# 6. Start dev server with Turbopack
npm run dev
```

### Day-to-Day Commands

```bash
npm run dev          # Dev server with Turbopack (fast HMR)
npm run build        # Production build (verifies no errors)
npm run lint         # ESLint
npm run type-check   # TypeScript check without emitting files

# Add shadcn components as needed
npx shadcn@latest add [component-name]
```

### Vercel CLI (Optional)

```bash
npm i -g vercel
vercel              # Deploy from CLI
vercel --prod       # Deploy to production
```

---

## 13. Performance

### Images

Use `next/image` for all images. Never use raw `<img>` tags.

```tsx
import Image from 'next/image';

// Hero image (above the fold)
<Image
  src="/images/hero/children-playing.jpg"
  alt="Children playing at Orota Hospital playroom"
  width={1200}
  height={600}
  priority                    // Preload above-fold images only
  className="object-cover"
/>

// Card images (below the fold)
<div className="relative aspect-video">
  <Image
    src="/images/projects/orota-playroom.jpg"
    alt="Orota Hospital playroom built by MLF in 2010"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover"
  />
</div>
```

**Image guidelines**:
- Source hero images at max 1920px wide (Next.js auto-serves responsive sizes)
- Team photos at 400x400px source
- Project photos at 800px wide
- Next.js auto-converts to WebP/AVIF
- Only use `priority` on the home page hero image

### Fonts

```typescript
// src/app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Tigrinya support (if needed for consistent rendering):
// import { Noto_Sans_Ethiopic } from 'next/font/google';
```

`next/font` self-hosts fonts at build time: zero external requests, zero layout shift.

### Core Web Vitals Targets

| Metric | Target | Approach |
| :----- | :----- | :------- |
| **LCP** | < 2.5s | `priority` on hero image, SSG, font preloading |
| **INP** | < 200ms | Server Components minimise client JS |
| **CLS** | < 0.1 | `next/font`, explicit image dimensions |

### Bundle Size

```
Static pages (About, Achievements, Team):  ~0 KB client JS (Server Components)
Interactive pages (Contact, Volunteer):    ~15-20 KB (form logic + Zod)
Layout (Header + mobile nav):             ~5 KB
Language toggle:                          ~3 KB
Total first-load JS:                      ~80-90 KB (framework + shared)
```

Server Components render on the server and send only HTML - no JavaScript shipped for static content pages.

---

## Appendix: Site Constants

```typescript
// src/lib/constants.ts
export const SITE = {
  name: 'Mesfney Love Foundation',
  legalName: 'Mesfiney Love Fund',
  shortName: 'MLF',
  registrationNumber: '1139089',
  foundedDate: '2008-07-04',
  founder: 'Nebiat Yoseph',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mesfneylove.org',
  contact: {
    email: 'mesfneylove@gmail.com',
    phone: '0208 452 9312',
    phoneInternational: '+44-20-8452-9312',
  },
  address: {
    street: '7A Fordwych Road',
    city: 'London',
    postcode: 'NW2 3TN',
    country: 'GB',
  },
  impact: {
    totalRaised: 24694.61,
    kidsHelped: 20,
    yearsSinceFoundation: new Date().getFullYear() - 2008,
    projectCount: 5,
  },
} as const;
```

---

*This document should be read alongside [REQUIREMENTS.md](./REQUIREMENTS.md) which contains all content, data, and outstanding action items.*
