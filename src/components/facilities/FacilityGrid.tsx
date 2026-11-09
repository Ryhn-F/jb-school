import Image from "next/image";
import { tokens } from "@/styles/tokens";

interface Facility {
  name: string;
  image: string;
  alt: string;
}

const f = tokens.assets.facilities;

// Order and labels follow the Figma "Facilities" frame (row by row).
const FACILITIES: Facility[] = [
  { name: "BASKETBALL COURT", image: f.basketballCourt, alt: "Covered outdoor basketball court" },
  { name: "SWIMMING POOL", image: f.swimmingPool, alt: "Covered swimming pool" },
  { name: "SPORT HALL", image: f.sportHall, alt: "Student playing badminton in the sport hall" },
  { name: "MUSIC ROOM", image: f.musicRoom, alt: "Music room with Balinese gamelan instruments" },
  { name: "BIOLOGY LABORATORY", image: f.biologyLab, alt: "Students using microscopes in the biology lab" },
  { name: "CAFETERIA", image: f.cafeteria, alt: "Students sitting in the school cafeteria" },
  { name: "CLASSROOM", image: f.classroom, alt: "Classroom with blue chairs and a whiteboard" },
  { name: "FUTSAL FIELD", image: f.futsalField, alt: "Outdoor futsal field seen from above" },
  { name: "VOLLEYBALL FIELD", image: f.volleyballField, alt: "Outdoor volleyball field seen from above" },
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

        {/* Figma: 216px tiles, 30px column gap, 57px between a label and the next row */}
        <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-[4.2%] lg:mt-10 lg:gap-y-14">
          {FACILITIES.map((facility) => (
            <li key={facility.name}>
              <figure>
                <div className="relative aspect-square overflow-hidden rounded-[8%]">
                  <Image
                    src={facility.image}
                    alt={facility.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-sans text-xs font-bold tracking-[0.1em] text-black sm:text-sm lg:mt-4 lg:text-lg xl:text-xl">
                  {facility.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
