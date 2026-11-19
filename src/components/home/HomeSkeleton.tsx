import { Skeleton } from "@/components/ui/skeleton";

// Base classes mirror the 1080px mobile Figma frame in vw; lg: classes keep the desktop layout.
export function HomeSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading Home">
      {/* Hero Skeleton */}
      <Skeleton className="w-full aspect-[1080/470] lg:aspect-[1080/336] lg:min-h-[200px] rounded-none" />

      {/* Academics Skeleton */}
      <section className="pt-[4.5vw] pb-[3.1vw] lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-[6.1vw] lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[3vw] lg:gap-8">
            <div className="w-full lg:w-1/4 space-y-[0.9vw] lg:space-y-3">
              <Skeleton className="mx-auto lg:mx-0 h-[max(14px,3vw)] w-[15vw] lg:h-4 lg:w-28 rounded" />
              <Skeleton className="mx-auto lg:mx-0 h-[max(17px,4.1vw)] w-[80vw] lg:h-10 lg:w-48 rounded" />
              <Skeleton className="hidden lg:block h-10 w-48 rounded" />
            </div>
            <div className="grid w-full grid-cols-2 gap-[4.2vw] lg:hidden">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-[max(41.8vw,185px)] w-full rounded-[1.9vw]" />
              ))}
            </div>
            <div className="hidden w-full lg:w-3/4 lg:flex gap-4">
              <Skeleton className="w-64 h-72 rounded-2xl flex-shrink-0" />
              <Skeleton className="w-44 h-72 rounded-2xl flex-shrink-0" />
              <Skeleton className="w-44 h-72 rounded-2xl flex-shrink-0" />
              <Skeleton className="w-44 h-72 rounded-2xl flex-shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Banner Skeleton */}
      <section className="relative bg-jb-blue/40 lg:py-12">
        <div className="max-w-7xl mx-auto px-[6.1vw] lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[35.3vw] lg:min-h-0">
            <div className="w-[52vw] lg:w-auto py-[2.6vw] lg:py-0 space-y-[1.7vw] lg:space-y-4">
              <Skeleton className="h-[max(15px,4.2vw)] w-[40vw] lg:h-10 lg:w-64 rounded bg-white/40" />
              <Skeleton className="h-[max(15px,4.2vw)] w-[30vw] lg:h-10 lg:w-48 rounded bg-white/40" />
              <Skeleton className="h-[max(15px,4.2vw)] w-[25vw] lg:hidden rounded bg-white/40" />
              {/* 13px body floor: ~7 lines on phones, ~4 at tablet width */}
              <Skeleton className="h-[clamp(73px,calc(200px-17vw),131px)] w-full lg:h-16 rounded bg-white/30" />
            </div>
            <Skeleton className="absolute bottom-0 left-[59.5vw] w-[35vw] h-[37.9vw] lg:static lg:h-64 lg:w-full rounded-2xl bg-white/30" />
          </div>
        </div>
      </section>

      {/* Stats Skeleton */}
      <section className="pt-[4.4vw] pb-[4.9vw] lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-[4.5vw] lg:px-8">
          <div className="grid grid-cols-4 gap-[1vw] lg:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center space-y-[1.2vw] lg:space-y-3">
                <Skeleton className="w-[18.5vw] lg:w-44 xl:w-52 aspect-[122/111] rounded-full" />
                <Skeleton className="h-[max(20px,5vw)] w-[15vw] lg:h-8 lg:w-24 rounded" />
                <Skeleton className="h-[max(27px,5.7vw)] w-[18vw] lg:h-4 lg:w-32 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Skeleton */}
      <section className="relative bg-jb-coral/40 py-[3.5vw] lg:py-12">
        <div className="max-w-7xl mx-auto pl-[55vw] pr-[2.5vw] lg:pl-8 lg:pr-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[36.7vw] lg:min-h-0">
            {/* Mobile: full-height brick panel on the left 51.9vw, like the real callout */}
            <Skeleton className="absolute inset-y-0 left-0 w-[51.9vw] rounded-none lg:static lg:h-64 lg:w-full lg:rounded-2xl bg-white/40" />
            <div className="space-y-[2vw] lg:space-y-4">
              <Skeleton className="h-[max(14px,2.8vw)] lg:h-6 w-32 max-w-full rounded bg-white/40" />
              <Skeleton className="h-[max(64px,11vw)] lg:h-10 w-3/4 rounded bg-white/40" />
              <div className="grid max-w-[max(34vw,10rem)] grid-cols-1 lg:max-w-none lg:grid-cols-2 gap-[1.8vw] lg:gap-3 lg:pt-2">
                <Skeleton className="h-[max(24px,3.8vw)] lg:h-10 rounded-full bg-white/40" />
                <Skeleton className="h-[max(24px,3.8vw)] lg:h-10 rounded-full bg-white/40" />
                <Skeleton className="h-[max(24px,3.8vw)] lg:h-10 rounded-full bg-white/40" />
                <Skeleton className="h-[max(24px,3.8vw)] lg:h-10 rounded-full bg-white/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tour Skeleton */}
      <section className="bg-white pt-[3.5vw] pb-[2.8vw] lg:pt-12 lg:pb-8">
        <div className="max-w-7xl mx-auto px-[7.2vw] lg:px-8">
          <Skeleton className="h-[max(17px,3.7vw)] w-[66vw] lg:h-7 lg:w-80 max-w-full rounded mx-auto" />
          <div className="mt-[2.3vw] lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-[2.3vw] lg:gap-5">
            <Skeleton className="aspect-video w-full rounded-none" />
            <Skeleton className="aspect-video w-full rounded-none" />
          </div>
        </div>
      </section>

      {/* Stay Connected Skeleton */}
      <section className="bg-white pt-[2.8vw] pb-[8.5vw] lg:pt-8 lg:pb-20">
        <div className="max-w-5xl mx-auto px-[6.4vw] lg:px-8">
          <Skeleton className="h-[max(17px,3vw)] w-[26vw] lg:h-7 lg:w-56 rounded mx-auto" />
          <div className="mt-[2.6vw] lg:mt-12 grid grid-cols-4 gap-[1vw] lg:gap-7">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="aspect-[210/312] w-full rounded-[9.5%/6.4%] lg:aspect-[210/315] lg:rounded-[20px]" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
