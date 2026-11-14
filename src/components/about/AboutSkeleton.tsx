import { Skeleton } from "@/components/ui/skeleton";

export function AboutSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading About Us">
      {/* AboutHero */}
      <Skeleton className="w-full aspect-[1080/336] min-h-[200px] rounded-none" />

      {/* OurHistory */}
      <section className="py-10 lg:pt-8 lg:pb-8">
        <div className="mx-auto max-w-7xl space-y-4 px-4 sm:px-6 lg:px-8">
          <Skeleton className="mx-auto h-7 w-48" />
          <Skeleton className="mx-auto h-6 w-3/4 max-w-2xl" />
          <Skeleton className="h-28 w-full" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[6%]">
            <Skeleton className="h-72 w-full" />
            <Skeleton className="h-72 w-full" />
          </div>
        </div>
      </section>

      {/* DirectorMessage */}
      <section className="bg-jb-sage/40 lg:min-h-[38.5vw] lg:flex">
        <Skeleton className="mx-auto aspect-[678/693] w-full max-w-sm rounded-none bg-white/40 lg:mx-0 lg:w-[37.5%] lg:max-w-none lg:aspect-auto" />
        <div className="flex-1 space-y-3 px-4 py-10 lg:pl-[3%] lg:pr-[4.3%]">
          <Skeleton className="mx-auto h-7 w-2/3 bg-white/40" />
          <Skeleton className="mx-auto h-6 w-1/2 bg-white/40" />
          <Skeleton className="h-48 w-full bg-white/40" />
        </div>
      </section>

      {/* VisionMission */}
      <section className="py-10 lg:py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-[8%] lg:px-8">
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </section>
    </div>
  );
}
