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

/** Newest posts from the account behind INSTAGRAM_ACCESS_TOKEN; [] on any failure so callers can fall back. */
export async function getLatestInstagramPosts(limit = 4): Promise<InstagramPost[]> {
  if (!process.env.INSTAGRAM_ACCESS_TOKEN) return [];
  try {
    return await fetchInstagramPosts(limit);
  } catch (err) {
    console.error("[instagram] fetch failed:", err instanceof Error ? err.message : err);
    return [];
  }
}
