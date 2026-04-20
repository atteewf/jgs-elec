"use client";

import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-dark py-4">
      {/* Version mobile - plusieurs lignes */}
      <div className="block md:hidden text-center text-gray-100 text-sm">
        <div>Siret : 995 024 049 00018</div>
        <div>N° Assurance : 191096918 J - MCE - 001</div>
        <div>© 2026 JGS ELEC</div>
      </div>
      {/* Version desktop - une ligne */}
      <div className="hidden md:block text-center text-gray-100 text-2xl">
        Siret : 995 024 049 00018 | N° Assurance : 191096918 J - MCE - 001 |
        Copyright : © 2026 JGS ELEC - Tous droits réservés
      </div>
      <div className="flex p-2 gap-4 justify-center text-gray-100 md:text-5xl mt-2">
        <Link
          href="https://www.linkedin.com/company/jgs-elec/?originalSubdomain=fr"
          target="_blank"
          className="hover:text-accent transition-colors"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://www.facebook.com/people/Jgs-Elec/61584087266005/"
          target="_blank"
          className="hover:text-accent transition-colors"
        >
          <FaFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/jgs_elec?igsh=djVleGk3bXN5aXBk"
          target="_blank"
          className="hover:text-accent transition-colors"
        >
          <FaInstagram />
        </Link>
      </div>
    </footer>
  );
}
