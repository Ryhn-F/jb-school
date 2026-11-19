import { Skeleton } from "@/components/ui/skeleton";

export function AboutSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading About Us">
      {/* AboutHero */}
      <Skeleton className="w-full aspect-[1080/469] rounded-none lg:aspect-[1080/336] lg:min-h-[200px]" />

      {/* OurHistory */}
      <section className="py-[3.2vw] lg:pt-8 lg:pb-8">
        <div className="mx-auto max-w-7xl space-y-4 px-[4.4vw] lg:px-8">
          <Skeleton className="mx-auto h-7 w-48" />
          <Skeleton className="mx-auto h-6 w-3/4 max-w-2xl" />
          <Skeleton className="h-28 w-full" />
          <div className="grid grid-cols-2 gap-[3.3vw] lg:gap-[6%]">
            <Skeleton className="h-72 w-full" />
            <Skeleton className="h-72 w-full" />
          </div>
        </div>
      </section>

      {/* ChairmanMessage (mobile only) */}
      <section className="overflow-hidden px-[4.3vw] pb-[3.2vw] lg:hidden">
        <Skeleton className="float-right -mr-[4.3vw] ml-[6.5vw] mt-[21.5vw] h-[68vw] w-[38.5vw] rounded-none rounded-l-full" />
        <div className="w-[51vw] space-y-3">
          <Skeleton className="mx-auto h-12 w-5/6" />
          <Skeleton className="mx-auto h-5 w-1/2" />
          <Skeleton className="h-[60vw] w-full" />
        </div>
        <Skeleton className="clear-both mt-3 h-[140vw] w-full" />
      </section>

      {/* DirectorMessage */}
      <section className="flex min-h-[73.3vw] bg-jb-sage/40 lg:min-h-[38.5vw]">
        <Skeleton className="aspect-[470/791] w-[43.5vw] shrink-0 self-end rounded-none bg-white/40 lg:self-auto lg:w-[37.5%] lg:aspect-auto" />
        <div className="flex-1 space-y-3 pl-[3vw] pr-[4.9vw] pt-[5.2vw] pb-[6.7vw] lg:py-10 lg:pl-[3%] lg:pr-[4.3%]">
          <Skeleton className="mx-auto h-7 w-2/3 bg-white/40" />
          <Skeleton className="mx-auto h-6 w-1/2 bg-white/40" />
          <Skeleton className="h-48 w-full bg-white/40" />
        </div>
      </section>

      {/* VisionMission */}
      <section className="pt-[5vw] pb-[4.9vw] lg:py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-[3.2vw] px-[4.6vw] lg:gap-[8%] lg:px-8">
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </section>
    </div>
  );
}
