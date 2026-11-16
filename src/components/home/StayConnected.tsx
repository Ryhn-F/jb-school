import Image from "next/image";
import { tokens } from "@/styles/tokens";
import { getLatestInstagramPosts } from "@/lib/instagram";

const INSTAGRAM_URL = "https://instagram.com/jbschool.bali";

const ACHIEVEMENT_ALTS = [
  "Congratulations post for I Made Bagus Juna Wira W., Grade 7",
  "Congratulations post for I Putu Gede Maheswa Putra, Grade 7",
  "Congratulations post for I Putu Oscar Januar Wicaksana S., Grade 9",
  "Congratulations post for I Gede Genji Surya Pradipta, Grade 8",
];

type Card = { key: string; src: string; href: string; alt: string; remote: boolean };

export async function StayConnected() {
  const posts = await getLatestInstagramPosts(4);

  // Static achievement posts stay as fallback when the API is unavailable.
  const cards: Card[] = posts.length
    ? posts.map((p) => ({
        key: p.id,
        src: p.media_type === "VIDEO" ? (p.thumbnail_url ?? p.media_url) : p.media_url,
        href: p.permalink,
        alt: p.caption?.split("\n")[0].slice(0, 120) || "JB School Instagram post",
        remote: true,
      }))
    : tokens.assets.home.achievements.map((src, i) => ({
        key: src,
        src,
        href: INSTAGRAM_URL,
        alt: ACHIEVEMENT_ALTS[i],
        remote: false,
      }));

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
          {cards.map((card) => (
            <a
              key={card.key}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${card.alt} — open on Instagram`}
              className="group relative block aspect-[210/315] overflow-hidden rounded-[20px] shadow-md transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jb-navy"
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(min-width: 768px) 210px, 45vw"
                // Instagram CDN hosts rotate and URLs are signed, so skip the optimizer for them.
                unoptimized={card.remote}
                className="object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
