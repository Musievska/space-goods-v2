import { Link } from "react-router-dom";
import {
  HomeIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

import { LanguageSwitcher } from "./languageSwitcher";
import { UserMenu } from "../components/UserMenu";

export const NavBar = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-space flex justify-between items-center px-4 py-2">
      <div className="flex relative">
        <Link to="/" className="icon-link">
          <HomeIcon className="icon-bounce gap-2" />
        </Link>
        <Link to="/products" className="link-style">
          {t("Products")}
        </Link>
        <Link to="/gallery" className="link-style">
          {t("Gallery")}
        </Link>
      </div>
      <div className="relative ml-auto flex">
        <Link to="/wishlist" className="icon-link">
          <HeartIcon className="icon-pulse" />
        </Link>
        <Link to="/cart" className="icon-link">
          <ShoppingCartIcon className="icon-pulse" />
        </Link>
        <UserMenu />
        <LanguageSwitcher className="icon-spin" />
      </div>
    </header>
  );
};
