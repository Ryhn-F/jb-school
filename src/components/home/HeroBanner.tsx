import { tokens } from "@/styles/tokens";
import { HeroCarousel, type HeroSlide } from "@/components/shared/HeroCarousel";

const HERO_SLIDES: HeroSlide[] = [
  { src: tokens.assets.home.banners[0], alt: "JB School Bali campus building" },
  { src: tokens.assets.home.banners[1], alt: "JB School students performing a traditional dance on stage" },
  { src: tokens.assets.home.banners[2], alt: "JB School students at the Nyepi Caka 1947 parade" },
];

export function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-100 aspect-[1080/336] min-h-[200px]">
      <h1 className="sr-only">JB School, Bali — 文桥三语学校</h1>
      <HeroCarousel slides={HERO_SLIDES} />
    </section>
  );
}
