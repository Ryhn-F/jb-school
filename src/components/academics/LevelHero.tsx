import { HeroCarousel, type HeroSlide } from "@/components/shared/HeroCarousel";
import type { LevelPageContent } from "@/lib/level-pages";

export function LevelHero({ hero }: { hero: LevelPageContent["hero"] }) {
  // shortcut: slides 2-3 are placeholders, swap `src: null` for real photos once they exist.
  const slides: HeroSlide[] = [
    { src: hero.image, alt: hero.alt },
    { src: null, alt: "Slide 2", placeholderClassName: "bg-jb-blue" },
    { src: null, alt: "Slide 3", placeholderClassName: "bg-jb-sage" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-neutral-100 aspect-[810/275] min-h-[240px]">
      <HeroCarousel slides={slides} />

      {/* Figma: eyebrow top at 27.6% of the banner, right edge at 95.3% */}
      <div className="pointer-events-none absolute inset-x-0 top-[27.6%] z-10 pr-[4.7%] text-right font-sans text-black">
        <p className="text-sm tracking-[0.09em] sm:text-xl lg:text-3xl xl:text-[33px]">
          {hero.eyebrow}
        </p>
        <h1 className="mt-1 text-lg leading-[1.37] tracking-[0.09em] sm:text-2xl lg:text-4xl xl:text-[39px]">
          {hero.headline.map((line, i) => (
            <span key={i} className="block">
              {line.map((run) => (
                <span key={run.text} className={run.bold ? "font-bold" : "font-normal"}>
                  {run.text}
                </span>
              ))}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
