import { getLatestInstagramPosts } from "@/lib/instagram";
import { InstagramPostCard } from "@/components/shared/InstagramPostCard";
import { InstagramFetchError } from "@/components/shared/InstagramFetchError";

export async function StayConnected() {
  const posts = await getLatestInstagramPosts(4);

  return (
    <section className="bg-white pt-8 pb-16 sm:pb-20" aria-labelledby="stay-connected-title">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2
          id="stay-connected-title"
          className="text-center font-sans text-xl font-bold text-neutral-950 sm:text-2xl"
        >
          Stay Connected with Us
        </h2>

        {posts ? (
          <div className="mt-8 grid grid-cols-2 gap-5 sm:mt-12 md:grid-cols-4 md:gap-7">
            {posts.map((post) => (
              <InstagramPostCard key={post.id} post={post} sizes="(min-width: 768px) 210px, 45vw" />
            ))}
          </div>
        ) : (
          <InstagramFetchError className="mt-8 sm:mt-12" />
        )}
      </div>
    </section>
  );
}
