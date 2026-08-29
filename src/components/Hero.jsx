import React from 'react';
import { ArrowDown, Flame, Sparkles } from 'lucide-react';
import { MARQUEE_ITEMS } from '../data/studioData.js';

export default function Hero({ onOpenContact }) {
  return (
    <section id="hero-section" className="relative w-full min-h-[92vh] bg-[#0c0c0c] flex flex-col justify-between pt-20 pb-0 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff3b19]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main hero card container */}
      <div className="relative w-full px-4 sm:px-6 flex-1 flex flex-col justify-between">
        
        {/* Top bar inside hero image / canvas */}
        <div className="flex items-start justify-between z-20 pt-4">
          {/* Left Hero sub-menu with dots */}
          <div className="flex flex-col gap-1.5 text-white/90">
            <span className="font-bebas text-lg tracking-wider text-white">STREET ID STUDIO</span>
            <div className="flex flex-col gap-1 pl-1">
              <a href="#about" className="text-[11px] font-montserrat font-bold tracking-widest text-white/80 hover:text-[#ff3b19] transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b19]"></span>
                ABOUT THE STUDIO
              </a>
              <a href="#works" className="text-[11px] font-montserrat font-bold tracking-widest text-white/70 hover:text-[#ff3b19] transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                OUR WORKS
              </a>
              <a href="#what-we-do" className="text-[11px] font-montserrat font-bold tracking-widest text-white/70 hover:text-[#ff3b19] transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                WHAT WE DO
              </a>
              <a href="#contacts" className="text-[11px] font-montserrat font-bold tracking-widest text-white/70 hover:text-[#ff3b19] transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                CONTACTS
              </a>
            </div>
          </div>

          {/* Right hero CTA button */}
          <div>
            <button
              onClick={onOpenContact}
              className="bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-extrabold text-xs tracking-wider px-6 py-2.5 rounded-full transition-all duration-200 shadow-xl shadow-[#ff3b19]/40 hover:scale-105 active:scale-95 cursor-pointer uppercase"
            >
              WRITE TO THE STUDIO
            </button>
          </div>
        </div>

        {/* Center Hero Visual (Model with futuristic silver glasses looking up) */}
        <div className="relative my-auto py-6 sm:py-10 flex items-center justify-center">
          <div className="relative w-full max-w-2xl mx-auto aspect-[16/11] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            {/* Streetwear Model Photo */}
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=85"
              alt="Street ID Studio Cyberpunk Streetwear Model"
              className="w-full h-full object-cover object-center brightness-95 contrast-110 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Subtle dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

            {/* Asphalt grunge texture highlight */}
            <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Interactive tag overlay */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[10px] font-mono tracking-widest text-[#ff3b19] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff3b19] animate-ping" />
              DROP 2026 // LIVE
            </div>
          </div>
        </div>

        {/* Hero Bottom text overlays */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left z-20 pb-2">
          <div className="font-montserrat font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white/90">
            WE BUILD BRANDS <br/> AND SHAPE DIGITAL EXPERIENCES
          </div>
          <div className="font-montserrat font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white/90 text-center sm:text-right">
            WE CREATE DIGITAL EXPERIENCES<br className="hidden sm:inline" /> AND TRANSFORM IDEAS INTO IMPACT
          </div>
        </div>
      </div>

      {/* Massive Bold Typography with Marquee Ribbon split */}
      <div className="relative w-full select-none pt-4">
        {/* Giant Top Headline Text */}
        <div className="w-full text-center overflow-hidden leading-none">
          <h1 className="font-bebas text-[18vw] sm:text-[17vw] lg:text-[15vw] leading-[0.78] tracking-tight text-white uppercase font-normal scale-y-110">
            PENTA PRIZM
          </h1>
        </div>

        {/* Red Warning/Caution Ribbon Tape with Running Marquee */}
        <div className="relative z-30 w-full bg-[#ff3b19] text-white py-2 sm:py-3 shadow-2xl overflow-hidden -mt-3 sm:-mt-6">
          <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] items-center">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <span key={idx} className="flex items-center gap-4 mx-3 sm:mx-6 font-montserrat font-black text-xs sm:text-sm tracking-widest uppercase text-white">
                <span>{item}</span>
                <span className="text-black/50 font-bold">//</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
