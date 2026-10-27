import React from 'react';
import { Utensils, Clock, Coffee, Sparkles, Sun, Wind, Eye } from 'lucide-react';
import { DINING_INFO } from '../config/config';
import { LANTERN_IMAGES } from '../config/images';
import { ImageWithFallback } from './ImageWithFallback';

interface DiningAtriumSectionProps {
  onOpenLightbox: (src: string, alt: string, caption?: string) => void;
}

export const DiningAtriumSection: React.FC<DiningAtriumSectionProps> = ({
  onOpenLightbox,
}) => {
  const diningImages = LANTERN_IMAGES.dining;
  const atriumImages = LANTERN_IMAGES.atrium;

  return (
    <section id="dining" className="py-16 bg-white border-t border-[#EDE7DF] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Part A: Lantern Dining */}
        <div>
          <div className="max-w-2xl pb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C6D32]">
              <span className="w-2 h-2 rounded-full bg-[#C9A86C]" />
              <span>Culinary Experience</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C221A] mt-1.5">
              Lantern Dining & Restaurant
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              Warm timber furnishings, ambient chandelier lighting, and fresh local & international dishes prepared daily by our resident chefs.
            </p>
          </div>

          {/* Dining Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Info Points */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-[#2C221A] font-bold text-sm">
                  <Clock className="w-4 h-4 text-[#8C6D32]" />
                  <span>{DINING_INFO.hours}</span>
                </div>
                <p className="text-xs text-stone-600">
                  Serving hot buffet breakfasts, boardroom lunches, and intimate evening dinners.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-[#2C221A] font-bold text-sm">
                  <Coffee className="w-4 h-4 text-[#8C6D32]" />
                  <span>{DINING_INFO.breakfast}</span>
                </div>
                <p className="text-xs text-stone-600">
                  Full English & continental breakfast spread including fresh fruits, pastries, eggs made to order, and Kenyan barista coffee.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-[#2C221A] font-bold text-sm">
                  <Utensils className="w-4 h-4 text-[#8C6D32]" />
                  <span>À La Carte & Room Service</span>
                </div>
                <p className="text-xs text-stone-600">
                  {DINING_INFO.cuisine}. In-room suite delivery and conference banquet catering available on demand.
                </p>
              </div>
            </div>

            {/* 3 Dining Photos Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {diningImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative rounded-xl overflow-hidden shadow-xs border border-stone-200 h-60 cursor-pointer group bg-stone-100"
                  onClick={() => onOpenLightbox(img.src, img.alt, img.caption)}
                >
                  <ImageWithFallback
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <p className="text-[11px] font-medium leading-tight line-clamp-2">
                      {img.caption}
                    </p>
                  </div>

                  <div className="absolute top-2 right-2 p-1.5 rounded-md bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Part B: Central Open-Air Atrium */}
        <div className="pt-8 border-t border-stone-200">
          <div className="max-w-2xl pb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C6D32]">
              <span className="w-2 h-2 rounded-full bg-[#C9A86C]" />
              <span>Architectural Character</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C221A] mt-1.5">
              Open-Sky Central Atrium
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              A distinctive multistory central courtyard with natural daylight, ornate iron balustrades, and lush garden turf providing quiet outdoor circulation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {atriumImages.slice(0, 3).map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden shadow-xs border border-stone-200 h-64 cursor-pointer group bg-stone-100"
                onClick={() => onOpenLightbox(img.src, img.alt, img.caption)}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-serif font-bold">{img.alt}</p>
                  <p className="text-[11px] text-stone-300 line-clamp-1 mt-0.5">
                    {img.caption}
                  </p>
                </div>

                <div className="absolute top-2 right-2 p-1.5 rounded-md bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
