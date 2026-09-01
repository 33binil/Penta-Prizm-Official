import React from 'react';
import SEOHead from '../seo/SEOHead.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import LegalNav from '../components/LegalNav.jsx';
import { getBreadcrumbSchema } from '../seo/schemaData.js';
import { Cookie, Settings, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CookiePolicyPage({ onOpenContact }) {
  const schemas = [
    getBreadcrumbSchema([
      { name: 'Legal', url: '/cookie-policy' },
      { name: 'Cookie Policy', url: '/cookie-policy' },
    ]),
  ];

  return (
    <div className="w-full bg-[#0c0c0c] text-white pt-24 sm:pt-28 pb-20">
      <SEOHead
        title="Cookie Policy | PENTA PRIZM Studio"
        description="Understand how PENTA PRIZM utilizes essential, functional, and performance cookies to optimize your browsing and digital experience on pentaprizm.in."
        canonicalUrl="/cookie-policy"
        keywords="penta prizm cookie policy, web cookies kochi kerala, analytics tracking preferences, browser cookies"
        schemas={schemas}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumb items={[{ label: 'LEGAL', path: '/cookie-policy' }, { label: 'COOKIE POLICY' }]} />

        {/* Header */}
        <header className="py-8 sm:py-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b19]/10 border border-[#ff3b19]/30 text-[#ff3b19] text-xs font-mono tracking-widest uppercase mb-4">
            // BROWSER & TRACKING COMPLIANCE
          </div>
          <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-[0.95] mb-4">
            COOKIE POLICY
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
                This Cookie Policy explains how <strong className="text-white">PENTA PRIZM</strong> uses cookies, local web storage, and similar web tracking technologies when you visit our website (<span className="text-[#ff3b19]">pentaprizm.in</span>).
              </p>
              <p>
                We believe in complete transparency. We only deploy cookies necessary for site functionality, performance analysis, and enhancing your interactive navigation.
              </p>
            </section>

            {/* Section 1 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  01
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  WHAT ARE COOKIES?
                </h2>
              </div>
              <p>
                Cookies are small text files placed on your computer, smartphone, or tablet when you browse websites. They are widely used to make web applications run efficiently, remember preferences, and deliver anonymous analytics back to site operators.
              </p>
            </section>

            {/* Section 2 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  02
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  CATEGORIES OF COOKIES WE USE
                </h2>
              </div>
              
              <div className="space-y-4 pt-2">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b19]" />
                    <h3 className="font-bold text-white text-xs uppercase tracking-wider">
                      Strictly Necessary & Functional Cookies
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-400">
                    These are essential for core website navigation, responsive layouts, theme persistence, and secure contact form submissions. They do not store personally identifiable data.
                  </p>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b19]" />
                    <h3 className="font-bold text-white text-xs uppercase tracking-wider">
                      Performance & Diagnostic Analytics
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-400">
                    We use aggregated diagnostic tools (e.g., Google Analytics 4) to understand which portfolio projects and service sections engage visitors most. All IP data is anonymized.
                  </p>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b19]" />
                    <h3 className="font-bold text-white text-xs uppercase tracking-wider">
                      Third-Party Media Embeds
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-400">
                    When viewing embedded social videos, fonts, or interactive media widgets, third-party platforms (like Google Fonts, YouTube, or Instagram) may set independent session cookies.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3b19]/10 text-[#ff3b19] flex items-center justify-center font-mono font-bold text-xs">
                  03
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  MANAGING YOUR COOKIE PREFERENCES
                </h2>
              </div>
              <p>
                You can control, restrict, or delete cookies at any time through your web browser settings:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-neutral-300">
                <li><strong className="text-white">Google Chrome:</strong> Settings → Privacy and Security → Third-Party Cookies.</li>
                <li><strong className="text-white">Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data.</li>
                <li><strong className="text-white">Apple Safari:</strong> Preferences → Privacy → Block all cookies.</li>
                <li><strong className="text-white">Microsoft Edge:</strong> Settings → Cookies and Site Permissions.</li>
              </ul>
              <p className="text-xs text-neutral-400 pt-2">
                Note that disabling essential technical cookies may slightly affect the presentation of animations and dynamic visual components.
              </p>
            </section>

          </main>

          {/* Sidebar */}
          <LegalNav currentPath="/cookie-policy" onOpenContact={onOpenContact} />
        </div>
      </div>
    </div>
  );
}
