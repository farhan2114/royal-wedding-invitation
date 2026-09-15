import React, { useState, useEffect } from 'react';
import { useAmbientMusic } from './hooks/useAmbientMusic';
import { MusicToggle } from './components/MusicToggle';
import { OpeningCover } from './components/OpeningCover';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { FamilySection } from './components/FamilySection';
import { CoupleSection } from './components/CoupleSection';
import { PhotoDumpSection } from './components/PhotoDumpSection';
import { EventsDeckSection } from './components/EventsDeckSection';
import { VenueSection } from './components/VenueSection';
import { BlessingsSection } from './components/BlessingsSection';
import { ClosingSection } from './components/ClosingSection';

export function App() {
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const [expandedProfile, setExpandedProfile] = useState<"meera" | "aarav" | null>(null);
  const { isMuted, startMusic, toggleMute } = useAmbientMusic();

  // Scroll reveal observer
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll('.reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isCoverOpen]);

  // Handle opening invitation
  const handleOpenInvitation = () => {
    setIsCoverOpen(true);
    startMusic();
    // Always scroll to top when site reveals
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="wedding-app-root">
      {/* 1. FIXED STICKY BACKGROUND of Grand Royal Mandap */}
      <div className="fixed-mandap-background" aria-hidden="true">
        <div className="mandap-vignette-overlay" />
      </div>

      {/* Floating Ambient Music Controller */}
      <MusicToggle isMuted={isMuted} onToggle={toggleMute} />

      {/* 2. Realistic 3D Opening Royal Envelope */}
      <OpeningCover isOpen={isCoverOpen} onOpen={handleOpenInvitation} />

      {/* 3. SCROLLING COARSE CREAM ROYAL PARCHMENT PAPER CONTAINER (PILLARS REMOVED) */}
      <div className={`scrollable-parchment-viewport ${isCoverOpen ? 'paper-revealed' : ''}`}>
        <main className="royal-parchment-paper coarse-cream-texture">
          {/* Natural Paper Texture Filter Overlay */}
          <div className="paper-coarse-noise-layer" aria-hidden="true" />

          {/* PAGE-WIDE FLORAL BOUQUET CORNER DECORATIONS */}
          <img
            src="/images/gold-floral-corner.png"
            alt=""
            className="paper-corner-floral floral-top-left"
            aria-hidden="true"
          />
          <img
            src="/images/gold-floral-corner.png"
            alt=""
            className="paper-corner-floral floral-top-right"
            aria-hidden="true"
          />
          <img
            src="/images/gold-floral-corner.png"
            alt=""
            className="paper-corner-floral floral-bottom-left"
            aria-hidden="true"
          />
          <img
            src="/images/gold-floral-corner.png"
            alt=""
            className="paper-corner-floral floral-bottom-right"
            aria-hidden="true"
          />

          {/* Double Gold Inner Border Frame */}
          <div className="parchment-inner-border" aria-hidden="true">
            <span className="corner-flourish top-left">❦</span>
            <span className="corner-flourish top-right">❦</span>
            <span className="corner-flourish bottom-left">❦</span>
            <span className="corner-flourish bottom-right">❦</span>
          </div>

          <HeroSection />

          <div className="royal-gold-divider" aria-hidden="true">
            <img src="/images/flower-gold.png" alt="" className="divider-floral-badge" />
          </div>

          <CountdownSection />

          <div className="royal-gold-divider" aria-hidden="true">
            <img src="/images/flower-gold.png" alt="" className="divider-floral-badge" />
          </div>

          <FamilySection />

          <div className="royal-gold-divider" aria-hidden="true">
            <img src="/images/flower-gold.png" alt="" className="divider-floral-badge" />
          </div>

          <CoupleSection
            expandedProfile={expandedProfile}
            setExpandedProfile={setExpandedProfile}
          />

          <div className="royal-gold-divider" aria-hidden="true">
            <img src="/images/flower-gold.png" alt="" className="divider-floral-badge" />
          </div>

          <PhotoDumpSection />

          <div className="royal-gold-divider" aria-hidden="true">
            <img src="/images/flower-gold.png" alt="" className="divider-floral-badge" />
          </div>

          <EventsDeckSection />

          <div className="royal-gold-divider" aria-hidden="true">
            <img src="/images/flower-gold.png" alt="" className="divider-floral-badge" />
          </div>

          <VenueSection />

          <div className="royal-gold-divider" aria-hidden="true">
            <img src="/images/flower-gold.png" alt="" className="divider-floral-badge" />
          </div>

          <BlessingsSection />

          <ClosingSection />
        </main>
      </div>
    </div>
  );
}

export default App;
