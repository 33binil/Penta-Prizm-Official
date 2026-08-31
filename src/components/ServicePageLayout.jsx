import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Layers,
  Sparkles,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import Breadcrumb from './Breadcrumb.jsx';
import FAQSection from './FAQSection.jsx';
import RelatedServices from './RelatedServices.jsx';
import SEOHead from '../seo/SEOHead.jsx';
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getFAQSchema,
} from '../seo/schemaData.js';

export default function ServicePageLayout({
  serviceId,
  serviceSlug,
  seoTitle,
  seoDescription,
  keywords,
  h1Title,
  badgeText = 'SERVICE CAPABILITY',
  subtitle,
  description,
  featuresTitle = 'KEY DELIVERABLES & CAPABILITIES',
  features = [],
  processTitle = 'EXECUTION METHODOLOGY',
  processSteps = [],
  benefitsTitle = 'BUSINESS ADVANTAGES',
  benefits = [],
  faqs = [],
  relatedServiceIds = [],
  onOpenContact,
  heroImage = '/Hero.png',
}) {
  const serviceUrl = `/${serviceSlug}`;

  // Build JSON-LD schemas
  const schemas = [
    getServiceSchema({
      name: h1Title,
      description: seoDescription,
      serviceType: badgeText,
      url: serviceUrl,
      offers: features,
    }),
    getBreadcrumbSchema([
      { name: 'Services', url: '/services' },
      { name: h1Title, url: serviceUrl },
    ]),
    getFAQSchema(faqs),
  ];

  return (
    <article className="w-full bg-[#0c0c0c] text-white pt-24 sm:pt-28 pb-16">
      {/* SEO Engine */}
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={serviceUrl}
        keywords={keywords}
        ogImage={heroImage}
        schemas={schemas}
      />

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'SERVICES', path: '/services' },
            { label: h1Title },
          ]}
        />

        {/* Hero Section */}
        <header className="relative py-8 sm:py-14 border-b border-white/10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b19]/10 border border-[#ff3b19]/30 text-[#ff3b19] text-xs font-mono tracking-widest uppercase mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>{badgeText}</span>
            </div>

            <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-[0.95] mb-6">
              {h1Title}
            </h1>

            <p className="font-montserrat text-sm sm:text-base md:text-lg text-neutral-300 font-medium leading-relaxed mb-8">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact(h1Title)}
                className="bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-bold text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 rounded-full transition-all duration-200 shadow-xl shadow-[#ff3b19]/30 flex items-center gap-2 cursor-pointer min-h-[44px]"
              >
                <span>REQUEST PROJECT PROPOSAL</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#deliverables"
                className="border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-mono text-xs uppercase tracking-wider px-5 py-3.5 rounded-full transition-colors min-h-[44px] flex items-center"
              >
                EXPLORE CAPABILITIES
              </a>
            </div>
          </div>
        </header>

        {/* In-depth Overview Section */}
        <section className="py-14 sm:py-18 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest block mb-2">
              // OVERVIEW
            </span>
            <h2 className="font-bebas text-3xl sm:text-4xl text-white tracking-wider uppercase leading-tight">
              STRATEGIC ARCHITECTURE BUILT FOR MARKET DOMINANCE
            </h2>
          </div>
          <div className="lg:col-span-7 font-montserrat text-sm sm:text-base text-neutral-300 leading-relaxed space-y-4">
            {typeof description === 'string' ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </div>
        </section>

        {/* Deliverables / Capabilities Grid */}
        <section id="deliverables" className="py-14 sm:py-18 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest block mb-2">
                // WHAT WE DELIVER
              </span>
              <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wider uppercase">
                {featuresTitle}
              </h2>
            </div>
            <span className="text-xs font-mono text-white/40 uppercase">
              {features.length} SPECIALIZED MODULES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#121212] border border-white/10 hover:border-[#ff3b19]/40 rounded-xl p-5 sm:p-6 transition-colors duration-200 flex items-start gap-3.5 group"
              >
                <CheckCircle2 className="w-5 h-5 text-[#ff3b19] shrink-0 mt-0.5" />
                <span className="font-montserrat font-semibold text-xs sm:text-sm text-white/90 group-hover:text-white transition-colors">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Execution Methodology / Process */}
        {processSteps && processSteps.length > 0 && (
          <section className="py-14 sm:py-18 border-b border-white/10">
            <div className="mb-10">
              <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest block mb-2">
                // PROCESS & WORKFLOW
              </span>
              <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wider uppercase">
                {processTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-bebas text-4xl text-[#ff3b19] block mb-3">
                      0{idx + 1}
                    </span>
                    <h3 className="font-montserrat font-bold text-sm sm:text-base text-white uppercase tracking-wider mb-2">
                      {step.title}
                    </h3>
                    <p className="font-montserrat text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Business Benefits Grid */}
        {benefits && benefits.length > 0 && (
          <section className="py-14 sm:py-18 border-b border-white/10">
            <div className="mb-10">
              <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest block mb-2">
                // VALUE PROPOSITION
              </span>
              <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wider uppercase">
                {benefitsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#ff3b19]/10 border border-[#ff3b19]/30 flex items-center justify-center text-[#ff3b19] mb-4">
                      {idx === 0 ? (
                        <TrendingUp className="w-5 h-5" />
                      ) : idx === 1 ? (
                        <ShieldCheck className="w-5 h-5" />
                      ) : (
                        <Sparkles className="w-5 h-5" />
                      )}
                    </div>
                    <h3 className="font-montserrat font-bold text-sm sm:text-base text-white uppercase tracking-wider mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-montserrat text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        title={`FREQUENTLY ASKED QUESTIONS ABOUT ${h1Title}`}
      />

      {/* CTA Banner */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="relative bg-gradient-to-r from-[#ff3b19]/20 via-[#181818] to-[#111111] border border-[#ff3b19]/40 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest font-bold block mb-2">
              // READY TO ELEVATE YOUR BRAND?
            </span>
            <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wider uppercase leading-none mb-4">
              LET'S BUILD SOMETHING EXTRAORDINARY TOGETHER
            </h2>
            <p className="font-montserrat text-xs sm:text-sm text-neutral-300">
              Schedule a discovery session with our team. We analyze your requirements and deliver a customized strategic blueprint.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenContact && onOpenContact(h1Title)}
            className="shrink-0 bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-transform active:scale-95 shadow-xl shadow-[#ff3b19]/40 cursor-pointer min-h-[48px]"
          >
            START YOUR PROJECT NOW →
          </button>
        </div>
      </section>

      {/* Internal Links: Related Services */}
      <RelatedServices
        currentServiceId={serviceId}
        relatedIds={relatedServiceIds}
      />
    </article>
  );
}
