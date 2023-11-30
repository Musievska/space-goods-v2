import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    toggleDropdown();
  };

  return (
    <div className="relative">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        <GlobeEuropeAfricaIcon className="icon-spin ml-2 w-8 h-8 text-red-500 hover:animate-spin" />
      </button>
      {showDropdown && (
        <ul className="dropdown-menu-arrow absolute right-0 mt-2 py-2 w-flex bg-red-500 rounded-lg shadow-xl border border-white">
          <li className="dropdown-item">
            <button
              onClick={() => handleLanguageChange("en")}
              className="text-white"
            >
              English
            </button>
          </li>
          <li className="dropdown-item">
            <button
              onClick={() => handleLanguageChange("bg")}
              className="text-white"
            >
              Bulgarian
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
