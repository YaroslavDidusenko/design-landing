import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexey — Designer",
  description:
    "Portfolio of Alexey — a designer focused on creating modern, professional, and visually engaging solutions that help brands and projects stand out.",
  openGraph: {
    title: "Alexey — Designer",
    description:
      "Modern, professional design for brands, social media, websites, and visual identities.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script id="js-enabled" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
