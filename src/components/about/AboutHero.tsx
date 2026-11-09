import { tokens } from "@/styles/tokens";
import { HeroCarousel, type HeroSlide } from "@/components/shared/HeroCarousel";

// shortcut: slides 2-3 are placeholders, swap `src: null` for real photos once they exist.
const ABOUT_SLIDES: HeroSlide[] = [
  { src: tokens.assets.images.aboutHero, alt: "JB School founder and campus building" },
  { src: null, alt: "Slide 2", placeholderClassName: "bg-jb-blue" },
  { src: null, alt: "Slide 3", placeholderClassName: "bg-jb-sage" },
];

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-100 aspect-[810/275] min-h-[240px]">
      <HeroCarousel slides={ABOUT_SLIDES} />

      {/* Figma: text box starts at 67% x, 42% y of the banner */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-end pr-[10%] pb-[3%]">
        <h1 className="font-sans text-3xl font-bold text-black sm:text-5xl lg:text-6xl xl:text-7xl">
          ABOUT US
        </h1>
      </div>
    </section>
  );
}
