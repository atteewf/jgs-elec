import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // Title classique (ce qui s'affiche dans l'onglet)
  title:
    "Électricien Boussy-Saint-Antoine (91) | Dépannage & Installation - JGS-ELEC",

  // Description (ce que Google affiche sous le titre dans les résultats)
  description:
    "Électricien à Boussy-Saint-Antoine (91), JGS-ELEC intervient pour dépannage, installation et rénovation électrique. Intervention rapide en Essonne et Val-de-Marne (94), devis gratuit.",

  // Mots-clés (optionnel, peu utilisé par Google mais ça ne coûte rien)
  keywords: [
    // Localisation principale
    "électricien Boussy-Saint-Antoine",
    "électricien 91800",
    "JGS-ELEC",

    // Services par département
    "dépannage électrique 91",
    "installation électrique Essonne",
    "rénovation électrique Essonne",
    "installation électrique Val-de-Marne 94",
    "rénovation électrique Val-de-Marne 94",
    "installation électrique Seine-et-Marne 77",
    "rénovation électrique Seine-et-Marne 77",

    // Services spécifiques
    "mise aux normes tableau électrique",
    "dépannage électrique urgence",
    "borne recharge voiture électrique",
    "installation domotique",

    "électricien Brunoy",
    "électricien Yerres",
    "électricien Varennes-Jarcy",

    "électricien Villecresnes",
    "électricien Mandres-les-Roses",
    "électricien Périgny-sur-Yerres",
    "électricien Boissy-Saint-Léger",

    "électricien Jarcy",
  ],

  // Auteur du site
  authors: [{ name: "JGS-ELEC" }],

  // Nom de l'application (optionnel)
  applicationName: "JGS-ELEC",

  // Canonical URL
  alternates: {
    canonical: "https://www.jgs-elec.com",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // ⚠️ AJOUT : Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.jgs-elec.com",
    siteName: "JGS-ELEC",
    title: "JGS-ELEC | Électricien à Boussy-Saint-Antoine (91)",
    description:
      "Dépannage, installation et rénovation électrique en Essonne (91) et Val-de-Marne (94). Intervention rapide 7j/7. Devis gratuit.",
    images: [
      {
        url: "https://www.jgs-elec.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JGS-ELEC - Électricien Boussy-Saint-Antoine",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "JGS-ELEC | Électricien à Boussy-Saint-Antoine (91)",
    description:
      "Dépannage, installation et rénovation électrique en Essonne (91) et Val-de-Marne (94). Intervention rapide 7j/7.",
    images: ["https://www.jgs-elec.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Géolocalisation */}
        <meta name="geo.region" content="FR-91" />
        <meta name="geo.placename" content="Boussy-Saint-Antoine" />
        <meta name="geo.position" content="48.6895;2.5312" />
        <meta name="ICBM" content="48.6895, 2.5312" />

        {/* Favicon - Code généré par RealFaviconGenerator */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* JSON-LD */}
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
