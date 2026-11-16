import { Skeleton } from "@/components/ui/skeleton";

/** Mirrors AdmissionHero, ProcedureList and SchoolVisit (Figma 1080px frame) */
export function AdmissionSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading Admission">
      <Skeleton className="aspect-[1080/335] min-h-[200px] w-full rounded-none" />

      <section className="space-y-4 px-4 pt-8 pb-6 sm:px-6 lg:px-[5%] lg:pt-[3vw]">
        <Skeleton className="mx-auto h-5 w-28" />
        <Skeleton className="mx-auto h-9 w-56" />
        <Skeleton className="mx-auto h-5 w-3/4" />
        <Skeleton className="h-5 w-64" />
        <Skeleton className="h-36 w-full" />
        <Skeleton className="h-5 w-80" />
        <Skeleton className="h-48 w-full" />
      </section>

      <section className="pb-10 lg:pb-[4vw]">
        <div className="relative flex flex-col lg:block">
          <div className="order-2 space-y-3 px-4 pt-6 sm:px-6 lg:absolute lg:top-[4.6vw] lg:left-[8.3%] lg:w-[39.9%] lg:p-0">
            <Skeleton className="mx-auto h-8 w-48" />
            <Skeleton className="h-48 w-full" />
          </div>
          <Skeleton className="order-1 aspect-[579/419] w-full rounded-none lg:mt-[3.4vw] lg:ml-auto lg:w-[53.6%]" />
        </div>
        <Skeleton className="mx-auto mt-8 h-12 w-3/4 lg:mt-[3.3vw]" />
      </section>
    </div>
  );
}
