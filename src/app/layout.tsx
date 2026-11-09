import type { Metadata } from "next";
import { openSans, dmSans, bebasNeue } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "JB School - Sekolah Jembatan Budaya, Bali",
  description:
    "Officially established in 2004, Sekolah Jembatan Budaya (JB School) is a pioneer of National Plus education in Bali, empowering students for global success through Indonesian, English, and Mandarin trilingual learning.",
  icons: {
    icon: "/assets/jb-emblem.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${dmSans.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#1a1a1a]">
        {children}
      </body>
    </html>
  );
}
