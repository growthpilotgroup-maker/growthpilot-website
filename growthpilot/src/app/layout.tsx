import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import ContactModalPortal from "@/components/ContactModalPortal";
import { ContactModalProvider } from "@/context/ContactModalContext";
import "./globals.css";

// Clash Display & Satoshi are not on Google Fonts — load from Fontshare via CSS
// We wire them up as CSS variables in globals.css and reference them in Tailwind.
// Playfair Display is on Google Fonts — load via next/font.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

// Geist kept as the fallback body font until Satoshi/Clash load from Fontshare
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Growthpilot Group | Elite Digital Systems",
  description:
    "Premium AI automation, paid advertising, and scalable digital systems engineered for modern businesses.",
  keywords: [
    "AI automation",
    "paid advertising",
    "digital marketing",
    "web development",
    "SEO",
    "business growth",
  ],
  authors: [{ name: "Growthpilot Group" }],
  creator: "Growthpilot Group",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://growthpilotgroup.com",
    title: "Growthpilot Group | Elite Digital Systems",
    description:
      "Premium AI automation, paid advertising, and scalable digital systems engineered for modern businesses.",
    siteName: "Growthpilot Group",
    images: [
      {
        url: "https://growthpilotgroup.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growthpilot Group - Elite Digital Systems",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growthpilot Group | Elite Digital Systems",
    description:
      "Premium AI automation, paid advertising, and scalable digital systems engineered for modern businesses.",
    images: ["https://growthpilotgroup.com/og-image.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fontshare — Clash Display + Satoshi */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600&f[]=satoshi@700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${playfair.variable} ${geistSans.variable} antialiased`}
      >
        <ContactModalProvider>
          <Navbar />
          {children}
          <ContactModalPortal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
