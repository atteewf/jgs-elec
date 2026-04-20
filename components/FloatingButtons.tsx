
"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import PhonePopup from "./PhonePopup";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleUrgenceClick = (e: React.MouseEvent) => {
    if (window.innerWidth > 768) {
      e.preventDefault();
      setShowPhonePopup(true);
    }
  };

  return (
    <>
      {/* Bouton retour haut */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-all z-50"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}

      {/* Bouton urgence */}
      <a
        href="tel:0768752487"
        onClick={handleUrgenceClick}
        className="fixed bottom-8 left-8 bg-yellow-400 text-black px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all z-50 flex items-center gap-2 font-bold"
      >
        <span className="text-xl">⚠️</span>
        <span className="hidden md:inline">Dépannage en urgence</span>
        <span className="md:hidden">Urgence</span>
      </a>

      <PhonePopup isOpen={showPhonePopup} onClose={() => setShowPhonePopup(false)} />
    </>
  );
}