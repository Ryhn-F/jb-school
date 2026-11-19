import { PhotoGallery } from "@/components/shared/PhotoGallery";
import { cn } from "@/lib/utils";
import type { LevelPageContent } from "@/lib/level-pages";

const LAYOUTS = {
  /** Five square tiles per row (school levels) */
  tiles: {
    // Mobile shows full rows of three only (Figma: 10 photos -> 9, 5 -> 3), so an incomplete last row (never the first) is hidden below lg
    list: "grid-cols-3 gap-x-[3.7vw] gap-y-[3.9vw] lg:grid-cols-5 lg:gap-[2.3cqw] lg:px-[4.8%] max-lg:[&>li:nth-child(3n+4):nth-last-child(-n+2)]:hidden max-lg:[&>li:nth-child(3n+4):nth-last-child(-n+2)~li]:hidden",
    tile: "rounded-[7.6%] lg:rounded-[12.5%]",
    sizes: "(min-width: 1024px) 20vw, 30vw",
  },
  /** Two framed landscape cards per row (JB College) */
  cards: {
    list: "grid-cols-2 gap-x-[3.2vw] gap-y-[3.1vw] lg:gap-x-[3.8cqw] lg:gap-y-[3.9cqw] lg:pr-[12.3%] lg:pl-[10.2%]",
    tile: "aspect-[458/334] rounded-[1.3vw] border-[0.83vw] border-neutral-200 shadow-md lg:aspect-[398/285] lg:rounded-[14px] lg:border-[9px]",
    sizes: "(min-width: 1024px) 40vw, 45vw",
  },
};

export function LevelActivities({
  activities,
  layout = "tiles",
}: {
  activities: LevelPageContent["activities"];
  layout?: keyof typeof LAYOUTS;
}) {
  const { list, tile, sizes } = LAYOUTS[layout];
  return (
    <section className="@container bg-white pt-[2.3vw] pb-[4.4vw] lg:pt-[3.7vw]" aria-labelledby="level-activities-title">
      <div className="px-[6.1vw] lg:px-0">
        <h2
          id="level-activities-title"
          className="text-center font-sans text-[max(17px,2.14vw)] leading-[1.4] font-bold tracking-[0.1em] lg:text-[1.85cqw] text-black"
        >
          ACTIVITIES
        </h2>

        <PhotoGallery
          photos={activities}
          label="Activity photos"
          listClassName={cn("mt-[2vw] grid lg:mt-[1.67cqw]", list)}
          tileClassName={tile}
          sizes={sizes}
        />
      </div>
    </section>
  );
}
