import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Accessible Breadcrumb Component
 * @param {Array<{label: string, path?: string}>} items
 */
export default function Breadcrumb({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center flex-wrap gap-2 text-xs font-mono text-white/50 py-3 mb-6 border-b border-white/10"
    >
      <Link
        to="/"
        className="flex items-center gap-1.5 text-white/70 hover:text-[#ff3b19] transition-colors py-1"
      >
        <Home className="w-3.5 h-3.5" />
        <span>HOME</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-white/30 shrink-0" />
            {isLast || !item.path ? (
              <span
                className="text-[#ff3b19] font-semibold uppercase tracking-wider truncate max-w-[240px] sm:max-w-none"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="text-white/70 hover:text-[#ff3b19] transition-colors uppercase tracking-wider py-1"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
