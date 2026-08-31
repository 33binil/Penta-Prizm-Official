import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb.jsx';
import SEOHead from '../seo/SEOHead.jsx';
import { PENTA_SERVICES } from '../data/studioData.js';
import { getBreadcrumbSchema } from '../seo/schemaData.js';

export default function ServicesPage({ onOpenContact }) {
  const schemas = [
    getBreadcrumbSchema([{ name: 'Services', url: '/services' }]),
  ];

  return (
    <div className="w-full bg-[#0c0c0c] text-white pt-24 sm:pt-28 pb-16">
      <SEOHead
        title="Our Creative & Digital Technology Services"
        description="Explore Penta Prizm's specialized capabilities: Branding, Creative Content, Video Production, Web Development, App Development, Marketing, and Digital Marketing."
        canonicalUrl="/services"
        keywords="creative agency services, branding, video production, web development, app development, marketing, digital marketing, Kochi, Kerala"
        schemas={schemas}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumb items={[{ label: 'SERVICES' }]} />

        {/* Page Header */}
        <header className="py-8 sm:py-14 border-b border-white/10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b19]/10 border border-[#ff3b19]/30 text-[#ff3b19] text-xs font-mono tracking-widest uppercase mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>CORE CAPABILITIES // 2026</span>
            </div>

            <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-[0.95] mb-6">
              CREATIVE & DIGITAL SERVICES DESIGNED FOR GROWTH
            </h1>

            <p className="font-montserrat text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
              We engineer brands, produce cinematic content, develop high-performance software, and execute data-driven digital marketing campaigns. Explore our specialized service divisions below.
            </p>

            <button
              type="button"
              onClick={() => onOpenContact && onOpenContact('General Services Inquiry')}
              className="bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-bold text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 rounded-full transition-all duration-200 shadow-xl shadow-[#ff3b19]/30 flex items-center gap-2 cursor-pointer min-h-[44px]"
            >
              <span>DISCUSS YOUR PROJECT WITH US</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Services Grid */}
        <section className="py-14 sm:py-18">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PENTA_SERVICES.map((service) => (
              <div
                key={service.id}
                className="group relative bg-[#111111] hover:bg-[#141414] border border-white/10 hover:border-[#ff3b19]/50 rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <span className="font-bebas text-3xl text-[#ff3b19]">
                      // {service.code}
                    </span>
                    <span className="text-xs font-mono tracking-widest text-white/50 uppercase">
                      {service.keyword}
                    </span>
                  </div>

                  <h2 className="font-bebas text-3xl sm:text-4xl text-white group-hover:text-[#ff3b19] transition-colors tracking-wide uppercase mb-3">
                    {service.title}
                  </h2>

                  <p className="font-montserrat text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <span className="font-mono text-[11px] text-[#ff3b19] tracking-widest uppercase block mb-3 font-bold">
                      // {service.whatWeDoLabel || 'SPECIALIZED MODULES'}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.whatWeDo.slice(0, 6).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-montserrat text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ff3b19] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to={service.route || `/services`}
                    className="inline-flex items-center gap-2 text-xs font-montserrat font-bold text-white group-hover:text-[#ff3b19] transition-colors uppercase tracking-wider py-1"
                  >
                    <span>EXPLORE SERVICE DETAILS</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onOpenContact && onOpenContact(service.title)}
                    className="text-xs font-mono text-white/40 hover:text-white transition-colors uppercase py-1"
                  >
                    GET QUOTE →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
