<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Frontend Engineering Standards & Architecture

You are acting as a **Senior Frontend Engineer** on this project. Every piece of code written must adhere to strict modular architecture, maintainability, type safety, and clean code principles.

---

## 1. Directory & Component Architecture

### Page-Specific Components
Every component dedicated to a specific page or route must live in its dedicated directory under `components/`:
```text
src/components/[page]/{ComponentName}.tsx
```
**Examples:**
- `src/components/home/HeroBanner.tsx`
- `src/components/home/AcademicPillars.tsx`
- `src/components/home/StatsBanner.tsx`
- `src/components/home/AdmissionCallout.tsx`
- `src/components/about/VisionMissionSection.tsx`
- `src/components/facilities/FacilityGrid.tsx`
- `src/components/admission/ProcedureList.tsx`

> **Rule:** Never bloat `src/app/**/page.tsx` with inline JSX components. `page.tsx` must act solely as an orchestrator / layout composer bringing together page components and shared components wrapped in proper boundaries.

### Shared & Reusable Components
Any component used across multiple pages or designed for reusability across sections must be placed in:
```text
src/components/shared/{ComponentName}.tsx
```
**Examples:**
- `src/components/shared/Navbar.tsx`
- `src/components/shared/Footer.tsx`
- `src/components/shared/SectionHeader.tsx`
- `src/components/shared/PartnerLogos.tsx`
- `src/components/shared/WhatsAppButton.tsx`
- `src/components/shared/AcademicCard.tsx`

### UI Primitives
Atomic, low-level UI elements (shadcn components) reside in:
```text
src/components/ui/{component-name}.tsx
```
- E.g., `src/components/ui/skeleton.tsx`, `src/components/ui/button.tsx`

---

## 2. Iconography Standards

1. **Primary Icon Source:** Use `react-icons` (e.g. `react-icons/fi`, `react-icons/fa6`, `react-icons/lu`, `react-icons/hi2`, `react-icons/si`) whenever an icon matches the exact design.
2. **Figma Asset Fallback:** If an icon is custom, brand-specific, or cannot be matched with 100% fidelity using `react-icons`, export and use the exact SVG/PNG asset from the Figma design in `public/assets/` or inline SVG.
3. Always provide descriptive `aria-label` or `aria-hidden` attributes for icon accessibility.

---

## 3. Loading States, Suspense & Skeletons

1. **Suspense Boundaries:** 
   - Always wrap page content, asynchronous data sections, and client-heavy interactive blocks in React `<Suspense>` with a Skeleton fallback.
   - Provide route-level `loading.tsx` files inside `src/app/**/` where applicable for Next.js streaming.
2. **Shadcn Skeleton:**
   - Always use the shadcn `Skeleton` primitive (`@/components/ui/skeleton`).
   - Skeletons must mirror the exact dimensions, aspect ratio, and structural layout of the actual components to prevent Cumulative Layout Shift (CLS).
   - Component-specific skeletons should be colocated or defined alongside the component (e.g. `HeroBannerSkeleton`, `AcademicCardSkeleton`).

**Example Pattern:**
```tsx
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { AcademicPillars } from "@/components/home/AcademicPillars";
import { AcademicPillarsSkeleton } from "@/components/home/AcademicPillarsSkeleton";

export default function HomePage() {
  return (
    <main>
      <Suspense fallback={<AcademicPillarsSkeleton />}>
        <AcademicPillars />
      </Suspense>
    </main>
  );
}
```

---

## 4. Design Tokens & Styling Discipline

1. **Tokens Single Source of Truth:**
   - All colors, fonts, and brand assets are centralized in `@/styles/tokens` and configured via Tailwind CSS v4 `@theme` in `src/app/globals.css`.
   - Use semantic Tailwind classes:
     - Backgrounds: `bg-jb-navy`, `bg-jb-blue`, `bg-jb-surface`, `bg-jb-coral`, `bg-jb-sage`
     - Typography: `font-sans` (Open Sans), `font-display` (DM Sans), `font-accent` (Bebas Neue)
     - Text colors: `text-jb-navy`, `text-jb-brick`, `text-neutral-800`
     - Borders: `border-jb-border`, `border-jb-coral/30`
2. **No Arbitrary Unmapped Values:**
   - Do not hardcode arbitrary hex values directly in page JSX (e.g. avoid `bg-[#123456]` when a token exists). Always use or declare tokens.

---

## 5. Server vs. Client Components

1. Default to **React Server Components (RSC)** for optimal performance and SEO.
2. Only mark a component with `"use client"` when it requires:
   - React state (`useState`, `useReducer`)
   - Lifecycle hooks (`useEffect`)
   - DOM / browser event listeners (`onClick`, `onScroll`)
   - Browser APIs
3. Keep `"use client"` leaves as small and focused as possible at the edges of the tree.
