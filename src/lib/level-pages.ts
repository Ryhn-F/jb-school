import { tokens } from "@/styles/tokens";
import type { GalleryPhoto } from "@/components/shared/PhotoGallery";

/** A run of text; `bold` mirrors the Figma bold/regular mix */
export interface TextRun {
  text: string;
  bold?: boolean;
}

/** One line-group of the rich body copy. `spaced` adds the blank line Figma has above it. */
export type TextBlock = { spaced?: boolean } & (
  | { type: "p"; runs: TextRun[] }
  | { type: "ul"; items: TextRun[][] }
);

/** All numbers are Figma px inside the 1080px-wide level page frames */
export interface ProfileLayout {
  height: number;
  titleTop: number;
  bodyTop: number;
  textLeft: number;
  textWidth: number;
  bodySize: number;
  bodyLineHeight: number;
  nameTop: number;
  nameCenter: number;
  nameSize: number;
  roleSize: number;
}

export interface LevelPageContent {
  hero: {
    slides: { src: string; alt: string }[];
    /** Figma banner height (frame is 1080 wide) */
    height: number;
    /** White fade Figma lays over one edge of the banner */
    fade?: "left" | "right";
  };
  profile?: {
    image: string;
    body: string;
    principal: { name: string; role: string };
    ageGroups?: string[];
    layout: ProfileLayout;
  };
  curriculum: { title: string; blocks: TextBlock[] };
  activities: GalleryPhoto[];
  studyAbroad?: string[][];
}

const p = (...runs: (string | TextRun)[]): TextBlock => ({
  type: "p",
  runs: runs.map((r) => (typeof r === "string" ? { text: r } : r)),
});
const b = (text: string): TextRun => ({ text, bold: true });
/** Bullet item with a bold lead-in */
const li = (lead: string, text: string): TextRun[] => [b(lead), { text }];
const spaced = (block: TextBlock): TextBlock => ({ ...block, spaced: true });

const photos = (srcs: readonly string[], alts: string[]): GalleryPhoto[] =>
  srcs.map((src, i) => ({ src, alt: alts[i] }));

const slides = (srcs: readonly string[], alts: string[]) =>
  srcs.map((src, i) => ({ src, alt: alts[i] }));

const ec = tokens.assets.earlyChildhood;

export const EARLY_CHILDHOOD_PAGE: LevelPageContent = {
  hero: {
    slides: slides(ec.banners, [
      "Early Childhood students dancing in pink costumes",
      "Early Childhood students at a play centre",
      "Early Childhood students saluting in white uniforms",
    ]),
    height: 337,
  },
  profile: {
    image: ec.profile,
    body: "Where the pure joy of discovery meets a commitment to early academic excellence. Our approach centers on the whole child, fostering a lifelong love for learning through creative expression, collaborative projects, and interactive play. Rooted in deep cultural appreciation and a globally-minded curriculum, our dedicated educators cultivate resilience, empathy, and early critical thinking from day one. At JB School, we don't just prepare children for primary school; we empower them to become compassionate, inquisitive learners ready to embrace a diverse world.\"",
    principal: { name: "Ms. Yuni Meyrani", role: "PGKG Principal" },
    ageGroups: [
      "PLAYGROUP A (2 - 3 YEARS OLD)",
      "PLAYGROUP B (3 - 4 YEARS OLD)",
      "KINDERGARTEN A (4 - 5 YEARS OLD)",
      "KINDERGARTEN B (5 - 6 YEARS OLD)",
    ],
    layout: {
      height: 569,
      titleTop: 42,
      bodyTop: 85,
      textLeft: 513,
      textWidth: 515,
      bodySize: 16,
      bodyLineHeight: 22.2,
      nameTop: 503,
      nameCenter: 200,
      nameSize: 22,
      roleSize: 24,
    },
  },
  curriculum: {
    title: "OUR CURRICULUM",
    blocks: [
      p("\"At JB School, our Early Childhood curriculum provides a strong and dynamic foundation by blending the Indonesian National Curriculum with exceptional English and Mandarin programs taught directly by native speakers. We believe in a personalized learning journey that actively develops your child's unique talents and natural curiosities. By fostering a highly safe, comfortable, and nurturing atmosphere, we empower our youngest learners to confidently explore their full potential and develop a lifelong love for learning.\""),
      spaced(p("We believe that early childhood is the most crucial time for holistic growth. Our carefully designed curriculum goes beyond the classroom, focusing on every aspect of your child’s development to prepare them for a bright future.")),
      p("Here is what makes our Playgroup and Kindergarten programs truly special:"),
      {
        type: "ul",
        items: [
          li("Holistic Motor Development:", " Targeted activities to enhance both gross and fine motor skills, perfectly tailored to your child’s psychological milestones."),
          li("Building Independence:", " Empowering students to become self-reliant and confident in their daily activities."),
          li("Character & Values:", " Instilling a strong foundation of good manners, positive behavior, and religious awareness."),
          li("Cultivating Creativity:", " Encouraging self-expression through a rich blend of traditional and modern arts and culture."),
          li("Early Global Languages:", " Equipping kids for the future with early exposure to English and Mandarin—taught directly by Native Speakers—alongside Bahasa Indonesia."),
        ],
      },
      spaced(p("Plus, we nurture their unique talents! Our diverse extracurricular programs include Traditional & Modern Dance, Early IT Introduction, and Traditional & Modern Music.")),
      p("Enroll your child today and let them learn, play, and grow in a joyful and supportive environment!"),
    ],
  },
  activities: photos(ec.activities, [
    "Children reading a picture book together",
    "Kindergarten performance on stage",
    "Parent and child drawing together",
    "Playing in the sand",
    "Lion dance mask celebration",
    "Balloon party in the classroom",
    "Cupcake decorating class",
    "Circle game in green costumes",
    "Teacher leading a hand song",
    "Children writing letters on the floor",
  ]),
};

