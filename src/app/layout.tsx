import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import { SITE } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Sarin Lab | Skin as a Sensor for Disease",
    template: "%s | Sarin Lab",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  keywords: [
    "Sarin Lab",
    "Stanford Dermatology",
    "Skin as a Sensor",
    "non-invasive imaging",
    "optical coherence tomography",
    "neurofibromatosis",
    "skin cancer genetics",
    "autoimmune skin disease",
    "computational dermatology",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Sarin Lab | Skin as a Sensor for Disease",
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarin Lab | Skin as a Sensor for Disease",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-charcoal">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-cardinal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
