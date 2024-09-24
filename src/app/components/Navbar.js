"use client";
import React, { useState } from "react";
import { navData } from "../constants/data.js";
import "../style/navbar.css";
import NextButton from "./NextButton.js";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="navbar-custom">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenu}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenu ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="flex h-16 flex-1 justify-between sm:justify-between items-center">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="w-auto h-16"
                src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Flogo.png&w=256&q=75"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex space-x-4">
                {navData.map((link) => (
                  <a
                    key={link.key}
                    href={link.route}
                    className="rounded-md px-3 py-2 text-sm  text-white"
                  >
                    {link.name}
                  </a>
                ))}
                <NextButton btnName={"Enquire Now"} btnClass={"navBtn"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {mobileMenu && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
            {navData.map((link) => (
              <a
                key={link.key}
                href={link.route}
                className="rounded-md px-3 py-2 text-sm  text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
