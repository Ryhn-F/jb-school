import { PhotoGallery, type GalleryPhoto } from "@/components/shared/PhotoGallery";

interface CommunityGalleryProps {
  id: string;
  title: string;
  intro: string;
  photos: GalleryPhoto[];
}

/** Title, intro and a 3-column grid of cream-framed photos (Figma "7.Community", sizes in cqw of a 1080px frame) */
export function CommunityGallery({ id, title, intro, photos }: CommunityGalleryProps) {
  return (
    <section
      className="@container bg-white pt-8 pb-4 font-sans text-black lg:pt-[3cqw] lg:pb-[1.4cqw]"
      aria-labelledby={id}
    >
      <div className="px-4 sm:px-6 lg:px-[5.7%]">
        <h2 id={id} className="text-xl font-bold tracking-[0.1em] lg:text-[2.22cqw]">
          {title}
        </h2>
        <p className="mt-3 text-justify text-sm leading-[1.36] tracking-[0.1em] lg:mt-[1cqw] lg:text-[1.48cqw]">
          {intro}
        </p>
      </div>

      <div className="px-4 sm:px-6 lg:px-[4.4%]">
        <PhotoGallery
          photos={photos}
          label={`${title.toLowerCase()} photos`}
          listClassName="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mt-[2.8cqw] lg:gap-x-[2.96cqw] lg:gap-y-[2.7cqw]"
          tileClassName="aspect-[307/222] rounded-[2px] border-[length:10px] border-jb-cream bg-jb-cream shadow-[0_2px_6px_rgb(0_0_0/0.18)] lg:border-[length:1.67cqw]"
          sizes="(min-width: 768px) 30vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
    </section>
  );
}
