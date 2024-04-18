import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { pageAssets } from "@/assets";
import { NavBar } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Do zero a fluência",
  description: "Aprenda inglês de uma forma simples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}`}
        style={{ backgroundImage: `url(${pageAssets.background.src})` }}
      >
        <NavBar />

        <main
          className="
            lg:mt-16 md:mt-14 mt-5
            lg:mb-16 md:mb-14 mb-5
            lg:mx-auto
            max-w-[80rem] mx-5 "
        >
          {children}
        </main>
      </body>
    </html>
  );
}
