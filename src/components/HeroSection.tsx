import React from 'react';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-paper-section" id="welcome" tabIndex={-1} aria-labelledby="welcome-title">
      <div className="hero-paper-inner reveal">
        {/* Perfectly Centered Floral Frame for Couple */}
        <div className="hero-floral-frame-wrapper">
          <div className="hero-floral-arch-box">
            {/* Top Flowers */}
            <img
              src="/images/gold-floral-corner.png"
              alt=""
              className="hero-frame-flower flower-top-left"
              aria-hidden="true"
            />
            <img
              src="/images/gold-floral-corner.png"
              alt=""
              className="hero-frame-flower flower-top-right"
              aria-hidden="true"
            />

            {/* Symmetrically Centered Portrait Card */}
            <div className="hero-portrait-img-card">
              <img
                src="/images/couple-arched-hero.png"
                alt="Aarav and Meera in royal Udaipur wedding portrait"
                className="couple-arch-photo hover-lift-img"
              />
            </div>

            {/* Bottom Flowers */}
            <img
              src="/images/gold-floral-corner.png"
              alt=""
              className="hero-frame-flower flower-bottom-left"
              aria-hidden="true"
            />
            <img
              src="/images/gold-floral-corner.png"
              alt=""
              className="hero-frame-flower flower-bottom-right"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Calligraphic Eyebrow & Couple Monogram */}
        <p className="hero-calligraphy-subtitle">✦ Together With Our Families ✦</p>
        <p className="hero-eyebrow">UDAIPUR · 21 FEBRUARY 2027</p>

        <h1 id="welcome-title" className="hero-stylish-names">
          Aarav <span className="stylish-ampersand">&amp;</span> Meera
        </h1>

        <p className="hero-invitation-message">
          Under the golden sunsets of Lake Pichola and amidst the timeless splendor of Rajasthan’s heritage, we joyfully invite you to celebrate the beginning of our forever.
        </p>

        <a
          className="hero-scroll-pill"
          href="#waiting"
          aria-label="Scroll to the countdown section"
          data-testid="link-scroll-countdown"
        >
          <span>Explore The Celebration</span>
          <ArrowDown size={14} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
