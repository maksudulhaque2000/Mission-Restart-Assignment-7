import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ onNewTicket }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-purple-600" : "text-gray-600";
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link
          to="/"
          className="text-xl font-bold text-gray-800 hover:text-purple-600 transition"
        >
          CS — Ticket System
        </Link>

        {/* Menu Items */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            <li>
              <Link
                to="/"
                className={`${isActive("/")} hover:text-purple-600 cursor-pointer transition`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className={`${isActive("/faq")} hover:text-purple-600 cursor-pointer transition`}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/changelog"
                className={`${isActive("/changelog")} hover:text-purple-600 cursor-pointer transition`}
              >
                Changelog
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`${isActive("/blog")} hover:text-purple-600 cursor-pointer transition`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/download"
                className={`${isActive("/download")} hover:text-purple-600 cursor-pointer transition`}
              >
                Download
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${isActive("/contact")} hover:text-purple-600 cursor-pointer transition`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* New Ticket Button */}
          <button
            onClick={onNewTicket}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition flex items-center gap-2"
          >
            <span className="text-lg">+</span> New Ticket
          </button>
        </div>
      </div>

      {/* Mobile Menu - Simplified */}
      <div className="md:hidden mt-4 flex justify-center gap-4 flex-wrap text-xs">
        <Link to="/" className={`${isActive("/")} cursor-pointer`}>
          Home
        </Link>
        <Link to="/faq" className={`${isActive("/faq")} cursor-pointer`}>
          FAQ
        </Link>
        <Link
          to="/contact"
          className={`${isActive("/contact")} cursor-pointer`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
