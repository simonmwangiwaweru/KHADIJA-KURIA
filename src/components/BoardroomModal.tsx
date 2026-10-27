import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, MessageSquare, Check, Calculator } from 'lucide-react';
import { BOARDROOM_PACKAGES, CONTACT_CONFIG, BoardroomPackage } from '../config/config';

interface BoardroomModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackageId?: string;
}

export const BoardroomModal: React.FC<BoardroomModalProps> = ({
  isOpen,
  onClose,
  defaultPackageId = 'full-day',
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState(defaultPackageId);
  const [eventDate, setEventDate] = useState('');
  const [delegates, setDelegates] = useState(10);

  // Close on Esc
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (defaultPackageId) {
      setSelectedPackageId(defaultPackageId);
    }
  }, [defaultPackageId, isOpen]);

  if (!isOpen) return null;

  // ISO date string for today to block past dates
  const todayStr = new Date().toISOString().split('T')[0];

  const currentPkg =
    BOARDROOM_PACKAGES.find((p) => p.id === selectedPackageId) ||
    BOARDROOM_PACKAGES[1];

  const totalCost = currentPkg.pricePerDelegate * Math.max(1, delegates);
  const isFormValid = Boolean(eventDate) && delegates >= 1;

  const handleWhatsAppBooking = () => {
    if (!isFormValid) return;

    const message = encodeURIComponent(
      `Hello Lantern Serviced Apartments, I would like to reserve the Executive Boardroom:\n` +
        `• Package: ${currentPkg.name} (KSh ${currentPkg.pricePerDelegate.toLocaleString()}/delegate)\n` +
        `• Date: ${eventDate}\n` +
        `• Delegates: ${delegates} persons\n` +
        `• Estimated Total: KSh ${totalCost.toLocaleString()}\n\n` +
        `Please confirm boardroom availability and send quotation invoice.`
    );

    window.open(
      `https://wa.me/${CONTACT_CONFIG.central.whatsappDigits}?text=${message}`,
      '_blank'
    );
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Reserve Boardroom Modal"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-[#FAF7F2]">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#2C221A]">
              Reserve Executive Boardroom
            </h3>
            <p className="text-xs text-stone-500">
              Chemilil Road, Parklands · 50+ Mbps Fiber · Buffet Catering
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body (NO form tag, only standard handlers) */}
        <div className="p-6 space-y-5">
          {/* 1. Package Select */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-[#2C221A] uppercase tracking-wider">
              Select Package
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {BOARDROOM_PACKAGES.map((pkg) => {
                const isSelected = pkg.id === selectedPackageId;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`min-h-[44px] p-3 text-left rounded-xl border text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#C9A86C] bg-[#FAF5EC] text-[#2C221A] font-semibold ring-1 ring-[#C9A86C]'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600'
                    }`}
                  >
                    <p className="font-bold text-[#2C221A] truncate">{pkg.name}</p>
                    <p className="font-mono tabular-nums text-xs font-bold text-[#8C6D32] mt-0.5">
                      KSh {pkg.pricePerDelegate.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-stone-500 mt-0.5">/ delegate</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Date Picker (No past dates) */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#2C221A] uppercase tracking-wider">
              Meeting Date
            </label>
            <div className="relative">
              <input
                type="date"
                min={todayStr}
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-[#2C221A] focus:outline-none focus:ring-2 focus:ring-[#C9A86C] bg-stone-50"
              />
            </div>
            {!eventDate && (
              <p className="text-[11px] text-stone-400">Please select an upcoming meeting date</p>
            )}
          </div>

          {/* 3. Delegates Count Stepper */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-[#2C221A] uppercase tracking-wider">
                Number of Delegates
              </label>
              <span className="text-xs text-stone-500">Boardroom Capacity: 2–25 persons</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setDelegates((prev) => Math.max(1, prev - 1))}
                className="min-h-[44px] min-w-[44px] rounded-xl border border-stone-300 flex items-center justify-center text-lg font-bold hover:bg-stone-100 cursor-pointer text-stone-700"
                aria-label="Decrease delegates"
              >
                −
              </button>
              <input
                type="number"
                min={1}
                max={50}
                value={delegates}
                onChange={(e) => setDelegates(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full text-center font-mono tabular-nums font-bold text-base py-2 rounded-xl border border-stone-300"
              />
              <button
                type="button"
                onClick={() => setDelegates((prev) => prev + 1)}
                className="min-h-[44px] min-w-[44px] rounded-xl border border-stone-300 flex items-center justify-center text-lg font-bold hover:bg-stone-100 cursor-pointer text-stone-700"
                aria-label="Increase delegates"
              >
                +
              </button>
            </div>
          </div>

          {/* 4. Live Calculation Summary */}
          <div className="p-4 bg-[#FAF7F2] rounded-xl border border-stone-200 text-xs space-y-1.5">
            <div className="flex justify-between text-stone-600">
              <span>Selected Package:</span>
              <span className="font-semibold text-stone-800">{currentPkg.name}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Rate Per Delegate:</span>
              <span className="font-mono tabular-nums">KSh {currentPkg.pricePerDelegate.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Total Delegates:</span>
              <span className="font-mono tabular-nums">{delegates} persons</span>
            </div>
            <div className="pt-2 border-t border-stone-200 flex justify-between items-baseline font-bold text-[#2C221A] text-sm">
              <span>Estimated Total:</span>
              <span className="font-mono tabular-nums text-lg text-[#8C6D32]">
                KSh {totalCost.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Action: WhatsApp button with disabled validation state */}
          <button
            type="button"
            disabled={!isFormValid}
            onClick={handleWhatsAppBooking}
            className={`min-h-[44px] w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
              isFormValid
                ? 'bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-xs cursor-pointer'
                : 'bg-stone-200 text-stone-400 cursor-not-allowed'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>
              {isFormValid
                ? `Confirm Booking on WhatsApp (KSh ${totalCost.toLocaleString()})`
                : 'Select Meeting Date to Proceed'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
