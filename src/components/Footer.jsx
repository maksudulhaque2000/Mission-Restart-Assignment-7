import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              CS — Ticket System
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 CS — Ticket System. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white font-semibold text-sm">
                Social Links
              </span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  🔗 @CS — Ticket System
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  🔗 @CS — Ticket System
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  🔗 @CS — Ticket System
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  ✉️ Support@cs.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
