import { Skeleton } from "@/components/ui/skeleton";

/** Mirrors AdmissionHero, ProcedureList and SchoolVisit (Figma 1080px frame) */
export function AdmissionSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading Admission">
      <Skeleton className="aspect-[1080/469] w-full rounded-none lg:aspect-[1080/335] lg:min-h-[200px]" />

      <section className="space-y-4 px-[5vw] pt-[3vw] pb-[4.9vw] lg:px-[5%] lg:pb-6">
        <Skeleton className="mx-auto h-5 w-28" />
        <Skeleton className="mx-auto h-9 w-56" />
        <Skeleton className="mx-auto h-5 w-3/4" />
        <Skeleton className="h-5 w-64" />
        <Skeleton className="h-36 w-full" />
        <Skeleton className="h-5 w-80" />
        <Skeleton className="h-48 w-full" />
      </section>

      <section className="pb-[3.8vw] lg:pb-[4vw]">
        <div className="relative grid grid-cols-[48.1%_51.9%] items-center lg:block">
          <div className="space-y-3 pt-[4.35vw] pr-[1.85vw] pl-[6.4vw] lg:absolute lg:top-[4.6vw] lg:left-[8.3%] lg:w-[39.9%] lg:p-0">
            <Skeleton className="mx-auto h-6 w-4/5 lg:h-8 lg:w-48" />
            <Skeleton className="h-48 w-full" />
          </div>
          <Skeleton className="aspect-[560/420] w-full rounded-none lg:mt-[3.4vw] lg:ml-auto lg:aspect-[579/419] lg:w-[53.6%]" />
        </div>
        <Skeleton className="mx-auto mt-[3.2vw] h-12 w-3/4 lg:mt-[3.3vw]" />
      </section>
    </div>
  );
}
