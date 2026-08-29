import React, { useState } from 'react';
import { X, Send, MessageCircle, Phone, Mail, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, defaultService }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState(defaultService ? `Здравствуйте! Интересует: ${defaultService}` : '');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-neutral-950 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#ff3b19] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest font-bold block mb-1">
            // CONTACT STUDIO
          </span>
          <h3 className="font-bebas text-4xl text-white uppercase tracking-wide">
            НАПИСАТЬ В СТУДИЮ
          </h3>
          <p className="font-montserrat text-xs sm:text-sm text-neutral-400 mt-1">
            Отвечаем оперативно в Telegram или по указанному телефону.
          </p>
        </div>

        {sent ? (
          <div className="py-8 text-center flex flex-col items-center">
            <CheckCircle2 className="w-14 h-14 text-[#ff3b19] mb-4 animate-bounce" />
            <h4 className="font-bebas text-3xl uppercase">Сообщение отправлено!</h4>
            <p className="font-montserrat text-xs text-neutral-300 mt-2 max-w-xs">
              Спасибо за обращение. Мы свяжемся с вами в течение 15 минут.
            </p>
            <button
              onClick={() => {
                setSent(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#ff3b19] text-xs font-montserrat font-bold uppercase tracking-wider"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            {/* Quick Messengers Bar */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#229ED9]/20 border border-[#229ED9]/40 hover:bg-[#229ED9]/30 text-xs font-montserrat font-bold tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#229ED9]" />
                <span>TELEGRAM</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 text-xs font-montserrat font-bold tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                <span>WHATSAPP</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>

            {/* Quick Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b19]"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  placeholder="Telegram (@username) или Телефон"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b19]"
                />
              </div>

              <div>
                <textarea
                  rows="3"
                  placeholder="Какой проект или вещь вас интересует?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/20 rounded-xl p-4 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b19]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-extrabold text-xs uppercase tracking-widest py-3.5 rounded-full shadow-xl shadow-[#ff3b19]/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>ОТПРАВИТЬ СООБЩЕНИЕ</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
}
