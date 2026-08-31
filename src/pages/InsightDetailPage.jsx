import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ArrowUpRight, ChevronRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb.jsx';
import SEOHead from '../seo/SEOHead.jsx';
import FAQSection from '../components/FAQSection.jsx';
import RelatedServices from '../components/RelatedServices.jsx';
import { INSIGHTS_POSTS } from '../data/insightsData.js';
import { getArticleSchema, getBreadcrumbSchema, getFAQSchema } from '../seo/schemaData.js';

export default function InsightDetailPage({ onOpenContact }) {
  const { slug } = useParams();
  const post = INSIGHTS_POSTS.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/insights" replace />;

  const schemas = [
    getArticleSchema({
      title: post.title,
      description: post.excerpt,
      url: `/insights/${post.slug}`,
      publishedDate: post.publishedDate,
      modifiedDate: post.modifiedDate,
      author: post.author,
      image: `https://pentaprizm.in${post.image}`,
    }),
    getBreadcrumbSchema([
      { name: 'Insights', url: '/insights' },
      { name: post.title, url: `/insights/${post.slug}` },
    ]),
    getFAQSchema(post.faqs),
  ];

  return (
    <article className="w-full bg-[#0c0c0c] text-white pt-24 sm:pt-28 pb-16">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonicalUrl={`/insights/${post.slug}`}
        ogType="article"
        ogImage={post.image}
        keywords={`${post.category}, ${post.categorySlug}, penta prizm insights`}
        schemas={schemas}
      />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8">
        <Breadcrumb
          items={[
            { label: 'INSIGHTS', path: '/insights' },
            { label: post.title },
          ]}
        />

        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-[#ff3b19] transition-colors uppercase mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          BACK TO ALL INSIGHTS
        </Link>

        {/* Article Header */}
        <header className="py-6 sm:py-10 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b19]/10 border border-[#ff3b19]/30 text-[#ff3b19] text-xs font-mono tracking-widest uppercase mb-4">
            {post.category}
          </div>
          <h1 className="font-bebas text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[0.95] mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-white/40">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#ff3b19]" />
              {post.publishedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span>{post.author}</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="my-8 aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover brightness-90"
          />
        </div>

        {/* Article Body */}
        <div
          className="prose prose-invert prose-sm sm:prose-base max-w-none font-montserrat
            prose-headings:font-bebas prose-headings:tracking-wide prose-headings:uppercase prose-headings:text-white
            prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-neutral-300 prose-p:leading-relaxed
            prose-strong:text-white prose-strong:font-bold
            prose-ul:space-y-2 prose-li:text-neutral-300
            prose-a:text-[#ff3b19] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* FAQs */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-12">
            <FAQSection faqs={post.faqs} title="FREQUENTLY ASKED QUESTIONS" />
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 p-8 sm:p-10 bg-gradient-to-r from-[#ff3b19]/15 via-[#181818] to-[#121212] border border-[#ff3b19]/40 rounded-3xl text-center">
          <h2 className="font-bebas text-2xl sm:text-4xl text-white uppercase tracking-wider mb-3">
            READY TO APPLY THIS TO YOUR BUSINESS?
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-neutral-400 mb-6 max-w-md mx-auto">
            Let's craft a strategy tailored to your brand, market, and growth ambitions.
          </p>
          <button
            type="button"
            onClick={() => onOpenContact && onOpenContact()}
            className="bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-xl shadow-[#ff3b19]/30 inline-flex items-center gap-2 cursor-pointer"
          >
            START YOUR PROJECT <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Related Services */}
      <div className="mt-8">
        <RelatedServices currentServiceId={post.categorySlug} relatedIds={[]} />
      </div>
    </article>
  );
}
