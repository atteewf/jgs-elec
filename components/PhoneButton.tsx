"use client";

import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import PhonePopup from "./PhonePopup";

interface PhoneButtonProps {
  children: React.ReactNode;
  className?: string;
}

function PhoneButton({ children, className = "" }: PhoneButtonProps) {
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (window.innerWidth > 768) {
      e.preventDefault();
      setShowPhonePopup(true);
    }
  };

  return (
    <>
      <a href="tel:0768752487" onClick={handleClick} className={className}>
        {children}
      </a>

      <PhonePopup
        isOpen={showPhonePopup}
        onClose={() => setShowPhonePopup(false)}
      />
    </>
  );
}

export default PhoneButton;
