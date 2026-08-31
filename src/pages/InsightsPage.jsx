import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb.jsx';
import SEOHead from '../seo/SEOHead.jsx';
import { INSIGHTS_POSTS } from '../data/insightsData.js';
import { getBreadcrumbSchema } from '../seo/schemaData.js';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'Branding', 'Web Development', 'Digital Marketing', 'Creative Content', 'App Development'];

  const filteredPosts =
    selectedCategory === 'ALL'
      ? INSIGHTS_POSTS
      : INSIGHTS_POSTS.filter((p) => p.category === selectedCategory);

  const schemas = [
    getBreadcrumbSchema([{ name: 'Insights', url: '/insights' }]),
  ];

  return (
    <div className="w-full bg-[#0c0c0c] text-white pt-24 sm:pt-28 pb-16">
      <SEOHead
        title="Insights, Guides & Strategy Articles | Penta Prizm Blog"
        description="Expert insights, tactical guides, and strategic playbooks on branding, web architecture, video production, and performance digital marketing."
        canonicalUrl="/insights"
        keywords="branding guides, web development best practices, digital marketing strategy, video production tips, penta prizm insights, blog"
        schemas={schemas}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumb items={[{ label: 'INSIGHTS' }]} />

        {/* Header */}
        <header className="py-8 sm:py-14 border-b border-white/10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b19]/10 border border-[#ff3b19]/30 text-[#ff3b19] text-xs font-mono tracking-widest uppercase mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>EDITORIAL & INDUSTRY INSIGHTS</span>
            </div>

            <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-[0.95] mb-6">
              STRATEGIC PLAYBOOKS FOR MODERN BRAND LEADERS
            </h1>

            <p className="font-montserrat text-sm sm:text-base text-neutral-300 leading-relaxed">
              Explore in-depth articles, actionable blueprints, and data-backed analysis on brand positioning, high-performance web engineering, video storytelling, and digital customer acquisition.
            </p>
          </div>

          {/* Filter Tabs */}
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

        {/* Posts Grid */}
        <section className="py-14 sm:py-18">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative bg-[#111111] border border-white/10 hover:border-[#ff3b19]/50 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl"
              >
                {/* Post Cover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border-b border-white/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[10px] font-mono tracking-widest text-[#ff3b19] uppercase">
                    {post.category}
                  </div>
                </div>

                {/* Post Info */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-4 text-[11px] font-mono text-white/40 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-[#ff3b19]" />
                        {post.publishedDate}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-white/40" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-bebas text-2xl text-white group-hover:text-[#ff3b19] transition-colors tracking-wide uppercase mb-3 line-clamp-2">
                      <Link to={`/insights/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="font-montserrat text-xs text-neutral-300 leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      to={`/insights/${post.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-montserrat font-bold text-white group-hover:text-[#ff3b19] transition-colors uppercase tracking-wider py-1"
                    >
                      <span>READ ARTICLE</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <span className="text-[11px] font-mono text-white/30 uppercase">
                      {post.author}
                    </span>
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
