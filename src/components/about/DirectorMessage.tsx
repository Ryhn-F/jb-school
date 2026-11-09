import Image from "next/image";
import { tokens } from "@/styles/tokens";

const DIRECTOR_PARAGRAPHS = [
  "Welcome to Sekolah Jembatan Budaya (JB School).",
  "Since our establishment, JB School has proudly stood as a pioneer of National Plus education in Bali, driven by a profound commitment to bridging cultures and shaping future leaders.",
  "In today’s rapidly evolving world, education must go beyond the traditional classroom. At JB School, we recognize that true global competitiveness requires a strong foundation in both character and communication. By integrating an excellent national curriculum with intensive mastery of English and Mandarin, we strive to equip our students with the essential tools to thrive on the international stage.",
  "However, academic excellence is only one part of our mission. We are deeply dedicated to the holistic development of our students—nurturing their creativity, critical thinking, and emotional intelligence. Our passionate educators work tirelessly to create a safe, inclusive, and stimulating environment where every child is encouraged to discover their unique potential and build a lifelong love for learning.",
];

export function DirectorMessage() {
  return (
    <section
      className="relative w-full bg-jb-sage text-black lg:min-h-[38.5vw]"
      aria-labelledby="director-message-title"
    >
      {/* Moss blob + director cutout; on desktop the head overflows above the band like the Figma frame */}
      <div className="pointer-events-none relative mx-auto w-full max-w-sm aspect-[304/356] lg:absolute lg:left-0 lg:bottom-0 lg:h-[114.1%] lg:w-auto lg:max-w-none">
        <Image
          src={tokens.assets.images.aboutDirector}
          alt="Ms. Ayu Maharani, School Director of JB School"
          fill
          sizes="(min-width: 1024px) 38vw, 384px"
          className="object-contain object-bottom"
        />
      </div>

      <div className="px-4 py-10 sm:px-6 lg:min-h-[38.5vw] lg:pl-[40.6%] lg:pr-[4.3%] lg:py-[3.5vw]">
        <header className="text-center">
          <h2
            id="director-message-title"
            className="font-sans text-xl font-bold tracking-[0.1em] lg:text-2xl xl:text-[26px]"
          >
            MESSAGE FROM SCHOOL DIRECTOR
          </h2>
          <p className="mt-1 font-sans text-base tracking-[0.1em] lg:text-xl xl:text-[22px]">
            Ms. Ayu Maharani (江道云女士)
          </p>
        </header>

        <div className="mt-6 space-y-3 font-sans text-xs leading-[1.45] tracking-[0.1em] text-justify lg:mt-5 lg:text-sm xl:text-[15px]">
          {DIRECTOR_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
