import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
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
    <html lang="de" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
