import React from "react";

const Navbar = ({ onNewTicket }) => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-xl font-bold text-gray-800">
          CS — Ticket System
        </div>

        {/* Menu Items */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <li className="hover:text-purple-600 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-purple-600 cursor-pointer transition">
              FAQ
            </li>
            <li className="hover:text-purple-600 cursor-pointer transition">
              Changelog
            </li>
            <li className="hover:text-purple-600 cursor-pointer transition">
              Blog
            </li>
            <li className="hover:text-purple-600 cursor-pointer transition">
              Download
            </li>
            <li className="hover:text-purple-600 cursor-pointer transition">
              Contact
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
      <div className="md:hidden mt-4 flex justify-center gap-4 flex-wrap text-xs text-gray-600">
        <span className="cursor-pointer">Home</span>
        <span className="cursor-pointer">FAQ</span>
        <span className="cursor-pointer">Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