const ps = tokens.assets.primary;

export const PRIMARY_SCHOOL_PAGE: LevelPageContent = {
  hero: {
    slides: slides(ps.banners, [
      "Primary School students performing on stage",
      "Primary School outing with an environment banner",
      "Primary School graduation group photo",
    ]),
    height: 335,
    fade: "right",
  },
  profile: {
    image: ps.profile,
    body: "At the heart of Sekolah Jembatan Budaya (JB School) is a Primary School program dedicated to shaping bright, curious, and well-rounded individuals. We understand that the primary years are a critical time for discovery, which is why we provide an exceptional educational experience that bridges the robust Indonesian National Curriculum with global perspectives. To equip our young learners for the future, we elevate our Mathematics and Science instruction using the esteemed Cambridge curriculum framework, delivered fully in English. We also pride ourselves on our vibrant multilingual environment, offering intensive English and Mandarin programs taught by dedicated native speakers to build natural fluency and cultural appreciation. Yet, true education goes far beyond academic subjects. Our holistic approach is intentionally centered on recognizing and nurturing the individual talents, passions, and creative potential of every single child. We foster this growth in a warm, secure, and highly supportive atmosphere, ensuring that your child feels completely safe, valued, and inspired to thrive every single day at JB School.",
    principal: { name: "Ms. Ida Ayu Komang Mirah W", role: "Primary School Principal" },
    layout: {
      height: 562,
      titleTop: 44,
      bodyTop: 86,
      textLeft: 492,
      textWidth: 524,
      bodySize: 15,
      bodyLineHeight: 21.4,
      nameTop: 502,
      nameCenter: 200,
      nameSize: 20,
      roleSize: 18,
    },
  },
  curriculum: {
    title: "OUR CURRICULUM",
    blocks: [
      p("\"The Primary School curriculum at Sekolah Jembatan Budaya (JB School) is thoughtfully designed to provide a world-class education rooted in the Indonesian National Curriculum. We elevate our students' learning experience through comprehensive English and Mandarin programs guided by native speakers, alongside advanced Math and Science instruction taught in English using the Cambridge curriculum framework. Centered on discovering and nurturing each child’s unique potential, interests, and talents, our approach ensures that every student thrives. We are committed to fostering this academic and personal growth within a safe, comfortable, and highly supportive learning environment.\""),
      spaced(p(b("Our Core Academic & Development Pillars"))),
      {
        type: "ul",
        items: [
          li("Character Education & Soft Skills Academic", " success is only half the journey. We place a strong emphasis on character education, nurturing empathy, integrity, and leadership. Our curriculum is designed to instill essential soft skills and basic life skills, empowering students to communicate effectively, solve problems creatively, and navigate real-world challenges with confidence and independence."),
          li("Excellence in Science & Mathematics", " To prepare our students for a competitive global landscape, we utilize world-class resources. Our Science and Math programs are strongly supported by the globally recognized Marshall Cavendish - Cambridge curriculum framework. This inquiry-based approach deepens analytical thinking and equips students with a robust foundation in STEM."),
          li("Global Language Proficiency", " In today's interconnected world, mastering multiple languages is a vital advantage. JB School offers an immersive language environment with intensive English and Mandarin education. To ensure authentic pronunciation and conversational fluency, our language programs are reinforced by experienced Native Speakers, giving our students the confidence to communicate on a global stage."),
        ],
      },
      spaced(p(b("Beyond the Classroom: Cultivating Talents and Passions"))),
      p("We recognize that every child has unique strengths and interests waiting to be discovered. To support optimal student development, JB School facilitates a diverse array of extracurricular programs that encompass academics, sports, and the arts."),
      p("Our comprehensive talent development programs include:"),
      {
        type: "ul",
        items: [
          li("Sports & Athletics:", " Basketball, Futsal, and Swimming to build physical health, teamwork, and sportsmanship."),
          li("Arts & Culture:", " Painting, Drawing, Vocal training, and Music to foster creativity and self-expression."),
          li("Academic Clubs:", " Math Club and other academic enrichment programs for students looking to challenge themselves and excel in national and international competitions."),
        ],
      },
      spaced(p(b("Join the JB School Family"))),
      p("Discover a school environment where your child is supported, challenged, and inspired every single day."),
      p("Let’s work together to shape a brilliant future for your child."),
    ],
  },
  activities: photos(ps.activities, [
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
  ]),
};

