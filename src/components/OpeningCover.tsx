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
      // 1. After 550ms flap has "opened" (envelope img fades/scales slightly)
      t1 = window.setTimeout(() => {
        setStage('card-rising');
      }, 550);
    }

    if (stage === 'card-rising') {
      // 2. After card glides out and is presented, trigger main site reveal
      t2 = window.setTimeout(() => {
        setStage('revealing-site');
        onOpen();
      }, 2200);
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
          {/* Real red envelope image - replaces all CSS-drawn flaps */}
          <img
            src="/images/red-envelope.png"
            className="real-envelope-img"
            alt="Royal red envelope with gold wax seal"
            draggable={false}
          />

          {/* Invitation Letter Card that emerges from envelope (z-index: 6) */}
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

          {/* Wax seal tap prompt overlay (shows only while sealed) */}
          <button
            type="button"
            className="huge-wax-seal-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleOpen();
            }}
            aria-label="Tap royal wax seal to unseal and open invitation"
          >
            <span className="seal-pulse-glow" />
          </button>
        </div>

        {/* Tap Cue below envelope */}
        <div className="huge-envelope-cue">
          <p className="cue-title">✦ TAP THE SEAL TO OPEN ✦</p>
          <p className="cue-names">Aarav &amp; Meera cordially invite you</p>
        </div>
      </div>
    </div>
  );
};
