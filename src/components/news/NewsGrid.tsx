import { FaInstagram } from "react-icons/fa6";
import { getLatestInstagramPosts } from "@/lib/instagram";
import { InstagramPostCard } from "@/components/shared/InstagramPostCard";
import { InstagramFetchError } from "@/components/shared/InstagramFetchError";

const INSTAGRAM_URL = "https://instagram.com/jbschool.bali";

/** News & Achievement: latest 12 Instagram posts (Figma 210 x 312 cards, 4 per row on a 1080px frame) */
export async function NewsGrid() {
  const posts = await getLatestInstagramPosts(12);

  return (
    <section
      className="@container bg-white pt-8 pb-12 font-sans lg:pt-[2cqw] lg:pb-[5.6cqw]"
      aria-labelledby="news-achievement-title"
    >
      <div className="px-4 sm:px-6 lg:px-[7.4%]">
        <h2
          id="news-achievement-title"
          className="text-center text-xl font-bold tracking-[0.1em] text-black lg:text-[2.6cqw]"
        >
          NEWS &amp; ACHIEVEMENT
        </h2>

        {posts ? (
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-[2.9cqw] lg:grid-cols-4 lg:gap-x-[2.5cqw] lg:gap-y-[2.3cqw]">
            {posts.map((post) => (
              <li key={post.id}>
                <InstagramPostCard
                  post={post}
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                />
              </li>
            ))}
          </ul>
        ) : (
          <InstagramFetchError className="mt-6 lg:mt-[2.9cqw]" />
        )}

        <div className="mt-8 flex justify-center lg:mt-[3cqw]">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-[4px] bg-jb-ocean-light px-6 py-3 text-sm text-white shadow-sm transition hover:brightness-110 active:scale-95 lg:gap-[1cqw] lg:px-[2.6cqw] lg:py-[1.2cqw] lg:text-[1.11cqw]"
          >
            <FaInstagram aria-hidden="true" className="h-4 w-4 lg:h-[1.3cqw] lg:w-[1.3cqw]" />
            Follow on instagram
          </a>
        </div>
      </div>
    </section>
  );
}
