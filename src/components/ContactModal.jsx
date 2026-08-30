import React, { useState } from 'react';
import { X, Send, MessageCircle, Phone, Mail, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, defaultService }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState(defaultService ? `Hello! I am interested in: ${defaultService}` : '');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-neutral-950 border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl text-white my-auto max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#ff3b19] flex items-center justify-center transition-colors cursor-pointer min-w-[36px] min-h-[36px]"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 sm:mb-6 pr-8">
          <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest font-bold block mb-1">
            // CONTACT STUDIO
          </span>
          <h3 className="font-bebas text-3xl sm:text-4xl text-white uppercase tracking-wide">
            CONTACT STUDIO
          </h3>
          <p className="font-montserrat text-xs sm:text-sm text-neutral-400 mt-1">
            We respond promptly on Telegram, WhatsApp, or phone.
          </p>
        </div>

        {sent ? (
          <div className="py-6 sm:py-8 text-center flex flex-col items-center">
            <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-[#ff3b19] mb-4 animate-bounce" />
            <h4 className="font-bebas text-2xl sm:text-3xl uppercase">Message Sent!</h4>
            <p className="font-montserrat text-xs text-neutral-300 mt-2 max-w-xs leading-relaxed">
              Thank you for reaching out. We will get back to you shortly.
            </p>
            <button
              onClick={() => {
                setSent(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#ff3b19] text-xs font-montserrat font-bold uppercase tracking-wider min-h-[40px]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Quick Messengers Bar */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl bg-[#229ED9]/20 border border-[#229ED9]/40 hover:bg-[#229ED9]/30 text-[11px] sm:text-xs font-montserrat font-bold tracking-wider transition-colors min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 text-[#229ED9]" />
                <span>TELEGRAM</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 text-[11px] sm:text-xs font-montserrat font-bold tracking-wider transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                <span>WHATSAPP</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>

            {/* Quick Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b19] min-h-[44px]"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  placeholder="Email, Phone or Telegram (@username)"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b19] min-h-[44px]"
                />
              </div>

              <div>
                <textarea
                  rows="3"
                  placeholder="Tell us about your project or requirement..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/20 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b19]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-extrabold text-xs uppercase tracking-widest py-3.5 rounded-full shadow-xl shadow-[#ff3b19]/30 transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>SEND MESSAGE</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
}