const jh = tokens.assets.juniorHigh;

export const JUNIOR_HIGH_PAGE: LevelPageContent = {
  hero: {
    slides: slides(jh.banners, [
      "Junior High School students dancing on stage",
      "Junior High School graduation group photo",
      "Junior High School traditional dance performance",
    ]),
    height: 329,
    fade: "left",
  },
  profile: {
    image: jh.profile,
    body: "Welcome to the Junior High School program at Sekolah Jembatan Budaya (JB School), where we guide young adolescents through a transformative phase of academic growth, personal discovery, and global readiness. Built upon the solid foundation of the Indonesian National Curriculum, our academic program is further enriched with an additional Oxford AQA curriculum for Mathematics and Science, cultivating advanced analytical thinking and problem-solving skills. To foster true international competence, we offer immersive English and Mandarin language programs taught directly by experienced native speakers. Recognizing that the middle school years are critical for self-discovery, our student-centered philosophy actively identifies, nurtures, and expands each teenager's unique talents, interests, and creative potential. All of this takes place within a safe, comfortable, and deeply supportive learning environment where students feel empowered to think critically, collaborate, and excel.",
    principal: { name: "Ms. Desak Putu Eka Erawati", role: "Junior High School Principal" },
    layout: {
      height: 561,
      titleTop: 46,
      bodyTop: 90,
      textLeft: 492,
      textWidth: 524,
      bodySize: 15,
      bodyLineHeight: 21.6,
      nameTop: 508,
      nameCenter: 200,
      nameSize: 20,
      roleSize: 18,
    },
  },
  curriculum: {
    title: "OUR CURRICULUM",
    blocks: [
      p("The Junior High School curriculum at Sekolah Jembatan Budaya (JB School) provides a well-rounded academic journey rooted in the Indonesian National Curriculum and enriched with international standards. We enhance our language offerings with intensive English and Mandarin programs guided directly by native speakers. Additionally, our Mathematics and Science subjects are further strengthened using the prestigious Oxford AQA curriculum framework. Centered on identifying and developing each child's unique potential, interests, and talents, our student-focused approach ensures holistic growth within a safe, comfortable, and highly supportive learning environment"),
      spaced(p(b("Our Core Academic & Developmental Strengths"))),
      {
        type: "ul",
        items: [
          li("Advanced Cognitive Preparation", " Our curriculum is intentionally structured to sharpen critical thinking, problem-solving, and analytical skills. We focus heavily on cognitive development to ensure students are fully equipped with the intellectual resilience required for high school, university, and their future careers."),
          li("Global Standards in Math & Science (Oxford-AQA)", " To provide a distinct competitive advantage, our robust Mathematics and Science programs are strengthened by the integration of the prestigious Oxford-AQA supplementary curriculum. This international framework deepens conceptual understanding and fosters a genuine passion for STEM disciplines."),
          li("Character Education & Soft Skills", " True success requires more than just academic intelligence. We prioritize the cultivation of essential soft skills—such as leadership, communication, teamwork, and adaptability—alongside a strong foundation in moral character and integrity."),
          li("Trilingual Fluency with Native Speakers", " In an interconnected world, exceptional communication is key. JB School provides an immersive linguistic environment, focusing on advanced proficiency in English and Mandarin. Our language programs are directly reinforced by Native Speakers, ensuring students develop authentic pronunciation, conversational confidence, and cultural fluency."),
        ],
      },
      spaced(p(b("Fostering Passion & Talent: Our Extracurricular Programs"))),
      p("We believe that optimal student development happens both inside and outside the classroom. JB School facilitates a dynamic range of extracurricular activities designed to nurture individual talents, passions, and holistic well-being."),
      p("Students can explore and excel in:"),
      {
        type: "ul",
        items: [
          li("Sports & Athletics:", " Basketball, Futsal, and Taekwondo to build physical fitness, discipline, and teamwork."),
          li("Arts, Media & Culture:", " Photography, Fine Arts (Seni Rupa), Vocal training, and Music to encourage creative expression and artistic technicality."),
          li("Academic Enrichment:", " Math Club and Science Club for inquisitive minds looking to push their boundaries and prepare for competitive academic olympiads."),
        ],
      },
      p("Take the Next Step in Your Child’s Education"),
      p("Equip your child with the academic rigor, global perspective, and strength of character they need to succeed."),
    ],
  },
  activities: photos(jh.activities, [
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
  ]),
};

