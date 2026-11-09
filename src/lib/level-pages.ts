import { tokens } from "@/styles/tokens";

/** A run of headline text; `bold` mirrors the Figma bold/regular mix */
export interface TextRun {
  text: string;
  bold?: boolean;
}

export interface LevelStat {
  label: string;
  value: string;
  unit: string;
}

export interface LevelPageContent {
  hero: {
    image: string;
    alt: string;
    eyebrow: string;
    /** One array per line */
    headline: TextRun[][];
  };
  profile: {
    body: string;
    principal: { name: string; role: string; image: string };
    /** Rendered row by row, two per row */
    stats?: LevelStat[];
  };
  curriculum: string;
  activities: { src: string; alt: string }[];
}

const ec = tokens.assets.earlyChildhood;

const EARLY_CHILDHOOD_ACTIVITY_ALTS = [
  "Children reading a picture book together",
  "Child swimming with a kickboard",
  "Parent and child drawing together",
  "Building sandcastles at the beach",
  "Lion dance mask celebration",
  "Music performance on stage",
  "Cupcake decorating class",
  "Circle game in the classroom",
  "Teacher leading a hand song",
  "Students sitting at a classroom table",
];

export const EARLY_CHILDHOOD_PAGE: LevelPageContent = {
  hero: {
    image: ec.hero,
    alt: "Early Childhood students dancing in pink costumes",
    eyebrow: "EARLY CHILDHOOD",
    headline: [
      [{ text: "FIRST STEP TO " }, { text: "LEARNING", bold: true }],
      [{ text: "AND " }, { text: "DISCOVERING", bold: true }],
    ],
  },
  profile: {
    body: "Where the pure joy of discovery meets a commitment to early academic excellence. Our approach centers on the whole child, fostering a lifelong love for learning through creative expression, collaborative projects, and interactive play. Rooted in deep cultural appreciation and a globally-minded curriculum, our dedicated educators cultivate resilience, empathy, and early critical thinking from day one. At JB School, we don't just prepare children for primary school; we empower them to become compassionate, inquisitive learners ready to embrace a diverse world.",
    principal: {
      name: "Ms. Yuni Meyrani",
      role: "PGKG Principal",
      image: ec.principal,
    },
    stats: [
      { label: "PLAYGROUP A", value: "02-03", unit: "YEARS" },
      { label: "KINDERGARTEN A", value: "04-05", unit: "YEARS" },
      { label: "PLAYGROUP B", value: "03-04", unit: "YEARS" },
      { label: "KINDERGARTEN B", value: "05-06", unit: "YEARS" },
    ],
  },
  curriculum:
    "At JB School, our Early Childhood curriculum provides a strong and dynamic foundation by blending the Indonesian National Curriculum with exceptional English and Mandarin programs taught directly by native speakers. We believe in a personalized learning journey that actively develops your child's unique talents and natural curiosities. By fostering a highly safe, comfortable, and nurturing atmosphere, we empower our youngest learners to confidently explore their full potential and develop a lifelong love for learning.",
  activities: ec.activities.map((src, i) => ({
    src,
    alt: EARLY_CHILDHOOD_ACTIVITY_ALTS[i],
  })),
};
