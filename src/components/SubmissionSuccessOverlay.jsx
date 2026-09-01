import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function SubmissionSuccessOverlay({ isOpen, name, contact, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-3xl bg-neutral-950/95 border border-white/20 p-8 sm:p-12 text-center shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#ff3b19]/20 border border-[#ff3b19] flex items-center justify-center text-[#ff3b19] mb-6"
            >
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wide leading-tight"
            >
              PROJECT SUBMITTED TO PENTA PRIZM!
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-montserrat text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed"
            >
              Thanks, <strong className="text-white">{name || 'friend'}</strong>! Our team will contact you within{' '}
              <span className="text-[#ff3b19] font-bold">24 hours</span> via{' '}
              <span className="text-[#ff3b19] font-mono">{contact}</span> with a tailored proposal.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="font-montserrat text-neutral-500 text-xs sm:text-sm mt-4"
            >
              A confirmation email has been sent to your inbox.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="mt-8 px-8 py-3 rounded-full bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer min-h-[44px]"
            >
              Done
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
