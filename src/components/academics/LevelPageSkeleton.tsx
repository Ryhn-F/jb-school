import { Skeleton } from "@/components/ui/skeleton";

/** Mirrors LevelHero, LevelProfile, LevelCurriculum and LevelActivities (Figma 1080px frames) */
export function LevelPageSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <Skeleton className="aspect-[1080/335] min-h-[200px] w-full rounded-none" />

      <section className="relative bg-jb-blue/40 lg:min-h-[52vw]">
        <Skeleton className="aspect-[480/560] w-full rounded-none bg-white/50 sm:w-2/3 lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:w-[44.4%]" />
        <div className="space-y-4 px-4 py-10 sm:px-6 lg:pt-[4vw] lg:pr-[5.8%] lg:pl-[46%]">
          <Skeleton className="mx-auto h-7 w-48 bg-white/50" />
          <Skeleton className="h-[26vw] min-h-56 w-full bg-white/50" />
        </div>
      </section>

      <section className="space-y-4 px-4 pt-8 pb-10 sm:px-6 lg:px-[6.3%] lg:pt-[4.4vw]">
        <Skeleton className="mx-auto h-7 w-56" />
        <Skeleton className="h-[50vw] max-h-[900px] w-full" />
        <Skeleton className="mx-auto h-7 w-40" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:gap-[2.3vw]">
          {Array.from({ length: 10 }, (_, i) => (
            <Skeleton key={i} className="aspect-square w-full rounded-[12.5%]" />
          ))}
        </div>
      </section>
    </div>
  );
}
