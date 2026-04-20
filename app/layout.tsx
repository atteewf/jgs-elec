import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JGS-ELEC | Électricien à Boussy-Saint-Antoine (91)",
  description:
    "Électricien à Boussy-Saint-Antoine (91), JGS-ELEC intervient pour dépannage, installation et rénovation électrique. Intervention rapide en Essonne et Val-de-Marne (94), devis gratuit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        <FloatingButtons />;
      </body>
    </html>
  );
}
