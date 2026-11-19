import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { tokens } from "@/styles/tokens";

interface AdmissionPillLink {
  label: string;
  href: string;
}

// Reading order: one column on mobile, filled column-first into the Figma 2x2 grid on desktop.
const ADMISSION_LINKS: AdmissionPillLink[] = [
  { label: "EARLY CHILDHOOD", href: "/admission/" },
  { label: "PRIMARY SCHOOL", href: "/admission/" },
  { label: "JUNIOR HIGH SCHOOL", href: "/admission/" },
  { label: "SENIOR HIGH SCHOOL", href: "/admission/" },
];

// Traced from the Figma mobile artwork (560x472 px): coral side of the face-profile edge, and the wave's centerline.
const PROFILE_EDGE_PATH =
  "M560 0 L528 0 L528.8 3 L530.2 6 L531.4 9 L532.8 12 L534.2 15 L535.6 18 L536.4 21 L537 24 L537.6 27 L538.8 30 L539.8 33 L540.6 36 L541 39 L541.6 42 L542 45 L542 48 L542 51 L542.4 54 L543 57 L543 60 L543 63 L543.4 66 L544.6 69 L545.6 72 L546.6 75 L547.6 78 L548.4 81 L549.2 84 L549.8 87 L550 90 L550 93 L549.2 96 L548 99 L545.6 102 L541.2 105 L534.2 108 L526.4 111 L520 114 L516.8 117 L518.6 120 L521.6 123 L524.4 126 L526.4 129 L528 132 L528.8 135 L528.6 138 L527.4 141 L526.4 144 L525.4 147 L524.2 150 L522.8 153 L521.2 156 L520 159 L519 162 L518.2 165 L517.4 168 L517 171 L517.2 174 L518 177 L519.4 180 L522 183 L525.4 186 L529.6 189 L534 192 L537.2 195 L538.8 198 L539.8 201 L540 204 L540 207 L539.6 210 L538.8 213 L538.2 216 L538 219 L538.6 222 L539.6 225 L540.4 228 L541 231 L541.4 234 L542 237 L542.2 240 L542.8 243 L543.4 246 L544.2 249 L545 252 L545.8 255 L546.4 258 L547 261 L547.2 264 L547.8 267 L548.2 270 L548.8 273 L549.6 276 L550 279 L550 282 L550 285 L549.6 288 L548.6 291 L547.8 294 L547.2 297 L546.6 300 L545.6 303 L544.6 306 L543.4 309 L542.6 312 L542 315 L542 318 L542 321 L542 324 L542 327 L542 330 L542.6 333 L543.8 336 L544.8 339 L544.8 342 L543.8 345 L542.6 348 L541 351 L538.8 354 L536.4 357 L534 360 L531.6 363 L530.2 366 L529.2 369 L528.8 372 L528.2 375 L527.8 378 L527.2 381 L527 384 L526.6 387 L526 390 L525.8 393 L525.2 396 L524.2 399 L522.6 402 L520.6 405 L518 408 L515 411 L512 414 L509.8 417 L508.8 420 L508.2 423 L508 426 L508 429 L508 432 L507.4 435 L506.2 438 L504.6 441 L503.4 444 L502.6 447 L501.6 450 L500.6 453 L499.4 456 L498.4 459 L497.6 462 L496.6 465 L495.6 468 L495 472 L560 472Z";
const WAVE_PATH =
  "M-12 178 C-9.5 181.8 -1.8 190.2 3 201 C7.8 211.8 11.8 229.3 17 243 C22.2 256.7 27.8 270.8 34 283 C40.2 295.2 47.5 307.7 54 316 C60.5 324.3 66.5 329.2 73 333 C79.5 336.8 86.3 338 93 339 C99.7 340 105 340.8 113 339 C121 337.2 132.5 333.8 141 328 C149.5 322.2 157.3 309.7 164 304 C170.7 298.3 175.8 293.8 181 294 C186.2 294.2 192 297.5 195 305 C198 312.5 198.8 327.7 199 339 C199.2 350.3 196.2 363.8 196 373 C195.8 382.2 194.8 389.3 198 394 C201.2 398.7 206.5 399.3 215 401 C223.5 402.7 238.7 401.2 249 404 C259.3 406.8 269.5 411 277 418 C284.5 425 290.3 436.7 294 446 C297.7 455.3 298 467.5 299 474 C300 480.5 299.8 483.2 300 485";

