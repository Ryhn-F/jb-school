"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface HeroSlide {
  /** null renders a brand-colored placeholder until the real photo exists */
  src: string | null;
  alt: string;
  placeholderClassName?: string;
}

const AUTOPLAY_MS = 3000;
const SWIPE_THRESHOLD_PX = 50;

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const count = slides.length;

  const goTo = (i: number) => setIndex((i + count) % count);

  // Re-arms on every index change, so a manual slide restarts the 3s countdown.
  useEffect(() => {
    if (count < 2) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, count]);

  return (
    <>
      <div
        className="absolute inset-0 touch-pan-y select-none cursor-grab active:cursor-grabbing"
        aria-roledescription="carousel"
        aria-label="JB School highlights"
        onPointerDown={(e) => {
          dragStartX.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (dragStartX.current === null) return;
          const dx = e.clientX - dragStartX.current;
          dragStartX.current = null;
          if (Math.abs(dx) > SWIPE_THRESHOLD_PX) goTo(index + (dx < 0 ? 1 : -1));
        }}
        onPointerCancel={() => {
          dragStartX.current = null;
        }}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative h-full w-full shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
            >
              {slide.src ? (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  draggable={false}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              ) : (
                <div
                  className={cn(
                    "flex h-full w-full items-start justify-start p-6 text-sm font-semibold uppercase tracking-widest text-white/80",
                    slide.placeholderClassName ?? "bg-jb-blue",
                  )}
                >
                  {slide.alt} — image coming soon
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 inset-x-0 z-20 flex justify-center items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={cn(
              "w-3 h-3 rounded-full border-2 border-white shadow-md transition-colors",
              i === index ? "bg-white" : "bg-transparent hover:bg-white/50",
            )}
          />
        ))}
      </div>
    </>
  );
}
