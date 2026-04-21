"use client";

import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-dark py-6">
      {/* Version mobile - plusieurs lignes */}
      <div className="block md:hidden text-center text-gray-100 text-sm space-y-1">
        <div>Siret : 995 024 049 00018</div>
        <div>N° Assurance : 191096918 J - MCE - 001</div>
        <div>© 2025 JGS ELEC</div>

        {/* Liens légaux mobile */}
        <div className="flex gap-3 justify-center pt-2 text-xs">
          <Link
            href="/mentions-legales"
            className="hover:text-cta transition-colors underline"
          >
            Mentions légales
          </Link>
          <span>•</span>
          <Link
            href="/politique-confidentialite"
            className="hover:text-cta transition-colors underline"
          >
            Confidentialité
          </Link>
        </div>
      </div>

      {/* Version desktop - une ligne */}
      <div className="hidden md:block text-center text-gray-100">
        <div className="text-lg mb-2">
          Siret : 995 024 049 00018 | N° Assurance : 191096918 J - MCE - 001 | ©
          2025 JGS ELEC - Tous droits réservés
        </div>

        {/* Liens légaux desktop */}
        <div className="flex gap-4 justify-center text-sm mt-3">
          <Link
            href="/mentions-legales"
            className="hover:text-cta transition-colors"
          >
            Mentions légales
          </Link>
          <span>•</span>
          <Link
            href="/politique-confidentialite"
            className="hover:text-cta transition-colors"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>

      {/* Réseaux sociaux */}
      <div className="flex p-2 gap-4 justify-center text-gray-100 text-3xl md:text-4xl mt-4">
        <Link
          href="https://www.linkedin.com/company/jgs-elec/?originalSubdomain=fr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cta transition-colors"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://www.facebook.com/people/Jgs-Elec/61584087266005/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cta transition-colors"
        >
          <FaFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/jgs_elec?igsh=djVleGk3bXN5aXBk"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cta transition-colors"
        >
          <FaInstagram />
        </Link>
      </div>
    </footer>
  );
}
