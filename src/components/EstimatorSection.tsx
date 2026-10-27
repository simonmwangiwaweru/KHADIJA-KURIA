import React, { useState, useMemo } from 'react';
import { Calculator, Calendar, Moon, MessageSquare, Tag, ArrowRight } from 'lucide-react';
import { SUITES_DATA, CONTACT_CONFIG, BoardType } from '../config/config';

interface EstimatorSectionProps {
  initialBoardType?: BoardType;
}

export const EstimatorSection: React.FC<EstimatorSectionProps> = ({
  initialBoardType = 'room_only',
}) => {
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>('normal-studio');
  const [boardType, setBoardType] = useState<BoardType>(initialBoardType);
  const [nights, setNights] = useState<number>(3);

  // Default check-in date: tomorrow or today
  const todayStr = useMemo(() => new Date().toISOString().split('T')[0], []);
  const [checkInDate, setCheckInDate] = useState<string>(todayStr);

  const selectedSuite = useMemo(() => {
    return SUITES_DATA.find((s) => s.id === selectedSuiteId) || SUITES_DATA[0];
  }, [selectedSuiteId]);

  const nightlyRate = useMemo(() => {
    return boardType === 'bed_and_breakfast'
      ? selectedSuite.bedBreakfastPrice
      : selectedSuite.roomOnlyPrice;
  }, [selectedSuite, boardType]);

  // Compute check-out date string
  const checkOutDate = useMemo(() => {
    if (!checkInDate) return '';
    const dateObj = new Date(checkInDate);
    dateObj.setDate(dateObj.getDate() + nights);
    return dateObj.toISOString().split('T')[0];
  }, [checkInDate, nights]);

  // Calculate discounts
  // Rule 1: Weekend Offer: 5% off if stay includes BOTH a Friday night and a Saturday night
  // Rule 2: Long Stay Privilege: 10% off for 5+ nights
  // Rule 3: Discounts do NOT stack; apply whichever is larger and show only that line.
  const calculation = useMemo(() => {
    const subtotal = nightlyRate * nights;

    let hasFriday = false;
    let hasSaturday = false;

    if (checkInDate) {
      for (let i = 0; i < nights; i++) {
        const nightDate = new Date(checkInDate);
        nightDate.setDate(nightDate.getDate() + i);
        const day = nightDate.getDay(); // 0 Sun, 1 Mon, ... 5 Fri, 6 Sat
        if (day === 5) hasFriday = true;
        if (day === 6) hasSaturday = true;
      }
    }

    const weekendEligible = hasFriday && hasSaturday;
    const longStayEligible = nights >= 5;

    let discountName = '';
    let discountPercent = 0;

    if (longStayEligible) {
      discountName = 'Long Stay Privilege (5+ Nights)';
      discountPercent = 0.10;
    } else if (weekendEligible) {
      discountName = 'Weekend Getaway Offer (Fri & Sat)';
      discountPercent = 0.05;
    }

    const discountAmount = Math.round(subtotal * discountPercent);
    const finalTotal = subtotal - discountAmount;

    return {
      subtotal,
      discountName,
      discountPercent,
      discountAmount,
      finalTotal,
    };
  }, [nightlyRate, nights, checkInDate]);

  const boardLabel = boardType === 'bed_and_breakfast' ? 'Bed & Breakfast' : 'Room Only';

  const handleWhatsAppInquiry = () => {
    const messageLines = [
      `Hello Lantern Serviced Apartments, I would like to inquire about booking a stay:`,
      `• Suite: ${selectedSuite.name}`,
      `• Plan: ${boardLabel}`,
      `• Check-In: ${checkInDate || 'Flexible'}`,
      `• Check-Out: ${checkOutDate || 'Flexible'}`,
      `• Total Nights: ${nights} night${nights > 1 ? 's' : ''}`,
      `• Nightly Rate: KSh ${nightlyRate.toLocaleString()}`,
      `• Subtotal: KSh ${calculation.subtotal.toLocaleString()}`,
      calculation.discountAmount > 0
        ? `• Discount: -KSh ${calculation.discountAmount.toLocaleString()} (${calculation.discountName})`
        : null,
      `• Estimated Total: KSh ${calculation.finalTotal.toLocaleString()}`,
      ``,
      `Please confirm availability for these dates.`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.central.whatsappDigits}?text=${encodeURIComponent(
      messageLines
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="estimator" className="py-16 bg-[#FDFBF7] border-t border-[#EDE7DF] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl pb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C6D32]">
            <span className="w-2 h-2 rounded-full bg-[#C9A86C]" />
            <span>Rate Calculator & Offers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C221A] mt-1.5">
            Stay Cost Estimator
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            Calculate your transparent nightly rate with automated discounts: 5% Weekend Offer (Fri & Sat stays) or 10% Long Stay Privilege (5+ nights).
          </p>
        </div>

        {/* Estimator Card (NO <form> tags) */}
        <div className="bg-white rounded-xl border border-stone-200/90 shadow-sm p-6 sm:p-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Column: User Inputs */}
            <div className="md:col-span-7 space-y-5">
              {/* Suite Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#2C221A] uppercase tracking-wider">
                  Select Suite Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SUITES_DATA.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSuiteId(s.id)}
                      className={`min-h-[44px] p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        selectedSuiteId === s.id
                          ? 'border-[#C9A86C] bg-[#FAF5EC] font-semibold text-[#2C221A] ring-1 ring-[#C9A86C]'
                          : 'border-stone-200 text-stone-600 hover:border-stone-300'
                      }`}
                    >
                      <p className="truncate font-bold text-[#2C221A]">{s.name}</p>
                      <p className="font-mono tabular-nums text-[11px] text-[#8C6D32] mt-0.5">
                        KSh {(boardType === 'bed_and_breakfast' ? s.bedBreakfastPrice : s.roomOnlyPrice).toLocaleString()}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Board Type Segmented Buttons */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#2C221A] uppercase tracking-wider">
                  Meal Plan
                </label>
                <div className="grid grid-cols-2 gap-2 bg-[#FAF7F2] p-1 rounded-xl border border-stone-200">
                  <button
                    type="button"
                    onClick={() => setBoardType('room_only')}
                    className={`min-h-[40px] px-3 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      boardType === 'room_only'
                        ? 'bg-white text-[#2C221A] shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Room Only
                  </button>
                  <button
                    type="button"
                    onClick={() => setBoardType('bed_and_breakfast')}
                    className={`min-h-[40px] px-3 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      boardType === 'bed_and_breakfast'
                        ? 'bg-white text-[#2C221A] shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Bed & Breakfast
                  </button>
                </div>
              </div>

              {/* Check-In Date & Nights Stepper */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#2C221A] uppercase tracking-wider">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm text-[#2C221A] bg-stone-50 focus:outline-none focus:ring-2 focus:ring-[#C9A86C]"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-semibold text-[#2C221A] uppercase tracking-wider">
                      Stay Nights
                    </label>
                    <span className="text-[11px] text-stone-500">Max 30</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setNights((n) => Math.max(1, n - 1))}
                      className="min-h-[44px] min-w-[44px] rounded-xl border border-stone-300 flex items-center justify-center font-bold text-lg text-stone-700 hover:bg-stone-100 cursor-pointer"
                      aria-label="Decrease nights"
                    >
                      −
                    </button>
                    <div className="flex-1 text-center font-mono tabular-nums font-bold text-sm sm:text-base py-2.5 rounded-xl border border-stone-200 bg-stone-50">
                      {nights} night{nights > 1 ? 's' : ''}
                    </div>
                    <button
                      type="button"
                      onClick={() => setNights((n) => Math.min(30, n + 1))}
                      className="min-h-[44px] min-w-[44px] rounded-xl border border-stone-300 flex items-center justify-center font-bold text-lg text-stone-700 hover:bg-stone-100 cursor-pointer"
                      aria-label="Increase nights"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Check-Out Indicator */}
              <div className="text-xs text-stone-500 flex items-center gap-2 pt-1">
                <Calendar className="w-4 h-4 text-[#8C6D32]" />
                <span>
                  Check-out: <strong className="text-stone-800">{checkOutDate}</strong> (10:00 AM)
                </span>
              </div>
            </div>

            {/* Right Column: Live Calculation Breakdown & WhatsApp Button */}
            <div className="md:col-span-5 bg-[#FAF7F2] rounded-xl p-5 border border-stone-200/90 space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#2C221A] pb-2 border-b border-stone-200 flex items-center justify-between">
                <span>Quote Breakdown</span>
                <Calculator className="w-4 h-4 text-[#8C6D32]" />
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Selected Suite:</span>
                  <span className="font-semibold text-stone-900">{selectedSuite.name}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Plan:</span>
                  <span className="font-medium text-stone-800">{boardLabel}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Nightly Rate:</span>
                  <span className="font-mono tabular-nums">KSh {nightlyRate.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Duration:</span>
                  <span className="font-mono tabular-nums">{nights} night{nights > 1 ? 's' : ''}</span>
                </div>
                <div className="flex justify-between text-stone-600 pt-1 border-t border-stone-200">
                  <span>Subtotal:</span>
                  <span className="font-mono tabular-nums font-semibold text-stone-800">
                    KSh {calculation.subtotal.toLocaleString()}
                  </span>
                </div>

                {/* Single Non-Stacking Discount Line (if applicable) */}
                {calculation.discountAmount > 0 && (
                  <div className="flex items-center justify-between text-emerald-700 font-medium bg-emerald-50 p-2 rounded-lg border border-emerald-200/80">
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{calculation.discountName}</span>
                    </span>
                    <span className="font-mono tabular-nums font-bold">
                      −KSh {calculation.discountAmount.toLocaleString()}
                    </span>
                  </div>
                )}

                {/* Final Total */}
                <div className="pt-3 border-t border-stone-200 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-[#2C221A]">Total Payable:</span>
                  <span className="font-mono tabular-nums text-2xl font-bold text-[#8C6D32]">
                    KSh {calculation.finalTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Send Inquiry via WhatsApp Button */}
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="min-h-[44px] w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-semibold hover:bg-[#20BD5A] transition-colors shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Inquiry via WhatsApp</span>
              </button>

              <p className="text-[11px] text-stone-500 text-center leading-tight">
                No upfront payment required. Instant response from Lantern's reservation team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
