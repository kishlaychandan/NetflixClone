import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-[80%] mx-auto px-6">
        {/* Contact Info */}
        <div className="mb-8">
          <p className="text-sm">
            Questions? Call{" "}
            <a href="tel:000-800-919-1694" className="hover:underline">
              000-800-919-1694
            </a>
          </p>
        </div>

        {/* Links Container */}
        <div className="flex flex-wrap justify-between gap-8 mb-10">
          {/* Column 1 */}
          <div className="flex flex-col space-y-3">
           <Link to="/faq" className="hover:underline">
           Faq
           </Link>
            <a href="#" className="hover:underline">
              Investor Relations
            </a>
            <Link to="/privacy" className="hover:underline">
            Privacy</Link>
            <a href="#" className="hover:underline">
              Speed Test
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:underline">
              Help Centre
            </a>
            <a href="#" className="hover:underline">
              Jobs
            </a>
            <a href="#" className="hover:underline">
              Cookie Preferences
            </a>
            <a href="#" className="hover:underline">
              Legal Notices
            </a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:underline">
              Account
            </a>
            <a href="#" className="hover:underline">
              Ways to Watch
            </a>
            <a href="#" className="hover:underline">
              Corporate Information
            </a>
            <a href="#" className="hover:underline">
              Only on Netflix
            </a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:underline">
              Media Centre
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>

        {/* Language Selector */}
        <div className="mb-6">
          <button className="border border-gray-400 px-4 py-2 rounded text-sm flex items-center gap-2">
            <span>🌐</span> English
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-sm">Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;
