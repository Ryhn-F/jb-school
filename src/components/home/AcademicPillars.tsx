import Image from "next/image";
import Link from "next/link";
import { AcademicCards } from "@/components/home/AcademicCards";
import { ACADEMIC_LEVELS } from "@/lib/academic-levels";

export function AcademicPillars() {
  return (
    <section id="academics" className="pt-[4.5vw] pb-[3.1vw] lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-[6.1vw] lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[3vw] lg:gap-10">
          {/* Left Text Block (mobile: centered above the grid) */}
          <div className="w-full lg:w-1/4 space-y-[0.9vw] lg:space-y-2 text-center lg:text-left">
            <span className="block text-[max(11px,2.4vw)]/[1.3] lg:text-sm font-normal lg:font-semibold tracking-[0.06em] lg:tracking-widest uppercase text-black lg:text-neutral-800">
              ACADEMICS
            </span>
            <h2 className="text-[max(14px,3.45vw)]/[1.2] lg:text-4xl font-extrabold text-black lg:leading-tight tracking-tight uppercase font-sans">
              COOPERATION, <br className="hidden lg:inline" />
              COMMUNICATION, <br className="hidden lg:inline" />
              CHARACTER
            </h2>
          </div>

          {/* Mobile/tablet: Figma 2x2 grid of square cards, all expanded */}
          <div className="grid w-full grid-cols-2 gap-[4.2vw] lg:hidden">
            {ACADEMIC_LEVELS.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                aria-label={card.title}
                className="relative flex min-h-[41.8vw] flex-col justify-end rounded-[1.9vw] p-[3vw] text-white shadow-md"
              >
                {/* Square at minimum (41.8vw = column width); grows when the 11px text floor makes the copy taller. */}
                <div className="absolute inset-0 overflow-hidden rounded-[1.9vw]">
                  <Image src={card.image} alt={card.alt} fill sizes="45vw" className="object-cover" />
                  {/* Readability scrim: the copy runs higher than the baked-in color gradient */}
                  <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/45 via-black/15 to-transparent" />
                </div>
                <div className="relative space-y-[0.8vw]">
                  <h3 className="font-bold text-[max(13px,3.1vw)]/[1.1] tracking-wide uppercase">
                    {card.title}
                  </h3>
                  <p className="text-[max(11px,1.45vw)]/[1.3] text-white/90 font-bold">
                    &ldquo;{card.description}&rdquo;
                  </p>
                  <span className="mt-[1vw] inline-flex min-h-6 items-center rounded-full border border-white px-[2.8vw] py-[0.6vw] text-[max(11px,1.75vw)] font-bold uppercase tracking-wider">
                    LEARN MORE
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop: interactive, hover-expanding cards */}
          <AcademicCards />
        </div>
      </div>
    </section>
  );
}
