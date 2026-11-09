import type { Metadata } from "next";
import { openSans, dmSans, bebasNeue } from "./fonts";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export const metadata: Metadata = {
  title: "JB School - Sekolah Jembatan Budaya, Bali",
  description:
    "Officially established in 2004, Sekolah Jembatan Budaya (JB School) is a pioneer of National Plus education in Bali, empowering students for global success through Indonesian, English, and Mandarin trilingual learning.",
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
        {/* Shared shell: stays mounted across navigations; only <main> streams in
            each route's loading.tsx skeleton, then its page. */}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
