import { tokens } from "@/styles/tokens";
import { HeroCarousel, type HeroSlide } from "@/components/shared/HeroCarousel";

// shortcut: slides 2-3 are placeholders, swap `src: null` for real photos once they exist.
const ABOUT_SLIDES: HeroSlide[] = [
  { src: tokens.assets.images.aboutHero, alt: "JB School founder Mr. Putu Kangen Disastra in front of the campus building" },
  { src: null, alt: "Slide 2", placeholderClassName: "bg-jb-blue" },
  { src: null, alt: "Slide 3", placeholderClassName: "bg-jb-sage" },
];

export function AboutHero() {
  return (
    // Figma: 1080 x 336 banner
    <section
      className="relative w-full overflow-hidden bg-neutral-100 aspect-[1080/336] min-h-[200px]"
      aria-label="About JB School"
    >
      <h1 className="sr-only">About Us</h1>
      <HeroCarousel slides={ABOUT_SLIDES} />
    </section>
  );
}
