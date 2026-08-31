import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PENTA_SERVICES } from '../data/studioData.js';

export default function RelatedServices({ currentServiceId, relatedIds = [] }) {
  // If specific related IDs provided, use them; otherwise pick 3 other services
  const related = relatedIds.length
    ? PENTA_SERVICES.filter((s) => relatedIds.includes(s.id))
    : PENTA_SERVICES.filter((s) => s.id !== currentServiceId).slice(0, 3);

  if (!related || related.length === 0) return null;

  return (
    <section className="relative w-full py-16 sm:py-20 border-t border-white/10 bg-[#0a0a0a]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ff3b19] uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXPLORE ECOSYSTEM</span>
            </div>
            <h2 className="font-bebas text-3xl sm:text-4xl text-white tracking-wider uppercase">
              RELATED CAPABILITIES & SERVICES
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-[#ff3b19] transition-colors uppercase tracking-widest py-1"
          >
            <span>VIEW ALL SERVICES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((service) => (
            <Link
              key={service.id}
              to={service.route || `/services`}
              className="group relative bg-[#111111] hover:bg-[#161616] border border-white/10 hover:border-[#ff3b19]/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#ff3b19]">
                    // {service.code}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
                    {service.keyword}
                  </span>
                </div>
                <h3 className="font-bebas text-2xl text-white group-hover:text-[#ff3b19] transition-colors tracking-wide mb-2 uppercase">
                  {service.title}
                </h3>
                <p className="font-montserrat text-xs text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-montserrat font-bold text-white/80 group-hover:text-[#ff3b19] transition-colors uppercase tracking-wider pt-4 border-t border-white/5">
                <span>{service.cta || 'LEARN MORE'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
