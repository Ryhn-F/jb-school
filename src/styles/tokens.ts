/**
 * Design Tokens for JB School (Sekolah Jembatan Budaya, Bali)
 * Extracted directly from Figma design system (File: JB-School).
 */

export const colors = {
  // Brand Primary & Secondary
  primary: {
    DEFAULT: "#043399", // Deep JB Blue - brand header, primary typography, key stats
    hover: "#03256c",
    light: "#1a4ab8",
  },
  secondary: {
    DEFAULT: "#85a1dd", // Soft Cornflower Blue - hero shapes, card backgrounds, section highlights, footer
    hover: "#7291d4",
    light: "#d9e4f8",
    muted: "#eef3fc",
  },

  // Brand Accents
  coral: {
    DEFAULT: "#ed9893", // Warm Coral - admission banner background
    dark: "#b45853", // Brick Red / Dark Coral - buttons, admission shape
    light: "#fcefed",
  },
  sage: {
    DEFAULT: "#bcd8bf", // Soft Sage Green - mission & vision badges, early childhood accents
    dark: "#96af99", // Muted Olive / Pine Green
    light: "#f0f6f1",
  },

  // Academic card accents (hover overlay gradient per level)
  academic: {
    earlyChildhood: "#2094c4", // Sky blue
    primary: "#4f9a6a", // Leaf green
    junior: "#b45853", // Brick red (matches jb-brick)
    senior: "#1d3f9e", // Deep blue
  },

  // Surfaces & Backgrounds
  surface: {
    DEFAULT: "#ffffff",
    subtle: "#fbfafb", // Section background tint, soft card container
    card: "#ffffff",
    footer: "#85a1dd", // Footer primary blue
  },

  // Text & Neutrals
  neutral: {
    darkest: "#000000",
    dark: "#1a1a1a",
    body: "#333333",
    muted: "#737373",
    border: "#bfbabd",
    borderLight: "#e5e7eb",
    gray: "#bfbfbf",
    light: "#fbfafb",
    white: "#ffffff",
  },

  // Social & Status
  social: {
    whatsapp: "#25D366",
    facebook: "#1877F2",
    instagram: "#E4405F",
    youtube: "#FF0000",
  },
} as const;

export const typography = {
  fonts: {
    sans: "var(--font-open-sans), system-ui, -apple-system, sans-serif",
    display: "var(--font-dm-sans), sans-serif",
    accent: "var(--font-bebas-neue), sans-serif",
  },
  sizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
} as const;

export const assets = {
  logo: {
    main: "/assets/jb-logo.png",
    emblem: "/assets/jb-emblem.png",
  },
  icons: {
    whatsapp: "/assets/whatsapp-icon.png",
    facebook: "/assets/icon-facebook.png",
    instagram: "/assets/icon-instagram.png",
    youtube: "/assets/icon-youtube.png",
  },
  partners: {
    all: "/assets/partners-all.png",
    cambridge: "/assets/partner-1.png",
    oxford: "/assets/partner-2.png",
  },
  stats: {
    established: "/assets/stat-established.png",
    students: "/assets/stat-students.png",
    graduates: "/assets/stat-graduates.png",
    studyAbroad: "/assets/stat-study-abroad.png",
  },
  images: {
    heroCampus: "/assets/hero-campus.jpg",
    empoweringStudents: "/assets/empowering-students.png",
    admissionBanner: "/assets/admission-students-banner.png",
    admissionStudents: "/assets/admission-students.jpg",
    aboutHero: "/assets/about-hero.jpg",
    aboutDirector: "/assets/about-director.png",
    academicsHero: "/assets/academics-hero.jpg",
  },
  earlyChildhood: {
    hero: "/assets/early-childhood/hero.jpg",
    principal: "/assets/early-childhood/principal.png",
    activities: Array.from(
      { length: 10 },
      (_, i) => `/assets/early-childhood/activity-${i + 1}.jpg`,
    ),
  },
  primary: {
    hero: "/assets/primary/hero.jpg",
    principal: "/assets/primary/principal.png",
    activities: Array.from(
      { length: 10 },
      (_, i) => `/assets/primary/activity-${i + 1}.jpg`,
    ),
  },
  academicCards: {
    earlyChildhood: "/assets/academic-card-early-childhood.jpg",
    primary: "/assets/academic-card-primary.jpg",
    junior: "/assets/academic-card-junior.jpg",
    senior: "/assets/academic-card-senior.jpg",
  },
} as const;

export const tokens = {
  colors,
  typography,
  assets,
} as const;

export default tokens;
