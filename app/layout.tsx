import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "VP Digital",
  description:
    "Take your acommodations booking to another level.",
  openGraph: {
    type: "website",
    title: "Boost Web",
    description:
      "Take your acommodations booking to another level. #BookingSync #BookingSistem",
    url: "https://vpdigital.io",
  },
  keywords:
    "Sync Booking Calendar Acommodations System Website for Acommodations Apartments Villas Hotels Booking Management Softwere",
  metadataBase: new URL("https://acme.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${montserrat.variable} ${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
