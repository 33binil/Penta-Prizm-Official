import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, FileText, Cookie, AlertCircle, Mail, Phone } from 'lucide-react';

export const LEGAL_LINKS = [
  {
    name: 'Privacy Policy',
    path: '/privacy-policy',
    icon: ShieldCheck,
    description: 'How we collect, use, and protect your personal data',
  },
  {
    name: 'Terms & Conditions',
    path: '/terms-and-conditions',
    icon: FileText,
    description: 'Rules and guidelines for our studio services and website',
  },
  {
    name: 'Cookie Policy',
    path: '/cookie-policy',
    icon: Cookie,
    description: 'Information regarding cookies and tracking preferences',
  },
  {
    name: 'Disclaimer',
    path: '/disclaimer',
    icon: AlertCircle,
    description: 'Limitations of liability and service representations',
  },
];

export default function LegalNav({ currentPath, onOpenContact }) {
  return (
    <aside className="w-full lg:w-80 shrink-0 space-y-6">
      {/* Navigation Card */}
      <div className="bg-[#111111] border border-white/10 rounded-2xl p-5 sm:p-6">
        <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest font-bold block mb-4">
          // LEGAL DOCUMENTS
        </span>
        <nav className="flex flex-col gap-2" aria-label="Legal documents navigation">
          {LEGAL_LINKS.map(({ name, path, icon: Icon }) => {
            const isActive = currentPath === path;
            return (
              <NavLink
                key={path}
                to={path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-montserrat text-xs font-bold uppercase tracking-wider ${
                  isActive
                    ? 'bg-[#ff3b19] text-white shadow-lg shadow-[#ff3b19]/20'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5 bg-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#ff3b19]'}`} />
                <span>{name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Questions / Support Box */}
      <div className="bg-gradient-to-br from-[#151515] to-[#0d0d0d] border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4">
        <span className="font-mono text-[11px] text-white/50 uppercase tracking-widest block">
          QUESTIONS & CLARIFICATIONS
        </span>
        <h4 className="font-bebas text-xl text-white tracking-wide">
          NEED LEGAL CLARIFICATION?
        </h4>
        <p className="font-montserrat text-xs text-neutral-400 leading-relaxed">
          If you have questions about our policies, data protection practices, or service agreements, reach out to our legal and compliance team.
        </p>

        <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-montserrat text-neutral-300">
          <div className="flex items-center gap-2.5">
            <Mail className="w-3.5 h-3.5 text-[#ff3b19] shrink-0" />
            <a
              href="mailto:pentaprizmofficial@gmail.com"
              className="hover:text-white transition-colors truncate"
            >
              pentaprizmofficial@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-3.5 h-3.5 text-[#ff3b19] shrink-0" />
            <a href="tel:+917306043445" className="hover:text-white transition-colors">
              +91 73060 43445
            </a>
          </div>
        </div>

        {onOpenContact && (
          <button
            onClick={() => onOpenContact('Legal & Compliance Inquiry')}
            className="w-full mt-2 bg-white/10 hover:bg-white/20 text-white font-montserrat font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all border border-white/15 cursor-pointer min-h-[40px]"
          >
            Contact Compliance Team
          </button>
        )}
      </div>
    </aside>
  );
}
