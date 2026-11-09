import { tokens } from "@/styles/tokens";
import { HeroCarousel, type HeroSlide } from "@/components/shared/HeroCarousel";

// shortcut: slides 2-3 are placeholders, swap `src: null` for real photos once they exist.
const ACADEMICS_SLIDES: HeroSlide[] = [
  { src: tokens.assets.images.academicsHero, alt: "JB School students marching in a flag ceremony" },
  { src: null, alt: "Slide 2", placeholderClassName: "bg-jb-blue" },
  { src: null, alt: "Slide 3", placeholderClassName: "bg-jb-sage" },
];

export function AcademicsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-100 aspect-[810/275] min-h-[240px]">
      <HeroCarousel slides={ACADEMICS_SLIDES} />

      {/* Figma: two right-aligned lines, top at 39% of the banner, right edge at 94.7% */}
      <div className="pointer-events-none absolute inset-x-0 top-[39%] z-10 pr-[5.3%] text-right">
        <h1 className="font-sans text-lg font-normal uppercase leading-[1.37] tracking-[0.09em] text-black sm:text-2xl lg:text-4xl xl:text-[39px]">
          Building knowledge,
          <br />
          Shaping character
        </h1>
      </div>
    </section>
  );
}
