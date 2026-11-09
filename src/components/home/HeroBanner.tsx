import Image from "next/image";
import { tokens } from "@/styles/tokens";

export function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-100 aspect-[16/7] min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]">
      {/* Background Campus Aerial Photo */}
      <Image
        src={tokens.assets.images.heroCampus}
        alt="JB School Bali Campus"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Subtle overlay gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-l from-white/80 via-white/40 to-transparent"></div>

      {/* Content overlay on the right */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-14 flex flex-col justify-center items-end text-right">
        <div className="space-y-1 sm:space-y-2 max-w-xl">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 font-sans">
            WELCOME TO
          </h2>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 font-sans">
            JB SCHOOL, BALI
          </h1>
          <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-wider pt-1">
            文桥三语学校
          </p>
        </div>
      </div>

      {/* Carousel dots indicator at bottom center */}
      <div className="absolute bottom-5 inset-x-0 z-20 flex justify-center items-center gap-2.5">
        <span className="w-3 h-3 rounded-full bg-white shadow-md"></span>
        <span className="w-3 h-3 rounded-full border-2 border-white bg-transparent shadow-md"></span>
        <span className="w-3 h-3 rounded-full border-2 border-white bg-transparent shadow-md"></span>
      </div>
    </section>
  );
}
