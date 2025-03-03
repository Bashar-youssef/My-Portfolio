import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className="text-white hover:text-blue-400 transition duration-300 text-lg font-medium"
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
          <span className="text-blue-400">Bashar</span> Yousef
        </h1>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="text-3xl lg:hidden focus:outline-none transition-transform duration-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:items-center lg:space-x-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full lg:opacity-100 lg:translate-y-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 p-6 lg:p-0">
            <NavLink to="#">Home</NavLink>
            <a
              href="#about"
              className="hover:text-blue-400 transition duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
