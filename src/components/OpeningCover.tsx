import React, { useState, useEffect } from 'react';

interface OpeningCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

type OpeningStage = 'sealed' | 'flap-opening' | 'card-rising' | 'revealing-site' | 'done';

export const OpeningCover: React.FC<OpeningCoverProps> = ({ isOpen, onOpen }) => {
  const [stage, setStage] = useState<OpeningStage>('sealed');

  const handleOpen = () => {
    if (stage === 'sealed') {
      setStage('flap-opening');
    } else if (stage === 'flap-opening' || stage === 'card-rising') {
      // User tapped while animating -> immediately fast-forward
      setStage('revealing-site');
      onOpen();
      window.setTimeout(() => setStage('done'), 800);
    }
  };

  useEffect(() => {
    let t1: number, t2: number, t3: number;

    if (stage === 'flap-opening') {
      // 1. After 550ms, top flap has flipped open 180deg.
      // Transition to card-rising: flap drops to z-index 2 (behind letter), card glides up!
      t1 = window.setTimeout(() => {
        setStage('card-rising');
      }, 550);
    }

    if (stage === 'card-rising') {
      // 2. After card glides out and is presented, trigger main site reveal
      t2 = window.setTimeout(() => {
        setStage('revealing-site');
        onOpen();
      }, 2100);
    }

    if (stage === 'revealing-site') {
      // 3. After fade transition completes, unmount from DOM
      t3 = window.setTimeout(() => {
        setStage('done');
      }, 900);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [stage, onOpen]);

  if (stage === 'done') {
    return null;
  }

  const stageClass = `is-${stage}`;

  return (
    <div
      className={`grand-envelope-screen ${stageClass}`}
      aria-label="Grand Royal Wedding Invitation Envelope"
      onClick={handleOpen}
    >
      <div className="envelope-backdrop-dark" />

      <div className="envelope-center-stage">
        {/* HUGE GRAND ENVELOPE */}
        <div
          className="huge-envelope-box"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleOpen();
            }
          }}
          aria-label="Royal Invitation Envelope. Tap to open."
        >
          {/* 1. Back pocket lining (z-index: 1) */}
          <div className="huge-envelope-back" />

          {/* 2. Top triangular flap that folds open (z-index: 15 when opening, 2 when open) */}
          <div className="huge-flap-top">
            <svg viewBox="0 0 600 240" className="huge-flap-svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="topFlapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#431220" />
                  <stop offset="100%" stopColor="#280712" />
                </linearGradient>
              </defs>
              <polygon points="0,0 300,235 600,0" fill="url(#topFlapGrad)" />
              <polyline points="0,0 300,235 600,0" fill="none" stroke="#c9a66a" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
          </div>

          {/* 3. Golden Invitation Letter Card that emerges and slides up (z-index: 6) */}
          <div className="huge-envelope-letter">
            <div className="letter-inner-parchment">
              <span className="letter-royal-crown">♔</span>
              <p className="letter-royal-eyebrow">ROYAL WEDDING INVITATION</p>
              <h2 className="letter-royal-names">Aarav &amp; Meera</h2>
              <p className="letter-royal-date">21 February 2027 · Lake Pichola, Udaipur</p>
              <div className="letter-gold-rule">
                <span className="rule-diamond">◆</span>
              </div>
              <p className="letter-royal-prompt">✦ Welcome to our celebration ✦</p>
            </div>
          </div>

          {/* 4. Left & Right side pocket flaps (z-index: 10) */}
          <div className="huge-flap-left" />
          <div className="huge-flap-right" />

          {/* 5. Bottom pocket flap (z-index: 11) */}
          <div className="huge-pocket-bottom">
            <svg viewBox="0 0 600 270" className="huge-pocket-svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pocketGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#4a1524" />
                  <stop offset="100%" stopColor="#2d0a14" />
                </linearGradient>
              </defs>
              <polygon points="0,270 600,270 300,45" fill="url(#pocketGrad)" />
              <polyline points="0,270 300,45 600,270" fill="none" stroke="rgba(201, 166, 106, 0.45)" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>

          {/* 6. Grand Golden Royal Wax Seal (z-index: 20) */}
          <button
            type="button"
            className="huge-wax-seal-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleOpen();
            }}
            aria-label="Tap royal wax seal to unseal and open invitation"
          >
            <div className="seal-relief-art">
              <span className="seal-emblem">✦</span>
              <span className="seal-monogram-text">A &amp; M</span>
              <span className="seal-sub-ring">UDAIPUR</span>
            </div>
            <span className="seal-pulse-glow" />
          </button>
        </div>

        {/* Tap Cue below envelope */}
        <div className="huge-envelope-cue">
          <p className="cue-title">✦ TAP THE ROYAL SEAL TO UNSEAL &amp; OPEN ✦</p>
          <p className="cue-names">Aarav &amp; Meera cordially invite you</p>
        </div>
      </div>
    </div>
  );
};
