import { Skeleton } from "@/components/ui/skeleton";

export function HomeSkeleton() {
  return (
    <div className="flex flex-col min-h-screen bg-white" aria-busy="true">
      {/* Hero Skeleton */}
      <section className="relative w-full aspect-[810/275] min-h-[240px] bg-neutral-100 flex items-center justify-end px-12">
        <div className="space-y-3 w-80">
          <Skeleton className="h-8 w-48 rounded ml-auto" />
          <Skeleton className="h-12 w-72 rounded ml-auto" />
          <Skeleton className="h-8 w-40 rounded ml-auto" />
        </div>
      </section>

      {/* Academics Skeleton */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="w-full lg:w-1/4 space-y-3">
              <Skeleton className="h-4 w-28 rounded" />
              <Skeleton className="h-10 w-48 rounded" />
              <Skeleton className="h-10 w-48 rounded" />
            </div>
            <div className="w-full lg:w-3/4 flex gap-4">
              <Skeleton className="w-64 h-72 rounded-2xl flex-shrink-0" />
              <Skeleton className="w-44 h-72 rounded-2xl flex-shrink-0" />
              <Skeleton className="w-44 h-72 rounded-2xl flex-shrink-0" />
              <Skeleton className="w-44 h-72 rounded-2xl flex-shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Banner Skeleton */}
      <section className="bg-jb-blue/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Skeleton className="h-10 w-64 rounded bg-white/40" />
              <Skeleton className="h-10 w-48 rounded bg-white/40" />
              <Skeleton className="h-16 w-full rounded bg-white/30" />
            </div>
            <Skeleton className="h-64 w-full rounded-2xl bg-white/30" />
          </div>
        </div>
      </section>

      {/* Stats Skeleton */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                <Skeleton className="w-28 sm:w-32 lg:w-44 xl:w-52 aspect-[122/111] rounded-full" />
                <Skeleton className="h-8 w-24 rounded" />
                <Skeleton className="h-4 w-32 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Skeleton */}
      <section className="bg-jb-coral/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Skeleton className="h-64 w-full rounded-2xl bg-white/40" />
            <div className="space-y-4">
              <Skeleton className="h-6 w-32 rounded bg-white/40" />
              <Skeleton className="h-10 w-3/4 rounded bg-white/40" />
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Skeleton className="h-10 rounded-full bg-white/40" />
                <Skeleton className="h-10 rounded-full bg-white/40" />
                <Skeleton className="h-10 rounded-full bg-white/40" />
                <Skeleton className="h-10 rounded-full bg-white/40" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
