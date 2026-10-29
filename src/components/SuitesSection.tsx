import React from 'react';
import { Users, Bed, Maximize2, MessageSquare, Images, Check, ArrowRight, Info } from 'lucide-react';
import { SUITES_DATA, BoardType, CONTACT_CONFIG, SuiteItem } from '../config/config';
import { ImageWithFallback } from './ImageWithFallback';

interface SuitesSectionProps {
  boardType: BoardType;
  setBoardType: (type: BoardType) => void;
  onOpenSuiteGallery: (suite: SuiteItem) => void;
  onSelectProduct: (suite: SuiteItem) => void;
}

export const SuitesSection: React.FC<SuitesSectionProps> = ({
  boardType,
  setBoardType,
  onOpenSuiteGallery,
  onSelectProduct,
}) => {
  const getSuitePrice = (suite: SuiteItem) => {
    return boardType === 'bed_and_breakfast'
      ? suite.bedBreakfastPrice
      : suite.roomOnlyPrice;
  };

  const getBoardLabel = () => {
    return boardType === 'bed_and_breakfast' ? 'Bed & Breakfast' : 'Room Only';
  };

  const generateWhatsAppLink = (suite: SuiteItem) => {
    const price = getSuitePrice(suite);
    const message = encodeURIComponent(
      `Hello Lantern Serviced Apartments, I would like to book the ${suite.name} on ${getBoardLabel()} plan at KSh ${price.toLocaleString()}/night. Please confirm availability.`
    );
    return `https://wa.me/${CONTACT_CONFIG.central.whatsappDigits}?text=${message}`;
  };

  return (
    <section id="suites" className="py-16 bg-white border-t border-[#EDE7DF] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Plan Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C6D32]">
              <span className="w-2 h-2 rounded-full bg-[#C9A86C]" />
              <span>Core Products & Accommodation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C221A] mt-1.5">
              Our Serviced Apartments & Suites
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-xl">
              Click any suite below to view all relevant specifications, room dimensions, photos, and amenities.
            </p>
          </div>

          {/* Segmented Pricing Toggle [Room Only | Bed & Breakfast] */}
          <div className="flex items-center self-start md:self-auto bg-[#F4ECE4] p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => setBoardType('room_only')}
              className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                boardType === 'room_only'
                  ? 'bg-white text-[#2C221A] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Room Only
            </button>
            <button
              onClick={() => setBoardType('bed_and_breakfast')}
              className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                boardType === 'bed_and_breakfast'
                  ? 'bg-white text-[#2C221A] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Bed & Breakfast
            </button>
          </div>
        </div>

        {/* 4 Suite Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          {SUITES_DATA.map((suite) => {
            const currentPrice = getSuitePrice(suite);

            return (
              <div
                key={suite.id}
                className="bg-[#FDFBF7] rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:border-[#C9A86C] hover:shadow-md transition-all flex flex-col group cursor-pointer"
                onClick={() => onSelectProduct(suite)}
              >
                {/* Image & Photo Trigger */}
                <div className="relative h-64 sm:h-72 bg-stone-100 overflow-hidden">
                  <ImageWithFallback
                    src={suite.primaryImage}
                    alt={suite.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Tags */}
                  <div className="absolute top-3 left-3 bg-[#2C221A]/85 text-[#EBD9A8] text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs">
                    {suite.size}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/90 text-[#2C221A] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                    <Info className="w-3 h-3 text-[#8C6D32]" />
                    <span>Click for Full Info</span>
                  </div>

                  {/* View Photos Action */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenSuiteGallery(suite);
                    }}
                    className="min-h-[40px] absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/70 hover:bg-black/90 text-white text-xs font-medium backdrop-blur-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Images className="w-3.5 h-3.5 text-[#C9A86C]" />
                    <span>{suite.imageGalleryKeys.length} Photos</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#2C221A] group-hover:text-[#8C6D32] transition-colors">
                          {suite.name}
                        </h3>
                        <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                          {suite.description}
                        </p>
                      </div>

                      {/* Price Display */}
                      <div className="text-right shrink-0">
                        <span className="font-mono tabular-nums text-2xl font-bold text-[#2C221A]">
                          KSh {currentPrice.toLocaleString()}
                        </span>
                        <p className="text-[11px] text-stone-500">
                          / night ({getBoardLabel()})
                        </p>
                      </div>
                    </div>

                    {/* Specifications Strip */}
                    <div className="flex flex-wrap items-center gap-3 py-2 border-y border-stone-200 text-xs text-stone-600">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#8C6D32]" />
                        <span>{suite.guests}</span>
                      </span>
                      <span className="text-stone-300">·</span>
                      <span className="flex items-center gap-1.5">
                        <Bed className="w-3.5 h-3.5 text-[#8C6D32]" />
                        <span>{suite.bed}</span>
                      </span>
                      <span className="text-stone-300">·</span>
                      <span className="flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#8C6D32]" />
                        <span>{suite.size}</span>
                      </span>
                    </div>

                    {/* Feature Chips */}
                    <ul className="space-y-1.5 pt-1 text-xs text-stone-600">
                      {suite.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(suite)}
                      className="min-h-[44px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#2C221A] text-xs font-bold transition-colors cursor-pointer border border-stone-300"
                    >
                      <span>View All Info</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8C6D32]" />
                    </button>

                    <a
                      href={generateWhatsAppLink(suite)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20BD5A] transition-colors shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Book WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
