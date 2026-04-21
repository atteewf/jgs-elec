"use client";

import { useState, useEffect } from "react";
import { FaArrowUp, FaPhone, FaTimes } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleUrgenceClick = (e: React.MouseEvent) => {
    // Sur mobile, laisser le lien tel: fonctionner
    // Sur desktop (largeur > 768px), afficher le popup
    if (window.innerWidth > 768) {
      e.preventDefault();
      setShowPopup(true);
    }
    // Sur mobile, le href="tel:" fonctionne normalement
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("0768752487");
    alert("Numéro copié !");
  };

  return (
    <>
      {/* Bouton retour en haut */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-all z-50"
          aria-label="Retour en haut"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}

      {/* Bouton dépannage urgence */}
      <a
        href="tel:0768752487"
        onClick={handleUrgenceClick}
        className="hidden md:flex fixed bottom-8 left-8 bg-yellow-400 text-black px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all z-50 flex items-center gap-2 font-bold"
      >
        <span className="text-xl">⚠️</span>
        <span className="hidden md:inline">Dépannage en urgence</span>
      </a>

      {/* Popup Desktop */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 relative shadow-2xl">
            {/* Bouton fermer */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Contenu */}
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">⚠️</span>
              </div>

              <h3 className="text-2xl font-bold mb-2 text-primary-dark">
                Dépannage en urgence
              </h3>

              <p className="text-gray-600 mb-6">
                Appelez-nous maintenant pour une intervention rapide
              </p>

              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="text-3xl font-bold text-primary-dark">
                  07 68 75 24 87
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href="tel:0768752487"
                  className="flex-1 bg-cta text-white px-6 py-3 rounded hover:bg-cta-hover transition-colors flex items-center justify-center gap-2 font-semibold"
                >
                  <FaPhone />
                  Appeler
                </a>
                <button
                  onClick={copyToClipboard}
                  className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300 transition-colors font-semibold"
                >
                  Copier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
