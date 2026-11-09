import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { tokens } from "@/styles/tokens";

export function NotFoundMessage() {
  return (
    <section
      className="flex min-h-[60vh] flex-col items-center justify-center bg-jb-surface px-4 py-16 text-center"
      aria-labelledby="not-found-title"
    >
      <Image
        src={tokens.assets.logo.emblem}
        alt=""
        aria-hidden="true"
        width={96}
        height={96}
        className="h-20 w-20 object-contain opacity-90 sm:h-24 sm:w-24"
      />

      <p className="mt-6 font-accent text-8xl leading-none tracking-wide text-jb-navy sm:text-9xl">
        404
      </p>
      <h1
        id="not-found-title"
        className="mt-4 font-sans text-xl font-bold tracking-[0.09em] text-black sm:text-2xl"
      >
        PAGE NOT FOUND
      </h1>
      <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-neutral-600 sm:text-base">
        The page you are looking for may have been moved, renamed, or is not
        available yet.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-jb-navy px-6 py-2.5 font-sans text-sm font-bold tracking-wider text-white transition hover:bg-jb-navy-dark active:scale-95"
        >
          <FiArrowLeft aria-hidden="true" className="h-4 w-4" />
          BACK TO HOME
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border-2 border-jb-navy px-6 py-2.5 font-sans text-sm font-bold tracking-wider text-jb-navy transition hover:bg-jb-navy hover:text-white active:scale-95"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
}
