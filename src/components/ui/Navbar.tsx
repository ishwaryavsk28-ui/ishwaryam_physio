"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { CLINIC_DATA } from "@/lib/clinic-data";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-border py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 md:w-14 h-14 rounded-full overflow-hidden border-2 border-accent/20 bg-white shadow-sm flex-shrink-0 flex items-center justify-center aspect-square p-0.5">
            <img 
              src="/logo.png" 
              alt={CLINIC_DATA.shortName}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold tracking-tight transition-all duration-300 ${scrolled ? 'text-xl text-primary' : 'text-2xl text-white'}`}>
              {CLINIC_DATA.shortName}
            </span>
            <span className={`text-[8px] font-ui font-bold uppercase tracking-[0.3em] transition-all duration-300 ${scrolled ? 'text-text-muted' : 'text-white/60'}`}>
              Physiotherapy speciality clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[11px] font-ui font-bold uppercase tracking-[0.2em] transition-colors relative group py-2 ${scrolled ? 'text-text-primary' : 'text-white'}`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          
          <Link
            href={CLINIC_DATA.contact.whatsappLink}
            target="_blank"
            className={`px-8 py-3 rounded-button font-ui font-bold text-[11px] uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
              scrolled
                ? "bg-primary text-white hover:bg-accent hover:shadow-lg"
                : "bg-white text-primary hover:bg-accent hover:text-white"
            }`}
          >
            Find Cure
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? 'text-text-primary' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border p-8 shadow-xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-display font-bold text-text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={CLINIC_DATA.contact.whatsappLink}
                target="_blank"
                className="w-full bg-primary text-white py-5 rounded-button text-center font-ui font-bold text-sm uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
