import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  MapPin, Mail, Phone, Instagram, Facebook, Linkedin,
  ArrowUpRight, MessageCircle, Send, Clock
} from 'lucide-react';
import SEOHead from '../seo/SEOHead.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../seo/schemaData.js';

export default function ContactPage({ onOpenContact }) {
  const schemas = [
    getBreadcrumbSchema([{ name: 'Contact', url: '/contact' }]),
    getLocalBusinessSchema(),
  ];

  return (
    <div className="w-full bg-[#0c0c0c] text-white pt-24 sm:pt-28 pb-16">
      <SEOHead
        title="Contact Penta Prizm | Creative Agency in Kochi, Kerala"
        description="Get in touch with Penta Prizm. We are a branding, video production, web development, and digital marketing agency based in Kochi, Kerala. Let's build something great."
        canonicalUrl="/contact"
        keywords="contact penta prizm, branding agency Kochi, creative agency Kerala, web development Kochi, digital marketing agency Kerala"
        schemas={schemas}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumb items={[{ label: 'CONTACT' }]} />

        <header className="py-8 sm:py-14 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b19]/10 border border-[#ff3b19]/30 text-[#ff3b19] text-xs font-mono tracking-widest uppercase mb-4">
            // LET'S CONNECT
          </div>
          <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-[0.95] mb-6">
            START YOUR PROJECT WITH PENTA PRIZM
          </h1>
          <p className="font-montserrat text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
            Whether you're launching a brand, building a digital product, planning a video campaign, or scaling your marketing, we'd love to hear your vision.
          </p>
        </header>

        <div className="py-14 sm:py-18 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
              <h2 className="font-bebas text-2xl text-white tracking-wide uppercase">CONTACT INFORMATION</h2>

              <address className="not-italic space-y-4 font-montserrat text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#ff3b19] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Studio Location</span>
                    <span>Kaloor, Kochi, Kerala, India — 682017</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#ff3b19] shrink-0" />
                  <div>
                    <span className="text-white font-semibold block">Call / WhatsApp</span>
                    <a href="tel:+917306043445" className="hover:text-[#ff3b19] transition-colors">
                      +91 73060 43445
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#ff3b19] shrink-0" />
                  <div>
                    <span className="text-white font-semibold block">Email Us</span>
                    <a href="mailto:pentaprizmofficial@gmail.com" className="hover:text-[#ff3b19] transition-colors">
                      pentaprizmofficial@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#ff3b19] shrink-0" />
                  <div>
                    <span className="text-white font-semibold block">Working Hours</span>
                    <span>Monday – Saturday: 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </address>
            </div>

            {/* Social Links */}
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="font-bebas text-xl text-white tracking-wide uppercase mb-4">FOLLOW OUR WORK</h2>
              <div className="flex items-center gap-3">
                {[
                  { href: 'https://www.instagram.com/penta_prizm/', label: 'Instagram', Icon: Instagram },
                  { href: 'https://www.facebook.com/profile.php?id=61594139094021', label: 'Facebook', Icon: Facebook },
                  { href: 'https://www.linkedin.com/company/penta-prizm/', label: 'LinkedIn', Icon: Linkedin },
                  { href: 'https://wa.me/+917306043445', label: 'WhatsApp', Icon: MessageCircle },
                  { href: 'mailto:pentaprizmofficial@gmail.com', label: 'Email', Icon: Mail },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/15 hover:bg-[#ff3b19] hover:border-[#ff3b19] flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Quick Links */}
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="font-bebas text-xl text-white tracking-wide uppercase mb-4">OUR SERVICES</h2>
              <nav className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Branding', to: '/branding' },
                  { label: 'Content Creation', to: '/content-creation' },
                  { label: 'Video Production', to: '/video-production' },
                  { label: 'Web Development', to: '/web-development' },
                  { label: 'App Development', to: '/app-development' },
                  { label: 'Digital Marketing', to: '/digital-marketing' },
                ].map(({ label, to }) => (
                  <Link
                    key={to}
                    to={to}
                    className="text-xs font-montserrat font-semibold text-neutral-400 hover:text-[#ff3b19] transition-colors py-1 uppercase tracking-wider"
                  >
                    → {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* CTA Column */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-[#ff3b19]/10 via-[#141414] to-[#111111] border border-[#ff3b19]/30 rounded-3xl p-8 sm:p-10 lg:p-14 h-full flex flex-col justify-center">
              <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest font-bold block mb-3">
                // APPLICATION FORM
              </span>
              <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wider uppercase leading-none mb-4">
                LET'S BUILD SOMETHING EXTRAORDINARY TOGETHER
              </h2>
              <p className="font-montserrat text-xs sm:text-sm text-neutral-300 leading-relaxed mb-8 max-w-lg">
                Fill out our project application form to share your goals, timeline, and vision. Our team will review your requirements and come back to you with a strategic proposal.
              </p>

              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => onOpenContact && onOpenContact()}
                  className="w-full bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-extrabold text-sm uppercase tracking-wider py-4 px-8 rounded-full transition-all shadow-xl shadow-[#ff3b19]/30 flex items-center justify-center gap-2 cursor-pointer min-h-[52px]"
                >
                  OPEN PROJECT APPLICATION FORM
                  <ArrowUpRight className="w-5 h-5" />
                </button>

                <a
                  href="https://wa.me/+917306043445?text=Hi%20Penta%20Prizm%2C%20I%27d%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full border border-white/20 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 text-white font-montserrat font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 min-h-[52px]"
                >
                  <Send className="w-4 h-4" />
                  CHAT ON WHATSAPP
                </a>
              </div>

              <p className="font-mono text-[11px] text-white/30 mt-6 text-center">
                RESPONSE WITHIN 24 HOURS // KOCHI, KERALA, INDIA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
