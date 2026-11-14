import Image from "next/image";
import { tokens } from "@/styles/tokens";

const { partners } = tokens.assets;

// Native sizes of the Figma "Home Assets" exports, in the header order Cambridge, HSK, YCT, Oxford AQA.
export const PARTNERS = [
  { src: partners.cambridge, alt: "Cambridge English Educational Partner", width: 969, height: 249 },
  { src: partners.hsk, alt: "HSK Chinese Proficiency Test", width: 547, height: 365 },
  { src: partners.yct, alt: "YCT Youth Chinese Test", width: 551, height: 362 },
  { src: partners.oxfordAqa, alt: "Oxford AQA International Qualifications", width: 738, height: 153 },
];

export function PartnerLogos() {
  return (
    <section className="py-10 sm:py-14 bg-white" aria-label="Educational Partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-black">
            PARTNERS :
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10">
            {PARTNERS.map((p) => (
              <Image
                key={p.src}
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="200px"
                className="h-9 w-auto object-contain sm:h-11"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
