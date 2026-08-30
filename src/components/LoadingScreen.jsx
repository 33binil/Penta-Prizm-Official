import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Zap, ShieldCheck } from 'lucide-react';

const LOADING_STEPS = [
  'INITIALIZING PRIZM MATRIX',
  'LOADING VISUAL ARTIFACTS & ASSETS',
  'CALIBRATING BRAND FREQUENCIES',
  'COMPOSING DIGITAL EXPERIENCES',
  'READY FOR LAUNCH'
];

export default function LoadingScreen({ onLoadingComplete, minDuration = 2200 }) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculated = Math.min(100, Math.floor((elapsed / minDuration) * 100));
      
      setProgress(calculated);
      
      // Update status step based on progress thresholds
      const currentStep = Math.min(
        LOADING_STEPS.length - 1,
        Math.floor((calculated / 100) * LOADING_STEPS.length)
      );
      setStepIndex(currentStep);

      if (calculated >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            if (onLoadingComplete) onLoadingComplete();
          }, 600);
        }, 300);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [minDuration, onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-[#080808] text-white flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none"
        >
          {/* Background Ambient Grid & Glows */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff3b19]/15 rounded-full blur-[140px]" />
            <div className="absolute -bottom-20 right-10 w-[350px] h-[350px] bg-[#646cff]/15 rounded-full blur-[120px]" />
          </div>

          {/* Top Bar Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                <img
                  src="/Logo1.png"
                  alt="Penta Prizm Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="font-unbounded font-bold tracking-widest text-xs sm:text-sm text-white">
                  PENTA PRIZM
                </span>
                <span className="text-[10px] text-white/40 block tracking-wider font-mono">
                  STUDIO ENGINE V2.4
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#ff3b19] animate-ping" />
              <span>BOOT SEQUENCE</span>
            </div>
          </div>

          {/* Center Brand Visuals & Huge Counter */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#ff3b19] uppercase mb-2 px-3 py-1 bg-[#ff3b19]/10 border border-[#ff3b19]/30 rounded-full">
                <Zap className="w-3.5 h-3.5" />
                Creative • Content • Digital • Tech
              </div>

              <h1 className="font-unbounded font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40 mt-2">
                PENTA PRIZM
              </h1>
            </motion.div>

            {/* Giant Monospace Numeric Counter */}
            <div className="font-bebas text-7xl sm:text-9xl md:text-[140px] leading-none tracking-tight font-black text-white flex items-baseline gap-2">
              <span className="tabular-nums">
                {String(progress).padStart(2, '0')}
              </span>
              <span className="text-[#ff3b19] text-3xl sm:text-5xl font-mono">%</span>
            </div>

            {/* Dynamic Status Text */}
            <div className="h-6 flex items-center justify-center mt-2">
              <motion.p
                key={stepIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="text-xs sm:text-sm font-mono tracking-wider text-white/70 flex items-center gap-2 uppercase"
              >
                <Terminal className="w-3.5 h-3.5 text-[#646cff]" />
                {LOADING_STEPS[stepIndex]}
              </motion.p>
            </div>
          </div>

          {/* Bottom Progress Bar & Telemetry Footer */}
          <div className="relative z-10 space-y-4">
            {/* Multi-segment styled progress bar */}
            <div className="relative w-full bg-white/10 h-2.5 rounded-full overflow-hidden border border-white/10 p-[1px]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#ff3b19] via-[#ff6b00] to-[#646cff] rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-3 bg-white blur-[2px] opacity-80" />
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 gap-2">
              <div className="flex items-center gap-4">
                <span>MEM_ALLOC: 512MB / OK</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">NODES: ACTIVE (8/8)</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setProgress(100);
                  setIsFinished(true);
                  if (onLoadingComplete) onLoadingComplete();
                }}
                className="text-white/60 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
              >
                SKIP INTRO [ESC / CLICK]
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
