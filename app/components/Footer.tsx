'use client'

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="text-white px-6 pt-8 sm:pt-12">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Top: Logo and Navigation */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* Logo & Description */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <img
                src="/img/logo.svg"
                alt="SniperThink Logo"
              />
              <p className="text-sm sm:text-base text-gray-400 max-w-full md:max-w-md">
                SniperThink delivers clarity, automation, and AI-driven execution for fast-moving teams.
                Your edge starts here.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500 pt-4">
              <a href="/terms" className="hover:underline">
                Terms & Conditions
              </a>
              <span className="align-middle">|</span>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 gap-8 border-t border-gray-700 pt-8 lg:border-t-0 lg:border-l lg:pl-16">
            <div className="flex flex-col gap-4 text-sm sm:text-base">
              <a href="/" className="flex items-center justify-between gap-2 pb-1 border-b border-white/ border-b border-white/20">
                <span>Home</span>
                <img src="/img/Chevron-Right.svg" alt="chevron" className="w-3 h-3" />
              </a>
              <a href="/" className="flex items-center justify-between gap-2 pb-1 border-b border-white/20">
                <span>About Us</span>
                <img src="/img/Chevron-Right.svg" alt="chevron" className="w-3 h-3" />
              </a>
            </div>
            <div className="flex flex-col gap-4 text-sm sm:text-base">
              <a href="#our-products" className="flex items-center justify-between gap-2 pb-1 border-b border-white/80">
                <span>Products</span>
                <img src="/img/Chevron-Right.svg" alt="chevron" className="w-3 h-3" />
              </a>
              <a href="#right-faqs" className="flex items-center justify-between gap-2 pb-1 border-b border-white/20">
                <span>FAQs</span>
                <img src="/img/Chevron-Right.svg" alt="chevron" className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 pb-9 flex flex-col md:flex-row justify-between items-center text-sm sm:text-base text-gray-500 gap-4">
          <div className="text-center md:text-left">
            <p>© 2025 SniperThink, All Rights Reserved</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-4 pt-4 sm:pt-0 sm:pl-4">
            <span className="text-white text-sm sm:text-base">Connect with us:</span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/sniperthink"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src="/img/facebook.svg" alt="Facebook" className="hover:opacity-80" />
              </a>
              <a
                href="https://www.instagram.com/sniperthink/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src="/img/insta.svg" alt="Instagram" className="hover:opacity-80" />
              </a>
              <a
                href="https://www.linkedin.com/company/sniperthink/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src="/img/linkedin.svg" alt="LinkedIn" className="hover:opacity-80" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
