import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/config';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1611] text-stone-300 border-t border-[#30261E] pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#30261E]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/lantern-logo.png"
                alt="Lantern Serviced Apartments Logo"
                className="h-14 w-auto object-contain brightness-110"
              />
            </div>

            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Quiet serviced apartments, executive boardroom facilities, and on-site dining for business executives, delegates, and extended stays in Nairobi.
            </p>

            <div className="flex items-center gap-2 text-xs text-stone-400">
              <Clock className="w-3.5 h-3.5 text-[#C9A86C]" />
              <span>{CONTACT_CONFIG.central.hours}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-[#C9A86C]" />
              <span>{CONTACT_CONFIG.central.address}</span>
            </div>
          </div>

          {/* Three Phone Numbers as tel: links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C9A86C]">
              Direct Phone Lines
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <p className="text-[11px] text-stone-400 font-medium">Reservations (Primary):</p>
                <a
                  href={`tel:${CONTACT_CONFIG.central.phonePrimary.replace(/\s+/g, '')}`}
                  className="font-mono text-stone-200 hover:text-[#C9A86C] transition-colors font-medium"
                >
                  {CONTACT_CONFIG.central.phonePrimary}
                </a>
              </div>

              <div>
                <p className="text-[11px] text-stone-400 font-medium">Reservations (Alternate):</p>
                <a
                  href={`tel:${CONTACT_CONFIG.central.phoneSecondary.replace(/\s+/g, '')}`}
                  className="font-mono text-stone-200 hover:text-[#C9A86C] transition-colors font-medium"
                >
                  {CONTACT_CONFIG.central.phoneSecondary}
                </a>
              </div>

              <div>
                <p className="text-[11px] text-stone-400 font-medium">Khadija Kuria (Manager):</p>
                <a
                  href={`tel:${CONTACT_CONFIG.executive.phone.replace(/\s+/g, '')}`}
                  className="font-mono text-stone-200 hover:text-[#C9A86C] transition-colors font-medium"
                >
                  {CONTACT_CONFIG.executive.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Three Emails as mailto: links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C9A86C]">
              Email Contacts
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <p className="text-[11px] text-stone-400 font-medium">Booking Inquiries:</p>
                <a
                  href={`mailto:${CONTACT_CONFIG.central.emailReservations}`}
                  className="text-stone-200 hover:text-[#C9A86C] transition-colors"
                >
                  {CONTACT_CONFIG.central.emailReservations}
                </a>
              </div>

              <div>
                <p className="text-[11px] text-stone-400 font-medium">General Information:</p>
                <a
                  href={`mailto:${CONTACT_CONFIG.central.emailInfo}`}
                  className="text-stone-200 hover:text-[#C9A86C] transition-colors"
                >
                  {CONTACT_CONFIG.central.emailInfo}
                </a>
              </div>

              <div>
                <p className="text-[11px] text-stone-400 font-medium">Executive Relations:</p>
                <a
                  href={`mailto:${CONTACT_CONFIG.executive.email}`}
                  className="text-stone-200 hover:text-[#C9A86C] transition-colors"
                >
                  {CONTACT_CONFIG.executive.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar (No powered by) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} {CONTACT_CONFIG.central.brandName}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Chemilil Road, Parklands</span>
            <span>·</span>
            <span className="text-stone-400">Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
