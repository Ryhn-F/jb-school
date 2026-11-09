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
    /** Figma y of the eyebrow inside the 275px banner */
    textTop: number;
    /** One array per line */
    headline: TextRun[][];
  };
  profile: {
    body: string;
    principal: { name: string; role: string; image: string };
    /** Rendered row by row, two per row */
    stats?: LevelStat[];
    /** Figma px measurements of the profile band (frame is 810px wide) */
    layout: {
      height: number;
      visualWidth: number;
      textLeft: number;
      textRight: number;
      /** Name block top, from the band top */
      nameTop: number;
      /** Horizontal center of the name/role text */
      nameCenter: number;
      nameSize: number;
      roleSize: number;
    };
  };
  curriculum: string;
  /** Profile body and curriculum are justified in some Figma frames */
  justifyText?: boolean;
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
    textTop: 76,
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
    layout: {
      height: 444,
      visualWidth: 355,
      textLeft: 385,
      textRight: 772,
      nameTop: 379,
      nameCenter: 150,
      nameSize: 18.9,
      roleSize: 18.9,
    },
  },
  curriculum:
    "At JB School, our Early Childhood curriculum provides a strong and dynamic foundation by blending the Indonesian National Curriculum with exceptional English and Mandarin programs taught directly by native speakers. We believe in a personalized learning journey that actively develops your child's unique talents and natural curiosities. By fostering a highly safe, comfortable, and nurturing atmosphere, we empower our youngest learners to confidently explore their full potential and develop a lifelong love for learning.",
  activities: ec.activities.map((src, i) => ({
    src,
    alt: EARLY_CHILDHOOD_ACTIVITY_ALTS[i],
  })),
};

const ps = tokens.assets.primary;

const PRIMARY_ACTIVITY_ALTS = [
  "Students waving flags at a school assembly",
  "Scouts carrying a pipe together",
  "Embroidery workshop",
  "Dragon dance performance",
  "Inter-house sports winners celebrating",
  "Traditional dance with hoops",
  "Students holding an environment banner",
  "Teacher guiding a class reading",
  "Scouts holding a flag",
  "Cambridge Assessment English group photo",
];

export const PRIMARY_SCHOOL_PAGE: LevelPageContent = {
  hero: {
    image: ps.hero,
    alt: "Primary School students performing on stage",
    eyebrow: "PRIMARY SCHOOL",
    textTop: 65,
    headline: [
      [{ text: "NURTURING THE " }, { text: "INDIVIDUAL", bold: true }],
      [{ text: "TALENTS, PASSIONS", bold: true }, { text: ", AND" }],
      [{ text: "CREATIVE POTENTIAL", bold: true }],
    ],
  },
  profile: {
    body: "At the heart of Sekolah Jembatan Budaya (JB School) is a Primary School program dedicated to shaping bright, curious, and well-rounded individuals. We understand that the primary years are a critical time for discovery, which is why we provide an exceptional educational experience that bridges the robust Indonesian National Curriculum with global perspectives. To equip our young learners for the future, we elevate our Mathematics and Science instruction using the esteemed Cambridge curriculum framework, delivered fully in English. We also pride ourselves on our vibrant multilingual environment, offering intensive English and Mandarin programs taught by dedicated native speakers to build natural fluency and cultural appreciation. Yet, true education goes far beyond academic subjects. Our holistic approach is intentionally centered on recognizing and nurturing the individual talents, passions, and creative potential of every single child. We foster this growth in a warm, secure, and highly supportive atmosphere, ensuring that your child feels completely safe, valued, and inspired to thrive every single day at JB School.",
    principal: {
      name: "Ms. Ida Ayu Komang Mirah W",
      role: "Primary School Principal",
      image: ps.principal,
    },
    layout: {
      height: 422,
      visualWidth: 349,
      textLeft: 369,
      textRight: 762,
      nameTop: 376,
      nameCenter: 161,
      nameSize: 16.1,
      roleSize: 14.1,
    },
  },
  curriculum:
    "The Primary School curriculum at Sekolah Jembatan Budaya (JB School) is thoughtfully designed to provide a world-class education rooted in the Indonesian National Curriculum. We elevate our students' learning experience through comprehensive English and Mandarin programs guided by native speakers, alongside advanced Math and Science instruction taught in English using the Cambridge curriculum framework. Centered on discovering and nurturing each child’s unique potential, interests, and talents, our approach ensures that every student thrives. We are committed to fostering this academic and personal growth within a safe, comfortable, and highly supportive learning environment.",
  justifyText: true,
  activities: ps.activities.map((src, i) => ({
    src,
    alt: PRIMARY_ACTIVITY_ALTS[i],
  })),
};

const jh = tokens.assets.juniorHigh;

const JUNIOR_HIGH_ACTIVITY_ALTS = [
  "Students running in a fun run",
  "Students reading on stage at an outdoor event",
  "Flag dance performance at night",
  "Students painting a kite together",
  "Performance group photo",
  "Piano recital award",
  "Outdoor camp group photo",
  "Fan dance performance on stage",
  "Lion dance performance",
  "Dragon dance performance on stage",
];

export const JUNIOR_HIGH_PAGE: LevelPageContent = {
  hero: {
    image: jh.hero,
    alt: "Junior High School students dancing on stage",
    eyebrow: "JUNIOR HIGH SCHOOL",
    textTop: 66,
    headline: [
      [{ text: "NURTURING THE " }, { text: "INDIVIDUAL", bold: true }],
      [{ text: "TALENTS, PASSIONS", bold: true }, { text: ", AND" }],
      [{ text: "CREATIVE POTENTIAL", bold: true }],
    ],
  },
  profile: {
    body: "Welcome to the Junior High School program at Sekolah Jembatan Budaya (JB School), where we guide young adolescents through a transformative phase of academic growth, personal discovery, and global readiness. Built upon the solid foundation of the Indonesian National Curriculum, our academic program is further enriched with an additional Oxford AQA curriculum for Mathematics and Science, cultivating advanced analytical thinking and problem-solving skills. To foster true international competence, we offer immersive English and Mandarin language programs taught directly by experienced native speakers. Recognizing that the middle school years are critical for self-discovery, our student-centered philosophy actively identifies, nurtures, and expands each teenager's unique talents, interests, and creative potential. All of this takes place within a safe, comfortable, and deeply supportive learning environment where students feel empowered to think critically, collaborate, and excel.",
    principal: {
      name: "Ms. Desak Putu Eka Erawati",
      role: "Junior High School Principal",
      image: jh.principal,
    },
    layout: {
      height: 422,
      visualWidth: 348,
      textLeft: 369,
      textRight: 762,
      nameTop: 376,
      nameCenter: 161,
      nameSize: 16.1,
      roleSize: 14.1,
    },
  },
  curriculum:
    "The Junior High School curriculum at Sekolah Jembatan Budaya (JB School) provides a well-rounded academic journey rooted in the Indonesian National Curriculum and enriched with international standards. We enhance our language offerings with intensive English and Mandarin programs guided directly by native speakers. Additionally, our Mathematics and Science subjects are further strengthened using the prestigious Oxford AQA curriculum framework. Centered on identifying and developing each child's unique potential, interests, and talents, our student-focused approach ensures holistic growth within a safe, comfortable, and highly supportive learning environment.",
  justifyText: true,
  activities: jh.activities.map((src, i) => ({
    src,
    alt: JUNIOR_HIGH_ACTIVITY_ALTS[i],
  })),
};
