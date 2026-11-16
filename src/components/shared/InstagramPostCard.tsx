import Image from "next/image";
import { postAlt, postImageUrl, type InstagramPost } from "@/lib/instagram";

/** Rounded portrait tile (Figma 210 x 312, radius 20) linking to the post on Instagram */
export function InstagramPostCard({ post, sizes }: { post: InstagramPost; sizes: string }) {
  const alt = postAlt(post);
  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${alt} — open on Instagram`}
      className="group relative block aspect-[210/312] overflow-hidden rounded-[9.5%/6.4%] bg-neutral-100 shadow-md transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jb-navy"
    >
      <Image
        src={postImageUrl(post)}
        alt={alt}
        fill
        sizes={sizes}
        // Instagram CDN hosts rotate and URLs are signed, so skip the optimizer for them.
        unoptimized
        className="object-cover"
      />
    </a>
  );
}
