import { Skeleton } from "@/components/ui/skeleton";

/** Mirrors LevelHero, LevelProfile, LevelCurriculum and LevelActivities (Figma 1080px frames) */
export function LevelPageSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <Skeleton className="aspect-[1080/469] w-full rounded-none lg:aspect-[1080/335] lg:min-h-[200px]" />

      <section className="relative overflow-hidden bg-jb-blue/40 lg:min-h-[52vw]">
        <Skeleton className="float-left mr-[3.3vw] aspect-[480/560] w-[49.5%] rounded-none bg-white/50 lg:absolute lg:inset-y-0 lg:left-0 lg:float-none lg:mr-0 lg:aspect-auto lg:w-[44.4%]" />
        <div className="space-y-[1vw] overflow-hidden pr-[6.2vw] pt-[3.4vw] pb-[4.4vw] lg:space-y-4 lg:pt-[4vw] lg:pr-[5.8%] lg:pb-10 lg:pl-[46%] lg:overflow-visible">
          <Skeleton className="mx-auto h-[max(24px,3vw)] w-[30vw] bg-white/50 lg:h-7 lg:w-48" />
          <Skeleton className="h-[60vw] w-full bg-white/50 lg:h-[26vw] lg:min-h-56" />
        </div>
      </section>

      <section className="space-y-[2vw] px-[6.4vw] pt-[4.4vw] pb-[4.4vw] lg:space-y-4 lg:px-[6.3%] lg:pb-10">
        <Skeleton className="mx-auto h-[max(24px,3vw)] w-[40vw] lg:h-7 lg:w-56" />
        <Skeleton className="h-[90vw] w-full lg:h-[50vw] lg:max-h-[900px]" />
        <Skeleton className="mx-auto h-[max(24px,3vw)] w-[28vw] lg:h-7 lg:w-40" />
        <div className="grid grid-cols-3 gap-x-[3.7vw] gap-y-[3.9vw] lg:grid-cols-5 lg:gap-[2.3vw]">
          {Array.from({ length: 10 }, (_, i) => (
            <Skeleton key={i} className="aspect-square w-full rounded-[7.6%] max-lg:last:hidden lg:rounded-[12.5%]" />
          ))}
        </div>
      </section>
    </div>
  );
}
