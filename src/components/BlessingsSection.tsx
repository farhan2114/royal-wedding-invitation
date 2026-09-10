import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Send, Heart, Sparkles } from 'lucide-react';
import { BLESSINGS } from '../data/weddingData';

interface Petal {
  id: number;
  x: number;
  emoji: string;
}

export const BlessingsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [petals, setPetals] = useState<Petal[]>([]);
  const [petalsCount, setPetalsCount] = useState(148);

  const navigateBlessing = (dir: "next" | "previous") => {
    setActiveIndex((prev) =>
      dir === "next" ? (prev + 1) % BLESSINGS.length : (prev - 1 + BLESSINGS.length) % BLESSINGS.length
    );
  };

  const handleShowerPetals = () => {
    setPetalsCount((c) => c + 1);
    const flowerEmojis = ['🌸', '💮', '🌹', '✨', '💛', '🌺'];
    const newPetals: Petal[] = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 80 + 10,
      emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
    }));

    setPetals((prev) => [...prev, ...newPetals]);
    window.setTimeout(() => {
      setPetals((prev) => prev.filter((p) => !newPetals.includes(p)));
    }, 2200);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmitted(true);
    handleShowerPetals();
    e.currentTarget.reset();
  };

  const current = BLESSINGS[activeIndex];

  return (
    <section className="paper-section blessings-paper-section" aria-labelledby="blessings-title">
      {/* Floating Petal Shower Animation Layer */}
      <div className="petals-shower-container" aria-hidden="true">
        {petals.map((p) => (
          <span
            key={p.id}
            className="floating-petal-particle"
            style={{ left: `${p.x}%` }}
          >
            {p.emoji}
          </span>
        ))}
      </div>

      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">07 · WORDS OF LOVE</p>
        <h2 className="paper-section-title stylish-title" id="blessings-title">
          Blessings for the Journey
        </h2>
        <p className="paper-section-subtitle">
          Warm wishes and enduring prayers woven together for our road ahead.
        </p>
      </div>

      {/* Luxury Animated Card Stage */}
      <div className="animated-blessing-stage reveal">
        <button
          type="button"
          className="blessing-arrow-btn"
          onClick={() => navigateBlessing("previous")}
          aria-label="Previous blessing"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>

        <div className="luxury-blessing-card-animated">
          {/* Ornate corner flowers on the card */}
          <span className="card-mini-flower flower-tl">❦</span>
          <span className="card-mini-flower flower-tr">❦</span>
          <span className="card-mini-flower flower-bl">❦</span>
          <span className="card-mini-flower flower-br">❦</span>

          <div className="blessing-quote-mark">“</div>
          <blockquote className="blessing-animated-quote">
            {current.quote}
          </blockquote>
          <cite className="blessing-animated-cite">— {current.cite}</cite>

          {/* Interactive Flower Petal Shower Button */}
          <div className="blessing-interaction-bar">
            <button
              type="button"
              className="shower-petals-btn"
              onClick={handleShowerPetals}
              aria-label="Shower flower petals"
            >
              <Sparkles size={14} className="sparkle-icon" />
              <span>Offer Petals &amp; Love</span>
              <span className="petals-badge">🌸 {petalsCount}</span>
            </button>
          </div>
        </div>

        <button
          type="button"
          className="blessing-arrow-btn"
          onClick={() => navigateBlessing("next")}
          aria-label="Next blessing"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
      </div>

      <div className="blessing-dots-track">
        {BLESSINGS.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`blessing-dot ${i === activeIndex ? 'is-active' : ''}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Blessing ${i + 1}`}
          />
        ))}
      </div>

      {/* Guest Note Form */}
      <form className="blessing-guestbook-form reveal" onSubmit={handleSubmit}>
        {hasSubmitted ? (
          <div className="guestbook-success-box">
            <span className="success-icon">🌸</span>
            <p>Your beautiful blessing has joined our collection. We carry your warm love in our hearts!</p>
          </div>
        ) : (
          <>
            <h3 className="form-heading">Leave a Warm Blessing</h3>
            <p className="form-subheading">Sign our digital royal guestbook for Aarav &amp; Meera</p>
            <div className="form-fields-row">
              <div className="field-group">
                <label htmlFor="guest-name">Your Full Name</label>
                <input
                  id="guest-name"
                  name="name"
                  required
                  placeholder="How should we remember you?"
                />
              </div>
              <div className="field-group full-width">
                <label htmlFor="guest-note">Your Note or Memory</label>
                <textarea
                  id="guest-note"
                  name="note"
                  required
                  rows={3}
                  placeholder="A wish for the couple, a fond memory, or a heartfelt toast..."
                />
              </div>
            </div>
            <button className="guestbook-submit-btn" type="submit">
              <span>Send Your Blessing</span>
              <Send size={14} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </>
        )}
      </form>
    </section>
  );
};
