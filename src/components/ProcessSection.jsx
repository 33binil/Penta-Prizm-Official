import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Target, Paintbrush, Code2, TrendingUp, Rocket, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/studioData.js';

export default function ProcessSection({ onStartCustom }) {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Lightbulb, Target, Paintbrush, Code2, TrendingUp, Rocket];

  return (
    <section id="process" className="relative w-full bg-[#0a0a0a] text-white py-24 overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-1/3 left-10 w-80 h-80 bg-[#ff3b19]/10 rounded-full blur-[130px] pointer-events-none"
      />

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <span className="text-[#ff3b19] font-mono text-xs uppercase tracking-widest font-bold block mb-2">
              // HOW IT WORKS
            </span>
            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none">
              OUR PROCESS
            </h2>
          </div>
          <p className="font-montserrat text-sm text-neutral-400 max-w-md">
            From understanding your idea and business goals to creating, launching, and continuously improving the final digital experience.
          </p>
        </motion.div>

        {/* 6 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            const isActive = activeStep === idx;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.08 * idx }}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 border-[#ff3b19] shadow-2xl shadow-[#ff3b19]/20'
                    : 'bg-neutral-950/70 border-white/15 hover:border-white/40'
                }`}
              >
                {/* Step Top Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-bebas text-4xl sm:text-5xl text-[#ff3b19] leading-none">
                      {step.num}
                    </span>
                    <div className={`p-2.5 rounded-xl transition-colors ${isActive ? 'bg-[#ff3b19] text-white' : 'bg-white/5 text-neutral-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-bebas text-2xl sm:text-3xl text-white uppercase tracking-wide mb-3">
                    {step.title}
                  </h3>

                  <p className="font-montserrat text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Step indicator */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>STEP {step.num}/06</span>
                  <span className={isActive ? 'text-[#ff3b19] font-bold' : ''}>
                    {isActive ? '● IN FOCUS' : '○'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 p-6 rounded-xl bg-neutral-950 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span className="font-montserrat text-sm text-neutral-300 font-medium">
            Every project is built around your brand, your audience, and your goals.
          </span>
          <button
            onClick={onStartCustom}
            className="text-xs font-montserrat font-bold text-[#ff3b19] hover:text-white uppercase tracking-wider underline cursor-pointer"
          >
            Start Your Project →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
