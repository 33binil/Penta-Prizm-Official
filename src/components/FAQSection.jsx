import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection({ faqs = [], title = 'FREQUENTLY ASKED QUESTIONS', subtitle = 'CLEAR ANSWERS TO HELP YOU MOVE FAST' }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative w-full py-16 sm:py-20 border-t border-white/10 bg-[#080808]">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b19]/10 border border-[#ff3b19]/30 text-[#ff3b19] text-xs font-mono tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE // FAQ</span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wider uppercase">
            {title}
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto mt-2">
            {subtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#ff3b19]/50 bg-[#121212]'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer min-h-[48px]"
                >
                  <span className="font-montserrat font-bold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70"
                  >
                    <ChevronDown className="w-4 h-4 text-[#ff3b19]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm font-montserrat text-neutral-300 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
