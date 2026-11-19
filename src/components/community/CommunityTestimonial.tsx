const VIDEO = {
  id: "chzHoqGH5WA",
  title: "Testimoni Alumni Sekolah Jembatan Budaya (Sophia Moshavi Angkatan 2018)",
};

export function CommunityTestimonial() {
  return (
    <section
      className="@container bg-white pt-[2.3vw] pb-[3.5vw] font-sans lg:pt-[1.3cqw] lg:pb-[15cqw]"
      aria-labelledby="community-testimonial-title"
    >
      <h2
        id="community-testimonial-title"
        className="px-[4.6vw] text-center text-[2.4vw] leading-[1.4] font-bold tracking-[0.077em] text-black lg:px-4 lg:tracking-[0.1em] lg:text-[2.22cqw]"
      >
        ALUMNI AND PARENTS TESTIMONIAL
      </h2>

      <div className="mt-[3.9vw] px-[6.4vw] lg:mt-[4cqw] lg:px-[6.5%]">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${VIDEO.id}`}
          title={VIDEO.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="aspect-video w-full bg-neutral-900"
        />
      </div>
    </section>
  );
}
