import React from 'react';
import { Sparkles, Scissors, Layers, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#f4f4f2] text-[#111111] pt-6 pb-24 overflow-hidden">
      {/* Top split text continuation in black */}
      <div className="w-full text-center overflow-hidden leading-none select-none -mt-4 mb-8">
        <div className="font-bebas text-[18vw] sm:text-[17vw] lg:text-[15vw] leading-[0.78] tracking-tight text-[#111111] uppercase font-normal scale-y-110 opacity-95">
          WE BUILD BRANDS
        </div>
      </div>

      {/* Grunge Ink Splatters Graphic (Top Right) */}
      <div className="absolute top-12 right-2 sm:right-8 w-40 sm:w-64 h-40 sm:h-64 pointer-events-none opacity-85 z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-black fill-current">
          <path d="M140,20 C145,25 150,15 155,22 C160,30 170,25 168,35 C175,38 180,45 174,52 C182,58 178,68 170,72 C175,80 165,88 158,85 C155,95 142,92 138,98 C130,95 125,102 120,95 C112,98 108,90 102,94 C98,85 88,88 85,80 C90,75 82,68 88,62 C80,58 85,48 90,45 C88,38 98,35 102,30 C108,34 118,25 124,30 C130,22 135,28 140,20 Z" />
          <circle cx="180" cy="95" r="4" />
          <circle cx="165" cy="115" r="3" />
          <circle cx="150" cy="125" r="5" />
          <circle cx="185" cy="40" r="2.5" />
          <circle cx="190" cy="65" r="3.5" />
          <circle cx="75" cy="45" r="3" />
          <circle cx="65" cy="70" r="4" />
          <circle cx="130" cy="10" r="3" />
          <circle cx="145" cy="5" r="2" />
          {/* Splatter dots */}
          <path d="M160,110 Q165,130 155,140 Q150,135 158,115 Z" />
          <path d="M175,70 Q195,85 190,95 Q180,90 172,75 Z" />
        </svg>
      </div>

      <div className="w-full px-4 sm:px-6 relative z-20">
        
        {/* Section Heading */}
        <div className="mb-8 sm:mb-12">
          <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#111111] uppercase">
            ABOUT PENTA PRIZM
          </h2>
        </div>

        {/* Main Grid: Left Graphic Collage + Right Editorial Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              
              {/* Group photo (3 alternative girls in black streetwear) */}
              <div className="relative rounded-lg overflow-hidden border-2 border-black shadow-xl bg-neutral-900 group">
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
                  alt="Street ID Studio Creators and Models"
                  className="w-full h-[320px] sm:h-[400px] object-cover object-center grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                
                {/* Badge on photo */}
                <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-mono uppercase px-2 py-0.5 tracking-wider">
                  ARCHIVE // 2026
                </div>
              </div>

              {/* Red Spray Graffiti Tag Text "STREET.ID YOUR NEW STYLE" */}
              <div className="absolute -bottom-6 -left-2 sm:-left-4 z-30 pointer-events-none select-none">
                <div className="font-marker text-[#ff3b19] text-3xl sm:text-5xl leading-tight -rotate-6 spray-text tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                  PENTA PRIZM<br />
                  <span className="text-2xl sm:text-4xl pl-3">CREATIVE &</span><br />
                  <span className="text-3xl sm:text-5xl pl-8 text-[#e02f0e]">DIGITAL STUDIO</span>
                </div>
              </div>

              {/* Pinned Card with Paper Clip (Girl with silver vintage digicam) */}
              <div className="absolute -top-6 -right-2 sm:-right-6 w-36 sm:w-48 bg-white p-2 rounded shadow-2xl border border-black/20 rotate-6 hover:rotate-2 transition-transform duration-300 z-20">
                {/* Paper Clip SVG Graphic */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-10 pointer-events-none z-30">
                  <svg viewBox="0 0 24 36" fill="none" className="w-full h-full drop-shadow-md">
                    <path
                      d="M8 8V24C8 27.3137 10.6863 30 14 30C17.3137 30 20 27.3137 20 24V6C20 3.79086 18.2091 2 16 2C13.7909 2 12 3.79086 12 6V22C12 23.1046 12.8954 24 14 24C15.1046 24 16 23.1046 16 22V8"
                      stroke="#888888"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="relative aspect-square overflow-hidden bg-neutral-800 rounded">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                    alt="Street ID Camera Shot"
                    className="w-full h-full object-cover grayscale contrast-125"
                    referrerPolicy="no-referrer"
                  />
                  {/* Cyber digicam screen graphic overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-7 border border-[#ff3b19] rounded-sm bg-black/40 flex items-center justify-center">
                      <span className="text-[7px] font-mono text-[#ff3b19] font-bold">REC ●</span>
                    </div>
                  </div>
                </div>

                <div className="mt-1.5 flex justify-between items-center px-1">
                  <span className="font-mono text-[9px] text-neutral-600 font-bold uppercase tracking-wider">
                    PENTA PRIZM
                  </span>
                  <span className="font-mono text-[8px] text-red-600 font-bold">
                    RAW
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-8 lg:pt-0">
            
            {/* Bold Subheading */}
            <h3 className="font-montserrat font-black text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight text-[#111111] leading-tight mb-6">
              PENTA PRIZM —<br />
              <span className="text-[#ff3b19]">IS A CREATIVE AND TECHNOLOGY-DRIVEN STUDIO.</span>
            </h3>

            {/* Paragraphs */}
            <div className="space-y-5 text-neutral-800 font-montserrat font-medium text-sm sm:text-base leading-relaxed">
              <p className="border-l-3 border-[#ff3b19] pl-4 py-1">
                We don't just create visuals.<br />
                We build brands, digital experiences, and ideas—<br />
                <strong className="font-extrabold text-[#111111]">from concept to execution.</strong>
              </p>

              <p className="text-neutral-700">
                Every project is an opportunity to turn an idea into something meaningful. We bring together branding, creative design, video, web development, app development, marketing, and digital strategy to help businesses stand out and grow in the digital world.
              </p>
            </div>

            {/* Feature Pills / Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-neutral-300">
              <div className="bg-black/5 p-4 rounded-lg border border-black/10 hover:bg-black hover:border-black hover:-translate-y-1 transition-all duration-300">
                <span className="font-bebas text-3xl sm:text-4xl text-[#ff3b19] block leading-none">BRANDING</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 mt-1 block">Identity / Corporate identity</span>
              </div>
              <div className="bg-black/5 p-4 rounded-lg border border-black/10 group hover:bg-[#ff3b19] hover:border-[#ff3b19] hover:-translate-y-1 transition-all duration-300">
                <span className="font-bebas text-3xl sm:text-4xl text-[#111111] block leading-none group-hover:text-white">CONTENT</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 mt-1 block group-hover:text-white">Creativity and content</span>
              </div>
              <div className="bg-black/5 p-4 rounded-lg border border-black/10 hover:bg-black hover:border-black hover:-translate-y-1 transition-all duration-300">
                <span className="font-bebas text-3xl sm:text-4xl text-[#ff3b19] block leading-none">DIGITAL</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 mt-1 block">Digital solutions</span>
              </div>
              <div className="bg-black/5 p-4 rounded-lg border border-black/10 hover:bg-black hover:border-black hover:-translate-y-1 transition-all duration-300">
                <span className="font-bebas text-3xl sm:text-4xl text-[#111111] block leading-none">TECH</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 mt-1 block">Technologies and innovations</span>
              </div>
            </div>

          </div>

        </div>

        {/* Principles / Values Row */}
        <div className="mt-16 pt-8 border-t-2 border-[#111111]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111]">
              WHAT WE BELIEVE IN
            </span>
            <span className="font-marker text-[#ff3b19] text-sm sm:text-base tracking-wide -rotate-2 spray-text">
              MINDSET // WORKFLOW
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-300 border border-neutral-300 rounded-2xl overflow-hidden bg-black/5">
            <div className="p-6 sm:p-8 text-center bg-black group hover:bg-[#ff3b19] transition-all duration-300">
              <span className="font-mono text-xs font-bold tracking-widest text-white block mb-2 group-hover:text-white">
                ● 01
              </span>
              <span className="font-bebas text-3xl sm:text-4xl text-white uppercase tracking-wide block leading-tight group-hover:text-white">
                Creative Thinking
              </span>
            </div>
            <div className="p-6 sm:p-8 text-center bg-black group hover:bg-[#ff3b19] transition-all duration-300">
              <span className="font-mono text-xs font-bold tracking-widest text-white block mb-2 group-hover:text-white">
                ● 02
              </span>
              <span className="font-bebas text-3xl sm:text-4xl text-white uppercase tracking-wide block leading-tight group-hover:text-white">
                Smart Technology
              </span>
            </div>
            <div className="p-6 sm:p-8 text-center bg-black group hover:bg-[#ff3b19] transition-all duration-300">
              <span className="font-mono text-xs font-bold tracking-widest text-white block mb-2 group-hover:text-white">
                ● 03
              </span>
              <span className="font-bebas text-3xl sm:text-4xl text-white uppercase tracking-wide block leading-tight group-hover:text-white">
                Meaningful Growth
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
