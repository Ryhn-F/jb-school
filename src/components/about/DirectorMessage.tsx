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
      className="relative w-full border-b border-jb-sage-light bg-jb-sage text-black min-h-[73.3vw] lg:border-b-0 lg:min-h-[38.5vw]"
      aria-labelledby="director-message-title"
    >
      {/* Figma "Director" group export (moss blob + cutout, 678 x 693), pinned bottom-left of the band.
          Mobile frame crops it to a 470 x 791 column on the left. */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[43.5vw] aspect-[470/791] lg:h-full lg:w-auto lg:aspect-[678/693]">
        <Image
          src={tokens.assets.images.aboutDirector}
          alt="Ms. Ayu Maharani, School Director of JB School"
          fill
          sizes="(min-width: 1024px) 38vw, 44vw"
          className="object-cover object-[45%_100%] lg:object-contain lg:object-left-bottom"
        />
      </div>

      <div className="relative pl-[46.5vw] pr-[4.9vw] pt-[5.2vw] pb-[6.7vw] lg:min-h-[38.5vw] lg:pl-[40.6%] lg:pr-[4.3%] lg:py-[3.5vw]">
        <header className="text-center">
          <h2
            id="director-message-title"
            className="font-sans text-[max(15px,2.27vw)] font-bold tracking-[0.08em] lg:tracking-[0.1em] lg:text-2xl xl:text-[26px]"
          >
            MESSAGE FROM SCHOOL DIRECTOR
          </h2>
          <p className="mt-[1vw] font-sans text-[max(13px,1.8vw)] tracking-[0.1em] lg:mt-1 lg:text-xl xl:text-[22px]">
            Ms. Ayu Maharani <span className="whitespace-nowrap">(江道云女士)</span>
          </p>
        </header>

        <div className="mt-[1.6vw] space-y-[2.2vw] font-sans text-[max(13px,1.57vw)] leading-[1.42] tracking-[0.1em] text-left sm:text-justify hyphens-auto lg:mt-5 lg:hyphens-manual lg:space-y-3 lg:leading-[1.45] lg:text-sm xl:text-[15px]">
          {DIRECTOR_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
