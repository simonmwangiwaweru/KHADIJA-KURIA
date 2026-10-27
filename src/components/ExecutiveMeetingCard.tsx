import React, { useState } from 'react';
import { QrCode, Phone, MessageSquare, Mail, MapPin, Download, UserCheck, ShieldCheck, Eye } from 'lucide-react';
import { LANTERN_CONTACT_INFO } from '../data/lanternData';

interface ExecutiveMeetingCardProps {
  onOpenQRModal: () => void;
}

export const ExecutiveMeetingCard: React.FC<ExecutiveMeetingCardProps> = ({ onOpenQRModal }) => {
  const [showBusinessCardModal, setShowBusinessCardModal] = useState(false);

  // Generate and download a standard .vcf file for 1-tap contact saving in meetings
  const handleDownloadVCard = () => {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${LANTERN_CONTACT_INFO.keyContact.name}`,
      `ORG:${LANTERN_CONTACT_INFO.brandName}`,
      `TITLE:${LANTERN_CONTACT_INFO.keyContact.role}`,
      `TEL;TYPE=CELL:${LANTERN_CONTACT_INFO.keyContact.phone}`,
      `TEL;TYPE=WORK:${LANTERN_CONTACT_INFO.primaryPhone}`,
      `EMAIL:${LANTERN_CONTACT_INFO.keyContact.email}`,
      `EMAIL;TYPE=WORK:${LANTERN_CONTACT_INFO.reservationsEmail}`,
      `ADR;TYPE=WORK:;;Chemilil Road, Parklands;Nairobi;;;Kenya`,
      `URL:${LANTERN_CONTACT_INFO.website}`,
      'NOTE:Lantern Serviced Apartments - Luxury Living & Executive Conferences in Parklands, Nairobi',
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Khadija-Kuria-Lantern-Apartments.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${LANTERN_CONTACT_INFO.keyContact.name}, I am reaching out from your Lantern Serviced Apartments presentation to inquire about apartment availability and boardroom bookings.`
  );

  return (
    <div className="w-full bg-[#1C1611] text-[#FAF8F5] border-y border-[#3A2F24] relative overflow-hidden">
      {/* Subtle brand gold ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A86C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Executive identity block */}
          <div className="flex items-start sm:items-center gap-4 w-full lg:w-auto">
            {/* Monogram crest */}
            <div className="relative shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#C9A86C] via-[#B39355] to-[#8C6D32] p-[1.5px] shadow-lg">
                <div className="w-full h-full bg-[#241C15] rounded-2xl flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-[#EBD9A8] tracking-wider">L</span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-600 border-2 border-[#1C1611] flex items-center justify-center">
                <UserCheck className="w-3 h-3 text-white" />
              </div>
            </div>

            {/* Role & Name */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-xs uppercase tracking-widest font-medium text-[#C9A86C]">
                  Executive Digital Profile
                </span>
                <span className="text-stone-500 text-xs hidden sm:inline">·</span>
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9A86C]" /> Verified Official
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                {LANTERN_CONTACT_INFO.keyContact.name}
              </h2>
              <p className="text-xs sm:text-sm text-stone-300">
                {LANTERN_CONTACT_INFO.keyContact.role} · <span className="text-[#C9A86C]">{LANTERN_CONTACT_INFO.brandName}</span>
              </p>
              <div className="flex items-center gap-1.5 text-xs text-stone-400 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#C9A86C] shrink-0" />
                <span>Chemilil Road, Parklands, Nairobi</span>
              </div>
            </div>
          </div>

          {/* Quick meeting action cluster */}
          <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto justify-start lg:justify-end">
            {/* Direct Scan Trigger */}
            <button
              onClick={onOpenQRModal}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#C9A86C] to-[#B39355] text-[#1C1611] font-semibold text-xs sm:text-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-[#C9A86C]/10"
            >
              <QrCode className="w-4 h-4" />
              <span>Show QR Code to Scan</span>
            </button>

            {/* Direct WhatsApp */}
            <a
              href={`https://wa.me/${LANTERN_CONTACT_INFO.primaryPhoneClean}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#25D366] text-white font-medium text-xs sm:text-sm hover:bg-[#20BD5A] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Call */}
            <a
              href={`tel:${LANTERN_CONTACT_INFO.primaryPhoneClean}`}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#2D231A] text-stone-200 border border-[#4A3A2C] font-medium text-xs sm:text-sm hover:bg-[#382B20] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C9A86C]" />
              <span className="hidden sm:inline">Call Office</span>
            </a>

            {/* Save Contact vCard */}
            <button
              onClick={handleDownloadVCard}
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#2D231A] text-stone-300 border border-[#4A3A2C] text-xs font-medium hover:text-white hover:bg-[#382B20] transition-colors"
              title="Save Contact Card to Phone"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save Contact</span>
            </button>

            {/* View Official Card */}
            <button
              onClick={() => setShowBusinessCardModal(true)}
              className="flex items-center gap-1.5 px-2.5 py-2.5 rounded-xl text-stone-400 hover:text-[#C9A86C] text-xs font-medium transition-colors"
              title="Inspect Official Printed Card"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Card Proof</span>
            </button>
          </div>
        </div>
      </div>

      {/* Official Business Card Preview Modal */}
      {showBusinessCardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-lg w-full bg-[#1C1611] rounded-2xl border border-[#4A3A2C] p-4 overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-[#3A2F24] mb-3">
              <h4 className="text-sm font-serif font-bold text-[#EBD9A8]">Official Business Card & Credentials</h4>
              <button
                onClick={() => setShowBusinessCardModal(false)}
                className="text-stone-400 hover:text-white text-xs px-2 py-1 rounded bg-stone-800"
              >
                Close
              </button>
            </div>
            <div className="rounded-xl overflow-hidden border border-stone-700 bg-black">
              <img
                src={LANTERN_CONTACT_INFO.keyContact.cardAsset}
                alt="Khadija Kuria Official Business Card - Lantern Serviced Apartments"
                className="w-full h-auto object-contain max-h-[70vh]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 text-center text-xs text-stone-400">
              Chemilil Road, Parklands, Nairobi · Tel: {LANTERN_CONTACT_INFO.keyContact.phone}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
