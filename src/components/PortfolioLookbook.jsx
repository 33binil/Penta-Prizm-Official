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
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.15,
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
      const targetHeight = elRect.height || 420;
      // Calculate offset so card is centered vertically in viewport
      const centerOffset = Math.max(64, (windowHeight - targetHeight) / 2);
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
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] sm:w-[650px] h-[300px] sm:h-[450px] bg-[#ff3b19]/8 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-4 w-44 sm:w-80 h-44 sm:h-80 bg-orange-600/5 rounded-full blur-[70px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 left-4 w-44 sm:w-80 h-44 sm:h-80 bg-[#ff3b19]/6 rounded-full blur-[70px] sm:blur-[130px] pointer-events-none" />

      {/* ================= SECTION HEADER ================= */}
      <header className="pt-14 sm:pt-24 pb-4 sm:pb-8 px-3 sm:px-8 lg:px-12 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-white/10 pb-4 sm:pb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-mono tracking-widest text-[#ff3b19] uppercase mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff3b19] animate-pulse" />
              OUR CAPABILITIES // 06 CORE DOMAINS
            </div>

            <h2 className="font-bebas text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.92]">
              WHAT WE BUILD. <br className="hidden sm:inline" />
              <span className="text-[#ff3b19]">HOW WE SCALE.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-montserrat text-xs sm:text-sm text-neutral-300 leading-relaxed mb-2 sm:mb-3">
              Explore our six specialized service verticals designed to take your brand from strategy and visual production to custom technology and measurable digital growth.
            </p>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-neutral-400">
              <ChevronDown className="w-3.5 h-3.5 text-[#ff3b19] animate-bounce" />
              <span>SCROLL DOWN TO VIEW EACH SERVICE CENTERED</span>
            </div>
          </div>
        </motion.div>

        {/* ================= STICKY QUICK-SELECT DECK TABS ================= */}
        <div className="sticky top-14 sm:top-20 z-30 pt-2.5 pb-2 bg-[#080808]/95 backdrop-blur-md border-b border-white/10 -mx-3 px-3 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 mt-1 sm:mt-2">
          <div className="flex items-center justify-between gap-2 max-w-6xl mx-auto">
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1 w-full sm:w-auto">
              {PENTA_SERVICES.map((s, idx) => {
                const isActive = activeCardIndex === idx;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollToCard(idx)}
                    id={`service-nav-pill-${s.num}`}
                    className={`shrink-0 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-200 flex items-center gap-1 sm:gap-1.5 cursor-pointer border ${
                      isActive
                        ? 'bg-[#ff3b19] text-white border-[#ff3b19] font-bold shadow-md shadow-[#ff3b19]/30 scale-105'
                        : 'bg-white/5 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    <span className={isActive ? 'text-white' : 'text-[#ff3b19]'}>{s.num}</span>
                    <span className="truncate max-w-[85px] sm:max-w-none">{s.title}</span>
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

      {/* ================= SMOOTH STACKING CARDS CENTERED ON SCREEN ================= */}
      {/* 
        Native CSS Sticky Stacking + GPU-Accelerated Motion.
        Optimized so cards fit within mobile viewports without overflowing at the bottom,
        centering smoothly in the middle of the display.
      */}
      <section className="px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-24 sm:pb-36 relative z-10">
        {PENTA_SERVICES.map((service, index) => {
          // Staggered sticky offset centered vertically in the viewport
          const stickyTopValue = `calc(max(64px, (100dvh - 440px) / 2) + ${index * 4}px)`;

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
              className="sticky mb-10 sm:mb-28 pb-2 sm:pb-4 flex justify-center items-center w-full"
            >
              <motion.article
                id={`service-box-${service.num}`}
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: 'transform, opacity' }}
                className="w-full transform-gpu rounded-2xl sm:rounded-3xl bg-[#0f0f0f] border border-white/15 hover:border-[#ff3b19]/60 shadow-[0_-12px_40px_rgba(0,0,0,0.95)] p-3.5 sm:p-6 lg:p-9 relative overflow-hidden transition-colors duration-200 max-h-[82vh] sm:max-h-none overflow-y-auto sm:overflow-visible no-scrollbar"
              >
                {/* Ambient Card Background Glow */}
                <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-[#ff3b19]/10 rounded-full blur-[70px] sm:blur-[110px] pointer-events-none" />

                {/* Top Meta Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5 sm:mb-5">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff3b19] shadow-md shadow-[#ff3b19] animate-pulse" />
                    <span className="font-mono text-[10px] sm:text-xs text-white/90 uppercase tracking-widest font-bold">
                      PENTA PRIZM
                    </span>
                    <span className="text-white/20">|</span>
                    <span className="font-mono text-[10px] sm:text-xs text-[#ff3b19] uppercase tracking-wider font-bold truncate max-w-[180px] sm:max-w-none">
                      // {service.code}. {service.title} //
                    </span>
                  </div>

                  <div className="hidden sm:flex items-center gap-2">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                      {service.keyword}
                    </span>
                  </div>
                </div>

                {/* Main Content Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-8 items-start">
                  
                  {/* LEFT SIDE: Big Numeral, Title, Tagline & Approach Summary */}
                  <div className="lg:col-span-5 flex flex-col justify-between self-stretch pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-2.5 sm:pb-4 lg:pb-0">
                    <div>
                      <div className="flex items-center gap-2.5 sm:gap-4 mb-1 sm:mb-2">
                        <span className="font-bebas text-4xl sm:text-7xl lg:text-8xl text-[#ff3b19] leading-none tracking-tighter font-extrabold drop-shadow-[0_10px_20px_rgba(255,59,25,0.3)] shrink-0 select-none">
                          {service.num}
                        </span>
                        <div>
                          <span className="sm:hidden text-[9px] font-mono text-[#ff3b19] uppercase tracking-wider block font-bold">
                            {service.keyword}
                          </span>
                          <h3 className="font-bebas text-2xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wide leading-tight">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <h4 className="font-bebas text-sm sm:text-2xl text-neutral-200 uppercase tracking-wide mt-1 leading-snug">
                        {service.tagline}
                      </h4>

                      <p className="font-montserrat text-[11px] sm:text-sm text-neutral-300 mt-1 sm:mt-2 leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {service.description}
                      </p>
                    </div>

                    {/* Approach Summary Box: Full on tablet/desktop, compact on mobile */}
                    <div className="hidden sm:block mt-4 sm:mt-5 p-3 sm:p-4 rounded-xl bg-neutral-900/90 border border-white/10">
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

                    {/* Mobile compact approach summary */}
                    <div className="sm:hidden mt-2 flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 bg-neutral-900/60 px-2 py-1 rounded-md border border-white/5">
                      <Compass className="w-3 h-3 text-[#ff3b19] shrink-0" />
                      <span className="truncate">{service.approachDesc}</span>
                    </div>
                  </div>

                  {/* RIGHT SIDE: Scope of Deliverables, Pipeline Steps & CTAs */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5 sm:space-y-4 lg:space-y-5">
                    
                    {/* Deliverables Grid: Top 4 on mobile with clean 2x2 grid, all on sm+ */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2.5">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#ff3b19]" />
                          <h4 className="font-bebas text-sm sm:text-lg text-white tracking-wider uppercase">
                            {service.whatWeDoLabel || 'WHAT WE DELIVER'}
                          </h4>
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase sm:hidden">
                          KEY DELIVERABLES
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2">
                        {service.whatWeDo.map((item, idx) => (
                          <div
                            key={idx}
                            className={`p-1.5 sm:p-2.5 rounded-lg bg-neutral-900/90 border border-white/10 hover:border-[#ff3b19]/50 flex items-center sm:items-start gap-1.5 group transition-all ${
                              idx >= 4 ? 'hidden sm:flex' : 'flex'
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b19] shrink-0 group-hover:scale-125 transition-transform" />
                            <span className="font-montserrat text-[10px] sm:text-xs text-neutral-200 group-hover:text-white transition-colors truncate sm:line-clamp-2 font-medium leading-tight">
                              {item}
                            </span>
                          </div>
                        ))}
                        {service.whatWeDo.length > 4 && (
                          <div className="sm:hidden p-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <span className="font-mono text-[9px] text-[#ff3b19] font-bold">
                              +{service.whatWeDo.length - 4} MORE
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Process Steps Sequence (Hidden on mobile, visible on tablet & desktop) */}
                    {service.approachSteps && (
                      <div className="hidden sm:block p-3 sm:p-3.5 rounded-xl bg-neutral-900/70 border border-white/10">
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
                    <div className="pt-2 sm:pt-3 border-t border-white/10 flex items-center justify-between gap-2 sm:gap-3">
                      <div className="text-[10px] sm:text-xs font-mono text-neutral-300 flex items-center gap-1.5">
                        <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="truncate max-w-[110px] xs:max-w-none">OPEN FOR PROJECTS</span>
                      </div>

                      <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                        <Link
                          to={service.route}
                          className="px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white font-montserrat font-semibold text-[10px] sm:text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1 min-h-[36px] sm:min-h-[42px]"
                        >
                          <span>DETAILS</span>
                          <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </Link>

                        <button
                          onClick={() => {
                            if (onOpenCustom) {
                              onOpenCustom(service.title);
                            }
                          }}
                          id={`explore-service-btn-${service.num}`}
                          className="bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-extrabold text-[10px] sm:text-xs tracking-wider uppercase px-3.5 sm:px-6 py-1.5 sm:py-3 rounded-full shadow-lg shadow-[#ff3b19]/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer min-h-[36px] sm:min-h-[42px]"
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
        className="relative z-20 bg-[#0c0c0c] border-t border-white/15 py-14 sm:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[220px] sm:h-[400px] bg-[#ff3b19]/10 rounded-full blur-[80px] sm:blur-[150px] pointer-events-none" />

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

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 my-4 sm:my-8">
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

          <p className="font-montserrat text-xs sm:text-base lg:text-lg text-neutral-200 leading-relaxed max-w-2xl mx-auto mb-5 sm:mb-8">
            The real impact happens when <span className="text-white font-bold">strategy, creativity, content, technology, and digital marketing</span> work together.
          </p>

          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-neutral-900 border border-[#ff3b19]/40 text-[#ff3b19] font-bebas text-base sm:text-2xl tracking-widest uppercase mb-5 sm:mb-8 shadow-lg shadow-[#ff3b19]/10">
            BRANDING × CONTENT × DIGITAL × TECH
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-6 lg:gap-10 text-[10px] sm:text-sm font-montserrat text-neutral-400 uppercase tracking-widest font-semibold mb-6 sm:mb-10 flex-wrap">
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
              className="w-full sm:w-auto bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-extrabold text-xs sm:text-sm tracking-wider uppercase px-6 sm:px-10 py-3.5 sm:py-5 rounded-full shadow-2xl shadow-[#ff3b19]/40 transition-all hover:scale-105 active:scale-95 cursor-pointer min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
            >
              START A PROJECT WITH US →
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
