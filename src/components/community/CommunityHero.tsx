import Image from "next/image";
import { tokens } from "@/styles/tokens";

export function CommunityHero() {
  return (
    // Figma: 1080 x 335 desktop banner, 1080 x 469 mobile crop
    <section
      className="relative aspect-[1080/469] w-full lg:aspect-[1080/335] lg:min-h-[200px] overflow-hidden bg-neutral-100"
      aria-label="JB School community"
    >
      <h1 className="sr-only">Community</h1>
      <Image
        src={tokens.assets.community.banner}
        alt="JB School alumni at the inauguration of the Sekolah Jembatan Budaya Alumni Association"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
