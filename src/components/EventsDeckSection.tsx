import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock } from 'lucide-react';
import { EVENTS } from '../data/weddingData';

export const EventsDeckSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic movement every 3.8s
  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % EVENTS.length);
    }, 3800);
    return () => window.clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + EVENTS.length) % EVENTS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % EVENTS.length);
  };

  return (
    <section
      className="paper-section events-coverflow-section"
      aria-labelledby="events-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">05 · CELEBRATION ITINERARY</p>
        <h2 className="paper-section-title" id="events-title">The Royal Movements</h2>
        <p className="paper-section-subtitle">
          Four extraordinary celebrations. The deck advances automatically — tap any event to explore.
        </p>
      </div>

      {/* 3D Cover-Flow Stage with RAZOR SHARP crisp typography */}
      <div className="coverflow-stage-viewport">
        <div className="coverflow-track">
          {EVENTS.map((event, idx) => {
            const count = EVENTS.length;
            let offset = idx - activeIndex;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const isCenter = offset === 0;

            let cardClass = "coverflow-card";
            if (isCenter) cardClass += " is-center";
            else if (offset < 0) cardClass += " is-left";
            else if (offset > 0) cardClass += " is-right";
            if (Math.abs(offset) >= 2) cardClass += " is-far";

            return (
              <div
                key={event.title}
                className={cardClass}
                style={{
                  '--offset': offset,
                } as React.CSSProperties}
                onClick={() => setActiveIndex(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Event: ${event.title}`}
              >
                <div className="card-glass-panel">
                  <div className="card-image-header">
                    <img src={event.image} alt={event.title} />
                    <div className="card-image-gradient" />
                    <span className="card-event-badge">MOVEMENT 0{idx + 1}</span>
                  </div>

                  <div className="card-body-content">
                    {/* Active Center Card Body (Razor Sharp & Spacious) */}
                    <div className="card-details-expanded">
                      <h3 className="card-title-heading">{event.title}</h3>
                      <div className="card-meta-pills-row">
                        <div className="event-meta-pill">
                          <Clock size={14} strokeWidth={1.75} />
                          <span>{event.date}</span>
                        </div>
                        <div className="event-meta-pill">
                          <MapPin size={14} strokeWidth={1.75} />
                          <span>{event.place}</span>
                        </div>
                      </div>
                      <p className="card-description-text">{event.description}</p>
                    </div>

                    {/* Symmetrical Side Cards Preview */}
                    <div className="card-details-compact">
                      <h4 className="compact-side-title">{event.title}</h4>
                      <span className="compact-date-badge">{event.date.split('·')[0]}</span>
                      <span className="compact-tap-hint">✦ Tap to view details ✦</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="coverflow-nav-controls">
        <button
          type="button"
          className="coverflow-arrow-btn"
          onClick={handlePrev}
          aria-label="Previous celebration"
        >
          <ChevronLeft size={22} strokeWidth={1.5} />
        </button>

        <div className="coverflow-dots-track">
          {EVENTS.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`coverflow-dot ${i === activeIndex ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Jump to event 0${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="coverflow-arrow-btn"
          onClick={handleNext}
          aria-label="Next celebration"
        >
          <ChevronRight size={22} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
};
