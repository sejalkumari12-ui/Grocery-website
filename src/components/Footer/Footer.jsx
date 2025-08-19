import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">
            Gr<span className="text-orange-500">o</span>cify
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Bred for a high content of beneficial substances. <br />
            Our products are all fresh and healthy.
          </p>
          <p className="mt-4 text-xs text-gray-500">
            2025 © All Rights Reserved
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">About</a></li>
            <li><a href="#" className="hover:text-orange-500">FAQ&apos;s</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Support center</a></li>
            <li><a href="#" className="hover:text-orange-500">Feedback</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact us</a></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Stay Connected</h3>
          <p className="text-sm mb-3">Questions or Feedback? we&apos;d love to hear from you.</p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-3 py-2 rounded-r-md hover:bg-orange-600 transition"
            >
              <IoIosArrowForward />
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

