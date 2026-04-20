"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { useState } from "react";
import PhonePopup from "@/components/PhonePopup";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  const handlePhoneClick = (e: React.MouseEvent) => {
    if (window.innerWidth > 768) {
      e.preventDefault();
      setShowPhonePopup(true);
    }
  };

  return (
    <>
      <nav className="bg-primary-dark py-4 px-6 flex flex-wrap items-center justify-between shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/JGS-ELEC_LOGO_SANS_FOND.PNG"
            width={200}
            height={80}
            alt="Logo JGS-ELEC électricien Boussy-Saint-Antoine"
          />
        </div>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
        </button>

        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-white hover:text-accent">
            Accueil
          </Link>

          <Link href="/services" className="text-white hover:text-accent">
            Services
          </Link>

          <Link href="/temoignages" className="text-white hover:text-accent">
            Témoignages
          </Link>

          <Link href="/contact" className="text-white hover:text-accent">
            Contact
          </Link>
        </div>
        <div
          className={`flex-col gap-4 p-4 bg-primary-dark shadow-md w-full md:hidden ${isOpen ? "flex" : "hidden"}`}
        >
          <Link href="/" className="text-white hover:text-accent">
            Accueil
          </Link>
          <Link href="/services" className="text-white hover:text-accent">
            Services
          </Link>
          <Link href="/temoignages" className="text-white hover:text-accent">
            Témoignages
          </Link>
          <Link href="/contact" className="text-white hover:text-accent">
            Contact
          </Link>
        </div>

        <a
          href="tel:0768752487"
          onClick={handlePhoneClick}
          className="bg-cta text-white px-4 py-2 rounded hover:bg-cta-hover flex items-center gap-2 transition-colors"
        >
          <FaPhone />
          Appeler
        </a>
      </nav>

      <PhonePopup
        isOpen={showPhonePopup}
        onClose={() => setShowPhonePopup(false)}
      />
    </>
  );
}
