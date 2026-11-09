import { Skeleton } from "@/components/ui/skeleton";

export function AcademicsSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading Academics">
      {/* AcademicsHero */}
      <Skeleton className="w-full aspect-[810/275] min-h-[240px] rounded-none" />

      {/* AcademicLevelsGrid */}
      <section className="py-10 lg:pt-9 lg:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Skeleton className="mx-auto h-6 w-32" />
          <Skeleton className="mx-auto mt-3 h-8 w-3/4 max-w-xl" />
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-[4.7%] md:gap-y-10 lg:mt-12 lg:gap-y-16 xl:gap-y-[76px]">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="aspect-square w-full rounded-3xl" />
            ))}
          </div>
          <Skeleton className="mx-auto mt-12 h-14 w-full max-w-4xl lg:mt-16" />
        </div>
      </section>
    </div>
  );
}
