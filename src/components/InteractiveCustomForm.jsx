import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const API_BASE = import.meta.env.DEV ? (import.meta.env.VITE_API_URL || 'http://localhost:3001') : '';

export default function InteractiveCustomForm({ preselectedItem, onCompleted, onSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [comment, setComment] = useState(preselectedItem ? `Interested in: ${preselectedItem.title}` : '');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE}/api/submit-application`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          contact: `${email} | ${phone}`,
          budget,
          comment,
        }),
      });

      let data = {};
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      }

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
      if (onSuccess) {
        onSuccess({ name, email, phone, contact: `${email} | ${phone}` });
      } else if (onCompleted) {
        onCompleted();
      }
    } catch (err) {
      setError(err.message || 'Failed to submit. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="custom-builder" className="relative w-full bg-[#0a0a0a] text-white py-16 sm:py-24 overflow-hidden border-t border-white/10">
      {/* Background neon flares */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-[#ff3b19]/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none"
      />

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="font-marker text-[#ff3b19] text-xl sm:text-2xl lg:text-3xl spray-text -rotate-2 mb-2">
            // CREATE YOUR DIGITAL IDENTITY //
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl lg:text-8xl tracking-tight text-white uppercase leading-none">
            SHOW THE WORLD WHO YOU ARE.
          </h2>
          <p className="font-montserrat text-xs sm:text-sm lg:text-base text-neutral-400 max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed">
            Build a strong identity for your business with the right combination of branding, content, technology, and digital strategy. <br className="hidden sm:inline" /> From your first idea to the final execution, we'll create a digital presence that represents your brand and helps you grow.
          </p>
        </motion.div>

        {/* Interactive Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="rounded-2xl sm:rounded-3xl bg-neutral-950/90 border border-white/20 p-5 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="py-8 sm:py-12 text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ff3b19]/20 border border-[#ff3b19] flex items-center justify-center text-[#ff3b19] mb-4 sm:mb-6 animate-bounce">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wide">
                  PROJECT SUBMITTED TO PENTA PRIZM!
                </h3>
                <p className="font-montserrat text-neutral-300 text-xs sm:text-sm lg:text-base max-w-md mt-2 leading-relaxed">
                  Thanks, <strong>{name || 'friend'}</strong>! Our team will contact you within <span className="text-[#ff3b19] font-bold">24 hours</span> via <span className="text-[#ff3b19] font-mono">{email || phone}</span> with a tailored proposal.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 sm:mt-8 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-xs font-montserrat font-bold uppercase tracking-wider transition-colors cursor-pointer min-h-[44px]"
                >
                  Submit another project
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-8 sm:space-y-10"
              >

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                      Your name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b19] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                      Email address:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b19] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                      Phone / WhatsApp:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b19] min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                    Tell us about your project, idea or requirements:
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Describe your goals, references, timeline and any other details..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/20 rounded-xl p-4 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b19]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                    Project budget (optional):
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff3b19] cursor-pointer min-h-[44px]"
                  >
                    <option value="">Select a budget range...</option>
                    <option value="< ₹5000">&lt; ₹5000</option>
                    <option value="₹10,000 – ₹20,000">₹10,000 – ₹20,000</option>
                    <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                    <option value="₹50,000 – ₹75,000">₹50,000 – ₹75,000</option>
                    <option value="₹1,00,000+">₹1,00,000+</option>
                  </select>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-montserrat text-center"
                    >
                      {error}
                    </motion.div>
                  )}
                  <motion.button
                    whileHover={submitting ? {} : { scale: 1.01 }}
                    whileTap={submitting ? {} : { scale: 0.99 }}
                    type="submit"
                    disabled={submitting}
                    className={`w-full text-white font-montserrat font-extrabold text-xs sm:text-sm uppercase tracking-widest py-3.5 sm:py-4 rounded-full shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px] ${
                      submitting
                        ? 'bg-[#ff3b19]/60 shadow-[#ff3b19]/20 cursor-not-allowed'
                        : 'bg-[#ff3b19] hover:bg-[#e02f0e] shadow-[#ff3b19]/40'
                    }`}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <span>SUBMIT YOUR PROJECT TO PENTA PRIZM</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>

              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}