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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://storagedreamsstudios.com";
const ogImageUrl = process.env.NEXT_PUBLIC_OG_IMAGE_URL ?? `${siteUrl}/RichRosalesFavi.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rich Rosales",
    template: "%s | Rich Rosales",
  },
  description:
    "Official website of Rich Rosales, comedy creator with 1.3M TikTok followers, premium brand partnerships, and media enquiries.",
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
      "Official website of Rich Rosales, comedy creator with 1.3M TikTok followers, premium brand partnerships, and media enquiries.",
    url: siteUrl,
    siteName: "Rich Rosales",
    images: [
      {
        url: ogImageUrl,
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
      "Official website of Rich Rosales, comedy creator with 1.3M TikTok followers, premium brand partnerships, and media enquiries.",
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-256.png", sizes: "256x256", type: "image/png" },
    ],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
