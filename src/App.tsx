import React, { useState } from 'react';
import { ExecutiveHeaderCard } from './components/ExecutiveHeaderCard';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SuitesSection } from './components/SuitesSection';
import { BoardroomSection } from './components/BoardroomSection';
import { DiningAtriumSection } from './components/DiningAtriumSection';
import { EstimatorSection } from './components/EstimatorSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BoardroomModal } from './components/BoardroomModal';
import { LightboxModal, LightboxImageItem } from './components/LightboxModal';
import { BoardType, SuiteItem } from './config/config';

export default function App() {
  // Global Board Type Toggle [Room Only | Bed & Breakfast]
  const [boardType, setBoardType] = useState<BoardType>('room_only');

  // Boardroom Modal state
  const [boardroomModalState, setBoardroomModalState] = useState<{
    isOpen: boolean;
    defaultPackageId?: string;
  }>({
    isOpen: false,
    defaultPackageId: 'full-day',
  });

  // Lightbox Modal state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: LightboxImageItem[];
    initialIndex: number;
  }>({
    isOpen: false,
    images: [],
    initialIndex: 0,
  });

  // Open single image or photo list in lightbox
  const openSingleImageLightbox = (src: string, alt: string, caption?: string) => {
    setLightboxState({
      isOpen: true,
      images: [{ src, alt, caption }],
      initialIndex: 0,
    });
  };

  // Open Suite Gallery in Lightbox
  const openSuiteGallery = (suite: SuiteItem) => {
    const galleryItems: LightboxImageItem[] = suite.imageGalleryKeys.map((src, idx) => ({
      src,
      alt: `${suite.name} - View ${idx + 1}`,
      caption: `${suite.name} (${suite.size}, ${suite.bed}) — Chemilil Road, Parklands`,
    }));

    setLightboxState({
      isOpen: true,
      images: galleryItems,
      initialIndex: 0,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2C221A] selection:bg-[#C9A86C]/30 selection:text-[#2C221A]">
      {/* 1. EXECUTIVE CARD + HEADER */}
      <ExecutiveHeaderCard />

      {/* TOP BAR / NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT SECTIONS */}
      <main className="flex-1">
        {/* 2. HERO */}
        <HeroSection onOpenLightbox={openSingleImageLightbox} />

        {/* 3. SUITES & RATES */}
        <SuitesSection
          boardType={boardType}
          setBoardType={setBoardType}
          onOpenSuiteGallery={openSuiteGallery}
        />

        {/* 4. EXECUTIVE BOARDROOM */}
        <BoardroomSection
          onOpenReserveModal={(packageId) =>
            setBoardroomModalState({
              isOpen: true,
              defaultPackageId: packageId || 'full-day',
            })
          }
          onOpenLightbox={openSingleImageLightbox}
        />

        {/* 5. LANTERN DINING & ATRIUM */}
        <DiningAtriumSection onOpenLightbox={openSingleImageLightbox} />

        {/* 6. STAY RATE ESTIMATOR */}
        <EstimatorSection initialBoardType={boardType} />

        {/* 7. LOCATION */}
        <LocationSection />
      </main>

      {/* 8. FOOTER */}
      <Footer />

      {/* MODALS */}
      {/* Boardroom Reservation Modal */}
      <BoardroomModal
        isOpen={boardroomModalState.isOpen}
        onClose={() => setBoardroomModalState((prev) => ({ ...prev, isOpen: false }))}
        defaultPackageId={boardroomModalState.defaultPackageId}
      />

      {/* Reusable Image Gallery Lightbox */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
        images={lightboxState.images}
        initialIndex={lightboxState.initialIndex}
      />
    </div>
  );
}
