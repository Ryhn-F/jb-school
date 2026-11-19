import { FaInstagram } from "react-icons/fa6";
import { getLatestInstagramPosts } from "@/lib/instagram";
import { InstagramPostCard } from "@/components/shared/InstagramPostCard";
import { InstagramFetchError } from "@/components/shared/InstagramFetchError";

const INSTAGRAM_URL = "https://instagram.com/jbschool.bali";

/** News & Achievement: latest 12 Instagram posts (Figma 210 x 312 cards, 4 per row on a 1080px frame; mobile frame: 9 posts, 3 per row) */
export async function NewsGrid() {
  const posts = await getLatestInstagramPosts(12);

  return (
    <section
      className="@container bg-white pt-[1.5vw] pb-[2.8vw] font-sans lg:pt-[2cqw] lg:pb-[5.6cqw]"
      aria-labelledby="news-achievement-title"
    >
      <div className="pr-[6vw] pl-[6.6vw] lg:px-[7.4%]">
        <h2
          id="news-achievement-title"
          className="text-center text-[2.65vw] leading-[1.4] font-bold tracking-[0.1em] text-black lg:text-[2.6cqw]"
        >
          NEWS &amp; ACHIEVEMENT
        </h2>

        {posts ? (
          <ul className="mt-[1.9vw] grid grid-cols-3 gap-x-[3.2vw] gap-y-[3vw] max-lg:[&>li:nth-child(n+10)]:hidden lg:mt-[2.9cqw] lg:grid-cols-4 lg:gap-x-[2.5cqw] lg:gap-y-[2.3cqw]">
            {posts.map((post) => (
              <li key={post.id}>
                <InstagramPostCard
                  post={post}
                  sizes="(min-width: 1024px) 20vw, 30vw"
                />
              </li>
            ))}
          </ul>
        ) : (
          <InstagramFetchError className="mt-[1.9vw] lg:mt-[2.9cqw]" />
        )}

        <div className="mt-[3.7vw] flex justify-center lg:mt-[3cqw]">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[max(8px,0.9vw)] rounded-[4px] bg-jb-ocean-light px-[max(14px,1.6vw)] py-[max(8px,1.4vw)] text-[1.1vw] leading-[calc(1.25/0.875)] text-white shadow-sm transition hover:brightness-110 active:scale-95 lg:gap-[1cqw] lg:px-[2.6cqw] lg:py-[1.2cqw] lg:text-[1.11cqw]"
          >
            <FaInstagram aria-hidden="true" className="h-[max(14px,1.7vw)] w-[max(14px,1.7vw)] lg:h-[1.3cqw] lg:w-[1.3cqw]" />
            Follow on instagram
          </a>
        </div>
      </div>
    </section>
  );
}
