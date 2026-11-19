import type { CSSProperties } from "react";
import { HeroCarousel } from "@/components/shared/HeroCarousel";
import { cn } from "@/lib/utils";
import type { LevelPageContent } from "@/lib/level-pages";

export function LevelHero({ hero }: { hero: LevelPageContent["hero"] }) {
  return (
    <section
      className="relative aspect-[1080/469] w-full overflow-hidden bg-neutral-100 lg:aspect-(--hero-aspect) lg:min-h-[200px]"
      style={{ "--hero-aspect": `1080 / ${hero.height}` } as CSSProperties}
    >
      <h1 className="sr-only">{hero.title}</h1>
      <HeroCarousel slides={hero.slides} />
      {hero.fade && (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 to-transparent",
            hero.fade === "right"
              ? "bg-linear-to-l from-white/85 to-45%"
              : "bg-linear-to-r from-white/85 to-30%",
          )}
        />
      )}
    </section>
  );
}
