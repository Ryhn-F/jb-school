import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { tokens } from "@/styles/tokens";

const INSTAGRAM_URL = "https://instagram.com/jbschool.bali";

// Alt text for each Figma post, in grid order (row by row).
const POST_ALTS = [
  "Congratulations post: SMA Jembatan Budaya boys' basketball team, DCBC Students 2026",
  "Congratulations post: Callysta Gavrila Salim, Grade TK, 3rd place colouring competition",
  "Let's Learn Mandarin post",
  "Congratulations post: Kadek Ayu Alisha Vrinda B., Grade 5, 2nd place 3x3 LIGABALI",
  "Congratulations post: I Made Bagus Juna Wira W., Grade 7, 1st place IFC U14",
  "Congratulations post: I Putu Gede Maheswa Putra, Grade 7, 1st place Omni Local Competition",
  "Congratulations post: I Putu Oscar Januar Wicaksana S., Grade 9, 1st place International Football Championship",
  "Congratulations post: I Gede Genji Surya Pradipta, Grade 8, 1st place Bupati Badung Cup 2026",
  "JB School student video post",
  "Congratulations post: Noeh Mikail Alyando Berdouk, Grade 7, 3rd place Piala Bela Negara",
  "Congratulations post: Leica Nisrina Fauzi, Grade 9, Harapan 1 Perfect Tone Competition",
  "Congratulations post: Kayleen Renata, Grade 9, 2nd place Merdeka Science Olimpiade",
];

export function NewsGrid() {
  return (
    <section className="bg-white py-10 lg:pt-8 lg:pb-14" aria-labelledby="news-activities-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="news-activities-title"
          className="text-center font-sans text-xl font-bold tracking-[0.09em] text-black lg:text-3xl xl:text-[39px]"
        >
          NEWS &amp; ACTIVITIES
        </h2>

        {/* Figma: 158x237 posts, 4 per row, ~19px column / 22px row gaps on an 810 frame */}
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-12 lg:grid-cols-4 lg:gap-x-[2.8%] lg:gap-y-10">
          {tokens.assets.news.posts.map((src, i) => (
            <li
              key={src}
              className="relative aspect-[158/237] overflow-hidden rounded-[7.6%/5.1%] shadow-md"
            >
              <Image
                src={src}
                alt={POST_ALTS[i]}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center lg:mt-16">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-md bg-linear-to-b from-jb-ocean-light to-jb-ocean px-6 py-3 font-sans text-sm text-white shadow-sm transition hover:brightness-110 active:scale-95 lg:px-9 lg:py-4 lg:text-lg"
          >
            <FaInstagram aria-hidden="true" className="h-5 w-5 lg:h-6 lg:w-6" />
            Follow on instagram
          </a>
        </div>
      </div>
    </section>
  );
}
