import Image from "next/image";
import { tokens } from "@/styles/tokens";

const INSTAGRAM_URL = "https://instagram.com/jbschool.bali";

const ACHIEVEMENT_ALTS = [
  "Congratulations post for I Made Bagus Juna Wira W., Grade 7",
  "Congratulations post for I Putu Gede Maheswa Putra, Grade 7",
  "Congratulations post for I Putu Oscar Januar Wicaksana S., Grade 9",
  "Congratulations post for I Gede Genji Surya Pradipta, Grade 8",
];

export function StayConnected() {
  return (
    <section className="bg-white pt-8 pb-16 sm:pb-20" aria-labelledby="stay-connected-title">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2
          id="stay-connected-title"
          className="text-center font-sans text-xl font-bold text-neutral-950 sm:text-2xl"
        >
          Stay Connected with Us
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-5 sm:mt-12 md:grid-cols-4 md:gap-7">
          {tokens.assets.home.achievements.map((src, i) => (
            <a
              key={src}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label={`${ACHIEVEMENT_ALTS[i]} — open JB School on Instagram`}
              className="group relative block aspect-[210/315] overflow-hidden rounded-[20px] shadow-md transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jb-navy"
            >
              <Image
                src={src}
                alt={ACHIEVEMENT_ALTS[i]}
                fill
                sizes="(min-width: 768px) 210px, 45vw"
                className="object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
