import Image from "next/image";
import { tokens } from "@/styles/tokens";

const linkClass = "hover:text-jb-navy";

/** Figma "5.Admission": text column x 90–521, wave-cut photo x 501–1080 of a 1080px frame, contact lines below */
export function SchoolVisit() {
  return (
    <section
      className="@container bg-white pb-10 font-sans tracking-[0.1em] text-black lg:pb-[4cqw]"
      aria-labelledby="school-visit-title"
    >
      <div className="relative flex flex-col lg:block">
        <div className="order-2 px-4 pt-6 sm:px-6 lg:absolute lg:top-[4.6cqw] lg:left-[8.3%] lg:w-[39.9%] lg:p-0">
          <h2
            id="school-visit-title"
            className="text-center text-2xl font-bold lg:text-[2.78cqw]"
          >
            SCHOOL VISIT
          </h2>
          <div className="mt-4 text-sm leading-[1.35] lg:mt-[0.74cqw] lg:text-justify lg:text-[1.57cqw]">
            <p>
              &ldquo;Discover our vibrant learning environment firsthand. We
              invite you to explore our campus and meet our dedicated team, who
              will guide you on an exclusive tour and share comprehensive
              insights into our educational approach.
            </p>
            <p>
              To arrange your visit, kindly contact us via phone at +62 361 –
              752554 / 752776, whatsapp at 081138816881 or email{" "}
              <a href="mailto:info@jbschool-bali.com" className={linkClass}>
                info@jbschool-bali.com
              </a>
              &rdquo;
            </p>
          </div>
        </div>

        <div className="relative order-1 aspect-[579/419] w-full lg:mt-[3.4cqw] lg:ml-auto lg:w-[53.6%]">
          <Image
            src={tokens.assets.admission.schoolVisit}
            alt="JB School building with the Jembatan Budaya emblem"
            fill
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-8 px-4 text-center text-sm lg:mt-[3.3cqw] lg:text-[1.57cqw]">
        <p>If you have a question please contact us at :</p>
        <p className="mt-3 lg:mt-[1.76cqw]">
          Telp :{" "}
          <a href="tel:+62361752554" className={linkClass}>(+62 361) 752554</a>,{" "}
          <a href="tel:+62361752776" className={linkClass}>752776</a>, Fax : (+62
          361) 756235 Whatsapp :{" "}
          <a
            href="https://wa.me/6281138816881"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            081138816881
          </a>
        </p>
      </div>
    </section>
  );
}