export function AdmissionCallout() {
  return (
    <section
      id="admission"
      className="relative w-full overflow-hidden bg-jb-coral text-white lg:min-h-[31.7vw]"
    >
      {/* Artwork rebuilt from the Figma mobile frame in layers so it stays sharp at desktop sizes: brick panel,
          coral face-profile edge (SVG, pinned to the panel's right edge), students cutout, white wave (SVG) on top.
          Students + wave sit in a 560x472 box (Figma px) sized to the band height. Panel: 560/1080 = 51.9vw on mobile
          (box and panel coincide), 46% on desktop (brick fills the gap up to the profile edge). */}
      <div className="@container-[size] absolute inset-y-0 left-0 w-[51.9vw] overflow-hidden bg-jb-brick lg:w-[46%]">
        <svg
          aria-hidden="true"
          viewBox="490 0 70 472"
          preserveAspectRatio="none"
          className="absolute inset-y-0 right-0 aspect-[70/472] h-full fill-jb-coral"
        >
          <path d={PROFILE_EDGE_PATH} />
        </svg>
        {/* Largest 560x472 box that fits the panel (118.64 = 100 * 560/472), bottom-left like the Figma frame */}
        <div className="absolute bottom-0 left-0 aspect-[560/472] w-[min(100cqw,118.64cqh)]">
          <div className="absolute top-[-7%] left-[-1.07%] h-[107%] w-[95.9%]">
            <Image
              src={tokens.assets.home.admissionStudents}
              alt="JB School high-achieving students holding trophies"
              fill
              sizes="(min-width: 1024px) 36vw, 50vw"
              className="object-contain"
            />
          </div>
          <svg aria-hidden="true" viewBox="0 0 560 472" className="absolute inset-0 h-full w-full">
            <path
              d={WAVE_PATH}
              fill="none"
              stroke="white"
              strokeOpacity={0.72}
              strokeWidth={22}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="ml-[55vw] pr-[2.5vw] min-h-[43.7vw] lg:ml-[50%] lg:pr-0 lg:min-h-[31.7vw] flex flex-col justify-center py-[3.5vw] lg:py-12 space-y-[2vw] lg:space-y-6">
          <div>
            <span className="block text-[2.65vw]/[1.3] lg:text-3xl xl:text-4xl font-normal uppercase tracking-[0.1em]">
              ADMISSION
            </span>
            <p className="text-[2.6vw]/[1.3] lg:text-3xl xl:text-4xl font-normal tracking-[0.09em]">
              Are you ready to
            </p>
            <h2 className="text-[3.4vw]/[1.15] lg:text-4xl xl:text-5xl font-bold lg:leading-tight">
              unleash your potential
            </h2>
            <p className="text-[3.4vw]/[1.15] lg:text-4xl xl:text-5xl font-bold lg:leading-tight">
              <span className="text-[2.6vw] lg:text-3xl xl:text-4xl font-normal tracking-[0.09em]">
                and{" "}
              </span>
              conquer your future?
            </p>
          </div>

          <div className="grid w-full max-w-[max(34vw,10rem)] grid-cols-1 gap-y-[1.8vw] lg:max-w-xl lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-5 lg:gap-y-2.5">
            {ADMISSION_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex min-h-[max(24px,3.8vw)] items-center justify-between rounded-full border-[1.5px] lg:border-[3px] border-jb-surface px-[2.4vw] lg:min-h-0 lg:px-4 lg:py-1.5 text-[1.63vw] lg:text-sm font-bold uppercase tracking-normal lg:tracking-wide transition-colors duration-200 hover:bg-white hover:text-jb-brick"
              >
                <span className="whitespace-nowrap lg:whitespace-normal">{link.label}</span>
                <FiChevronRight
                  aria-hidden="true"
                  className="h-3 w-3 shrink-0 lg:h-4 lg:w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
