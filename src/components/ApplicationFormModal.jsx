import React, { useEffect } from 'react';
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-xl overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close application form"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 hover:bg-[#ff3b19] hover:border-[#ff3b19] text-white flex items-center justify-center transition-colors cursor-pointer min-w-[44px] min-h-[44px]"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="w-full max-w-5xl mx-auto px-0 sm:px-6">
        <InteractiveCustomForm preselectedItem={preselectedItem} onCompleted={onClose} />
      </div>
    </div>
  );
}