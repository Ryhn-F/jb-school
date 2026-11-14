const VIDEOS = [
  { id: "E3Bu7E82pNY", title: "JB School Video Documenter" },
  { id: "bD54T3joxd4", title: "Full Movie “The Untold Story” - JB School 17th Anniversary" },
];

export function VideoTour() {
  return (
    <section className="bg-white pt-10 pb-8 sm:pt-12" aria-labelledby="video-tour-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="video-tour-title"
          className="text-center font-sans text-xl font-bold text-neutral-950 sm:text-2xl"
        >
          Explore Our School Culture Through Video Tour
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 sm:mt-8">
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
