import { PhotoGallery, type GalleryPhoto } from "@/components/shared/PhotoGallery";

interface CommunityGalleryProps {
  id: string;
  title: string;
  intro: string;
  photos: GalleryPhoto[];
  /** Mobile-only tile reorder from the Figma mobile frame, e.g. "max-lg:[&>li:nth-child(3)]:order-1" */
  mobileOrderClassName?: string;
}

/** Title, intro and a 3-column grid of cream-framed photos (Figma "7.Community", sizes in cqw of a 1080px frame) */
export function CommunityGallery({ id, title, intro, photos, mobileOrderClassName }: CommunityGalleryProps) {
  return (
    <section
      className="@container bg-white pt-[2.9vw] pb-[0.5vw] font-sans text-black lg:pt-[3cqw] lg:pb-[1.4cqw]"
      aria-labelledby={id}
    >
      <div className="px-[4.6vw] lg:px-[5.7%]">
        <h2 id={id} className="text-[max(16px,2.57vw)] leading-[1.4] font-bold tracking-[0.06em] lg:tracking-[0.1em] lg:text-[2.22cqw]">
          {title}
        </h2>
        <p className="mt-[1.4vw] text-justify text-[max(13px,1.56vw)] leading-[1.38] tracking-[0.09em] lg:mt-[1cqw] lg:leading-[1.36] lg:tracking-[0.1em] lg:text-[1.48cqw]">
          {intro}
        </p>
      </div>

      <div className="px-[4.7vw] lg:px-[4.4%]">
        <PhotoGallery
          photos={photos}
          label={`${title.toLowerCase()} photos`}
          listClassName={`${mobileOrderClassName ?? ""} mt-[2.7vw] grid grid-cols-2 gap-x-[4.4vw] gap-y-[4.2vw] lg:mt-[2.8cqw] lg:grid-cols-3 lg:gap-x-[2.96cqw] lg:gap-y-[2.7cqw]`}
          tileClassName="aspect-[307/222] rounded-[2px] border-[length:2.6vw] border-jb-cream bg-jb-cream shadow-[0_2px_6px_rgb(0_0_0/0.18)] lg:border-[length:1.67cqw]"
          sizes="(min-width: 1024px) 30vw, 46vw"
        />
      </div>
    </section>
  );
}
