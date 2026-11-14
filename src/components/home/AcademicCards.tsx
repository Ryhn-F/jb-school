"use client";

import { useState, useSyncExternalStore, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ACADEMIC_LEVELS } from "@/lib/academic-levels";

const CARDS = ACADEMIC_LEVELS;

// The first card is active on load and the last hovered/focused card stays active.
const DEFAULT_ACTIVE_ID = CARDS[0].id;

// Open width = card height (h-64 / h-72) x the 1404/1016 photo ratio, so the open card shows the whole
// landscape photo instead of a cropped (zoomed-looking) square; closed = w-36
const WIDTHS = {
  base: { open: "22.1rem", closed: "9rem" },
  sm: { open: "24.9rem", closed: "9rem" },
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
            {/* Image: no zoom, the open card matches the photo's aspect so the full image is visible */}
            <Image
              src={card.image}
              alt={card.alt}
              fill
              sizes="(min-width: 640px) 400px, 354px"
              className="object-cover"
            />

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
                {card.title}
              </span>
            </motion.div>

            {/* Expanded content (the color gradient is baked into the image).
                Fixed to the open width so text doesn't reflow while the card resizes. */}
            <motion.div
              className="absolute bottom-0 left-0 w-64 sm:w-72 p-4 sm:p-5 text-white space-y-1"
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
              <p className="text-[10px] sm:text-[9px] text-white/90 font-bold leading-snug pr-[10%]">
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
