import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";

export const NavBar = () => {
  return (
    <header className="bg-space flex justify-between items-center px-6 py-3">
      <div className="flex relative">
        <Link to="/" className="icon-link">
          <HomeIcon className="icon-bounce" />
        </Link>
        <Link to="/products" className="link-style">
          Products
        </Link>
      </div>
      <div className="relative ml-auto flex">
        <Link to="/wishlist" className="icon-link">
          <HeartIcon className="icon-pulse" />
        </Link>
        <Link to="/cart" className="icon-link">
          <ShoppingCartIcon className="icon-pulse" />
        </Link>
        <Link to="/user" className="icon-link">
          <UserIcon className="icon-pulse" />
        </Link>
        <GlobeEuropeAfricaIcon className="icon-spin" />
      </div>
    </header>
  );
};