const sh = tokens.assets.seniorHigh;

export const SENIOR_HIGH_PAGE: LevelPageContent = {
  hero: {
    slides: slides(sh.banners, [
      "Senior High School orchestra performing on stage",
      "Senior High School study trip group photo",
      "Senior High School graduation group photo",
    ]),
    height: 335,
  },
  profile: {
    image: sh.profile,
    body: "Welcome to the Senior High School program at Sekolah Jembatan Budaya (JB School), where we empower students to transition seamlessly into higher education and future global leadership. Our rigorous academic framework blends the Indonesian National Curriculum with the internationally recognized Oxford AQA curriculum for Mathematics and Science, developing advanced analytical capabilities, critical thinking, and independent research skills. To ensure our graduates thrive in an interconnected world, we provide intensive English and Mandarin language programs taught directly by experienced native speakers. Beyond academic excellence, our student-centered approach is dedicated to identifying, expanding, and refining each teenager’s unique passions, career aspirations, and personal talents. All of this is fostered within a safe, comfortable, and supportive learning environment that encourages mature leadership, intellectual curiosity, and personal integrity.",
    // Figma says "Ms."; kept "Mr." as before, the principal is a man
    principal: { name: "Mr. I Wayan Sadiana", role: "Senior High School Principal" },
    layout: {
      height: 544,
      titleTop: 58,
      bodyTop: 96,
      textLeft: 503,
      textWidth: 524,
      bodySize: 15,
      bodyLineHeight: 21.5,
      nameTop: 478,
      nameCenter: 214,
      nameSize: 20,
      roleSize: 18,
    },
  },
  curriculum: {
    title: "OUR CURRICULUM",
    blocks: [
      p("\"The Senior High School curriculum at Sekolah Jembatan Budaya (JB School) offers a robust academic foundation rooted in the Indonesian National Curriculum and enriched with global standards. We enhance student learning through intensive English and Mandarin language programs guided directly by native speakers, along with an additional Oxford AQA curriculum for Mathematics and Science. Centered on discovering, nurturing, and maximizing each student's unique potential, interests, and talents, our approach supports personalized growth within a safe, comfortable, and inspiring learning environment.\""),
      spaced(p(b("Our Core Pillars for Future Readiness"))),
      {
        type: "ul",
        items: [
          li("Advanced Cognitive & Career Pathway Preparation", " We focus heavily on elevating our students' cognitive and analytical capabilities to meet the rigorous demands of higher education. Our dedicated career pathway mapping guides students through their options, ensuring they are strategically prepared for university admissions and the realities of the modern workforce."),
          li("World-Class STEM Integration (Oxford-AQA)", " To ensure our students compete on a global stage, our Mathematics and Science programs are fortified by the internationally recognized Oxford-AQA supplementary curriculum. This advanced framework challenges students to master complex concepts, making it ideal for those targeting prestigious science, engineering, and technology programs or competitive academic olympiads."),
          li("Leadership, Character & Soft Skills", " Academic brilliance must be matched with emotional intelligence. We emphasize character education and the cultivation of vital soft skills—such as critical problem solving, adaptability, public speaking, and ethical leadership—equipping students to navigate real-world challenges with integrity."),
          li("Trilingual Global Fluency", " Fluency in the world’s most spoken languages is a distinct advantage in any career. Our intensive English and Mandarin programs are directly facilitated by experienced Native Speakers, guaranteeing that students graduate with authentic conversational fluency, precise pronunciation, and the cultural competence needed for international success."),
        ],
      },
      spaced(p(b("Discover Your Potential: Talent & Interest Development"))),
      p("A well-rounded future leader needs a creative and active outlet. JB School provides a state-of-the-art environment for students to pursue their passions, build diverse portfolios, and discover hidden talents through our comprehensive extracurricular programs:"),
      {
        type: "ul",
        items: [
          li("Media & Creative Arts:", " Cinematography, Fine Arts (Seni Rupa), Vocal Training, and Music—perfect for students building creative portfolios for higher education."),
          li("Sports & Discipline:", " Basketball, Futsal, and Taekwondo to foster physical endurance, strategic teamwork, and competitive sportsmanship."),
          li("Academic Excellence:", " Math Club and Science Club for driven students looking to push their intellectual boundaries and prepare for national and international academic competitions."),
        ],
      },
      spaced(p(b("Empower Your Future with JB School"))),
      p("Step into an environment that respects your ambition and supports your goals. Join a community of forward-thinking learners and dedicated educators committed to your success."),
    ],
  },
  activities: photos(sh.activities, [
    "Chinese New Year group photo with guests",
    "Dance performance on a red-lit stage",
    "Study trip in front of a Chinese temple gate",
    "Students in traditional Chinese costume on stage",
    "Class group photo on the school steps",
  ]),
  studyAbroad: [
    [
      "National University of Singapore",
      "Nanyang Technological University, Singapore",
      "University of Toronto, Kanada",
      "Kyoto University, Japan",
      "University of Western Australia",
      "University of Technology Sydney",
      "RMIT, Melbourne",
      "University of Bradfort, UK",
      "University of Sunderland, UK",
    ],
    [
      "Sun Yat-Sen University",
      "East China Normal University (ECNU)",
      "Jinan University (JNU)",
      "South China Normal University (SCNU)",
      "Xiamen University (XMU)",
      "Huaqiao University (HQU)",
      "Xi’an Jiaotong-Liverpool University (XJTLU)",
      "Zhejiang Normal University (ZJNU)",
    ],
  ],
};

