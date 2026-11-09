import { tokens } from "@/styles/tokens";
import { HeroCarousel, type HeroSlide } from "@/components/shared/HeroCarousel";

// shortcut: slides 2-3 are placeholders, swap `src: null` for real photos once they exist.
const FACILITIES_SLIDES: HeroSlide[] = [
  { src: tokens.assets.facilities.hero, alt: "JB School main building" },
  { src: null, alt: "Slide 2", placeholderClassName: "bg-jb-blue" },
  { src: null, alt: "Slide 3", placeholderClassName: "bg-jb-sage" },
];

export function FacilitiesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-100 aspect-[810/275] min-h-[240px]">
      <HeroCarousel slides={FACILITIES_SLIDES} />

      {/* Figma: text top at 44% of the banner, right edge at 93.6% */}
      <div className="pointer-events-none absolute inset-x-0 top-[44%] z-10 pr-[6.4%] text-right">
        <h1 className="font-sans text-xl font-bold tracking-[0.09em] text-black sm:text-2xl lg:text-4xl xl:text-[39px]">
          FACILITIES
        </h1>
      </div>
    </section>
  );
}
