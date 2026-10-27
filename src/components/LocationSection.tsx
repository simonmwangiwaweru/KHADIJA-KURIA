import React from 'react';
import { MapPin, Navigation, Plane, Hospital, Building2, Shield, ExternalLink, Clock } from 'lucide-react';
import { CONTACT_CONFIG, LOCATION_LANDMARKS } from '../config/config';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 bg-white border-t border-[#EDE7DF] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl pb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C6D32]">
            <span className="w-2 h-2 rounded-full bg-[#C9A86C]" />
            <span>Strategic Parklands Location</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C221A] mt-1.5">
            Prime Accessibility & Neighborhood
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            Nestled on Chemilil Road, Parklands, enjoying quiet residential security while being situated minutes from premier hospitals, shopping centers, and commercial hubs.
          </p>
        </div>

        {/* Styled Location Card (No embedded iframe required) */}
        <div className="bg-[#FAF7F2] rounded-xl border border-stone-200/90 overflow-hidden shadow-xs p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Address & Navigation Details */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#2C221A] text-[#C9A86C] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2C221A]">
                    Lantern Serviced Apartments
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-700 font-medium mt-0.5">
                    Chemilil Road, Parklands / off Ngara Road, Nairobi, Kenya
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    Gated compound with dedicated guest parking & 24/7 manned security guards.
                  </p>
                </div>
              </div>

              {/* Airport & Transit info */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2C221A]">
                  <Plane className="w-4 h-4 text-[#8C6D32]" />
                  <span>Airport Shuttle & Chauffeur Services</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Direct chauffeur pickup and transfer available for both <strong>Jomo Kenyatta International Airport (JKIA)</strong> and <strong>Wilson Airport</strong>. Contact reception upon booking to schedule your vehicle.
                </p>
              </div>

              {/* Open in Google Maps Button */}
              <div className="pt-2">
                <a
                  href={CONTACT_CONFIG.central.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2C221A] text-[#C9A86C] text-xs sm:text-sm font-semibold hover:bg-[#1B1510] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86C]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Landmark Proximity Grid */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C221A] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8C6D32]" />
                <span>Travel Times to Key Hubs</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {LOCATION_LANDMARKS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-xl border border-stone-200/80 flex items-center justify-between text-xs"
                  >
                    <span className="font-medium text-stone-800">{item.name}</span>
                    <span className="text-[#8C6D32] font-semibold font-mono text-[11px] shrink-0">
                      {item.distance}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-white rounded-xl border border-stone-200/80 text-[11px] text-stone-500">
                <strong>Medical Tourism Notice:</strong> Lantern is ideally positioned for patients, families, and medical professionals visiting Aga Khan Hospital or MP Shah Hospital, offering quiet self-catering suites for recuperation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
