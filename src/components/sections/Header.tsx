"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Truck } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "خدماتنا" },
  { href: "#why-us", label: "لماذا نحن" },
  { href: "#testimonials", label: "آراء العملاء" },
  { href: "#gallery", label: "معرض الأعمال" },
  { href: "#booking", label: "احجز الآن" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg shadow-navy-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-lg shadow-gold-400/20 group-hover:scale-110 transition-transform">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white leading-tight">
                شركة الوسيط
              </span>
              <span className="text-xs text-gold-400 font-medium">
                نقل وترحيل الأثاث
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+962791234567"
              className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-bold">079-123-4567</span>
            </a>
            <a
              href="#booking"
              className="btn-primary text-sm"
            >
              احصل على عرض سعر
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-950/98 backdrop-blur-md border-t border-white/10"
          >
            <nav className="container-custom mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-white/80 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="tel:+962791234567"
                  className="flex items-center justify-center gap-2 text-gold-400"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-bold">079-123-4567</span>
                </a>
                <a href="#booking" className="btn-primary text-center text-sm">
                  احصل على عرض سعر
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
