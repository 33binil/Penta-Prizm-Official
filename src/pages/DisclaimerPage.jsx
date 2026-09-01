import React from 'react';
import SEOHead from '../seo/SEOHead.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import LegalNav from '../components/LegalNav.jsx';
import { getBreadcrumbSchema } from '../seo/schemaData.js';
import { AlertCircle, TrendingUp, Link2, Award, ShieldAlert } from 'lucide-react';

export default function DisclaimerPage({ onOpenContact }) {
  const schemas = [
    getBreadcrumbSchema([
      { name: 'Legal', url: '/disclaimer' },
      { name: 'Disclaimer', url: '/disclaimer' },
    ]),
  ];

  return (
    <div className="w-full bg-[#0c0c0c] text-white pt-24 sm:pt-28 pb-20">
      <SEOHead
        title="Disclaimer | PENTA PRIZM Studio"
        description="Important legal disclaimers regarding website content, creative portfolio representations, performance marketing outcomes, and external links for PENTA PRIZM Studio."
        canonicalUrl="/disclaimer"
        keywords="penta prizm disclaimer, studio portfolio representation, marketing results disclaimer, legal notice kochi"
        schemas={schemas}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumb items={[{ label: 'LEGAL', path: '/disclaimer' }, { label: 'DISCLAIMER' }]} />

        {/* Header */}
        <header className="py-8 sm:py-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b19]/10 border border-[#ff3b19]/30 text-[#ff3b19] text-xs font-mono tracking-widest uppercase mb-4">
            // GENERAL & PROFESSIONAL NOTICE
          </div>
          <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-[0.95] mb-4">
            DISCLAIMER
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
            <span>EFFECTIVE DATE: JANUARY 1, 2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span>LAST UPDATED: MARCH 2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="text-[#ff3b19]">PENTA PRIZM STUDIO</span>
          </div>
        </header>

        {/* Content Layout */}
        <div className="py-10 sm:py-14 flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
          {/* Main Document Content */}
          <main className="flex-1 min-w-0 space-y-10 font-montserrat text-sm text-neutral-300 leading-relaxed">
            
            {/* Intro */}
            <section className="space-y-4">
              <p className="text-base text-neutral-200 leading-relaxed">
                The information provided by <strong className="text-white">PENTA PRIZM</strong> ("we", "us", or "our") on our website (<span className="text-[#ff3b19]">pentaprizm.in</span>) and across all related marketing materials is for general informational and demonstration purposes only.
              </p>
              <p>
                All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any content on the site.
              </p>
            </section>

            {/* Section 1 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  01
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  PORTFOLIO & CASE STUDY REPRESENTATION
                </h2>
              </div>
              <p>
                Our portfolio, case studies, and creative lookbook highlight work produced for clients, conceptual brand identity explorations, and collaborative productions.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-neutral-300">
                <li><strong className="text-white">Conceptual Work:</strong> Some visuals, prototypes, and motion experiments are showcased as studio conceptual explorations to demonstrate technical and aesthetic range.</li>
                <li><strong className="text-white">Past Client Results:</strong> Growth metrics, impressions, conversion lifts, and return on ad spend (ROAS) cited in past case studies represent specific historical achievements and are not guarantees of identical future performance for every business.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  02
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  DIGITAL MARKETING & GROWTH DISCLAIMER
                </h2>
              </div>
              <p>
                Digital marketing outcomes (including organic SEO search ranks, social media follower velocity, ad auction costs, and conversion numbers) depend on external marketplace variables, budget allocation, competitor landscape, and third-party algorithm updates (e.g., Google, Meta, Instagram, LinkedIn).
              </p>
              <p className="text-xs text-neutral-400">
                While PENTA PRIZM applies elite industry methodologies, technical optimization, and tailored creative strategies, we do not promise or guarantee specific organic ranking positions or viral reach guarantees.
              </p>
            </section>

            {/* Section 3 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  03
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  EXTERNAL LINKS & THIRD-PARTY PLATFORMS
                </h2>
              </div>
              <p>
                Our website may contain links to external third-party websites, social platforms, code repositories, or client domains that are not maintained or controlled by PENTA PRIZM. We do not monitor, endorse, or assume responsibility for the accuracy or practices of any external sites.
              </p>
            </section>

            {/* Section 4 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  04
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  LIMITATION OF LIABILITY
                </h2>
              </div>
              <p>
                Under no circumstance shall PENTA PRIZM have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
              </p>
            </section>

          </main>

          {/* Sidebar */}
          <LegalNav currentPath="/disclaimer" onOpenContact={onOpenContact} />
        </div>
      </div>
    </div>
  );
}
