import React from 'react';
import SEOHead from '../seo/SEOHead.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import LegalNav from '../components/LegalNav.jsx';
import { getBreadcrumbSchema } from '../seo/schemaData.js';
import { ShieldCheck, Lock, Eye, FileSpreadsheet, UserCheck, RefreshCw } from 'lucide-react';

export default function PrivacyPolicyPage({ onOpenContact }) {
  const schemas = [
    getBreadcrumbSchema([
      { name: 'Legal', url: '/privacy-policy' },
      { name: 'Privacy Policy', url: '/privacy-policy' },
    ]),
  ];

  return (
    <div className="w-full bg-[#0c0c0c] text-white pt-24 sm:pt-28 pb-20">
      <SEOHead
        title="Privacy Policy | PENTA PRIZM Studio"
        description="Learn how PENTA PRIZM collects, utilizes, and protects your personal data when engaging with our branding, video production, web development, and digital marketing services."
        canonicalUrl="/privacy-policy"
        keywords="penta prizm privacy policy, data protection, privacy terms kochi kerala, client data safety"
        schemas={schemas}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumb items={[{ label: 'LEGAL', path: '/privacy-policy' }, { label: 'PRIVACY POLICY' }]} />

        {/* Header */}
        <header className="py-8 sm:py-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b19]/10 border border-[#ff3b19]/30 text-[#ff3b19] text-xs font-mono tracking-widest uppercase mb-4">
            // LEGAL & DATA PROTECTION
          </div>
          <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-[0.95] mb-4">
            PRIVACY POLICY
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
                At <strong className="text-white">PENTA PRIZM</strong> ("we", "our", or "us"), your privacy is fundamental to how we design, build, and operate. This Privacy Policy explains our practices regarding the collection, use, disclosure, and protection of information obtained through our website (<span className="text-[#ff3b19]">pentaprizm.in</span>), client discovery workflows, digital services, and creative engagements.
              </p>
              <p>
                By accessing our website or utilizing our branding, content creation, video production, web & app development, and digital marketing services, you acknowledge the terms set forth in this policy.
              </p>
            </section>

            {/* Section 1 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  01
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  INFORMATION WE COLLECT
                </h2>
              </div>
              <p>
                We gather information to provide responsive creative services, fulfill technical contracts, and refine your browsing experience:
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-1">
                    A. Voluntarily Provided Information
                  </h3>
                  <p className="text-xs text-neutral-400">
                    When you fill out our contact or project application forms, request a quote, or email us, we collect your name, business email, phone number, company/brand details, budget ranges, and project briefs.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-1">
                    B. Client Assets & Project Materials
                  </h3>
                  <p className="text-xs text-neutral-400">
                    During client project execution (branding, video editing, development, or marketing), you may share brand guidelines, proprietary footage, product assets, and business credentials. These are strictly protected under confidentiality.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-1">
                    C. Automatically Collected Technical Data
                  </h3>
                  <p className="text-xs text-neutral-400">
                    When visiting our website, our servers and analytics providers log standard diagnostic data, including browser types, device categories, operating systems, referring URLs, IP addresses, and page interaction metrics.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  02
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  HOW WE USE YOUR INFORMATION
                </h2>
              </div>
              <p>
                We use the collected information solely for legitimate business, creative, and technological purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-neutral-300">
                <li><strong className="text-white">Service Delivery:</strong> Crafting brand strategies, shooting & editing video campaigns, programming web and mobile applications, and managing marketing pipelines.</li>
                <li><strong className="text-white">Client Communication:</strong> Responding to inquiries, scheduling consultations, providing milestone status reports, and handling invoicing.</li>
                <li><strong className="text-white">Platform Optimization:</strong> Analyzing site navigation patterns to enhance performance, accessibility, and visual usability.</li>
                <li><strong className="text-white">Compliance & Security:</strong> Safeguarding against unauthorized access, malicious activity, and fulfilling legal/tax obligations in India.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  03
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  INFORMATION SHARING & THIRD PARTIES
                </h2>
              </div>
              <p>
                <strong className="text-white">We never sell, rent, or trade your personal or business data to third-party brokers or advertisers.</strong>
              </p>
              <p>
                Information may be shared only under the following tightly regulated circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-neutral-300">
                <li><strong className="text-white">Essential Service Providers:</strong> Trusted cloud infrastructure hosts, analytics platforms (e.g., Google Analytics), and email delivery services operating under non-disclosure obligations.</li>
                <li><strong className="text-white">Client-Authorized Integrations:</strong> Third-party APIs, domain registrars, or payment gateways configured specifically for your project.</li>
                <li><strong className="text-white">Legal Mandates:</strong> Where required by applicable statutory laws, court summons, or regulatory authorities in India.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  04
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  DATA SECURITY & RETENTION
                </h2>
              </div>
              <p>
                We employ industry-standard physical, electronic, and procedural safeguards (including SSL/TLS encryption, restricted access protocols, and verified infrastructure) to preserve the integrity and confidentiality of your data.
              </p>
              <p>
                We retain client project information for the duration necessary to satisfy ongoing service warranties, legal, financial, and tax obligations, or until a formal deletion request is executed.
              </p>
            </section>

            {/* Section 5 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  05
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  YOUR DATA RIGHTS
                </h2>
              </div>
              <p>
                Depending on your jurisdiction and under applicable data protection laws (including the Digital Personal Data Protection Act, 2023):
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-neutral-300">
                <li>You have the right to request access to the personal data we hold about you.</li>
                <li>You may request corrections, updates, or rectifications to inaccurate information.</li>
                <li>You may request the deletion or erasure of your personal data from our active records.</li>
                <li>You may withdraw consent for promotional communications at any time.</li>
              </ul>
              <p className="pt-2 text-xs text-neutral-400">
                To exercise any of these rights, contact us at <a href="mailto:pentaprizmofficial@gmail.com" className="text-[#ff3b19] underline">pentaprizmofficial@gmail.com</a>.
              </p>
            </section>

            {/* Section 6 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  06
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  UPDATES TO THIS POLICY
                </h2>
              </div>
              <p>
                PENTA PRIZM reserves the right to revise this Privacy Policy periodically to reflect technological changes, service expansions, or regulatory updates. Any changes will be published on this page with an updated revision date.
              </p>
            </section>

          </main>

          {/* Sidebar */}
          <LegalNav currentPath="/privacy-policy" onOpenContact={onOpenContact} />
        </div>
      </div>
    </div>
  );
}
