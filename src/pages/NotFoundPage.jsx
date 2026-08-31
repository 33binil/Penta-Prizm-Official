import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, AlertTriangle } from 'lucide-react';
import SEOHead from '../seo/SEOHead.jsx';

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] text-white flex flex-col items-center justify-center px-4 py-24">
      <SEOHead
        title="404 – Page Not Found"
        description="The page you're looking for doesn't exist. Explore Penta Prizm's branding, web development, video production, and digital marketing services."
        canonicalUrl="/404"
        noIndex={true}
      />

      <div className="text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b19]/10 border border-[#ff3b19]/30 text-[#ff3b19] text-xs font-mono tracking-widest uppercase mb-6">
          <AlertTriangle className="w-3.5 h-3.5" />
          ERROR 404 // PAGE NOT FOUND
        </div>

        <div className="font-bebas text-[120px] sm:text-[200px] leading-none text-white/10 select-none tracking-tighter">
          404
        </div>

        <h1 className="font-bebas text-3xl sm:text-5xl text-white uppercase tracking-wider -mt-8 mb-4">
          THIS PAGE DOESN'T EXIST
        </h1>

        <p className="font-montserrat text-sm text-neutral-400 leading-relaxed mb-10 max-w-md mx-auto">
          The page you're looking for may have moved, been renamed, or never existed. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-xl shadow-[#ff3b19]/20 flex items-center gap-2 min-h-[48px]"
          >
            <Home className="w-4 h-4" />
            BACK TO HOMEPAGE
          </Link>
          <Link
            to="/services"
            className="border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-colors flex items-center gap-2 min-h-[48px]"
          >
            EXPLORE SERVICES <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto text-left">
          {[
            { label: 'Branding', to: '/branding' },
            { label: 'Web Development', to: '/web-development' },
            { label: 'Digital Marketing', to: '/digital-marketing' },
            { label: 'Video Production', to: '/video-production' },
            { label: 'App Development', to: '/app-development' },
            { label: 'Portfolio', to: '/portfolio' },
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-xs font-montserrat font-semibold text-neutral-400 hover:text-[#ff3b19] transition-colors uppercase tracking-wider py-1 flex items-center gap-1.5"
            >
              <ArrowRight className="w-3 h-3 shrink-0" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
