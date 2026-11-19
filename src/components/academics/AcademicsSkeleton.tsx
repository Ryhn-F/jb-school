import { Skeleton } from "@/components/ui/skeleton";

export function AcademicsSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading Academics">
      {/* AcademicsHero */}
      <Skeleton className="w-full aspect-[1080/470] rounded-none border-b border-neutral-200 lg:aspect-[810/275] lg:min-h-[240px] lg:border-b-0" />

      {/* AcademicLevelsGrid */}
      <section className="pt-[3.2vw] pb-[2.5vw] lg:pt-9 lg:pb-12">
        <div className="mx-auto max-w-7xl px-[6vw] lg:px-8">
          <Skeleton className="mx-auto h-[3.4vw] w-[14.5vw] lg:h-6 lg:w-32" />
          <Skeleton className="mx-auto mt-[1vw] h-[5.16vw] w-[85%] max-w-xl lg:mt-3 lg:h-8 lg:w-3/4" />
          <div className="mt-[3.1vw] grid grid-cols-2 gap-x-[3.9vw] gap-y-[4.1vw] lg:mt-12 lg:gap-x-[4.7%] lg:gap-y-16 xl:gap-y-[76px]">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="aspect-square w-full rounded-[2vw] lg:rounded-3xl" />
            ))}
          </div>
          <Skeleton className="mx-auto mt-[4vw] h-[5vw] w-full max-w-4xl lg:mt-16 lg:h-14" />
        </div>
      </section>
    </div>
  );
}
