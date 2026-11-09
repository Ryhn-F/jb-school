import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { tokens } from "@/styles/tokens";
import { NavLink, type NavSubItem } from "@/components/shared/NavLink";
import { ACADEMIC_LEVELS } from "@/lib/academic-levels";

interface NavLinkItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  items?: NavSubItem[];
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  {
    label: "ACADEMICS",
    href: "/academics",
    hasDropdown: true,
    items: ACADEMIC_LEVELS.map(({ title, href }) => ({ label: title, href })),
  },
  {
    label: "FACILITIES",
    href: "/facilities",
    hasDropdown: true,
    // Same hrefs as the footer's Facilities column
    items: [
      { label: "SCHOOL FACILITIES", href: "/facilities" },
      { label: "ACTIVITIES", href: "/activities" },
    ],
  },
  { label: "ADMISSION", href: "/admission", hasDropdown: true },
  { label: "NEWS", href: "/news" },
  { label: "CONTACT US", href: "/contact" },
];

export function Navbar() {
  return (
    <header className=" top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 py-5">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src={tokens.assets.logo.main}
              alt="JB School 文桥三语学校"
              width={170}
              height={50}
              priority
              className="h-10 w-auto object-contain sm:h-12"
            />
          </Link>

          <div className="flex min-w-0 flex-1 flex-col items-end gap-2">
            {/* Search Pill */}
            <div className="relative flex items-center">
              <FiSearch
                className="pointer-events-none absolute left-3.5 h-4 w-4 text-neutral-500"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="Search here..."
                aria-label="Search"
                className="w-48 rounded-full border border-neutral-300 bg-white py-1.5 pr-4 pl-9 text-xs text-neutral-800 transition-all placeholder:text-neutral-400 focus:border-jb-navy focus:outline-none sm:w-56"
              />
            </div>

            <nav
              className="flex flex-wrap items-center justify-end gap-5 sm:gap-7"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => (
                <NavLink key={link.label} {...link} />
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Blue line separator matching Figma (y: 88, h: 15) */}
      <div className="w-full h-5 bg-linear-to-r from-[#1A135A] to-[#245CEB]"></div>
    </header>
  );
}
