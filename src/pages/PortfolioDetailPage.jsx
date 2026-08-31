import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Layers,
  Code2,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb.jsx';
import SEOHead from '../seo/SEOHead.jsx';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData.js';
import { getBreadcrumbSchema } from '../seo/schemaData.js';

export default function PortfolioDetailPage({ onOpenContact }) {
  const { id } = useParams();

  const project = PORTFOLIO_PROJECTS.find(
    (p) => p.slug === id || p.id === id
  );

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const schemas = [
    getBreadcrumbSchema([
      { name: 'Portfolio', url: '/portfolio' },
      { name: project.title, url: `/portfolio/${project.slug}` },
    ]),
  ];

  return (
    <article className="w-full bg-[#0c0c0c] text-white pt-24 sm:pt-28 pb-16">
      <SEOHead
        title={project.title}
        description={project.shortDesc}
        canonicalUrl={`/portfolio/${project.slug}`}
        ogImage={project.heroImage}
        keywords={`${project.serviceCategory}, ${project.industry}, case study, portfolio, penta prizm`}
        schemas={schemas}
      />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8">
        <Breadcrumb
          items={[
            { label: 'PORTFOLIO', path: '/portfolio' },
            { label: project.title },
          ]}
        />

        {/* Top Navigation */}
        <div className="mb-6">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-[#ff3b19] transition-colors uppercase py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ALL CASE STUDIES</span>
          </Link>
        </div>

        {/* Header */}
        <header className="py-6 sm:py-10 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b19]/10 border border-[#ff3b19]/30 text-[#ff3b19] text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.serviceCategory}</span>
          </div>

          <h1 className="font-bebas text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[0.95] mb-6">
            {project.title}
          </h1>

          <p className="font-montserrat text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
            {project.shortDesc}
          </p>

          {/* Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-mono">
            <div>
              <span className="text-white/40 block text-[10px] uppercase">
                CLIENT
              </span>
              <span className="text-white font-bold">{project.client}</span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px] uppercase">
                INDUSTRY
              </span>
              <span className="text-white font-bold">{project.industry}</span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px] uppercase">
                YEAR
              </span>
              <span className="text-white font-bold">{project.year}</span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px] uppercase">
                DISCIPLINE
              </span>
              <span className="text-[#ff3b19] font-bold">
                {project.serviceCategory}
              </span>
            </div>
          </div>
        </header>

        {/* Hero Showcase Image */}
        <div className="my-10 aspect-[16/10] w-full rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover brightness-95"
          />
        </div>

        {/* Deep Dive Case Study Content */}
        <div className="space-y-12 sm:space-y-16 border-b border-white/10 pb-16">
          {/* 1. Challenge & Strategy */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8">
              <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest block mb-3 font-bold">
                // 01 THE CHALLENGE
              </span>
              <h2 className="font-bebas text-2xl text-white tracking-wide uppercase mb-3">
                IDENTIFYING FRICTION POINTS
              </h2>
              <p className="font-montserrat text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8">
              <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest block mb-3 font-bold">
                // 02 THE STRATEGY
              </span>
              <h2 className="font-bebas text-2xl text-white tracking-wide uppercase mb-3">
                DATA-DRIVEN POSITIONING
              </h2>
              <p className="font-montserrat text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.strategy}
              </p>
            </div>
          </section>

          {/* 2. Creative & Technical Execution */}
          <section className="space-y-6">
            <div>
              <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest block mb-2 font-bold">
                // 03 EXECUTION & CRAFT
              </span>
              <h2 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase">
                CREATIVE DIRECTION & SYSTEM ARCHITECTURE
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-montserrat text-xs sm:text-sm text-neutral-300 leading-relaxed">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="font-bold text-white uppercase text-sm mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#ff3b19]" />
                  Creative & Visual Work
                </h3>
                <p>{project.creativeWork}</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="font-bold text-white uppercase text-sm mb-2 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#ff3b19]" />
                  Technical Implementation
                </h3>
                <p>{project.development}</p>
              </div>
            </div>
          </section>

          {/* 3. Tech Stack / Tools */}
          {project.technologies && project.technologies.length > 0 && (
            <section>
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-3">
                TECHNOLOGIES & TOOLING USED:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* 4. Deliverables */}
          <section>
            <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest block mb-3 font-bold">
              // 04 KEY DELIVERABLES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#141414] border border-white/10 text-xs font-montserrat font-medium text-white/90"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b19] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Measured Results */}
          <section className="bg-gradient-to-r from-[#ff3b19]/15 via-[#181818] to-[#121212] border border-[#ff3b19]/40 rounded-3xl p-8 sm:p-10">
            <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest block mb-2 font-bold">
              // 05 MEASURED RESULTS & ROI
            </span>
            <h2 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase mb-6">
              TANGIBLE IMPACT DELIVERED
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.results.map((res, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#ff3b19] shrink-0 mt-0.5" />
                  <p className="font-montserrat text-xs sm:text-sm font-semibold text-white/90 leading-relaxed">
                    {res}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Bottom */}
        <div className="pt-12 text-center">
          <h2 className="font-bebas text-3xl sm:text-4xl text-white tracking-wider uppercase mb-4">
            WANT SIMILAR RESULTS FOR YOUR BUSINESS?
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-neutral-400 max-w-md mx-auto mb-6">
            Let's discuss how our branding, development, content, and marketing capabilities can elevate your market positioning.
          </p>
          <button
            type="button"
            onClick={() => onOpenContact && onOpenContact(project.title)}
            className="bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-transform active:scale-95 shadow-xl shadow-[#ff3b19]/30 inline-flex items-center gap-2 cursor-pointer min-h-[48px]"
          >
            <span>START A PROJECT WITH PENTA PRIZM</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
