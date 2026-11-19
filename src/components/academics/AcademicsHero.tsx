import { tokens } from "@/styles/tokens";
import { HeroCarousel, type HeroSlide } from "@/components/shared/HeroCarousel";

// shortcut: slides 2-3 are placeholders, swap `src: null` for real photos once they exist.
const ACADEMICS_SLIDES: HeroSlide[] = [
  {
    src: tokens.assets.academics.banners[0],
    alt: "JB School students marching in a flag ceremony",
  },
  {
    src: tokens.assets.academics.banners[1],
    alt: "Slide 2",
    placeholderClassName: "bg-jb-blue",
  },
  {
    src: tokens.assets.academics.banners[2],
    alt: "Slide 3",
    placeholderClassName: "bg-jb-sage",
  },
  {
    src: tokens.assets.academics.banners[3],
    alt: "Slide 4",
    placeholderClassName: "bg-jb-sage",
  },
];

export function AcademicsHero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-neutral-200 bg-neutral-100 aspect-[1080/470] lg:aspect-[810/275] lg:min-h-[240px] lg:border-b-0">
      <HeroCarousel slides={ACADEMICS_SLIDES} />
    </section>
  );
}
