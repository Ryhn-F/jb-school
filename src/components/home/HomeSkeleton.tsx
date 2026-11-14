import { Skeleton } from "@/components/ui/skeleton";

export function HomeSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading Home">
      {/* Hero Skeleton */}
      <Skeleton className="w-full aspect-[1080/336] min-h-[200px] rounded-none" />

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

      {/* Video Tour Skeleton */}
      <section className="bg-white pt-10 pb-8 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-7 w-80 max-w-full rounded mx-auto" />
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Skeleton className="aspect-video w-full rounded-none" />
            <Skeleton className="aspect-video w-full rounded-none" />
          </div>
        </div>
      </section>

      {/* Stay Connected Skeleton */}
      <section className="bg-white pt-8 pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-7 w-56 rounded mx-auto" />
          <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="aspect-[210/315] w-full rounded-[20px]" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
