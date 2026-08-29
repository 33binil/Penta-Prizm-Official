import React, { useState } from 'react';
import { Sparkles, Eye, ArrowUpRight, Check, X, Flame } from 'lucide-react';
import { LOOKBOOK_ITEMS } from '../data/studioData.js';

export default function PortfolioLookbook({ onOpenCustom }) {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['Все', 'Куртки', 'Худи', 'Джинсы', 'Аксессуары'];

  const filteredItems = activeCategory === 'Все'
    ? LOOKBOOK_ITEMS
    : LOOKBOOK_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="works" className="relative w-full bg-[#0c0c0c] text-white py-24 overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#ff3b19]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 relative z-20">
        
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[#ff3b19] font-mono text-xs uppercase tracking-widest font-bold block mb-2">
              // LOOKBOOK & ARCHIVE
            </span>
            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none">
              НАШИ РАБОТЫ
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-montserrat text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#ff3b19] text-white shadow-lg shadow-[#ff3b19]/30'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-950 border border-white/15 hover:border-[#ff3b19]/80 transition-all duration-300 flex flex-col cursor-pointer hover:shadow-2xl hover:shadow-[#ff3b19]/20"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale contrast-115 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Status and category tags */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-black/80 backdrop-blur-sm text-white text-[10px] font-mono uppercase px-2.5 py-1 rounded border border-white/20">
                    {item.type}
                  </span>
                  <span className="bg-[#ff3b19] text-white text-[10px] font-mono uppercase px-2 py-1 rounded font-bold">
                    {item.status}
                  </span>
                </div>

                {/* Hover overlay CTA */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
                  <span className="bg-white text-black font-montserrat font-bold text-xs uppercase px-4 py-2 rounded-full flex items-center gap-1.5 shadow-xl">
                    <Eye className="w-3.5 h-3.5" />
                    Смотреть детали
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between border-t border-white/10">
                <div>
                  <div className="flex justify-between items-center text-xs font-mono text-neutral-400 mb-1">
                    <span>{item.category}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 className="font-bebas text-2xl text-white tracking-wide uppercase group-hover:text-[#ff3b19] transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center">
                  <span className="font-bebas text-2xl text-white">
                    {item.price}
                  </span>
                  <span className="text-xs font-montserrat font-bold text-[#ff3b19] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Заказать <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Custom Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-marker text-[#ff3b19] text-lg sm:text-xl -rotate-1 mb-1">
              // YOUR IDEA – OUR EXPERTISE //
            </div>
            <h3 className="font-bebas text-3xl sm:text-4xl text-white uppercase tracking-wide">
              HAVE AN IDEA? LET'S BUILD IT.
            </h3>
            <p className="font-montserrat text-sm text-neutral-400 mt-1 max-w-xl">
              Bring us your idea — we'll turn it into a powerful brand, creative experience, website, application, or digital strategy built around your vision.
            </p>
          </div>
          <button
            onClick={onOpenCustom}
            className="whitespace-nowrap bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-extrabold text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-xl shadow-[#ff3b19]/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            START A PROJECT →
          </button>
        </div>

      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-3xl bg-neutral-950 border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 text-white hover:bg-[#ff3b19] flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Image */}
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto relative bg-neutral-900">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover grayscale contrast-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#ff3b19] text-white text-xs font-mono uppercase px-2.5 py-1 rounded font-bold">
                {selectedItem.type}
              </div>
            </div>

            {/* Right Details */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest font-bold">
                  {selectedItem.category} // {selectedItem.year}
                </span>
                <h3 className="font-bebas text-3xl sm:text-4xl text-white uppercase tracking-wide mt-1 mb-3">
                  {selectedItem.title}
                </h3>
                <p className="font-montserrat text-sm text-neutral-300 leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                    Характеристики:
                  </span>
                  {selectedItem.details.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-200">
                      <Check className="w-3.5 h-3.5 text-[#ff3b19]" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase block">Стоимость:</span>
                  <span className="font-bebas text-3xl text-white">{selectedItem.price}</span>
                </div>
                <button
                  onClick={() => {
                    const item = selectedItem;
                    setSelectedItem(null);
                    onOpenCustom(item);
                  }}
                  className="bg-[#ff3b19] hover:bg-[#e02f0e] text-white font-montserrat font-bold text-xs uppercase px-6 py-3 rounded-full shadow-lg shadow-[#ff3b19]/30 transition-transform active:scale-95"
                >
                  Заказать эту вещь
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
