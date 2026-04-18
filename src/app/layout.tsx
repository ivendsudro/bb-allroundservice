import { Syne, Space_Grotesk, Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Gebäudereinigung Lauf an der Pegnitz | B&B Allroundservice",
  description: "Professionelle Gebäudereinigung, Gartenpflege & Reparaturen in Lauf a.d. Pegnitz. Familiengeführt, fair & zuverlässig. Jetzt kostenlos anfragen – 0176 2470 2350.",
  keywords: [
    "Gebäudereinigung", "Lauf an der Pegnitz", "Nürnberg", "Reparatur",
    "Hausmeisterservice", "Nürnberger Land", "Röthenbach", "Schnaittach",
    "Hersbruck", "Winterdienst", "Handwerker", "Entrümpelung"
  ],
  openGraph: {
    title: "B&B Allroundservice - Alles aus einer Hand",
    description: "Gebäudereinigung und Hausmeisterservice im gesamten Nürnberger Land.",
    locale: "de_DE",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "B&B Allroundservice",
              "description": "Gebäudereinigung, Gartenpflege, Reparaturen und Winterdienst im Nürnberger Land",
              "telephone": "+4917624702350",
              "email": "bballrounddienst@gmail.com",
              "url": "https://bballroundservice.vercel.app",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Simmelsdorf",
                "addressRegion": "Bayern",
                "addressCountry": "DE"
              },
              "areaServed": ["Lauf an der Pegnitz", "Nürnberg", "Röthenbach", "Schnaittach", "Hersbruck", "Schwaig", "Simmelsdorf"],
              "priceRange": "€€"
            })
          }}
        />
      </head>
      <body className={`${syne.variable} ${spaceGrotesk.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
