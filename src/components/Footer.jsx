import React from 'react';
import { ArrowUp, Heart, Instagram, Send, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import { NAV_LINKS } from '../data/studioData.js';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacts" className="relative w-full bg-[#070707] text-white pt-20 pb-12 overflow-hidden border-t border-white/10">
      <div className="w-full px-4 sm:px-6 relative z-20">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-bebas text-4xl sm:text-5xl text-white tracking-wider">
                  PENTA PRIZM
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff3b19] animate-pulse" />
              </div>
              <p className="font-montserrat text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed mb-6">
                Creative & technology-driven studio. <br/>
                We build brands, create content, and develop digital experiences.<br/>
                Branding, creative production, web & app development, marketing, and digital growth.<br/>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 hover:bg-[#ff3b19] hover:border-[#ff3b19] flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://vk.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 hover:bg-[#ff3b19] hover:border-[#ff3b19] flex items-center justify-center transition-colors font-bold text-xs"
                aria-label="VK"
              >
                VK
              </a>
              <a
                href="https://behance.net/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 hover:bg-[#ff3b19] hover:border-[#ff3b19] flex items-center justify-center transition-colors font-bold text-xs"
                aria-label="Behance"
              >
                Be
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 hover:bg-[#ff3b19] hover:border-[#ff3b19] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest font-bold block mb-4">
              // НАВИГАЦИЯ
            </span>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="font-montserrat text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white hover:translate-x-1 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest font-bold block mb-4">
              // LET'S CONNECT
            </span>
            <div className="space-y-3 text-xs font-montserrat text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff3b19] shrink-0 mt-0.5" />
                <span>Kaloor, Kochi, Kerala</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ff3b19] shrink-0" />
                <a href="mailto:pentaprizmofficial@gmail.com" className="hover:text-white underline">
                  pentaprizmofficial@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ff3b19] shrink-0" />
                <a href="tel:+917306043445" className="hover:text-white">
                  +91 73060 43445
                </a>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={onOpenContact}
                className="w-full bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-bold text-xs uppercase tracking-wider py-3 rounded-full transition-transform active:scale-95 cursor-pointer"
              >
                Связаться с нами
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © 2026 PENTA PRIZM. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-white/70 hover:text-[#ff3b19] transition-colors cursor-pointer"
            >
              <span>НАВЕРХ</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
