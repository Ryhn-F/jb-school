import Image from "next/image";
import Link from "next/link";
import { tokens } from "@/styles/tokens";
import { NavLink, type NavSubItem } from "@/components/shared/NavLink";
import { PARTNERS } from "@/components/shared/PartnerLogos";
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
  {
    label: "ADMISSION",
    href: "/admission",
    hasDropdown: true,
    // Same hrefs as the footer's Admission column
    items: [
      { label: "PROCEDURES", href: "/admission" },
      { label: "FAQ", href: "/faq" },
      { label: "CONTACT US", href: "/contact" },
    ],
  },
  { label: "NEWS", href: "/news" },
  { label: "COMMUNITY", href: "/community" },
];

export function Navbar() {
  return (
    <header className=" top-0 z-50 bg-white shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-[4.9%] pt-5">
        <div className="flex items-center justify-between gap-8 py-5">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src={tokens.assets.logo.main}
              alt="JB School 文桥三语学校"
              width={4096}
              height={1366}
              sizes="200px"
              priority
              className="h-10 w-auto object-contain sm:h-15"
            />
          </Link>

          <div className="flex min-w-0 flex-1 flex-col items-end gap-4">
            {/* Partner logos (Figma header, top right) */}
            <ul
              className="hidden items-center gap-5 sm:flex lg:gap-7"
              aria-label="Educational Partners"
            >
              {PARTNERS.map((p) => (
                <li key={p.src}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.width}
                    height={p.height}
                    sizes="120px"
                    className="h-6 w-auto object-contain lg:h-7"
                  />
                </li>
              ))}
            </ul>

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
