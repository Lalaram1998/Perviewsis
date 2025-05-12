"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="font-display w-full border-b border-gray-300 bg-white text-gray-800">
      <nav className="flex items-center justify-between h-[65px] px-4 md1:px-8 lg:px-16 mx-auto max-w-screen-xl">
        {/* Logo */}
        <div className="flex items-center text-2xl font-medium font-bold">
          <span className="font-bold">PERV</span>
          <span className="text-orange-400 font-bold scale-y-[-1]">i</span>
          <span className="font-bold">EWS</span>
          <span className="text-orange-400 font-bold">i</span>
          <span className="font-bold">S</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md1:flex gap-6 lg:gap-8 text-sm mx-4 items-center">
          <li>
            <Link href="/" className="hover:text-orange-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/feature" className="hover:text-orange-400">
              Features
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-orange-400">
              Use-cases
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-orange-400">
              How it Works
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-orange-400">
              Integrations
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-orange-400">
              Resources
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-orange-400">
              About
            </Link>
          </li>
        </ul>

        {/* Book a Demo & Mobile Icon */}
        <div className="flex items-center gap-4">
          <button className="hidden md1:inline-block bg-orange-400 text-white cursor-pointer px-4 py-1 rounded-3xl font-medium text-sm tracking-[0.5px] whitespace-nowrap">
            Book a Demo
          </button>
          <button
            className="md1:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md1:hidden bg-white text-gray-800 px-6 py-4 border-t border-gray-200">
          <ul className="flex flex-col gap-4 text-sm items-center text-center">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/feature"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-400"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-400"
              >
                Use-cases
              </Link>
            </li>
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-400"
              >
                How it Works
              </Link>
            </li>
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-400"
              >
                Integrations
              </Link>
            </li>
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-400"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-400"
              >
                About
              </Link>
            </li>
            <li>
              <button className="bg-orange-400 cursor-pointer text-white px-4 py-2 rounded-3xl font-medium text-sm whitespace-nowrap">
                Book a Demo
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
