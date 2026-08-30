import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  Sparkles,
  Zap,
  Compass,
  ArrowRight,
  MousePointer,
  ArrowDown
} from 'lucide-react';
import { PENTA_SERVICES } from '../data/studioData.js';

export default function PortfolioLookbook({ onOpenCustom }) {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);

  // Monitor scroll progress strictly through the 600vh services scroll track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollPct(latest);
    const totalServices = PENTA_SERVICES.length;
    // Map scroll percentage evenly across the 6 services (0 to 5)
    const computedIndex = Math.min(
      totalServices - 1,
      Math.max(0, Math.floor(latest * totalServices))
    );
    if (computedIndex !== currentIndex) {
      setCurrentIndex(computedIndex);
    }
  });

  const activeService = PENTA_SERVICES[currentIndex];
  const prevIndex = (currentIndex - 1 + PENTA_SERVICES.length) % PENTA_SERVICES.length;
  const prevService = PENTA_SERVICES[prevIndex];
  const nextIndex = (currentIndex + 1) % PENTA_SERVICES.length;
  const nextService = PENTA_SERVICES[nextIndex];

  // Manual smooth scroll jump to a specific service step
  const scrollToService = (index) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (index / (PENTA_SERVICES.length - 1)) * scrollableDistance;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <div id="works" className="w-full">
      
      {/* ================= 6-SERVICES SCROLL-PINNED TRACK (600vh) ================= */}
      {/* Pinned strictly for the 6 services, with nothing else inside to cause overlapping */}
      <div
        ref={containerRef}
        className="relative w-full h-[600vh] bg-[#080808]"
      >
        {/* Sticky 100vh Viewport */}
        <div className="sticky top-0 min-h-screen sm:h-screen w-full flex flex-col justify-between py-4 sm:py-6 lg:py-8 px-3 sm:px-6 lg:px-8 text-white overflow-hidden z-20">
          
          {/* Ambient background glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[800px] h-[300px] sm:h-[500px] bg-[#ff3b19]/10 rounded-full blur-[100px] sm:blur-[170px] pointer-events-none" />
          <div className="absolute -bottom-20 right-10 w-60 sm:w-96 h-60 sm:h-96 bg-orange-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

          {/* Global Max-Width Wrapper */}
          <div className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full relative z-20">
            
            {/* ================= COMPACT SECTION HEADER & NAVIGATION ================= */}
            <div className="w-full flex-shrink-0">
              
              <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-3 pb-2.5 sm:pb-3 border-b border-white/10">
                
                {/* Branding badge & Subtitle */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-mono tracking-widest text-[#ff3b19] uppercase shadow-inner">
                    <span className="w-2 h-2 rounded-full bg-[#ff3b19] animate-pulse"></span>
                    OUR SERVICES
                  </div>
                  <span className="hidden sm:inline text-white/30">|</span>
                  <span className="hidden md:inline font-bebas text-base lg:text-lg tracking-wider text-neutral-300">
                    WE BUILD. WE CREATE. <span className="text-[#ff3b19]">WE GROW.</span>
                  </span>
                </div>

                {/* Service Tabs (01 to 06) */}
                <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1 no-scrollbar max-w-[60vw] sm:max-w-none">
                  {PENTA_SERVICES.map((serv, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                      <button
                        key={serv.id}
                        id={`service-nav-tab-${serv.num}`}
                        onClick={() => scrollToService(idx)}
                        className={`relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-montserrat text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap cursor-pointer min-h-[32px] sm:min-h-[36px] ${
                          isActive
                            ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                            : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-white/10'
                        }`}
                      >
                        <span className={`font-mono text-[10px] ${isActive ? 'text-[#ff3b19] font-black' : 'text-neutral-500'}`}>
                          {serv.num}
                        </span>
                        <span className="hidden lg:inline">{serv.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Scroll progress meter */}
                <div className="flex items-center gap-2">
                  <div className="w-16 sm:w-24 lg:w-28 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#ff3b19] transition-all duration-150"
                      style={{ width: `${Math.min(100, Math.max(0, scrollPct * 100))}%` }}
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono text-neutral-300">
                    <strong className="text-[#ff3b19]">{activeService.num}</strong>/06
                  </span>
                </div>

              </div>

            </div>

            {/* ================= LAYERED STACKED DECK CONTAINER ================= */}
            <div className="relative w-full my-auto py-2 flex-grow flex items-center justify-center">
              
              <div className="w-full relative">
                
                {/* BACKGROUND PEEKING CARD (Shows top portion of previous service in deck stack) */}
                {currentIndex > 0 && (
                  <div
                    onClick={() => scrollToService(prevIndex)}
                    id="service-background-peeking-card"
                    className="absolute -top-8 sm:-top-10 lg:-top-12 left-0 right-0 h-28 sm:h-36 rounded-2xl sm:rounded-3xl bg-neutral-950 border border-white/20 shadow-2xl p-3.5 sm:p-6 cursor-pointer transition-all duration-500 hover:border-white/40 group overflow-hidden z-10 select-none"
                    style={{
                      transform: 'scale(0.96)',
                      opacity: 0.55,
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-[#ff3b19] transition-colors" />
                        <div>
                          <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold mb-0.5">
                            // PREVIOUS SERVICE //
                          </div>
                          <h4 className="font-bebas text-base sm:text-lg lg:text-xl text-neutral-300 uppercase tracking-wide group-hover:text-white transition-colors line-clamp-1">
                            {prevService.title} — {prevService.tagline}
                          </h4>
                        </div>
                      </div>

                      <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-neutral-400 group-hover:text-white transition-colors pt-1">
                        <span>PREVIOUS</span>
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                )}

                {/* ACTIVE FOREGROUND CARD (Emerges cleanly on scroll) */}
                <div className="relative z-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService.id}
                      initial={{
                        opacity: 0,
                        y: 90, // slides in from bottom when scrolling to next
                        scale: 0.97,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -40,
                        scale: 0.95,
                        transition: { duration: 0.3, ease: 'easeIn' },
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="w-full rounded-2xl sm:rounded-3xl bg-neutral-950 border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] p-4 sm:p-7 lg:p-10 relative overflow-hidden"
                    >
                      
                      {/* Card Ambient Glow */}
                      <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff3b19]/10 rounded-full blur-[100px] pointer-events-none" />

                      {/* Card Top Meta */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4 mb-4 sm:mb-6">
                        <div className="flex items-center gap-2 sm:gap-2.5">
                          <div className="w-2 h-2 rounded-full bg-[#ff3b19] shadow-md shadow-[#ff3b19] animate-pulse"></div>
                          <span className="font-mono text-[11px] sm:text-xs text-white/90 uppercase tracking-widest font-bold">
                            PENTA PRIZM
                          </span>
                          <span className="text-white/20">|</span>
                          <span className="font-mono text-[11px] sm:text-xs text-[#ff3b19] uppercase tracking-wider font-semibold truncate max-w-[200px] sm:max-w-none">
                            // {activeService.code}. {activeService.title} //
                          </span>
                        </div>

                        <div className="hidden sm:flex items-center gap-2">
                          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                            {activeService.keyword}
                          </span>
                        </div>
                      </div>

                      {/* Editorial Layout: Dual Number Stack on Left + Detailed Scope on Right */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-start">
                        
                        {/* LEFT COLUMN: SERVICE NUMERAL & METADATA */}
                        <div className="lg:col-span-4 flex flex-col justify-between self-stretch pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-4 lg:pb-0">
                          
                          <div className="relative select-none flex sm:block items-center justify-between">
                            {/* MAIN SERVICE NUMBER: Bold Brand Orange (#ff3b19) */}
                            <div className="font-bebas text-6xl sm:text-8xl lg:text-[110px] text-[#ff3b19] leading-none tracking-tighter font-extrabold filter drop-shadow-[0_10px_20px_rgba(255,59,25,0.3)]">
                              {activeService.num}
                            </div>

                            <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                              <span>SERVICE {activeService.num} / 06</span>
                            </div>
                          </div>

                          {/* Left Side Quick Note */}
                          <div className="mt-3 sm:mt-6 p-3 sm:p-3.5 rounded-xl bg-neutral-900/80 border border-white/10">
                            <span className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                              APPROACH SUMMARY
                            </span>
                            <p className="font-montserrat text-xs text-neutral-200 leading-relaxed">
                              {activeService.approachDesc}
                            </p>
                          </div>

                        </div>

                        {/* RIGHT COLUMN: Full Service Content */}
                        <div className="lg:col-span-8 flex flex-col justify-between space-y-4 sm:space-y-5">
                          
                          {/* Title & Tagline */}
                          <div>
                            <span className="font-mono text-[11px] sm:text-xs text-[#ff3b19] uppercase tracking-widest font-bold block mb-1">
                              // {activeService.num}. {activeService.title} //
                            </span>
                            <h3 className="font-bebas text-2xl sm:text-4xl lg:text-5xl text-white tracking-wide uppercase leading-tight">
                              {activeService.tagline}
                            </h3>
                            <p className="font-montserrat text-xs sm:text-sm text-neutral-300 mt-2 sm:mt-2.5 leading-relaxed">
                              {activeService.description}
                            </p>
                          </div>

                          {/* Deliverables / Scope Grid (Hidden on mobile) */}
                          <div className="hidden sm:block">
                            <div className="flex items-center gap-2 mb-2.5">
                              <Sparkles className="w-3.5 h-3.5 text-[#ff3b19]" />
                              <h4 className="font-bebas text-base sm:text-lg text-white tracking-wider uppercase">
                                {activeService.whatWeDoLabel}
                              </h4>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                              {activeService.whatWeDo.slice(0, 9).map((item, idx) => (
                                <div
                                  key={idx}
                                  className="p-2.5 rounded-lg bg-neutral-900/90 border border-white/10 flex items-start gap-2 group hover:border-[#ff3b19]/40 transition-colors"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b19] mt-1.5 shrink-0" />
                                  <span className="font-montserrat text-xs text-neutral-200 group-hover:text-white transition-colors">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Process Pipeline Steps (Hidden on mobile) */}
                          <div className="hidden sm:block p-3.5 sm:p-4 rounded-xl bg-neutral-900/60 border border-white/10">
                            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                              <div className="flex items-center gap-1.5">
                                <Compass className="w-3.5 h-3.5 text-[#ff3b19]" />
                                <h4 className="font-bebas text-sm sm:text-base text-white tracking-wider uppercase">
                                  {activeService.approachLabel}
                                </h4>
                              </div>
                              <span className="text-[9px] sm:text-[10px] font-mono text-neutral-400">
                                STRUCTURED EXECUTION
                              </span>
                            </div>

                            <div className="flex items-center flex-wrap gap-2 my-1 sm:my-2">
                              {activeService.approachSteps.map((step, sIdx) => (
                                <React.Fragment key={sIdx}>
                                  <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md bg-neutral-800/90 border border-white/15 text-[10px] sm:text-[11px] font-montserrat font-bold text-white">
                                    <span className="w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-[#ff3b19]/20 text-[#ff3b19] text-[8px] sm:text-[9px] flex items-center justify-center font-mono font-bold">
                                      {sIdx + 1}
                                    </span>
                                    <span>{step}</span>
                                  </div>
                                  {sIdx < activeService.approachSteps.length - 1 && (
                                    <span className="text-neutral-500 font-mono text-xs">→</span>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>

                          {/* CTA / Action row */}
                          <div className="pt-2 sm:pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <div className="text-[11px] sm:text-xs font-mono text-neutral-400 flex items-center gap-2">
                              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                              <span>AVAILABLE FOR PROJECTS</span>
                            </div>

                            <button
                              onClick={() => {
                                if (onOpenCustom) {
                                  onOpenCustom(activeService.title);
                                }
                              }}
                              id={`explore-service-btn-${activeService.num}`}
                              className="w-full sm:w-auto bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-extrabold text-xs tracking-wider uppercase px-5 sm:px-6 py-3 rounded-full shadow-lg shadow-[#ff3b19]/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                            >
                              <span>{activeService.cta}</span>
                            </button>
                          </div>

                        </div>
                      </div>

                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

            </div>

            {/* ================= STICKY FOOTER: SCROLL STATUS / SCROLL HINT ================= */}
            <div className="w-full flex-shrink-0 pt-2 flex items-center justify-between text-[11px] sm:text-xs font-mono text-neutral-400 border-t border-white/10">
              <div className="flex items-center gap-2">
                <MousePointer className="w-3.5 h-3.5 text-[#ff3b19]" />
                <span className="truncate max-w-[240px] sm:max-w-none">
                  {currentIndex < 5
                    ? `SCROLL DOWN TO REVEAL SERVICE 0${currentIndex + 2}`
                    : 'SERVICE 06 REACHED — CONTINUE SCROLLING'}
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span className="text-neutral-500">SCROLL</span>
                <ArrowDown className={`w-3.5 h-3.5 text-[#ff3b19] ${currentIndex === 5 ? 'animate-bounce' : ''}`} />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= MANIFESTO & SOLUTION BANNER (Renders cleanly AFTER the 600vh services track) ================= */}
      <section
        id="manifesto-complete-solutions"
        className="relative z-30 bg-[#0c0c0c] border-t border-white/15 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[250px] sm:h-[400px] bg-[#ff3b19]/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <span className="font-mono text-xs uppercase tracking-widest text-[#ff3b19] font-bold block mb-3">
            // ONE STUDIO. COMPLETE SOLUTIONS. //
          </span>

          <h3 className="font-bebas text-3xl sm:text-5xl lg:text-7xl text-white uppercase tracking-tight leading-none mb-4 sm:mb-6">
            EVERYTHING YOUR BRAND NEEDS TO GROW.
          </h3>

          {/* Core statement pills */}
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

        </div>
      </section>

    </div>
  );
}
