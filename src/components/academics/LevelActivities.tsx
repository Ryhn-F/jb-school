import { PhotoGallery } from "@/components/shared/PhotoGallery";
import type { LevelPageContent } from "@/lib/level-pages";

export function LevelActivities({
  activities,
}: {
  activities: LevelPageContent["activities"];
}) {
  return (
    <section className="bg-white pt-8 pb-6 lg:pt-6" aria-labelledby="level-activities-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="level-activities-title"
          className="text-center font-sans text-xl font-bold tracking-[0.09em] text-black lg:text-2xl xl:text-[28px]"
        >
          ACTIVITIES
        </h2>

        <PhotoGallery
          photos={activities}
          label="Activity photos"
          listClassName="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:mt-8 lg:gap-x-8 lg:gap-y-7"
          tileClassName="rounded-[13%]"
          sizes="(min-width: 768px) 20vw, (min-width: 640px) 33vw, 50vw"
        />
      </div>
    </section>
  );
}
