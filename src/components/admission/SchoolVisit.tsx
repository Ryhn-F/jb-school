import Image from "next/image";
import { tokens } from "@/styles/tokens";

export function SchoolVisit() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white lg:aspect-[810/318]"
      aria-labelledby="school-visit-title"
    >
      {/* Mobile: plain photo above the text */}
      <div className="relative aspect-[810/318] w-full lg:hidden">
        <Image
          src={tokens.assets.admission.schoolVisitPhoto}
          alt="JB School building with the Jembatan Budaya emblem"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Desktop: Figma composite with the white wave blob on the left that holds the text */}
      <Image
        src={tokens.assets.admission.schoolVisit}
        alt="JB School building with the Jembatan Budaya emblem"
        fill
        sizes="100vw"
        className="hidden object-cover lg:block"
      />

      {/* Figma: text column x 50–375 of 810, title top at 10.7% */}
      <div className="relative px-4 py-8 text-black sm:px-6 lg:absolute lg:inset-y-0 lg:left-[6.2%] lg:w-[40.1%] lg:px-0 lg:pt-[3.1vw] lg:pb-0">
        <h2
          id="school-visit-title"
          className="text-center font-sans text-2xl font-bold tracking-[0.09em] lg:text-3xl xl:text-[39px]"
        >
          SCHOOL VISIT
        </h2>
        <div className="mt-4 font-sans text-sm leading-[1.4] tracking-[0.095em] lg:mt-[1.6vw] lg:text-justify lg:text-base xl:text-[22px]">
          <p>
            &ldquo;Discover our vibrant learning environment firsthand. We invite
            you to explore our campus and meet our dedicated team, who will
            guide you on an exclusive tour and share comprehensive insights
            into our educational approach.
          </p>
          <p>
            To arrange your visit, kindly contact us via phone at +62 361 –
            752554 / 752776, whatsapp at 081138816881 or email{" "}
            <a href="mailto:info@jbschool-bali.com" className="whitespace-nowrap hover:text-jb-navy">
              info@jbschool-bali.com
            </a>
            &rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
