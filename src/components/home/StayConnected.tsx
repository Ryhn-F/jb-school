import { getLatestInstagramPosts } from "@/lib/instagram";
import { InstagramPostCard } from "@/components/shared/InstagramPostCard";
import { InstagramFetchError } from "@/components/shared/InstagramFetchError";

export async function StayConnected() {
  const posts = await getLatestInstagramPosts(4);

  return (
    <section className="bg-white pt-[2.8vw] pb-[8.5vw] lg:pt-8 lg:pb-20" aria-labelledby="stay-connected-title">
      <div className="mx-auto max-w-5xl px-[6.4vw] lg:px-8">
        <h2
          id="stay-connected-title"
          className="text-center font-sans text-[2.56vw]/[1.2] font-bold text-neutral-950 lg:text-2xl"
        >
          Stay Connected with Us
        </h2>

        {posts ? (
          <div className="mt-[2.6vw] grid grid-cols-4 gap-[1vw] lg:mt-12 lg:gap-7">
            {posts.map((post) => (
              <InstagramPostCard key={post.id} post={post} sizes="(min-width: 1024px) 210px, 22vw" />
            ))}
          </div>
        ) : (
          <InstagramFetchError className="mt-[2.6vw] lg:mt-12" />
        )}
      </div>
    </section>
  );
}
