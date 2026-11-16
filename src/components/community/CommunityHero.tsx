import Image from "next/image";
import { tokens } from "@/styles/tokens";

export function CommunityHero() {
  return (
    // Figma: 1080 x 335 banner, single photo
    <section
      className="relative aspect-[1080/335] min-h-[200px] w-full overflow-hidden bg-neutral-100"
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
