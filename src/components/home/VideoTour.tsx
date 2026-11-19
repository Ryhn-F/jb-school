const VIDEOS = [
  { id: "E3Bu7E82pNY", title: "JB School Video Documenter" },
  { id: "bD54T3joxd4", title: "Full Movie “The Untold Story” - JB School 17th Anniversary" },
];

export function VideoTour() {
  return (
    <section className="bg-white pt-[3.5vw] pb-[2.8vw] lg:pt-12 lg:pb-8" aria-labelledby="video-tour-title">
      <div className="mx-auto max-w-7xl px-[7.2vw] lg:px-8">
        <h2
          id="video-tour-title"
          className="text-center font-sans text-[3.06vw]/[1.2] font-bold text-neutral-950 lg:text-2xl"
        >
          Explore Our School Culture Through Video Tour
        </h2>

        <div className="mt-[2.3vw] grid grid-cols-1 gap-[2.3vw] lg:grid-cols-2 lg:gap-5 lg:mt-8">
          {VIDEOS.map((video) => (
            <iframe
              key={video.id}
              src={`https://www.youtube-nocookie.com/embed/${video.id}`}
              title={video.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="aspect-video w-full bg-neutral-900"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
