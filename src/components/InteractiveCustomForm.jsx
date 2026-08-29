import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function InteractiveCustomForm({ preselectedItem, onCompleted }) {
  const [selectedServices, setSelectedServices] = useState(['BRANDING']);
  const [name, setName] = useState('');
  const [orgName, setOrgName] = useState('');
  const [contact, setContact] = useState('');
  const [budget, setBudget] = useState('');
  const [comment, setComment] = useState(preselectedItem ? `Interested in: ${preselectedItem.title}` : '');
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    { name: 'BRANDING', desc: 'Brand Identity • Logo • Brand Guidelines' },
    { name: 'CREATIVE CONTENT', desc: 'Photography • Videography • Video Editing' },
    { name: 'WEBSITE DEVELOPMENT', desc: 'Business Website • E-Commerce • Custom Website' },
    { name: 'APP DEVELOPMENT', desc: 'Mobile Apps • Web Apps • Custom Solutions' },
    { name: 'MARKETING', desc: 'Strategy • Campaigns • Lead Generation' },
    { name: 'DIGITAL MARKETING', desc: 'Social Media • SEO • Paid Advertising' },
  ];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onCompleted) onCompleted();
  };

  return (
    <section id="custom-builder" className="relative w-full bg-[#0a0a0a] text-white py-24 overflow-hidden border-t border-white/10">
      {/* Background neon flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ff3b19]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 relative z-20">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="font-marker text-[#ff3b19] text-2xl sm:text-3xl spray-text -rotate-2 mb-2">
            // CREATE YOUR DIGITAL IDENTITY //
          </div>
          <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none">
            SHOW THE WORLD WHO YOU ARE.
          </h2>
          <p className="font-montserrat text-sm sm:text-base text-neutral-400 max-w-xl mx-auto mt-4">
            Build a strong identity for your business with the right combination of branding, content, technology, and digital strategy. <br/> From your first idea to the final execution, we'll create a digital presence that represents your brand and helps you grow.
          </p>
        </div>

        {/* Interactive Form Card */}
        <div className="rounded-3xl bg-neutral-950/90 border border-white/20 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#ff3b19]/20 border border-[#ff3b19] flex items-center justify-center text-[#ff3b19] mb-6 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-bebas text-4xl sm:text-5xl text-white uppercase tracking-wide">
                PROJECT SUBMITTED TO PENTA PRIZM!
              </h3>
              <p className="font-montserrat text-neutral-300 text-sm sm:text-base max-w-md mt-2">
                Thanks, <strong>{name || 'friend'}</strong>! Our team will reach out via <span className="text-[#ff3b19] font-mono">{contact}</span> shortly with a tailored proposal.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-xs font-montserrat font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Submit another project
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">

              {/* Step 1: Choose Your Service */}
              <div>
                <label className="block font-mono text-xs text-[#ff3b19] uppercase tracking-widest font-bold mb-4">
                  01 // CHOOSE YOUR SERVICE
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {availableServices.map((s) => {
                    const isSelected = selectedServices.includes(s.name);
                    return (
                      <button
                        key={s.name}
                        type="button"
                        onClick={() => toggleService(s.name)}
                        className={`p-4 rounded-xl text-left transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-[#ff3b19] border-[#ff3b19] text-white shadow-lg shadow-[#ff3b19]/30 scale-102'
                            : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white hover:border-white/30'
                        }`}
                      >
                        <span className="font-bebas text-2xl text-white tracking-wide uppercase block leading-tight">
                          {s.name}
                        </span>
                        <span className={`text-[11px] font-montserrat font-semibold mt-1.5 block ${isSelected ? 'text-white/90' : 'text-neutral-500'}`}>
                          {s.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    Your name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b19]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    Organisation name (if you have):
                  </label>
                  <input
                    type="text"
                    placeholder="Your organisation"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b19]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    Email / Phone / WhatsApp:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="email@example.com / +7 (999) 000-00-00"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b19]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                  Tell us about your project, idea or requirements:
                </label>
                <textarea
                  rows="3"
                  placeholder="Describe your goals, references, timeline and any other details..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/20 rounded-xl p-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b19]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                  Project budget (optional):
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff3b19] cursor-pointer"
                >
                  <option value="">Select a budget range...</option>
                  <option value="< $500">&lt; $500</option>
                  <option value="$500 – $1,000">$500 – $1,000</option>
                  <option value="$1,000 – $5,000">$1,000 – $5,000</option>
                  <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-extrabold text-sm uppercase tracking-widest py-4 rounded-full shadow-2xl shadow-[#ff3b19]/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>SUBMIT YOUR PROJECT TO PENTA PRIZM</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}