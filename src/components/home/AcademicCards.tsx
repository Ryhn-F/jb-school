"use client";

import { useState, useSyncExternalStore, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { tokens } from "@/styles/tokens";

interface AcademicCardItem {
  id: string;
  title: string;
  /** Vertical label shown while the card is collapsed */
  label: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  color: string;
}

const CARDS: AcademicCardItem[] = [
  {
    id: "early-childhood",
    title: "EARLY CHILDHOOD",
    label: "EARLY CHILDHOOD",
    description:
      "Unlocking your child's unique potential, one playful discovery at a time.",
    href: "/academics/early-childhood",
    image: tokens.assets.academicCards.earlyChildhood,
    alt: "Early Childhood at JB School",
    color: tokens.colors.academic.earlyChildhood,
  },
  {
    id: "primary",
    title: "PRIMARY SCHOOL",
    label: "PRIMARY SCHOOL",
    description:
      "Building strong foundations in curiosity, confidence and collaboration.",
    href: "/academics/primary",
    image: tokens.assets.academicCards.primary,
    alt: "Primary School at JB School",
    color: tokens.colors.academic.primary,
  },
  {
    id: "junior-high",
    title: "JUNIOR HIGH SCHOOL",
    label: "JUNIOR HIGH SCHOOL",
    description:
      "Guiding students to think critically and communicate with purpose.",
    href: "/academics/junior-high",
    image: tokens.assets.academicCards.junior,
    alt: "Junior High School at JB School",
    color: tokens.colors.academic.junior,
  },
  {
    id: "senior-high",
    title: "SENIOR HIGH SCHOOL",
    label: "SENIOR HIGH SCHOOL",
    description:
      "Preparing future leaders of character for university and the world.",
    href: "/academics/senior-high",
    image: tokens.assets.academicCards.senior,
    alt: "Senior High School at JB School",
    color: tokens.colors.academic.senior,
  },
];

// The first card is active on load and the last hovered/focused card stays active.
const DEFAULT_ACTIVE_ID = CARDS[0].id;

// Card widths in rem, mirroring Tailwind's w-60/w-64 (open) & w-36/w-44 (closed)
const WIDTHS = {
  base: { open: "15rem", closed: "9rem" },
  sm: { open: "16rem", closed: "11rem" },
} as const;

const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.55;

const SM_QUERY = "(min-width: 640px)";

function subscribeToSm(callback: () => void) {
  const mql = window.matchMedia(SM_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function useIsSmUp() {
  return useSyncExternalStore(
    subscribeToSm,
    () => window.matchMedia(SM_QUERY).matches,
    () => false,
  );
}

const MotionLink = motion.create(Link);

export function AcademicCards() {
  const [activeId, setActiveId] = useState(DEFAULT_ACTIVE_ID);
  const isSmUp = useIsSmUp();
  const widths = isSmUp ? WIDTHS.sm : WIDTHS.base;

  return (
    <div className="w-full lg:w-3/4 flex items-center justify-start lg:justify-end gap-3 sm:gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-none">
      {CARDS.map((card) => {
        const isActive = card.id === activeId;

        return (
          <MotionLink
            key={card.id}
            href={card.href}
            aria-label={card.title}
            onMouseEnter={() => setActiveId(card.id)}
            onFocus={() => setActiveId(card.id)}
            initial={false}
            animate={{ width: isActive ? widths.open : widths.closed }}
            transition={{ duration: DURATION, ease: EASE }}
            className="group relative block shrink-0 h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md"
          >
            {/* Image */}
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={{ scale: isActive ? 1.05 : 1 }}
              transition={{ duration: DURATION + 0.2, ease: EASE }}
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(min-width: 640px) 256px, 240px"
                className="object-cover"
              />
            </motion.div>

            {/* Collapsed dim layer */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 bg-black/10"
              initial={false}
              animate={{ opacity: isActive ? 0 : 1 }}
              transition={{ duration: DURATION, ease: EASE }}
            />

            {/* Collapsed: vertical label */}
            <motion.div
              aria-hidden="true"
              className="absolute left-3 bottom-4 top-4 flex items-end"
              initial={false}
              animate={{ opacity: isActive ? 0 : 1 }}
              transition={{
                duration: isActive ? 0.2 : DURATION,
                delay: isActive ? 0 : 0.15,
              }}
            >
              <span className="font-bold text-xs sm:text-sm tracking-widest text-white uppercase drop-shadow [writing-mode:vertical-rl] rotate-180">
                {card.label}
              </span>
            </motion.div>

            {/* Expanded: colored gradient overlay + content.
                Fixed to the open width so text doesn't reflow while the card resizes. */}
            <motion.div
              className="absolute bottom-0 left-0 w-60 sm:w-64 p-4 sm:p-5 text-white space-y-1"
              style={{
                backgroundImage: `linear-gradient(to top, ${card.color}f2, ${card.color}cc 55%, transparent)`,
              }}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 16,
              }}
              transition={{
                duration: isActive ? DURATION : 0.3,
                ease: EASE,
                delay: isActive ? 0.1 : 0,
              }}
            >
              <h3 className="font-bold text-sm sm:text-base tracking-wide uppercase">
                {card.title}
              </h3>
              <p className="text-[10px] sm:text-[9px] text-white/90 font-bold leading-snug line-clamp-2 pr-[10%]">
                &ldquo;{card.description}&rdquo;
              </p>
              <span
                className="inline-block mt-1 px-3 py-1 rounded-full border border-white text-white text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 hover:bg-white hover:text-(--card-color)"
                style={{ "--card-color": card.color } as CSSProperties}
              >
                LEARN MORE
              </span>
            </motion.div>
          </MotionLink>
        );
      })}
    </div>
  );
}
