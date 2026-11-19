import { tokens } from "@/styles/tokens";
import { HeroCarousel, type HeroSlide } from "@/components/shared/HeroCarousel";

const [scouts, choir, masks] = tokens.assets.news.banners;

const NEWS_SLIDES: HeroSlide[] = [
  { src: scouts, alt: "Scouts playing with water at a JB School camping activity" },
  { src: choir, alt: "Students performing music on stage at the Chinese New Year celebration" },
  { src: masks, alt: "Students in Chinese opera masks performing on stage" },
];

export function NewsHero() {
  return (
    // Figma: 1080 x 469 banner on mobile, 1080 x 334 on desktop
    <section
      className="relative aspect-[1080/469] w-full lg:aspect-[1080/334] lg:min-h-[200px] overflow-hidden bg-neutral-100"
      aria-label="JB School news"
    >
      <h1 className="sr-only">News</h1>
      <HeroCarousel slides={NEWS_SLIDES} />
      {/* Figma: white fade over the right edge of the banner (desktop only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-linear-to-l from-white/85 to-transparent to-45% lg:block"
      />
    </section>
  );
}
