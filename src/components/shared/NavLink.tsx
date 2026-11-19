"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "@/lib/utils";

export interface NavSubItem {
  label: string;
  href: string;
}

interface NavLinkProps {
  label: string;
  href: string;
  hasDropdown?: boolean;
  /** Dropdown entries; the menu opens on hover, on keyboard focus, and on first tap on touch screens */
  items?: NavSubItem[];
}

export function NavLink({ label, href, hasDropdown, items }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
  const [open, setOpen] = useState(false);
  const isTouch = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  // Tap outside closes a menu opened by touch
  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  return (
    // Below lg the menu anchors to the (relative) nav row so it spans its width instead of overflowing the viewport
    <div ref={ref} className="group lg:relative">
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        aria-haspopup={items ? "true" : undefined}
        onPointerDown={(e) => {
          isTouch.current = e.pointerType !== "mouse";
        }}
        onClick={(e) => {
          // Touch has no hover: first tap opens the menu, second tap follows the link
          if (items && isTouch.current && !open) {
            e.preventDefault();
            setOpen(true);
          } else setOpen(false);
        }}
        className={cn(
          "inline-flex min-h-6 items-center gap-1 py-1 font-display text-[1.3vw] font-bold tracking-normal transition-colors lg:text-xs lg:tracking-wider",
          isActive ? "font-semibold text-neutral-400" : "text-black hover:text-jb-navy",
        )}
      >
        <span>{label}</span>
        {hasDropdown && (
          <FiChevronDown
            aria-hidden="true"
            className={cn(
              "h-3 w-3 stroke-[2.5] text-neutral-700",
              items && "transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180",
              open && "rotate-180",
            )}
          />
        )}
      </Link>

      {items && (
        // pt-2 bridges the gap so the menu stays open while the pointer moves down to it
        <div
          className={cn(
            "absolute inset-x-0 top-full z-50 pt-3 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 lg:right-auto",
            open ? "visible opacity-100" : "invisible opacity-0",
          )}
        >
          <ul className="border-t-[3px] border-jb-navy bg-white py-2 shadow-[0_6px_16px_rgba(0,0,0,0.12)] lg:min-w-60">
            {items.map((item) => {
              const isItemActive = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isItemActive ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block whitespace-nowrap px-5 py-2.5 font-display text-sm font-normal tracking-wide transition-colors hover:text-jb-navy focus-visible:text-jb-navy focus-visible:outline-none",
                      isItemActive ? "text-jb-navy" : "text-neutral-800",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
