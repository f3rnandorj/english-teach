import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { pageAssets } from "@/assets";
import { NavBar } from "@/components";
import Head from "next/head";
import Script from "next/script";

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
      <Script
        id="facebookScript"
        dangerouslySetInnerHTML={{
          __html: `
              !(function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                  n.callMethod
                    ? n.callMethod.apply(n, arguments)
                    : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = "2.0";
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
              })(
                window,
                document,
                "script",
                "https://connect.facebook.net/en_US/fbevents.js"
              );
              fbq("init", "5852912948166338");
              fbq("track", "PageView");
            `,
        }}
      />
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
