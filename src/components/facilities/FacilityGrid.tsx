import { tokens } from "@/styles/tokens";
import {
  PhotoGallery,
  type GalleryPhoto,
} from "@/components/shared/PhotoGallery";

const f = tokens.assets.facilities;

// Order and labels follow the Figma "4.Facilities" frame (row by row).
const FACILITIES: GalleryPhoto[] = [
  {
    caption: "BASKETBALL COURT",
    src: f.basketballCourt,
    alt: "Covered outdoor basketball court",
  },
  {
    caption: "SWIMMING POOL",
    src: f.swimmingPool,
    alt: "Covered swimming pool",
  },
  {
    caption: "SPORT HALL",
    src: f.sportHall,
    alt: "Student playing badminton in the sport hall",
  },
  {
    caption: "FUTSAL FIELD",
    src: f.futsalField,
    alt: "Outdoor futsal field seen from above",
  },
  {
    caption: "VOLLEYBALL FIELD",
    src: f.volleyballField,
    alt: "Outdoor volleyball field seen from above",
  },
  {
    caption: "MUSIC ROOM",
    src: f.musicRoom,
    alt: "Music room with Balinese gamelan instruments",
  },
  {
    caption: "BIOLOGY LABORATORY",
    src: f.biologyLab,
    alt: "Students using microscopes in the biology lab",
  },
  {
    caption: "CLASSROOM",
    src: f.classroom,
    alt: "Classroom with blue chairs and a whiteboard",
  },
  {
    caption: "CAFETERIA",
    src: f.cafeteria,
    alt: "Students sitting in the school cafeteria",
  },
];

/** Figma sizes are px in a 1080px frame: mobile in vw (px / 10.8), desktop in cqw of the section */
export function FacilityGrid() {
  return (
    <section
      className="@container bg-white pt-[4.9vw] font-sans text-black lg:pt-[2.6vw]"
      aria-labelledby="school-facilities-title"
    >
      {/* Padding lives here, not on the @container, so cqw tracks the full section width */}
      <div className="px-[6.6vw] lg:px-[6.4%]">
        <h1
          id="school-facilities-title"
          className="text-center text-[max(16px,2.14vw)] leading-[1.4] font-bold tracking-[0.1em] lg:text-[1.85cqw]"
        >
          SCHOOL FACILITIES
        </h1>
        <p className="mt-[1.6vw] text-justify text-[max(13px,1.57vw)] leading-[1.36] tracking-[0.1em] lg:mt-[1.9cqw] lg:text-[1.48cqw]">
          JB School is proudly equipped with premium, purpose-built facilities
          designed to support every student&apos;s unique journey of
          self-discovery. Here, fully-equipped creative spaces, academic labs,
          and sports arenas serve as the ultimate training ground for your child
          to explore their interests and master their exceptional talents.
        </p>

        {/* Tiles open a looping lightbox on click */}
        <PhotoGallery
          photos={FACILITIES}
          label="Facility photos"
          listClassName="mt-[2.5vw] grid grid-cols-3 gap-x-[3.5vw] gap-y-[2.3vw] lg:mt-[2cqw] lg:gap-x-[3.8cqw] lg:gap-y-[2.4cqw]"
          tileClassName="rounded-[7.7%]"
          captionClassName="mt-[1.3vw] text-[max(11px,1.5vw)] leading-[calc(1.25/0.875)] sm:text-[max(11px,1.5vw)] lg:mt-[1.2cqw] lg:text-[1.48cqw] xl:text-[1.48cqw]"
          sizes="30vw"
        />

        <p className="mt-[4.6vw] text-justify text-[max(13px,1.57vw)] leading-[1.36] tracking-[0.1em] lg:mt-[3.3cqw] lg:text-[1.48cqw]">
          To create a second home where students can truly flourish, JB School
          offers a thoughtfully designed campus that balances modern comfort
          with advanced technology. From our welcoming cafeteria and grand hall
          to our smart classrooms integrated with interactive displays and media
          TVs, every corner of our school is built to ensure students have the
          spaces and tools they need to thrive.
        </p>
      </div>
    </section>
  );
}
