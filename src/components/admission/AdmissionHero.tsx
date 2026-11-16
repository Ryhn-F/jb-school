import { tokens } from "@/styles/tokens";
import { HeroCarousel, type HeroSlide } from "@/components/shared/HeroCarousel";

// shortcut: slides 2-3 are placeholders, swap `src: null` for real photos once they exist.
const ADMISSION_SLIDES: HeroSlide[] = [
  { src: tokens.assets.admission.hero, alt: "JB School student practising Chinese calligraphy" },
  { src: null, alt: "Slide 2", placeholderClassName: "bg-jb-blue" },
  { src: null, alt: "Slide 3", placeholderClassName: "bg-jb-sage" },
];

export function AdmissionHero() {
  return (
    // Figma: 1080 x 335 banner
    <section
      className="relative aspect-[1080/335] min-h-[200px] w-full overflow-hidden bg-neutral-100"
      aria-label="JB School admission"
    >
      <h1 className="sr-only">Admission</h1>
      <HeroCarousel slides={ADMISSION_SLIDES} />
      {/* Figma: white fade over the right edge of the banner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-l from-white/85 to-transparent to-45%"
      />
    </section>
  );
}
