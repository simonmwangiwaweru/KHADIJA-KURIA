import React, { useState } from 'react';
import { Menu, X, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/config';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const directBookingMessage = encodeURIComponent(
    'Hello Lantern Serviced Apartments, I would like to book an apartment directly.'
  );

  const handleNavClick = (targetId: string) => {
    setMobileMenuOpen(false);
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EDE7DF] shadow-xs transition-all">
      {/* 1. Authentic Top Gold Utility Ribbon (from lantern.co.ke screenshot) */}
      <div className="bg-[#CCA662] text-white text-[11px] font-medium py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${CONTACT_CONFIG.central.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-[#1C1611] transition-colors"
            >
              <Phone className="w-3 h-3 fill-white" />
              <span className="font-mono">{CONTACT_CONFIG.central.phonePrimary}</span>
            </a>
            <a
              href={`mailto:${CONTACT_CONFIG.central.emailReservations}`}
              className="flex items-center gap-1.5 hover:text-[#1C1611] transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>{CONTACT_CONFIG.central.emailReservations}</span>
            </a>
          </div>

          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3" />
            <span>Chemilil Road, off Ngara Road, Nairobi</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18 sm:h-20">
          {/* Brand Wordmark & Official Crest Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-3 text-left whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86C] rounded-lg"
            aria-label="Lantern Serviced Apartments Home"
          >
            <img
              src="/assets/lantern-logo.png"
              alt="Lantern Serviced Apartments Logo"
              className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </a>

          {/* Nav links (Uppercase, matching screenshot) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold tracking-wider text-stone-700 uppercase">
            <button
              onClick={() => handleNavClick('home')}
              className="hover:text-[#CCA662] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('suites')}
              className="hover:text-[#CCA662] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Our Apartments
            </button>
            <button
              onClick={() => handleNavClick('boardroom')}
              className="hover:text-[#CCA662] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Facilities & Boardroom
            </button>
            <button
              onClick={() => handleNavClick('dining')}
              className="hover:text-[#CCA662] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Lantern Dining
            </button>
            <button
              onClick={() => handleNavClick('location')}
              className="hover:text-[#CCA662] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Contact Us
            </button>
          </nav>

          {/* Primary Action Button: Rounded Gold "BOOK ON WHATSAPP" */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${CONTACT_CONFIG.central.whatsappDigits}?text=${directBookingMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#1C1611] bg-[#CCA662] hover:bg-[#B8924E] rounded-full active:scale-[0.98] transition-all shadow-xs flex items-center gap-2 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C221A]"
              aria-label="Book on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Book on WhatsApp</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-stone-700 hover:text-stone-900 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86C]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FDFBF7] px-6 py-4 space-y-3 shadow-lg animate-fade-in">
          <button
            onClick={() => handleNavClick('home')}
            className="w-full text-left py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 hover:text-[#CCA662]"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('suites')}
            className="w-full text-left py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 hover:text-[#CCA662]"
          >
            Our Apartments & Suites
          </button>
          <button
            onClick={() => handleNavClick('boardroom')}
            className="w-full text-left py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 hover:text-[#CCA662]"
          >
            Facilities & Boardroom
          </button>
          <button
            onClick={() => handleNavClick('dining')}
            className="w-full text-left py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 hover:text-[#CCA662]"
          >
            Lantern Dining & Atrium
          </button>
          <button
            onClick={() => handleNavClick('location')}
            className="w-full text-left py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 hover:text-[#CCA662]"
          >
            Contact & Location
          </button>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <a
              href={`tel:${CONTACT_CONFIG.central.phonePrimary.replace(/\s+/g, '')}`}
              className="min-h-[44px] w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#2C221A] text-[#C9A86C] text-xs font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>Call Reception: {CONTACT_CONFIG.central.phonePrimary}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
