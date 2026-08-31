import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'home', label: 'HOME', href: '/' },
  { id: 'services', label: 'SERVICES', href: '/services' },
  { id: 'portfolio', label: 'PORTFOLIO', href: '/portfolio' },
  { id: 'insights', label: 'INSIGHTS', href: '/insights' },
  { id: 'contact', label: 'CONTACT', href: '/contact' },
];

export default function Header({ onOpenContact, isLoaded = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={isLoaded ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3 shadow-2xl'
            : 'bg-transparent py-3 sm:py-4 md:py-6'
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            id="header-logo"
            className="flex items-center gap-2 group min-h-[44px]"
            aria-label="Penta Prizm – Home"
          >
            <span className="font-bebas text-2xl sm:text-3xl tracking-wider text-white group-hover:text-[#ff3b19] transition-colors">
              PENTA PRIZM
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#ff3b19] animate-pulse" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href ||
                (item.href !== '/' && location.pathname.startsWith(item.href));
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  id={`nav-${item.id}`}
                  className={`font-montserrat text-xs font-bold uppercase tracking-widest transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#ff3b19] after:transition-all ${
                    isActive
                      ? 'text-[#ff3b19] after:w-full'
                      : 'text-white/80 hover:text-[#ff3b19] after:w-0 hover:after:w-full'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-3 md:gap-4">
            <span className="text-[11px] font-mono tracking-widest text-white/40 uppercase hidden xl:inline-block">
              LET'S START
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="header-contact-btn"
              type="button"
              onClick={onOpenContact}
              className="bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-bold text-xs uppercase tracking-wider px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-[#ff3b19]/30 flex items-center gap-1.5 cursor-pointer min-h-[40px]"
            >
              <span>APPLICATION FORM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-contact-trigger"
              type="button"
              onClick={onOpenContact}
              className="bg-[#ff3b19] text-white text-[11px] font-bold px-3 py-2 rounded-full uppercase min-h-[36px] flex items-center justify-center"
            >
              Get In Touch
            </button>
            <button
              id="mobile-menu-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-white/90 hover:text-white rounded-lg hover:bg-white/5 active:bg-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            id="mobile-menu-overlay"
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center px-8 py-12 lg:hidden"
          >
            <nav className="flex flex-col gap-6 text-center" aria-label="Mobile navigation">
              <span className="text-[#ff3b19] font-bebas text-lg">
                // DIGITAL STUDIO 2026 //
              </span>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-bebas text-3xl tracking-widest text-white hover:text-[#ff3b19] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full bg-[#ff3b19] text-white font-montserrat font-bold text-sm uppercase py-4 rounded-full shadow-xl shadow-[#ff3b19]/30"
                >
                  CONTACT STUDIO
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
