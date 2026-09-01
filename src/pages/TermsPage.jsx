import React from 'react';
import SEOHead from '../seo/SEOHead.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import LegalNav from '../components/LegalNav.jsx';
import { getBreadcrumbSchema } from '../seo/schemaData.js';

export default function TermsPage({ onOpenContact }) {
  const schemas = [
    getBreadcrumbSchema([
      { name: 'Legal', url: '/terms-and-conditions' },
      { name: 'Terms & Conditions', url: '/terms-and-conditions' },
    ]),
  ];

  return (
    <div className="w-full bg-[#0c0c0c] text-white pt-24 sm:pt-28 pb-20">
      <SEOHead
        title="Terms & Conditions | PENTA PRIZM Studio"
        description="Review the terms and conditions governing client engagements, creative deliverables, intellectual property, and website usage with PENTA PRIZM Studio in Kochi, Kerala."
        canonicalUrl="/terms-and-conditions"
        keywords="penta prizm terms and conditions, creative agency agreement, studio terms kochi, service contract guidelines"
        schemas={schemas}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumb items={[{ label: 'LEGAL', path: '/terms-and-conditions' }, { label: 'TERMS & CONDITIONS' }]} />

        {/* Header */}
        <header className="py-8 sm:py-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b19]/10 border border-[#ff3b19]/30 text-[#ff3b19] text-xs font-mono tracking-widest uppercase mb-4">
            // CLIENT & SERVICE AGREEMENT
          </div>
          <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-[0.95] mb-4">
            TERMS & CONDITIONS
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
                Welcome to <strong className="text-white">PENTA PRIZM</strong>. These Terms & Conditions ("Terms", "Agreement") govern your access to and use of our website (<span className="text-[#ff3b19]">pentaprizm.in</span>) as well as the provision of our creative, technological, and marketing services.
              </p>
              <p>
                By commissioning a project, accepting a written studio proposal, or interacting with our digital channels, you agree to be legally bound by these terms. If you do not agree with any part of these terms, you must refrain from using our services.
              </p>
            </section>

            {/* Section 1 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  01
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  SCOPE OF SERVICES & PROPOSALS
                </h2>
              </div>
              <p>
                PENTA PRIZM provides specialized creative and technology services across multiple disciplines:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Branding & Strategy</h4>
                  <p className="text-xs text-neutral-400">Identity design, guidelines, typography, brand positioning.</p>
                </div>
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Content & Video</h4>
                  <p className="text-xs text-neutral-400">Commercial shoots, storytelling, editing, visual media.</p>
                </div>
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Web & App Development</h4>
                  <p className="text-xs text-neutral-400">Custom frontend/backend systems, UI/UX, mobile apps.</p>
                </div>
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Marketing & Growth</h4>
                  <p className="text-xs text-neutral-400">Performance campaigns, social strategies, SEO optimization.</p>
                </div>
              </div>
              <p className="text-xs text-neutral-400 pt-2">
                All client projects are governed by a mutually agreed Statement of Work (SOW), proposal, or invoice specifying deliverables, timeline estimations, milestone schedules, and associated commercial fees.
              </p>
            </section>

            {/* Section 2 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  02
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  INTELLECTUAL PROPERTY & OWNERSHIP
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-neutral-300">
                <li><strong className="text-white">Deliverable Ownership:</strong> Upon full and final settlement of all invoices, the client receives full ownership rights to final approved artwork, custom codebases, and video deliverables specified in the project agreement.</li>
                <li><strong className="text-white">Studio Portfolio Rights:</strong> Unless explicitly restricted via a mutually executed Non-Disclosure Agreement (NDA), PENTA PRIZM retains the perpetual, worldwide right to showcase completed project artwork, videos, websites, and case studies in studio lookbooks, design reels, award submissions, and promotional channels.</li>
                <li><strong className="text-white">Preliminary Concepts & Working Files:</strong> Unused creative drafts, discarded sketches, and internal studio tooling remain the sole intellectual property of PENTA PRIZM.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  03
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  PAYMENT TERMS & INVOICING
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-neutral-300">
                <li><strong className="text-white">Advance & Milestones:</strong> Standard studio projects require an agreed upfront commitment deposit prior to project initiation, with remaining balances disbursed on agreed milestones or final delivery.</li>
                <li><strong className="text-white">Currency & Taxes:</strong> All pricing is quoted in INR (or foreign currency when agreed). Statutory Goods and Services Tax (GST) applies as per government regulations in India.</li>
                <li><strong className="text-white">Late Payments:</strong> Invoices not settled within the designated credit window may incur pause in ongoing services, delayed production handoffs, or temporary server/service withholding until resolved.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  04
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  CLIENT RESPONSIBILITIES & REVISIONS
                </h2>
              </div>
              <p>
                Smooth project execution relies on collaborative feedback and client engagement:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-neutral-300">
                <li><strong className="text-white">Asset Clearances:</strong> Clients guarantee that any content, imagery, trademarks, or copy provided to PENTA PRIZM are owned by them or properly licensed.</li>
                <li><strong className="text-white">Feedback Timelines:</strong> To maintain delivery schedules, milestone reviews and revision requests should be furnished within agreed business days.</li>
                <li><strong className="text-white">Scope Revisions:</strong> Standard proposals specify a set number of creative revision rounds. Substantial structural changes outside the original brief are subject to additional scope adjustment.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  05
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  LIMITATION OF LIABILITY & GOVERNING LAW
                </h2>
              </div>
              <p>
                To the fullest extent permitted by applicable law, PENTA PRIZM shall not be liable for any indirect, incidental, special, or consequential damages resulting from digital platform downtime, third-party hosting outages, social media algorithm fluctuations, or client revenue variations.
              </p>
              <p className="text-xs text-neutral-400">
                These terms are governed and construed in accordance with the laws of <strong className="text-white">India</strong>. Any disputes arising under this agreement shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-white">Kochi, Kerala, India</strong>.
              </p>
            </section>

          </main>

          {/* Sidebar */}
          <LegalNav currentPath="/terms-and-conditions" onOpenContact={onOpenContact} />
        </div>
      </div>
    </div>
  );
}