const jc = tokens.assets.jbCollege;

export const JB_COLLEGE_PAGE: LevelPageContent = {
  hero: {
    slides: [{ src: jc.banner, alt: "JB College graduates in caps and gowns" }],
    height: 405,
  },
  curriculum: {
    title: "Unlock Global Opportunities with JB College",
    blocks: [
      p(b("Building on a proven legacy of educational excellence"), "—from early childhood through high school—Yayasan Jembatan Budaya proudly introduces JB College. Offering specialized Diploma (D2) and Bachelor's (S1) degree programs, we are a pioneering higher education institution dedicated to comprehensive Mandarin language and cultural proficiency."),
      spaced(p(b("Why Master Mandarin?"), " In the 21st century, Mandarin is no longer just a language; it is a critical asset for professional success. Driven by China's rapid economic expansion and deepening bilateral cooperation with Indonesia, the demand for Mandarin-speaking professionals has skyrocketed. From Bali's thriving tourism sector to international trade, corporate business, and diplomacy, mastering Mandarin opens doors to limitless career opportunities. The modern workforce urgently needs capable professionals who can bridge these connections quickly and effectively.")),
      spaced(p(b("Empowering Future-Ready"), " Professionals JB College was established to meet this global demand. As a pioneer in specialized language education, we transform ambitious students into highly competitive, high-quality human resources equipped to navigate and lead in a dynamic global marketplace.")),
      p("Shaping Global Ambassadors We believe true leadership requires more than just communicative fluency. At JB College, we shape cross-cultural ambassadors. Our curriculum ensures that while our students gain a deep understanding of foreign cultures and global perspectives, they remain firmly rooted in their Indonesian identity. We graduate culturally intelligent professionals capable of fostering harmonious, impactful, and lasting international partnerships."),
    ],
  },
  activities: photos(jc.activities, [
    "JB College graduates with guests and bouquets",
    "JB College graduates in front of the graduation backdrop",
    "JB College graduates holding their certificates",
    "JB College graduate receiving a certificate on stage",
  ]),
};
