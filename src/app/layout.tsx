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
  title: "B&B Allroundservice | Gebäudereinigung & Reparatur Lauf an der Pegnitz",
  description: "Ihr zuverlässiger Partner für Gebäudereinigung, Reparatur, Hausmeisterservice und Gartenpflege in Lauf an der Pegnitz, Nürnberg, Röthenbach und Umgebung.",
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
      <body className={`${syne.variable} ${spaceGrotesk.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
