import React, { useState, useEffect } from 'react';
import { X, Users, Bed, Maximize2, Check, MessageSquare, ChevronLeft, ChevronRight, Sparkles, Coffee, Shield, Utensils, Wifi, Tv } from 'lucide-react';
import { SuiteItem, BoardType, CONTACT_CONFIG } from '../config/config';
import { ImageWithFallback } from './ImageWithFallback';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: SuiteItem | null;
  initialBoardType: BoardType;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  isOpen,
  onClose,
  product,
  initialBoardType,
}) => {
  const [activeBoard, setActiveBoard] = useState<BoardType>(initialBoardType);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  useEffect(() => {
    setActiveBoard(initialBoardType);
    setActivePhotoIdx(0);
  }, [product, initialBoardType]);

  // Close on Esc
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const price =
    activeBoard === 'bed_and_breakfast'
      ? product.bedBreakfastPrice
      : product.roomOnlyPrice;

  const boardLabel = activeBoard === 'bed_and_breakfast' ? 'Bed & Breakfast' : 'Room Only';

  const whatsappMessage = encodeURIComponent(
    `Hello Lantern Serviced Apartments, I am inquiring about reserving the ${product.name} on the ${boardLabel} plan (KSh ${price.toLocaleString()}/night). Please share availability.`
  );

  const photos = product.imageGalleryKeys.length > 0 ? product.imageGalleryKeys : [product.primaryImage];

  const nextPhoto = () => {
    setActivePhotoIdx((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIdx((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} Product Details`}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF7F2] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#2C221A] text-[#C9A86C] flex items-center justify-center font-serif font-bold text-sm">
              L
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C221A]">
                {product.name}
              </h3>
              <p className="text-xs text-stone-500">
                Chemilil Road, Parklands · Serviced Residential Apartment
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Photo Showcase Carousel */}
          <div className="space-y-3">
            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
              <ImageWithFallback
                src={photos[activePhotoIdx]}
                alt={`${product.name} view ${activePhotoIdx + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Prev / Next Buttons */}
              {photos.length > 1 && (
                <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                  <button
                    onClick={prevPhoto}
                    className="pointer-events-auto p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus:outline-none"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="pointer-events-auto p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus:outline-none"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Counter Badge */}
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white font-mono text-xs">
                {activePhotoIdx + 1} / {photos.length}
              </div>

              {/* Floor Size Tag */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#2C221A]/90 backdrop-blur-sm text-[#EBD9A8] text-xs font-semibold">
                {product.size} Floor Space
              </div>
            </div>

            {/* Thumbnail Strip */}
            {photos.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {photos.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`relative shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      idx === activePhotoIdx
                        ? 'border-[#C9A86C] ring-1 ring-[#C9A86C]'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pricing & Plan Switcher */}
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                Select Pricing Plan
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-mono tabular-nums text-3xl font-extrabold text-[#2C221A]">
                  KSh {price.toLocaleString()}
                </span>
                <span className="text-xs text-stone-600 font-medium">/ night ({boardLabel})</span>
              </div>
            </div>

            {/* Segmented plan switcher */}
            <div className="flex items-center bg-stone-200/80 p-1 rounded-xl self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveBoard('room_only')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeBoard === 'room_only'
                    ? 'bg-white text-[#2C221A] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Room Only
              </button>
              <button
                type="button"
                onClick={() => setActiveBoard('bed_and_breakfast')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeBoard === 'bed_and_breakfast'
                    ? 'bg-white text-[#2C221A] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Bed & Breakfast
              </button>
            </div>
          </div>

          {/* Core Specifications Strip */}
          <div className="grid grid-cols-3 gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#8C6D32] shrink-0" />
              <div>
                <p className="text-[10px] text-stone-400 uppercase font-semibold">Capacity</p>
                <p className="font-bold text-stone-800">{product.guests}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 border-x border-stone-200 px-3">
              <Bed className="w-4 h-4 text-[#8C6D32] shrink-0" />
              <div>
                <p className="text-[10px] text-stone-400 uppercase font-semibold">Bed Configuration</p>
                <p className="font-bold text-stone-800 truncate">{product.bed}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-[#8C6D32] shrink-0" />
              <div>
                <p className="text-[10px] text-stone-400 uppercase font-semibold">Floor Area</p>
                <p className="font-bold text-stone-800">{product.size}</p>
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C221A] mb-1.5">
              Suite Overview
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Itemized Amenities & Inclusions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C221A] mb-3">
              Included Amenities & Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80 flex items-center gap-2.5 text-xs text-stone-700"
                >
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
              <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80 flex items-center gap-2.5 text-xs text-stone-700">
                <Wifi className="w-4 h-4 text-[#8C6D32] shrink-0" />
                <span>50+ Mbps High-Speed Dedicated Fiber</span>
              </div>
              <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80 flex items-center gap-2.5 text-xs text-stone-700">
                <Shield className="w-4 h-4 text-[#8C6D32] shrink-0" />
                <span>24/7 Gated Security Guards & CCTV</span>
              </div>
              <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80 flex items-center gap-2.5 text-xs text-stone-700">
                <Sparkles className="w-4 h-4 text-[#8C6D32] shrink-0" />
                <span>Automatic Generator Power Backup</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-stone-200 bg-[#FAF7F2] shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <span className="text-xs text-stone-500">Instant reservation liaison:</span>
            <p className="text-xs font-semibold text-stone-800">Khadija Kuria · Central Reservations</p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              type="button"
              className="min-h-[44px] flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Close
            </button>

            <a
              href={`https://wa.me/${CONTACT_CONFIG.central.whatsappDigits}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-bold hover:bg-[#20BD5A] transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
