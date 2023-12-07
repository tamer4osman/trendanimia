import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Trend Anima",
  description: "Your favorite anime for all time.",
};

const RootLayout = ({children}: {children: React.ReactNode;}) => (
  <html lang="en">
    <body className={dmSans.className}>
      <main className="max-w-7xl mx-auto bg-[#0F1117]">
        <Hero />
        {children}
        <Footer />
      </main>
    </body>
  </html>
);

export { metadata, RootLayout as default };
