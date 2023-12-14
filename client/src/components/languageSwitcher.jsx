// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";

// export const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => setShowDropdown(!showDropdown);

//   const handleLanguageChange = (language) => {
//     i18n.changeLanguage(language);
//     toggleDropdown();
//   };

//   return (
//     <div className="relative">
//       <button className="dropdown-btn" onClick={toggleDropdown}>
//         <GlobeEuropeAfricaIcon className="icon-spin ml-2 w-8 h-8 text-red-500 hover:animate-spin" />
//       </button>
//       {showDropdown && (
//         <ul className="dropdown-menu-arrow absolute right-0 mt-2 py-2 w-flex bg-red-500 rounded-lg shadow-xl border border-white">
//           <li className="dropdown-item">
//             <button
//               onClick={() => handleLanguageChange("en")}
//               className="text-white"
//             >
//               English
//             </button>
//           </li>
//           <li className="dropdown-item">
//             <button
//               onClick={() => handleLanguageChange("bg")}
//               className="text-white"
//             >
//               Bulgarian
//             </button>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// let countries = [
//   {
//     code: "bg",
//     name: "Bulgarian",
//     country_code: "bg",
//   },
//   {
//     code: "en",
//     name: "English",
//     country_code: "gb",
//   },
//   // ... Add other countries as needed
// ];

// export const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleLanguageChange = (language) => {
//     i18n.changeLanguage(language);
//     setShowDropdown(false);
//   };

//   return (
//     <div className="relative">
//       <button
//         className="dropdown-btn"
//         onClick={() => setShowDropdown(!showDropdown)}
//       >
//         <GlobeEuropeAfricaIcon className="icon-spin ml-2 w-8 h-8 text-red-500 hover:animate-spin" />
//       </button>

//       {showDropdown && (
//         <div
//           className="dropdown-menu-arrow z-10 mx-3 origin-top absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
//         >
//           <div className="px-1 py-1">
//             {countries.map((lng) => (
//               <button
//                 key={lng.code}
//                 onClick={() => handleLanguageChange(lng.code)}
//                 className={classNames(
//                   "group flex items-center space-x-2 px-4 py-2 text-sm cursor-pointer",
//                   i18n.language === lng.code ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
//                 )}
//                 disabled={i18n.language === lng.code}
//               >
//                 <span className={`fi fi-${lng.country_code}`}></span>
//                 <span>{lng.name}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";

let countries = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "bg",
    name: "Bulgarian",
    country_code: "bg",
  },
  // Add more languages here if needed
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setShowDropdown(false); // Hide dropdown after selection
  };

  return (
    <div className="relative">
      <button
        className="dropdown-btn"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <GlobeEuropeAfricaIcon className="icon-spin ml-2 w-8 h-8 text-red-500 hover:animate-spin" />
      </button>
  
      {showDropdown && (
        <ul className="dropdown-menu-arrow absolute right-0 mt-2 py-2 w-flex bg-red-500 rounded-lg shadow-xl border border-white">
          {countries.map((lng) => (
            <li key={lng.code} className="dropdown-item">
              <button
                onClick={() => handleLanguageChange(lng.code)}
                className={`text-white hover:bg-red-700 p-2 rounded-sm w-full`}
                >
                {lng.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

}
