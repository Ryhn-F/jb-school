import { HeroCarousel, type HeroSlide } from "@/components/shared/HeroCarousel";

interface TitleHeroProps {
  title: string;
  image: string;
  alt: string;
}

/** Page banner with a single bold title on the right (Figma Facilities / Admission frames). */
export function TitleHero({ title, image, alt }: TitleHeroProps) {
  // shortcut: slides 2-3 are placeholders, swap `src: null` for real photos once they exist.
  const slides: HeroSlide[] = [
    { src: image, alt },
    { src: null, alt: "Slide 2", placeholderClassName: "bg-jb-blue" },
    { src: null, alt: "Slide 3", placeholderClassName: "bg-jb-sage" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-neutral-100 aspect-[810/275] min-h-[240px]">
      <HeroCarousel slides={slides} />

      {/* Figma: text top at 44% of the banner, right edge at 93.6% */}
      <div className="pointer-events-none absolute inset-x-0 top-[44%] z-10 pr-[6.4%] text-right">
        <h1 className="font-sans text-xl font-bold tracking-[0.09em] text-black sm:text-2xl lg:text-4xl xl:text-[39px]">
          {title}
        </h1>
      </div>
    </section>
  );
}
