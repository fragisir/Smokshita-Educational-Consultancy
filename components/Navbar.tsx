"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Countries", href: "/countries" },
  { name: "Language Classes", href: "/language-classes" },
  { name: "Why Us", href: "/why-us" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-white py-4 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-full border-2 border-primary-100">
            <Image
              src="/images/logo.jpg"
              alt="Smokshita Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-blue-900 leading-none">SMOKSHITA</h1>
            <p className="text-xs text-blue-600 font-medium tracking-wide">EDUCATION CONSULTANCY</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors text-sm uppercase tracking-wide"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/book-counseling"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold shadow-lg transform hover:-translate-y-0.5 transition-all text-sm"
          >
            Book Counseling
          </Link>
        </div>


        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 font-medium text-lg border-b border-gray-50 pb-2 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/book-counseling"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white text-center py-3 rounded-lg font-bold shadow-md"
              >
                Book Counseling
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
