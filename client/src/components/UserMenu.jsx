import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import AuthContext from "../context/authContext";

export const UserMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, handleSignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleMenuAction = (action) => {
    toggleDropdown();
    if (action) {
      action();
    }
  };

  const handleNavigation = (path) => {
    toggleDropdown();
    navigate(path);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="icon-link">
        <UserIcon className="icon-pulse ml-1 w-8 h-8 text-red-500 hover:animate-pulse" />
      </button>
      {showDropdown && (
        <div
          id="user-menu"
          className="dropdown-menu-arrow absolute right-0 mt-2 py-2 w-flex bg-red-500 rounded-lg shadow-xl border border-white"
        >
          {user ? (
            <>
              <div className="menu-item border-b border-white border-opacity-50">
                {t("Welcome")}, {user.email}
              </div>
              {/* Placeholder links */}
              <div onClick={() => handleNavigation("#")} className="menu-item">
               { t("Upload Images")}
              </div>
              <div
                onClick={() => handleNavigation("#")}
                className="menu-item border-b border-white border-opacity-50"
              >
                {t("Orders History")}
              </div>
              <button
                onClick={() => handleMenuAction(handleSignOut)}
                className="menu-item"
              >
               {t(" Sign out")}
              </button>
            </>
          ) : (
            <>
              <div
                onClick={() => handleNavigation("/sign-in")}
                className="menu-item border-b border-white border-opacity-50"
              >
                {t("Sign in")}
              </div>
              <div
                onClick={() => handleNavigation("/sign-up")}
                className="menu-item"
              >
                {t("Sign up")}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
