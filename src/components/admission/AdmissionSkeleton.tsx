import { Skeleton } from "@/components/ui/skeleton";

export function AdmissionSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading Admission">
      {/* TitleHero */}
      <Skeleton className="w-full aspect-[810/275] min-h-[240px] rounded-none" />

      {/* ProcedureList */}
      <section className="py-10 lg:pt-8 lg:pb-12">
        <div className="mx-auto max-w-7xl space-y-4 px-4 sm:px-6 lg:px-8">
          <Skeleton className="mx-auto h-6 w-32" />
          <Skeleton className="mx-auto h-10 w-64" />
          <Skeleton className="mx-auto h-6 w-3/4" />
          <Skeleton className="h-6 w-64" />
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-6 w-80" />
          <Skeleton className="h-56 w-full" />
          <Skeleton className="mx-auto h-16 w-3/4" />
        </div>
      </section>

      {/* SchoolVisit */}
      <section className="lg:aspect-[810/318]">
        <Skeleton className="aspect-[810/318] w-full rounded-none lg:aspect-auto lg:h-full" />
      </section>
    </div>
  );
}
