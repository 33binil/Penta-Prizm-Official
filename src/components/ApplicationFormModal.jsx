import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import InteractiveCustomForm from './InteractiveCustomForm.jsx';

export default function ApplicationFormModal({ isOpen, onClose, preselectedItem }) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-xl overflow-y-auto"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            aria-label="Close application form"
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 hover:bg-[#ff3b19] hover:border-[#ff3b19] text-white flex items-center justify-center transition-colors cursor-pointer min-w-[44px] min-h-[44px]"
          >
            <X className="w-5 h-5" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-full"
          >
            <InteractiveCustomForm preselectedItem={preselectedItem} onCompleted={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}