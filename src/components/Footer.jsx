import React from 'react';
import { ArrowUp, Heart, Instagram, Facebook, Linkedin, Send, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import { NAV_LINKS } from '../data/studioData.js';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacts" className="relative w-full bg-[#070707] text-white pt-16 sm:pt-20 pb-12 overflow-hidden border-t border-white/10">
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-20">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-12 sm:pb-14 border-b border-white/10">
          
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
                href="https://www.instagram.com/penta_prizm/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 hover:bg-[#ff3b19] hover:border-[#ff3b19] flex items-center justify-center transition-colors font-bold text-xs min-w-[40px] min-h-[40px]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 hover:bg-[#ff3b19] hover:border-[#ff3b19] flex items-center justify-center transition-colors min-w-[40px] min-h-[40px]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/+917306043445?text=Hi%20Penta%20Prizm%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 hover:bg-[#ff3b19] hover:border-[#ff3b19] flex items-center justify-center transition-colors min-w-[40px] min-h-[40px]"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 hover:bg-[#ff3b19] hover:border-[#ff3b19] flex items-center justify-center transition-colors min-w-[40px] min-h-[40px]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:pentaprizmofficial@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 hover:bg-[#ff3b19] hover:border-[#ff3b19] flex items-center justify-center transition-colors min-w-[40px] min-h-[40px]"
                aria-label="Gmail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest font-bold block mb-4">
              // NAVIGATION
            </span>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="font-montserrat text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white hover:translate-x-1 transition-all py-1"
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
                <a href="mailto:pentaprizmofficial@gmail.com" className="hover:text-white underline py-0.5">
                  pentaprizmofficial@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ff3b19] shrink-0" />
                <a href="tel:+917306043445" className="hover:text-white py-0.5">
                  +91 73060 43445
                </a>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={onOpenContact}
                className="w-full bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-bold text-xs uppercase tracking-wider py-3.5 rounded-full transition-transform active:scale-95 cursor-pointer min-h-[44px]"
              >
                Get In Touch
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 text-center sm:text-left">
          <div>
            © 2026 PENTA PRIZM. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white/70 hover:text-[#ff3b19] transition-colors cursor-pointer py-1 min-h-[36px]"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
