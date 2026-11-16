import { cacheLife } from "next/cache";

export type InstagramPost = {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
};

// Throws on failure so errors are never stored in the cache — only good responses are.
async function fetchInstagramPosts(limit: number): Promise<InstagramPost[]> {
  "use cache";
  cacheLife("hours");

  const url = new URL("https://graph.instagram.com/me/media");
  url.searchParams.set("fields", "id,media_type,media_url,thumbnail_url,permalink,caption");
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("access_token", process.env.INSTAGRAM_ACCESS_TOKEN ?? "");

  const res = await fetch(url);
  const json = await res.json();
  if (!res.ok) throw new Error(json?.error?.message ?? `HTTP ${res.status}`);
  return (json.data as InstagramPost[]).slice(0, limit);
}

/** Newest posts from the account behind INSTAGRAM_ACCESS_TOKEN, or null when they couldn't be fetched. */
export async function getLatestInstagramPosts(limit = 4): Promise<InstagramPost[] | null> {
  if (!process.env.INSTAGRAM_ACCESS_TOKEN) {
    console.error("[instagram] INSTAGRAM_ACCESS_TOKEN is not set");
    return null;
  }
  try {
    return await fetchInstagramPosts(limit);
  } catch (err) {
    console.error("[instagram] fetch failed:", err instanceof Error ? err.message : err);
    return null;
  }
}

/** Videos expose a still in thumbnail_url; images and albums use media_url (an album's first image). */
export const postImageUrl = (post: InstagramPost) =>
  post.media_type === "VIDEO" ? (post.thumbnail_url ?? post.media_url) : post.media_url;

/** First caption line as alt text */
export const postAlt = (post: InstagramPost) =>
  post.caption?.split("\n")[0].slice(0, 120) || "JB School Instagram post";
