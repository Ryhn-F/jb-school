import { PhotoGallery } from "@/components/shared/PhotoGallery";
import { cn } from "@/lib/utils";
import type { LevelPageContent } from "@/lib/level-pages";

const LAYOUTS = {
  /** Five square tiles per row (school levels) */
  tiles: {
    list: "grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:gap-[2.3cqw] lg:px-[4.8%]",
    tile: "rounded-[12.5%]",
    sizes: "(min-width: 768px) 20vw, (min-width: 640px) 33vw, 50vw",
  },
  /** Two framed landscape cards per row (JB College) */
  cards: {
    list: "grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-x-[3.8cqw] lg:gap-y-[3.9cqw] lg:pr-[12.3%] lg:pl-[10.2%]",
    tile: "aspect-[398/285] rounded-[14px] border-[9px] border-neutral-200 shadow-md",
    sizes: "(min-width: 640px) 40vw, 100vw",
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
    <section className="@container bg-white pt-8 pb-10 lg:pt-[3.7vw] lg:pb-[4.4vw]" aria-labelledby="level-activities-title">
      <div className="px-4 sm:px-6 lg:px-0">
        <h2
          id="level-activities-title"
          className="text-center font-sans text-xl font-bold tracking-[0.1em] text-black lg:text-[1.85cqw]"
        >
          ACTIVITIES
        </h2>

        <PhotoGallery
          photos={activities}
          label="Activity photos"
          listClassName={cn("mt-6 grid lg:mt-[1.67cqw]", list)}
          tileClassName={tile}
          sizes={sizes}
        />
      </div>
    </section>
  );
}
