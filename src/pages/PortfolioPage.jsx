import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, ArrowUpRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb.jsx';
import SEOHead from '../seo/SEOHead.jsx';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData.js';
import { getBreadcrumbSchema } from '../seo/schemaData.js';

export default function PortfolioPage({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'Branding & Identity', 'Web Development', 'Creative Content & Video', 'Digital Marketing', 'App Development'];

  const filteredProjects =
    selectedCategory === 'ALL'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.serviceCategory === selectedCategory);

  const schemas = [
    getBreadcrumbSchema([{ name: 'Portfolio', url: '/portfolio' }]),
  ];

  return (
    <div className="w-full bg-[#0c0c0c] text-white pt-24 sm:pt-28 pb-16">
      <SEOHead
        title="Portfolio & Case Studies | Selected Works"
        description="Explore Penta Prizm's portfolio of branding identities, high-performance web applications, commercial video productions, and performance marketing campaigns."
        canonicalUrl="/portfolio"
        keywords="penta prizm portfolio, case studies, branding projects, web development portfolio, video production showreel, digital marketing results"
        schemas={schemas}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumb items={[{ label: 'PORTFOLIO' }]} />

        {/* Header */}
        <header className="py-8 sm:py-14 border-b border-white/10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b19]/10 border border-[#ff3b19]/30 text-[#ff3b19] text-xs font-mono tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED CASE STUDIES // 2026</span>
            </div>

            <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-[0.95] mb-6">
              PROVEN RESULTS. PURPOSEFUL CRAFT.
            </h1>

            <p className="font-montserrat text-sm sm:text-base text-neutral-300 leading-relaxed">
              We partner with ambitious companies to build market-defining brand identities, custom software applications, cinematic video assets, and high-conversion marketing funnels.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center flex-wrap gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-mono tracking-wider uppercase px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#ff3b19] border-[#ff3b19] text-white font-bold'
                    : 'bg-white/5 border-white/10 text-white/70 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Projects Grid */}
        <section className="py-14 sm:py-18">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative bg-[#111111] border border-white/10 hover:border-[#ff3b19]/50 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border-b border-white/10">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[10px] font-mono tracking-widest text-[#ff3b19] uppercase">
                    {project.serviceCategory}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[10px] font-mono tracking-widest text-white/70 uppercase">
                    {project.year}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-xs font-mono text-white/40 block mb-1">
                      INDUSTRY: {project.industry}
                    </span>
                    <h2 className="font-bebas text-2xl sm:text-3xl text-white group-hover:text-[#ff3b19] transition-colors tracking-wide uppercase mb-3">
                      <Link to={`/portfolio/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h2>
                    <p className="font-montserrat text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 line-clamp-3">
                      {project.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-montserrat font-bold text-white group-hover:text-[#ff3b19] transition-colors uppercase tracking-wider py-1"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => onOpenContact && onOpenContact(project.title)}
                      className="text-xs font-mono text-white/40 hover:text-white transition-colors uppercase py-1"
                    >
                      START SIMILAR →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
