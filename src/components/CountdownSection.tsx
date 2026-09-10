import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

export const CountdownSection: React.FC = () => {
  const timeLeft = useCountdown("2027-02-21T17:00:00+05:30");

  const units = [
    { label: "DAYS", value: timeLeft.days, max: 365 },
    { label: "HOURS", value: timeLeft.hours, max: 24 },
    { label: "MINUTES", value: timeLeft.minutes, max: 60 },
    { label: "SECONDS", value: timeLeft.seconds, max: 60 },
  ];

  return (
    <section className="paper-section countdown-celestial-section reveal" id="waiting" aria-labelledby="waiting-title">
      <div className="section-header-centered">
        <p className="paper-section-eyebrow">01 · THE CELEBRATION AWAITS</p>
        <h2 className="paper-section-title" id="waiting-title">Every Second Closer to Forever</h2>
        <p className="paper-section-subtitle">
          Counting down to a magical royal weekend of music, sacred rituals, and unending laughter.
        </p>
      </div>

      {/* Unique Celestial Dial Countdown */}
      <div className="celestial-countdown-container" data-testid="countdown-wedding">
        <div className="celestial-orbit-glow" />

        <div className="celestial-dials-grid">
          {units.map((unit) => {
            const radius = 54;
            const circumference = 2 * Math.PI * radius;
            const progress = (unit.value / unit.max) * circumference;

            return (
              <div key={unit.label} className="celestial-dial-card" data-testid={`countdown-${unit.label.toLowerCase()}`}>
                <div className="dial-svg-box">
                  <svg className="dial-ring-svg" viewBox="0 0 130 130">
                    <circle
                      className="dial-bg-track"
                      cx="65"
                      cy="65"
                      r={radius}
                      fill="none"
                      stroke="#e8dbc7"
                      strokeWidth="3.5"
                    />
                    <circle
                      className="dial-progress-stroke"
                      cx="65"
                      cy="65"
                      r={radius}
                      fill="none"
                      stroke="url(#goldGradient)"
                      strokeWidth="4"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference - progress}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d4af37" />
                        <stop offset="50%" stopColor="#f3e5ab" />
                        <stop offset="100%" stopColor="#aa771c" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="dial-center-content">
                    <span className="dial-number-val">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="dial-unit-name">{unit.label}</span>
                  </div>
                </div>
                <div className="dial-pulse-ring" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
