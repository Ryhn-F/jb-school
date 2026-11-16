import { HeroCarousel } from "@/components/shared/HeroCarousel";
import { cn } from "@/lib/utils";
import type { LevelPageContent } from "@/lib/level-pages";

export function LevelHero({ hero }: { hero: LevelPageContent["hero"] }) {
  return (
    <section
      className="relative min-h-[200px] w-full overflow-hidden bg-neutral-100"
      style={{ aspectRatio: `1080 / ${hero.height}` }}
    >
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
