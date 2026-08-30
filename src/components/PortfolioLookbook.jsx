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
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  // Monitor scroll progress through the services scroll track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollPct(latest);
    const totalServices = PENTA_SERVICES.length;
    // Map scroll percentage evenly across the 6 services (0 to 5) with smooth clamped mapping
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
    if (!containerRef.current) {
      setCurrentIndex(index);
      return;
    }
    const containerTop = containerRef.current.offsetTop;
    const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (index / (PENTA_SERVICES.length - 1)) * scrollableDistance;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe navigation
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Detect intentional horizontal swipe (more horizontal than vertical)
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0 && currentIndex < PENTA_SERVICES.length - 1) {
        scrollToService(currentIndex + 1);
      } else if (deltaX > 0 && currentIndex > 0) {
        scrollToService(currentIndex - 1);
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div id="works" className="w-full">
      
      {/* ================= 6-SERVICES SCROLL-PINNED TRACK ================= */}
      {/* Generous runway on mobile (750vh) and desktop (600vh) for smooth progression */}
      <div
        ref={containerRef}
        className="relative w-full h-[750vh] sm:h-[600vh] bg-[#080808]"
      >
        {/* Sticky 100dvh Viewport that fills full mobile and desktop screen */}
        <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between py-3 sm:py-5 lg:py-8 px-3 sm:px-8 lg:px-12 text-white overflow-hidden z-20">
          
          {/* Ambient background glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[800px] h-[300px] sm:h-[500px] bg-[#ff3b19]/10 rounded-full blur-[100px] sm:blur-[170px] pointer-events-none" />
          <div className="absolute -bottom-20 right-10 w-60 sm:w-96 h-60 sm:h-96 bg-orange-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

          {/* Full-Height Wrapper */}
          <div className="w-full flex flex-col justify-between h-full relative z-20">
            
            {/* ================= COMPACT SECTION HEADER & NAVIGATION ================= */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex-shrink-0"
            >
              
              <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-3 pb-2 sm:pb-3 border-b border-white/10">
                
                {/* Branding badge & Subtitle */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-[11px] font-mono tracking-widest text-[#ff3b19] uppercase shadow-inner font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#ff3b19] animate-pulse"></span>
                    OUR SERVICES
                  </div>
                  <span className="hidden sm:inline text-white/30">|</span>
                  <span className="font-bebas text-lg sm:text-lg lg:text-xl tracking-wider text-neutral-300">
                    WE BUILD. WE CREATE. <span className="text-[#ff3b19]">WE GROW.</span>
                  </span>
                </div>

                <div className="text-[11px] font-mono text-neutral-400 hidden md:block">
                  // SCROLL DOWN OR SWIPE TO NAVIGATE //
                </div>

              </div>

            </motion.div>

            {/* ================= LAYERED STACKED DECK CONTAINER ================= */}
            <div 
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative w-full flex-1 my-auto py-1 sm:py-2 flex items-center justify-center touch-pan-y"
            >
              
              <div className="w-full relative">
                
                {/* BACKGROUND PEEKING CARD (Shows top portion of previous service in deck stack) */}
                {currentIndex > 0 && (
                  <div
                    onClick={() => scrollToService(prevIndex)}
                    id="service-background-peeking-card"
                    className="absolute -top-4 sm:-top-8 lg:-top-10 left-0 right-0 h-16 sm:h-32 rounded-2xl sm:rounded-3xl bg-neutral-950 border border-white/20 shadow-2xl p-2.5 sm:p-5 cursor-pointer transition-all duration-300 hover:border-white/40 group overflow-hidden z-10 select-none"
                    style={{
                      transform: 'scale(0.96)',
                      opacity: 0.5,
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-[#ff3b19] transition-colors" />
                        <div>
                          <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold mb-0.5">
                            // PREVIOUS SERVICE //
                          </div>
                          <h4 className="font-bebas text-sm sm:text-lg lg:text-xl text-neutral-300 uppercase tracking-wide group-hover:text-white transition-colors line-clamp-1">
                            {prevService.num}. {prevService.title}
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
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={activeService.id}
                      initial={{
                        opacity: 0,
                        y: 30,
                        scale: 0.98,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -20,
                        scale: 0.98,
                        transition: { duration: 0.2, ease: 'easeIn' },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="w-full rounded-2xl sm:rounded-3xl bg-neutral-950 border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] p-4 sm:p-6 lg:p-8 relative overflow-hidden"
                    >
                      
                      {/* Card Ambient Glow */}
                      <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff3b19]/10 rounded-full blur-[100px] pointer-events-none" />

                      {/* Card Top Meta */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 sm:pb-3.5 mb-3 sm:mb-5">
                        <div className="flex items-center gap-2 sm:gap-2.5">
                          <div className="w-2 h-2 rounded-full bg-[#ff3b19] shadow-md shadow-[#ff3b19] animate-pulse"></div>
                          <span className="font-mono text-xs sm:text-xs text-white/90 uppercase tracking-widest font-bold">
                            PENTA PRIZM
                          </span>
                          <span className="text-white/20">|</span>
                          <span className="font-mono text-xs sm:text-xs text-[#ff3b19] uppercase tracking-wider font-bold truncate max-w-[190px] sm:max-w-none">
                            // {activeService.code}. {activeService.title} //
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[11px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                            {activeService.keyword}
                          </span>
                        </div>
                      </div>

                      {/* Editorial Layout: Dual Number Stack on Left + Detailed Scope on Right */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-8 items-start">
                        
                        {/* LEFT COLUMN: SERVICE NUMERAL & TITLE METADATA & APPROACH SUMMARY (LAPTOP/DESKTOP) */}
                        <div className="lg:col-span-4 flex flex-col justify-between self-stretch pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-3 lg:pb-0">
                          
                          <div>
                            <div className="relative select-none flex items-center gap-3 sm:gap-4">
                              {/* MAIN SERVICE NUMBER: Bold Brand Orange (#ff3b19) */}
                              <div className="font-bebas text-6xl sm:text-7xl lg:text-8xl text-[#ff3b19] leading-none tracking-tighter font-extrabold filter drop-shadow-[0_10px_20px_rgba(255,59,25,0.3)] shrink-0">
                                {activeService.num}
                              </div>
                              
                              {/* Service Title positioned to the right of the colored number */}
                              <div className="flex flex-col justify-center">
                                <h3 className="font-bebas text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-wide leading-tight">
                                  {activeService.title}
                                </h3>
                              </div>
                            </div>

                            {/* Left Box Approach Summary: ONLY FOR LAPTOP / DESKTOP (lg+) */}
                            <div className="hidden lg:block mt-6 p-4 rounded-xl bg-neutral-900/80 border border-white/10">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b19]" />
                                <span className="text-[11px] font-mono text-[#ff3b19] uppercase tracking-widest font-bold">
                                  APPROACH SUMMARY
                                </span>
                              </div>
                              <p className="font-montserrat text-xs text-neutral-200 leading-relaxed pl-2.5 border-l-2 border-[#ff3b19]/40">
                                {activeService.approachDesc}
                              </p>
                            </div>
                          </div>

                        </div>

                        {/* RIGHT COLUMN: Full Service Content */}
                        <div className="lg:col-span-8 flex flex-col justify-between space-y-3 sm:space-y-4">
                          
                          {/* Tagline & Description */}
                          <div>
                            <h3 className="font-bebas text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide uppercase leading-tight">
                              {activeService.tagline}
                            </h3>
                            <p className="font-montserrat text-sm sm:text-sm lg:text-base text-neutral-200 mt-2 leading-relaxed">
                              {activeService.description}
                            </p>
                          </div>

                          {/* Deliverables / Scope Grid (Visible on all screen sizes with responsive grid) */}
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Sparkles className="w-3.5 h-3.5 text-[#ff3b19]" />
                              <h4 className="font-bebas text-base sm:text-lg text-white tracking-wider uppercase">
                                {activeService.whatWeDoLabel}
                              </h4>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2">
                              {activeService.whatWeDo.slice(0, 6).map((item, idx) => (
                                <div
                                  key={idx}
                                  className="p-2 sm:p-2.5 rounded-lg bg-neutral-900/90 border border-white/10 flex items-start gap-1.5 sm:gap-2 group hover:border-[#ff3b19]/40 transition-colors"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b19] mt-1 sm:mt-1.5 shrink-0" />
                                  <span className="font-montserrat text-xs sm:text-xs text-neutral-200 group-hover:text-white transition-colors line-clamp-1 font-medium">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Approach Summary placed below deliverables on mobile (< lg) */}
                          <div className="block lg:hidden p-3 rounded-xl bg-neutral-900/70 border border-white/10">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b19]" />
                              <span className="text-[11px] font-mono text-[#ff3b19] uppercase tracking-widest font-bold">
                                APPROACH SUMMARY
                              </span>
                            </div>
                            <p className="font-montserrat text-xs sm:text-sm text-neutral-300 leading-relaxed pl-2.5 border-l-2 border-[#ff3b19]/40">
                              {activeService.approachDesc}
                            </p>
                          </div>

                          {/* Process Pipeline Steps (Hidden on small mobile, visible sm+) */}
                          <div className="hidden sm:block p-3 sm:p-3.5 rounded-xl bg-neutral-900/60 border border-white/10">
                            <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
                              <div className="flex items-center gap-1.5">
                                <Compass className="w-3.5 h-3.5 text-[#ff3b19]" />
                                <h4 className="font-bebas text-sm sm:text-base text-white tracking-wider uppercase">
                                  {activeService.approachLabel}
                                </h4>
                              </div>
                              <span className="text-[10px] font-mono text-neutral-400">
                                STRUCTURED EXECUTION
                              </span>
                            </div>

                            <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 my-1">
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
                          <div className="pt-2 sm:pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3">
                            <div className="text-xs font-mono text-neutral-400 flex items-center gap-2 self-start sm:self-auto">
                              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                              <span className="font-semibold text-neutral-300">AVAILABLE FOR PROJECTS</span>
                            </div>

                            <button
                              onClick={() => {
                                if (onOpenCustom) {
                                  onOpenCustom(activeService.title);
                                }
                              }}
                              id={`explore-service-btn-${activeService.num}`}
                              className="w-full sm:w-auto bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-extrabold text-xs sm:text-xs tracking-wider uppercase px-6 py-3.5 sm:py-3 rounded-full shadow-lg shadow-[#ff3b19]/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
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

            {/* ================= STICKY FOOTER: SCROLL STATUS / SERVICE STEP INDICATOR ================= */}
            <div className="w-full flex-shrink-0 pt-2 sm:pt-2.5 flex items-center justify-between text-xs sm:text-xs font-mono text-neutral-400 border-t border-white/10">
              
              {/* Left: Scroll guidance */}
              <div className="flex items-center gap-2">
                <MousePointer className="w-3.5 h-3.5 text-[#ff3b19] shrink-0" />
                <span className="hidden sm:inline truncate max-w-[240px] sm:max-w-none">
                  {currentIndex < 5
                    ? `SCROLL TO REVEAL SERVICE 0${currentIndex + 2}`
                    : 'SERVICE 06 REACHED — CONTINUE SCROLLING'}
                </span>
                <span className="sm:hidden font-bold text-white text-xs">
                  SERVICE <span className="text-[#ff3b19]">{activeService.num}</span> / 06
                </span>
              </div>

              {/* Center/Right: Interactive Service Step Dots (01 through 06) */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {PENTA_SERVICES.map((s, idx) => {
                  const isCurrent = idx === currentIndex;
                  return (
                    <button
                      key={s.id}
                      onClick={() => scrollToService(idx)}
                      id={`service-step-dot-${s.num}`}
                      aria-label={`Jump to service ${s.num}: ${s.title}`}
                      className={`transition-all duration-300 rounded-full flex items-center justify-center cursor-pointer ${
                        isCurrent
                          ? 'w-7 sm:w-7 h-5 sm:h-5.5 bg-[#ff3b19] text-white font-bold text-[10px] sm:text-[10px] shadow-md shadow-[#ff3b19]/40'
                          : 'w-2.5 sm:w-2.5 h-2.5 sm:h-2.5 bg-white/20 hover:bg-white/50 text-transparent'
                      }`}
                    >
                      {isCurrent ? s.num : ''}
                    </button>
                  );
                })}
              </div>

              {/* Right: Scroll direction indicator */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span className="text-neutral-500 hidden sm:inline">SCROLL</span>
                <ArrowDown className={`w-3.5 h-3.5 text-[#ff3b19] ${currentIndex === 5 ? 'animate-bounce' : ''}`} />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= MANIFESTO & SOLUTION BANNER (Renders cleanly AFTER the 600vh services track) ================= */}
      <section
        id="manifesto-complete-solutions"
        className="relative z-30 bg-[#0c0c0c] border-t border-white/15 py-16 sm:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[250px] sm:h-[400px] bg-[#ff3b19]/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

        <div className="w-full text-center relative z-10">
          
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
