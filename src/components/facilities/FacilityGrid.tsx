import { tokens } from "@/styles/tokens";
import { PhotoGallery, type GalleryPhoto } from "@/components/shared/PhotoGallery";

const f = tokens.assets.facilities;

// Order and labels follow the Figma "Facilities" frame (row by row).
const FACILITIES: GalleryPhoto[] = [
  { caption: "BASKETBALL COURT", src: f.basketballCourt, alt: "Covered outdoor basketball court" },
  { caption: "SWIMMING POOL", src: f.swimmingPool, alt: "Covered swimming pool" },
  { caption: "SPORT HALL", src: f.sportHall, alt: "Student playing badminton in the sport hall" },
  { caption: "MUSIC ROOM", src: f.musicRoom, alt: "Music room with Balinese gamelan instruments" },
  { caption: "BIOLOGY LABORATORY", src: f.biologyLab, alt: "Students using microscopes in the biology lab" },
  { caption: "CAFETERIA", src: f.cafeteria, alt: "Students sitting in the school cafeteria" },
  { caption: "CLASSROOM", src: f.classroom, alt: "Classroom with blue chairs and a whiteboard" },
  { caption: "FUTSAL FIELD", src: f.futsalField, alt: "Outdoor futsal field seen from above" },
  { caption: "VOLLEYBALL FIELD", src: f.volleyballField, alt: "Outdoor volleyball field seen from above" },
];

export function FacilityGrid() {
  return (
    <section className="bg-white py-10 lg:pt-8 lg:pb-16" aria-labelledby="school-facilities-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="school-facilities-title"
          className="text-center font-sans text-lg font-bold tracking-[0.09em] text-black lg:text-2xl xl:text-[25px]"
        >
          SCHOOL FACILITIES
        </h2>

        {/* Figma: 216px tiles, 30px column gap, 57px between a label and the next row.
            Tiles open a looping lightbox on click. */}
        <PhotoGallery
          photos={FACILITIES}
          label="Facility photos"
          listClassName="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-[4.2%] lg:mt-10 lg:gap-y-14"
          tileClassName="rounded-[8%]"
          sizes="(min-width: 768px) 30vw, 50vw"
        />
      </div>
    </section>
  );
}
