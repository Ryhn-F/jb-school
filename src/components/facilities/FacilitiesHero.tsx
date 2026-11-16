import { tokens } from "@/styles/tokens";
import { HeroCarousel, type HeroSlide } from "@/components/shared/HeroCarousel";

const [building, campus, entrance] = tokens.assets.facilities.banners;

const FACILITIES_SLIDES: HeroSlide[] = [
  { src: building, alt: "JB School main building" },
  { src: campus, alt: "JB School campus buildings" },
  { src: entrance, alt: "JB School entrance sign" },
];

export function FacilitiesHero() {
  return (
    <section className="relative aspect-[1080/334] min-h-[200px] w-full overflow-hidden bg-neutral-100">
      <HeroCarousel slides={FACILITIES_SLIDES} />
      {/* Figma: white fade over the right edge of the banner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-l from-white/85 to-transparent to-45%"
      />
    </section>
  );
}
