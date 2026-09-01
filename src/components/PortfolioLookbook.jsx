import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowUpRight,
  Compass,
  Layers,
  ChevronDown
} from 'lucide-react';
import { PENTA_SERVICES } from '../data/studioData.js';

export default function PortfolioLookbook({ onOpenCustom }) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cardRefs = useRef([]);

  // Intersection observer to track which card is currently centered in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-card-index'));
            if (!isNaN(index)) {
              setActiveCardIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-25% 0px -25% 0px',
        threshold: 0.2,
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCard = (index) => {
    setActiveCardIndex(index);
    const targetEl = cardRefs.current[index];
    if (targetEl) {
      const elRect = targetEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const targetHeight = elRect.height || 480;
      // Calculate offset so card is centered vertically in viewport
      const centerOffset = Math.max(70, (windowHeight - targetHeight) / 2);
      const offsetPosition = window.pageYOffset + elRect.top - centerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="works" className="w-full bg-[#080808] text-white relative">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[320px] sm:w-[650px] h-[320px] sm:h-[450px] bg-[#ff3b19]/8 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-4 w-52 sm:w-80 h-52 sm:h-80 bg-orange-600/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 left-4 w-52 sm:w-80 h-52 sm:h-80 bg-[#ff3b19]/6 rounded-full blur-[80px] sm:blur-[130px] pointer-events-none" />

      {/* ================= SECTION HEADER ================= */}
      <header className="pt-16 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6 sm:pb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-widest text-[#ff3b19] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff3b19] animate-pulse" />
              OUR CAPABILITIES // 06 CORE DOMAINS
            </div>

            <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.92]">
              WHAT WE BUILD. <br className="hidden sm:inline" />
              <span className="text-[#ff3b19]">HOW WE SCALE.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-montserrat text-xs sm:text-sm text-neutral-300 leading-relaxed mb-3">
              Explore our six specialized service verticals designed to take your brand from strategy and visual production to custom technology and measurable digital growth.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
              <ChevronDown className="w-3.5 h-3.5 text-[#ff3b19] animate-bounce" />
              <span>SCROLL DOWN TO VIEW EACH SERVICE CENTERED</span>
            </div>
          </div>
        </motion.div>

        {/* ================= STICKY QUICK-SELECT DECK TABS ================= */}
        <div className="sticky top-16 sm:top-20 z-30 pt-3 pb-2 bg-[#080808]/95 backdrop-blur-md border-b border-white/10 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 mt-2">
          <div className="flex items-center justify-between gap-2 max-w-6xl mx-auto">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 w-full sm:w-auto">
              {PENTA_SERVICES.map((s, idx) => {
                const isActive = activeCardIndex === idx;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollToCard(idx)}
                    id={`service-nav-pill-${s.num}`}
                    className={`shrink-0 px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 cursor-pointer border ${
                      isActive
                        ? 'bg-[#ff3b19] text-white border-[#ff3b19] font-bold shadow-md shadow-[#ff3b19]/30 scale-105'
                        : 'bg-white/5 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    <span className={isActive ? 'text-white' : 'text-[#ff3b19]'}>{s.num}</span>
                    <span className="truncate max-w-[100px] sm:max-w-none">{s.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Counter badge */}
            <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-neutral-400 shrink-0 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="text-[#ff3b19] font-bold">0{activeCardIndex + 1}</span>
              <span>/</span>
              <span>06</span>
            </div>
          </div>
        </div>
      </header>

      {/* ================= SMOOTH STACKING CARDS CENTERED IN VIEWPORT ================= */}
      {/* 
        Vertically & Horizontally centered sticky stacking layout.
        Each card is positioned centrally on the screen (both mobile and desktop)
        and glides in smoothly from the bottom on scroll.
      */}
      <section className="px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-28 sm:pb-36 relative z-10">
        {PENTA_SERVICES.map((service, index) => {
          // Staggered sticky offset centered vertically in the viewport with subtle cascading stack
          const stickyTopValue = `calc(max(76px, (100vh - 540px) / 2) + ${index * 6}px)`;

          return (
            <div
              key={service.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-card-index={index}
              style={{
                top: stickyTopValue,
              }}
              className="sticky mb-16 sm:mb-28 pb-4 flex justify-center items-center w-full"
            >
              <motion.article
                id={`service-box-${service.num}`}
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: 'transform, opacity' }}
                className="w-full transform-gpu rounded-2xl sm:rounded-3xl bg-[#0f0f0f] border border-white/15 hover:border-[#ff3b19]/60 shadow-[0_-15px_50px_rgba(0,0,0,0.95)] p-4 sm:p-6 lg:p-9 relative overflow-hidden transition-colors duration-200"
              >
                {/* Ambient Card Background Glow */}
                <div className="absolute top-0 right-0 w-60 sm:w-96 h-60 sm:h-96 bg-[#ff3b19]/10 rounded-full blur-[80px] sm:blur-[110px] pointer-events-none" />

                {/* Top Meta Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-4 sm:mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#ff3b19] shadow-md shadow-[#ff3b19] animate-pulse" />
                    <span className="font-mono text-xs text-white/90 uppercase tracking-widest font-bold">
                      PENTA PRIZM
                    </span>
                    <span className="text-white/20">|</span>
                    <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-wider font-bold">
                      // {service.code}. {service.title} //
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                      {service.keyword}
                    </span>
                  </div>
                </div>

                {/* Main Content Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
                  
                  {/* LEFT SIDE: Big Numeral, Title, Tagline & Approach Summary */}
                  <div className="lg:col-span-5 flex flex-col justify-between self-stretch pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-4 lg:pb-0">
                    <div>
                      <div className="flex items-center gap-3 sm:gap-4 mb-2">
                        <span className="font-bebas text-5xl sm:text-7xl lg:text-8xl text-[#ff3b19] leading-none tracking-tighter font-extrabold drop-shadow-[0_10px_20px_rgba(255,59,25,0.3)] shrink-0 select-none">
                          {service.num}
                        </span>
                        <div>
                          <h3 className="font-bebas text-2xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wide leading-tight">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <h4 className="font-bebas text-lg sm:text-2xl text-neutral-200 uppercase tracking-wide mt-2 leading-snug">
                        {service.tagline}
                      </h4>

                      <p className="font-montserrat text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Approach Summary Box */}
                    <div className="mt-4 sm:mt-5 p-3 sm:p-4 rounded-xl bg-neutral-900/90 border border-white/10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Compass className="w-3.5 h-3.5 text-[#ff3b19]" />
                        <span className="text-[10px] sm:text-[11px] font-mono text-[#ff3b19] uppercase tracking-widest font-bold">
                          {service.approachLabel || 'OUR APPROACH'}
                        </span>
                      </div>
                      <p className="font-montserrat text-xs text-neutral-200 leading-relaxed pl-2 border-l-2 border-[#ff3b19]/50">
                        {service.approachDesc}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT SIDE: Scope of Deliverables, Pipeline Steps & CTAs */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-5">
                    
                    {/* Deliverables Grid */}
                    <div>
                      <div className="flex items-center gap-2 mb-2.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#ff3b19]" />
                        <h4 className="font-bebas text-base sm:text-lg text-white tracking-wider uppercase">
                          {service.whatWeDoLabel || 'WHAT WE DELIVER'}
                        </h4>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2">
                        {service.whatWeDo.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-2 sm:p-2.5 rounded-lg bg-neutral-900/90 border border-white/10 hover:border-[#ff3b19]/50 flex items-start gap-1.5 group transition-all"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b19] mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                            <span className="font-montserrat text-[11px] sm:text-xs text-neutral-200 group-hover:text-white transition-colors line-clamp-2 font-medium leading-tight">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process Steps Sequence */}
                    {service.approachSteps && (
                      <div className="p-3 sm:p-3.5 rounded-xl bg-neutral-900/70 border border-white/10">
                        <div className="flex items-center justify-between flex-wrap gap-1.5 mb-1.5">
                          <div className="flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-[#ff3b19]" />
                            <span className="text-[10px] sm:text-[11px] font-mono text-white uppercase tracking-widest font-bold">
                              EXECUTION WORKFLOW
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-neutral-400 uppercase">
                            STRUCTURED DELIVERY
                          </span>
                        </div>

                        <div className="flex items-center flex-wrap gap-1.5">
                          {service.approachSteps.map((step, sIdx) => (
                            <React.Fragment key={sIdx}>
                              <div className="flex items-center gap-1.5 px-2 py-0.5 sm:py-1 rounded-md bg-neutral-800/90 border border-white/15 text-[10px] sm:text-[11px] font-montserrat font-bold text-white">
                                <span className="w-3.5 h-3.5 rounded-full bg-[#ff3b19]/20 text-[#ff3b19] text-[9px] flex items-center justify-center font-mono font-bold">
                                  {sIdx + 1}
                                </span>
                                <span>{step}</span>
                              </div>
                              {sIdx < service.approachSteps.length - 1 && (
                                <span className="text-neutral-500 font-mono text-xs">→</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions & Links */}
                    <div className="pt-2 sm:pt-3 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
                      <div className="text-[11px] sm:text-xs font-mono text-neutral-300 flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>AVAILABLE FOR NEW PROJECTS</span>
                      </div>

                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <Link
                          to={service.route}
                          className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white font-montserrat font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 min-h-[42px]"
                        >
                          <span>DETAILS</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>

                        <button
                          onClick={() => {
                            if (onOpenCustom) {
                              onOpenCustom(service.title);
                            }
                          }}
                          id={`explore-service-btn-${service.num}`}
                          className="flex-1 sm:flex-none bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-extrabold text-xs tracking-wider uppercase px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg shadow-[#ff3b19]/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer min-h-[42px]"
                        >
                          <span>{service.cta || 'START PROJECT →'}</span>
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </motion.article>
            </div>
          );
        })}
      </section>

      {/* ================= MANIFESTO & COMPLETE SOLUTIONS ================= */}
      <section
        id="manifesto-complete-solutions"
        className="relative z-20 bg-[#0c0c0c] border-t border-white/15 py-16 sm:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[250px] sm:h-[400px] bg-[#ff3b19]/10 rounded-full blur-[90px] sm:blur-[150px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center relative z-10 max-w-4xl mx-auto"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#ff3b19] font-bold block mb-3">
            // ONE STUDIO. COMPLETE SOLUTIONS. //
          </span>

          <h3 className="font-bebas text-3xl sm:text-5xl lg:text-7xl text-white uppercase tracking-tight leading-none mb-4 sm:mb-6">
            EVERYTHING YOUR BRAND NEEDS TO GROW.
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 my-6 sm:my-8">
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/5 border border-white/10 font-montserrat text-xs sm:text-sm text-neutral-300 line-through decoration-[#ff3b19] decoration-2">
              Branding alone isn't enough.
            </div>
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/5 border border-white/10 font-montserrat text-xs sm:text-sm text-neutral-300 line-through decoration-[#ff3b19] decoration-2">
              Marketing alone isn't enough.
            </div>
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/5 border border-white/10 font-montserrat text-xs sm:text-sm text-neutral-300 line-through decoration-[#ff3b19] decoration-2">
              Technology alone isn't enough.
            </div>
          </div>

          <p className="font-montserrat text-sm sm:text-base lg:text-lg text-neutral-200 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
            The real impact happens when <span className="text-white font-bold">strategy, creativity, content, technology, and digital marketing</span> work together.
          </p>

          <div className="inline-block px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-neutral-900 border border-[#ff3b19]/40 text-[#ff3b19] font-bebas text-lg sm:text-2xl tracking-widest uppercase mb-6 sm:mb-8 shadow-lg shadow-[#ff3b19]/10">
            BRANDING × CONTENT × DIGITAL × TECH
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-10 text-[11px] sm:text-sm font-montserrat text-neutral-400 uppercase tracking-widest font-semibold mb-8 sm:mb-10 flex-wrap">
            <span>One team.</span>
            <span className="text-[#ff3b19]">•</span>
            <span>One vision.</span>
            <span className="text-[#ff3b19]">•</span>
            <span className="text-white">Complete digital solutions.</span>
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={() => {
                if (onOpenCustom) {
                  onOpenCustom('Complete Digital Solution');
                }
              }}
              id="manifesto-start-project-btn"
              className="w-full sm:w-auto bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-extrabold text-xs sm:text-sm tracking-wider uppercase px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-2xl shadow-[#ff3b19]/40 transition-all hover:scale-105 active:scale-95 cursor-pointer min-h-[48px] flex items-center justify-center"
            >
              START A PROJECT WITH US →
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
