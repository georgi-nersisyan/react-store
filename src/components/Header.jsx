import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full flex justify-between items-center p-5 bg-gray-700">
      <nav>
        <ul className="flex items-center gap-7"> 
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "text-componyColor" : "text-white transition-all hover:text-componyColor";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) => {
                return isActive ? "text-componyColor" : "text-white transition-all hover:text-componyColor";
              }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cart"
              className={({ isActive }) => {
                return isActive ? "text-componyColor" : "text-white transition-all hover:text-componyColor";
              }}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
