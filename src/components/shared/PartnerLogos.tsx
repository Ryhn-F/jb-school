import Image from "next/image";
import { tokens } from "@/styles/tokens";

export function PartnerLogos() {
  return (
    <section className="py-10 sm:py-14 bg-white" aria-label="Educational Partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-black">
            PARTNERS :
          </div>
          <div className="relative w-full max-w-lg sm:max-w-xl h-10 sm:h-12 flex items-center justify-center">
            <Image
              src={tokens.assets.partners.all}
              alt="Cambridge, HSK, YCT, Oxford AQA"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
