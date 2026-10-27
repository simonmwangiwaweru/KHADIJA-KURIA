import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, Building, ShieldCheck, Clock } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/config';
import { LANTERN_IMAGES } from '../config/images';

export const ExecutiveHeaderCard: React.FC = () => {
  const executiveWhatsAppMessage = encodeURIComponent(
    'Hello Khadija, I am viewing your Lantern Serviced Apartments portfolio and would like to enquire about suite availability and boardroom bookings.'
  );

  return (
    <section className="w-full bg-[#1C1611] text-[#FAF8F5] py-6 sm:py-8 border-b border-[#30261E] relative overflow-hidden">
      {/* Subtle brand warm gold atmospheric glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A86C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The Executive Digital Profile Card */}
        <div className="relative bg-white text-[#221F1C] rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Official Logo, Khadija Kuria, and Contact Details */}
            <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              {/* Official Lantern Crest Logo from the Business Card */}
              <div className="flex items-start justify-between">
                <div>
                  <img
                    src={LANTERN_IMAGES.logo}
                    alt="Lantern Serviced Apartments Official Crest Logo"
                    className="h-16 sm:h-20 w-auto object-contain"
                  />
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-[#8C6D32]">
                    Official Representative
                  </span>
                  <p className="text-xs text-stone-500">Parklands · Nairobi</p>
                </div>
              </div>

              {/* Executive Name & Title */}
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#221F1C] uppercase font-sans">
                  {CONTACT_CONFIG.executive.name}
                </h1>
                <p className="text-sm font-medium text-[#8C6D32]">
                  {CONTACT_CONFIG.executive.title} · <span className="text-stone-700 font-semibold">{CONTACT_CONFIG.central.brandName}</span>
                </p>
              </div>

              {/* Exact Contact Details with Golden Circular Icons from the Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {/* Phone */}
                <a
                  href={`tel:${CONTACT_CONFIG.executive.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 group hover:text-[#8C6D32] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[#C9A86C] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#B39355] transition-colors">
                    <Phone className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-stone-400">Direct Line</p>
                    <span className="font-mono tabular-nums text-sm font-semibold text-stone-800 group-hover:text-[#8C6D32]">
                      {CONTACT_CONFIG.executive.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_CONFIG.executive.email}`}
                  className="flex items-center gap-3 group hover:text-[#8C6D32] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[#C9A86C] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#B39355] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-stone-400">Email Address</p>
                    <span className="text-xs sm:text-sm font-medium text-stone-700 group-hover:text-[#8C6D32] break-all">
                      {CONTACT_CONFIG.executive.email}
                    </span>
                  </div>
                </a>

                {/* Address (Spans 2 columns on sm) */}
                <div className="flex items-center gap-3 sm:col-span-2">
                  <div className="w-9 h-9 rounded-full bg-[#C9A86C] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-stone-400">Property Location</p>
                    <span className="text-xs sm:text-sm font-medium text-stone-700">
                      {CONTACT_CONFIG.central.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button (Call direct & Save contact removed as requested) */}
              <div className="pt-4 border-t border-stone-200">
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.executive.whatsappDigits}?text=${executiveWhatsAppMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20BD5A] active:scale-[0.98] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Property Highlights & Credential Showcase in Brand Gold */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#CCA662] via-[#C59F58] to-[#B38F46] p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden">
              {/* Geometric overlay polygons matching the business card style */}
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-white/10 rotate-45 pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-black/10 rotate-12 pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <span className="text-[11px] uppercase tracking-widest font-extrabold text-[#2C221A] bg-white/80 py-1 px-2.5 rounded-md inline-block">
                  Property Portfolio
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Serviced Suites & Executive Boardrooms
                </h3>

                <p className="text-white/90 text-xs leading-relaxed">
                  Boutique serviced living in the heart of Parklands. Fully furnished studios, executive suites, and corporate meeting facilities.
                </p>
              </div>

              {/* Highlights List */}
              <div className="relative z-10 pt-6 border-t border-white/20 space-y-2.5 text-xs text-white/95">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#2C221A]" />
                  <span>4 Suite Tiers (from KSh 4,000/night)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2C221A]" />
                  <span>24/7 Gated Security & Concierge</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#2C221A]" />
                  <span>Lantern Dining: 7:00 AM – 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
