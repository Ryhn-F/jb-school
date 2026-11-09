import { tokens } from "@/styles/tokens";

export interface AcademicLevel {
  id: string;
  title: string;
  description: string;
  href: string;
  /** Square Figma export with the level's color gradient baked into the bottom */
  image: string;
  alt: string;
  color: string;
}

// Copy from the Figma "Academics" page; shared by the home cards and /academics.
export const ACADEMIC_LEVELS: AcademicLevel[] = [
  {
    id: "early-childhood",
    title: "EARLY CHILDHOOD",
    description:
      "Unlocking your child’s unique potential, one playful discovery at a time.",
    href: "/academics/early-childhood",
    image: tokens.assets.academicCards.earlyChildhood,
    alt: "Early Childhood students reading together at JB School",
    color: tokens.colors.academic.earlyChildhood,
  },
  {
    id: "primary",
    title: "PRIMARY SCHOOL",
    description:
      "Laying a strong foundation for lifelong learning through a perfect balance of academic excellence, character building, and multilingual proficiency.",
    href: "/academics/primary",
    image: tokens.assets.academicCards.primary,
    alt: "Primary School student writing in class at JB School",
    color: tokens.colors.academic.primary,
  },
  {
    id: "junior-high",
    title: "JUNIOR HIGH SCHOOL",
    description:
      "Equipping students with advanced multilingual abilities, digital literacy, and leadership skills to thrive in a globally competitive environment.",
    href: "/academics/junior-high",
    image: tokens.assets.academicCards.junior,
    alt: "Junior High School classroom with a teacher at JB School",
    color: tokens.colors.academic.junior,
  },
  {
    id: "senior-high",
    title: "SENIOR HIGH SCHOOL",
    description:
      "Shaping visionary leaders equipped with the academic excellence, language proficiency, and character to conquer future challenges.",
    href: "/academics/senior-high",
    image: tokens.assets.academicCards.senior,
    alt: "Senior High School students at JB School",
    color: tokens.colors.academic.senior,
  },
];
