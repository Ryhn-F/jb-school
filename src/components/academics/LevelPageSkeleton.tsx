import { Skeleton } from "@/components/ui/skeleton";

export function LevelPageSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading">
      {/* LevelHero */}
      <Skeleton className="w-full aspect-[810/275] min-h-[240px] rounded-none" />

      {/* LevelProfile */}
      <section className="bg-jb-blue/40 lg:flex lg:min-h-[54.8vw]">
        <Skeleton className="aspect-[355/444] w-full rounded-none bg-white/50 sm:w-2/3 lg:aspect-auto lg:w-[43.8%]" />
        <div className="flex-1 space-y-4 px-4 py-10 sm:px-6 lg:pl-[3.7%] lg:pr-[4.7%] lg:pt-[3.8vw]">
          <Skeleton className="mx-auto h-8 w-48 bg-white/50" />
          <Skeleton className="h-56 w-full bg-white/50" />
          <div className="grid grid-cols-2 gap-x-[8%] gap-y-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-24 w-full bg-white/50" />
            ))}
          </div>
        </div>
      </section>

      {/* LevelCurriculum + LevelActivities */}
      <section className="pt-8 pb-6 lg:pt-6">
        <div className="mx-auto max-w-7xl space-y-4 px-4 sm:px-6 lg:px-8">
          <Skeleton className="mx-auto h-8 w-56" />
          <Skeleton className="h-36 w-full" />
          <Skeleton className="mx-auto h-8 w-40" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:gap-x-8 lg:gap-y-7">
            {Array.from({ length: 10 }, (_, i) => (
              <Skeleton key={i} className="aspect-square w-full rounded-[13%]" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
