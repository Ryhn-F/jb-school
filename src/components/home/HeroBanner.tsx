import { tokens } from "@/styles/tokens";
import { HeroCarousel, type HeroSlide } from "@/components/home/HeroCarousel";

// shortcut: slides 2-3 are placeholders, swap `src: null` for real photos once they exist.
const HERO_SLIDES: HeroSlide[] = [
  { src: tokens.assets.images.heroCampus, alt: "JB School Bali Campus" },
  { src: null, alt: "Slide 2", placeholderClassName: "bg-jb-blue" },
  { src: null, alt: "Slide 3", placeholderClassName: "bg-jb-sage" },
];

export function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-100 aspect-[16/7] min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]">
      <HeroCarousel slides={HERO_SLIDES} />

      {/* pointer-events-none lets swipes on the overlay reach the carousel */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white/80 via-white/40 to-transparent"></div>

      {/* Content overlay on the right */}
      <div className="pointer-events-none relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-14 flex flex-col justify-center items-end text-right">
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
    </section>
  );
}
