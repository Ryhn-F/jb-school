import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { tokens } from "@/styles/tokens";

interface NavLinkItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isActive?: boolean;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "HOME", href: "/", isActive: true },
  { label: "ABOUT US", href: "/about" },
  { label: "ACADEMICS", href: "/academics", hasDropdown: true },
  { label: "FACILITIES", href: "/facilities", hasDropdown: true },
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
                <Link
                  key={link.label}
                  href={link.href}
                  className={`inline-flex items-center gap-1 py-1 font-display text-[11px] font-bold tracking-wider transition-colors sm:text-xs ${
                    link.isActive
                      ? "font-semibold text-neutral-400"
                      : "text-black hover:text-jb-navy"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <FiChevronDown className="h-3 w-3 stroke-[2.5] text-neutral-700" />
                  )}
                </Link>
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
