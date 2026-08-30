import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare, Flame } from 'lucide-react';
import { NAV_LINKS } from '../data/studioData.js';

export default function Header({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3 shadow-2xl'
            : 'bg-transparent py-3 sm:py-4 md:py-6'
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            id="header-logo"
            className="flex items-center gap-2 group min-h-[44px]"
          >
            <span className="font-bebas text-2xl sm:text-3xl tracking-wider text-white group-hover:text-[#ff3b19] transition-colors">
              PENTA PRIZM
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#ff3b19] animate-pulse"></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                id={`nav-${link.id}`}
                className="font-montserrat text-xs font-bold uppercase tracking-widest text-white/80 hover:text-[#ff3b19] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff3b19] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3 md:gap-4">
            <span className="text-[11px] font-mono tracking-widest text-white/40 uppercase hidden xl:inline-block">
              LET'S START
            </span>
            <button
              id="header-contact-btn"
              onClick={onOpenContact}
              className="bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-bold text-xs uppercase tracking-wider px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-[#ff3b19]/30 hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer min-h-[40px]"
            >
              <span>APPLICATION FORM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-contact-trigger"
              onClick={onOpenContact}
              className="bg-[#ff3b19] text-white text-[11px] font-bold px-3 py-2 rounded-full uppercase min-h-[36px] flex items-center justify-center"
            >
              Get In Touch
            </button>
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-white/90 hover:text-white rounded-lg hover:bg-white/5 active:bg-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center px-8 py-12 lg:hidden"
        >
          <div className="flex flex-col gap-6 text-center">
            <span className="text-[#ff3b19] font-marker text-lg">
              // STREET ID 2026 //
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-bebas text-3xl tracking-widest text-white hover:text-[#ff3b19] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full bg-[#ff3b19] text-white font-montserrat font-bold text-sm uppercase py-4 rounded-full shadow-xl shadow-[#ff3b19]/30"
              >
                CONTACT STUDIO
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
