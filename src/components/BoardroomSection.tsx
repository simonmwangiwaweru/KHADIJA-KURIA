import React, { useState } from 'react';
import { Check, Calendar, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Wifi, MonitorPlay, Coffee } from 'lucide-react';
import { BOARDROOM_PACKAGES, BOARDROOM_INCLUSIONS } from '../config/config';
import { LANTERN_IMAGES } from '../config/images';
import { ImageWithFallback } from './ImageWithFallback';

interface BoardroomSectionProps {
  onOpenReserveModal: (packageId?: string) => void;
  onOpenLightbox: (src: string, alt: string, caption?: string) => void;
}

export const BoardroomSection: React.FC<BoardroomSectionProps> = ({
  onOpenReserveModal,
  onOpenLightbox,
}) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const boardroomPhotos = LANTERN_IMAGES.boardroom;

  const nextPhoto = () => {
    setActivePhotoIdx((prev) => (prev + 1) % boardroomPhotos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIdx((prev) => (prev - 1 + boardroomPhotos.length) % boardroomPhotos.length);
  };

  return (
    <section id="boardroom" className="py-16 bg-[#FDFBF7] border-t border-[#EDE7DF] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl pb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C6D32]">
            <span className="w-2 h-2 rounded-full bg-[#C9A86C]" />
            <span>Corporate Events & Meetings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C221A] mt-1.5">
            Executive Boardroom Facility
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            Sound-insulated, executive walnut boardroom equipped with digital presentation screens, ultra-fast fiber Wi-Fi, and complete culinary catering for corporate retreats and strategy sessions.
          </p>
        </div>

        {/* 2-Column Split: Interactive Photo Gallery + Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Swipeable / Clickable Walnut Boardroom Gallery */}
          <div className="lg:col-span-5 space-y-3">
            <div
              className="relative rounded-xl overflow-hidden shadow-sm border border-stone-200 bg-stone-100 cursor-pointer group"
              onClick={() => {
                const current = boardroomPhotos[activePhotoIdx];
                onOpenLightbox(current.src, current.alt, current.caption);
              }}
            >
              <ImageWithFallback
                src={boardroomPhotos[activePhotoIdx].src}
                alt={boardroomPhotos[activePhotoIdx].alt}
                className="w-full h-72 sm:h-84 object-cover transition-transform duration-300 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Prev / Next controls */}
              <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                  className="min-h-[44px] min-w-[44px] rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous boardroom photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                  className="min-h-[44px] min-w-[44px] rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next boardroom photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Caption */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-xs font-serif italic text-stone-200">
                  {boardroomPhotos[activePhotoIdx].caption}
                </p>
              </div>
            </div>

            {/* Thumbnail dots / buttons */}
            <div className="flex items-center gap-2">
              {boardroomPhotos.map((photo, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`flex-1 h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    idx === activePhotoIdx
                      ? 'border-[#C9A86C] opacity-100 ring-1 ring-[#C9A86C]'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`View boardroom photo ${idx + 1}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>

            {/* Quick Inclusions Highlight Box */}
            <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C221A] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#8C6D32]" />
                <span>All Packages Include</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-600">
                {BOARDROOM_INCLUSIONS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: 3 Packages Comparison Cards */}
          <div className="lg:col-span-7 space-y-4">
            {BOARDROOM_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="p-5 sm:p-6 bg-white rounded-xl border border-stone-200 shadow-xs hover:border-[#C9A86C] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
              >
                <div className="space-y-1 max-w-sm">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-xl font-bold text-[#2C221A]">
                      {pkg.name}
                    </h3>
                    {pkg.id === 'full-day' && (
                      <span className="text-[10px] bg-[#FAF5EC] text-[#8C6D32] border border-[#E8DCC9] px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-stone-500">{pkg.duration}</p>
                  <p className="text-xs text-stone-600 pt-0.5">{pkg.highlight}</p>
                </div>

                <div className="flex flex-col sm:items-end gap-2 shrink-0 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                  <div className="sm:text-right">
                    <span className="font-mono tabular-nums text-2xl font-bold text-[#2C221A]">
                      KSh {pkg.pricePerDelegate.toLocaleString()}
                    </span>
                    <p className="text-[11px] text-stone-500">per delegate</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenReserveModal(pkg.id)}
                    className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#2C221A] text-[#C9A86C] text-xs font-semibold hover:bg-[#1B1510] active:scale-[0.98] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86C]"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Reserve Boardroom</span>
                  </button>
                </div>
              </div>
            ))}

            {/* Custom Banquet or Multiple Days note */}
            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-stone-200/80 text-xs text-stone-600 flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-stone-800">Hosting a multi-day retreat or AGM?</p>
                <p className="text-stone-500 text-[11px]">We customize menus, breakout rooms, and executive transport.</p>
              </div>
              <button
                type="button"
                onClick={() => onOpenReserveModal('full-day')}
                className="min-h-[40px] px-3.5 py-1.5 bg-white border border-stone-300 rounded-lg font-semibold text-stone-700 hover:bg-stone-50 text-xs shrink-0 cursor-pointer"
              >
                Inquire Rates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
