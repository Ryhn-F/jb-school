"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

export interface Facility {
  name: string;
  image: string;
  alt: string;
}

/** Facility tiles + a looping full-screen lightbox (native <dialog>: focus trap and Esc for free). */
export function FacilityGallery({ facilities }: { facilities: Facility[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const count = facilities.length;
  const current = index === null ? null : facilities[index];

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  // Wraps both ways: next on the last image returns to the first.
  const step = (delta: number) =>
    setIndex((i) => (i === null ? i : (i + delta + count) % count));

  // Lock page scroll behind the lightbox.
  useEffect(() => {
    if (index === null) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev;
    };
  }, [index]);

  const closeOnBackdrop = (e: MouseEvent) => {
    if (e.target === e.currentTarget) close();
  };

  return (
    <>
      <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-[4.2%] lg:mt-10 lg:gap-y-14">
        {facilities.map((facility, i) => (
          <li key={facility.name}>
            <figure>
              <button
                type="button"
                onClick={() => open(i)}
                aria-label={`View ${facility.name.toLowerCase()} photo`}
                className="group relative block aspect-square w-full cursor-zoom-in transition-transform active:scale-[0.98] overflow-hidden rounded-[8%] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jb-navy"
              >
                <Image
                  src={facility.image}
                  alt={facility.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
              <figcaption className="mt-3 font-sans text-xs font-bold tracking-[0.1em] text-black sm:text-sm lg:mt-4 lg:text-lg xl:text-xl">
                {facility.name}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Facility photos"
        onClose={() => setIndex(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-black/80"
      >
        {current && (
          <div
            className="relative flex h-full w-full items-center justify-center px-12 sm:px-20"
            onClick={closeOnBackdrop}
          >
            <figure className="w-[min(100%,78vh)]">
              <div className="relative aspect-square w-full bg-black/30">
                <Image
                  key={current.image}
                  src={current.image}
                  alt={current.alt}
                  fill
                  sizes="(min-width: 768px) 78vh, 90vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 font-sans text-white">
                <span className="text-base font-bold tracking-wide sm:text-xl">{current.name}</span>
                <span className="shrink-0 text-sm" aria-live="polite">
                  {index! + 1} of {count}
                </span>
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 p-2 text-white/80 transition hover:scale-110 hover:text-white active:scale-90 sm:right-6 sm:top-5"
            >
              <FiX aria-hidden="true" className="h-8 w-8 sm:h-10 sm:w-10" />
            </button>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="absolute left-1 top-1/2 -translate-y-1/2 p-2 text-white/80 transition hover:scale-110 hover:text-white active:scale-90 sm:left-4"
            >
              <FiChevronLeft aria-hidden="true" className="h-9 w-9 sm:h-12 sm:w-12" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="absolute right-1 top-1/2 -translate-y-1/2 p-2 text-white/80 transition hover:scale-110 hover:text-white active:scale-90 sm:right-4"
            >
              <FiChevronRight aria-hidden="true" className="h-9 w-9 sm:h-12 sm:w-12" />
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
