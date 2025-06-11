"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0e1525] text-white pt-10 pb-4 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl font-bold text-[#8c52ff]">
            <span className="text-[#00bcd4]">cici</span>play
          </h1>
        </div>

        {/* Buy Section */}
        <div>
          <h3 className="font-semibold mb-2">Buy</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>How To Buy</li>
            <li>Payment</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Privacy Policy</li>
            <li>Terms And Conditions</li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="font-semibold mb-2">Products</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>› Game Name</li>
            <li>› Game Name</li>
            <li>› Game Name</li>
            <li>› Game Name</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm mb-1">Contact Us</p>
            <div className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-4 py-2 rounded-md text-sm font-semibold text-center">
              CICIPLAY@gmail.com
            </div>
          </div>
          <div className="flex gap-3 text-white text-lg mt-1">
            <FaFacebookF className="hover:text-purple-400 transition" />
            <FaTwitter className="hover:text-purple-400 transition" />
            <FaInstagram className="hover:text-purple-400 transition" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-400">
        Copyright © 2021-2024 CICIPLAY.COM LIMITED Privacy Policy And Terms &
        Conditions
      </div>
    </footer>
  );
};

export default Footer;
