import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Wifi, Clock, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/config';

interface HeroSectionProps {
  onOpenLightbox?: (src: string, alt: string, caption?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLightbox }) => {
  const directWhatsAppMessage = encodeURIComponent(
    'Hello Lantern Serviced Apartments, I am interested in booking an executive suite.'
  );

  const scrollToSuites = () => {
    const el = document.getElementById('suites');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] flex items-center justify-center overflow-hidden">
      {/* 1. Full-Width Background Image (Matching the screenshot of lantern.co.ke/our-apartments/) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-banner-2.webp"
          alt="Lantern Serviced Apartments Master Suite Interior"
          className="w-full h-full object-cover object-center brightness-90 scale-105 transition-transform duration-1000"
          onError={(e) => {
            // Fallback to local WA0065 room image if hero-banner-2 fails
            (e.target as HTMLImageElement).src = '/assets/aistudio/IMG-20261022-WA0065_8e2a8628.jpg';
          }}
          referrerPolicy="no-referrer"
        />
        {/* Professional Translucent Dark Scrim / Overlay for pristine contrast & luxury mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1611]/85 via-[#1C1611]/70 to-[#1C1611]/90 backdrop-blur-[1px]" />
      </div>

      {/* 2. Centered Content (Exact layout, typography & breadcrumb from the screenshot) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#EBD9A8] text-xs font-semibold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A86C]" />
          <span>Chemilil Road · Parklands, Nairobi</span>
        </div>

        {/* Main Title (Editorial Serif from Screenshot) */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-sm">
          Our Apartments & Suites
        </h1>

        {/* Subtitle from the screenshot */}
        <p className="mt-5 text-base sm:text-xl text-stone-200 max-w-2xl font-light leading-relaxed drop-shadow-xs">
          Choose from our selection of fully furnished studio, one bedroom, and two bedroom apartments and executive boardroom facilities designed for your comfort.
        </p>

        {/* Breadcrumb line from screenshot */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-stone-400">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <span className="text-[#C9A86C]">›</span>
          <span className="text-stone-200 font-semibold">Our Apartments</span>
        </div>

        {/* Actions Cluster */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${CONTACT_CONFIG.central.whatsappDigits}?text=${directWhatsAppMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] px-7 py-3 rounded-xl bg-[#25D366] text-white text-sm font-bold hover:bg-[#20BD5A] active:scale-[0.98] transition-all shadow-lg flex items-center gap-2.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book on WhatsApp</span>
          </a>

          <button
            onClick={scrollToSuites}
            type="button"
            className="min-h-[48px] px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md text-sm font-semibold transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Explore Rates & Specs</span>
            <ArrowRight className="w-4 h-4 text-[#C9A86C]" />
          </button>
        </div>

        {/* Bottom Credential Bar */}
        <div className="mt-12 pt-6 border-t border-white/15 grid grid-cols-3 gap-6 sm:gap-12 text-center w-full max-w-2xl">
          <div>
            <p className="font-mono tabular-nums text-lg sm:text-2xl font-bold text-white">
              KSh 4,000
            </p>
            <p className="text-[11px] sm:text-xs text-stone-300 mt-0.5">Suites from / night</p>
          </div>

          <div className="border-x border-white/15 px-3">
            <p className="font-mono tabular-nums text-lg sm:text-2xl font-bold text-[#EBD9A8]">
              50+ Mbps
            </p>
            <p className="text-[11px] sm:text-xs text-stone-300 mt-0.5">Dedicated Optical Fiber</p>
          </div>

          <div>
            <p className="text-lg sm:text-2xl font-bold text-white font-serif">
              24/7
            </p>
            <p className="text-[11px] sm:text-xs text-stone-300 mt-0.5">Gated Security & Staff</p>
          </div>
        </div>
      </div>
    </section>
  );
};
