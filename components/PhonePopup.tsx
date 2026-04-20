"use client";

import { FaPhone, FaTimes } from "react-icons/fa";

interface PhonePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhonePopup({ isOpen, onClose }: PhonePopupProps) {
  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText("0768752487");
    alert("Numéro copié !");
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-8 max-w-md mx-4 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes className="text-2xl" />
        </button>

        <div className="text-center">
          <div className="bg-cta/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaPhone className="text-4xl text-cta" />
          </div>
          
          <h3 className="text-2xl font-bold mb-2 text-primary-dark">
            Contactez-nous
          </h3>
          
          <p className="text-gray-600 mb-6">
            Appelez-nous pour un devis ou une intervention rapide
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
  );
}