import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic", "normal"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://storagedreamsstudios.com"),
  title: {
    default: "Rich Rosales",
    template: "%s | Rich Rosales",
  },
  description:
    "Official website of Rich Rosales, comedy creator with 1.1M TikTok followers, premium brand partnerships, and media enquiries.",
  keywords: [
    "Rich Rosales",
    "comedy creator",
    "TikTok creator",
    "brand partnerships",
    "media kit",
    "press enquiries",
  ],
  openGraph: {
    title: "Rich Rosales",
    description:
      "Official website of Rich Rosales, comedy creator with 1.1M TikTok followers, premium brand partnerships, and media enquiries.",
    url: "https://storagedreamsstudios.com",
    siteName: "Rich Rosales",
    images: [
      {
        url: "/RichRosalesFavi.svg",
        width: 1200,
        height: 630,
        alt: "Rich Rosales",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rich Rosales",
    description:
      "Official website of Rich Rosales, comedy creator with 1.1M TikTok followers, premium brand partnerships, and media enquiries.",
    images: ["/RichRosalesFavi.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-black font-body text-white">
        <Navbar />
        <main className="flex-1 pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
