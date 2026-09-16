import React, { useState, useEffect } from 'react';

interface OpeningCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

type Stage = 'sealed' | 'opening' | 'rising' | 'held' | 'revealing' | 'done';

export const OpeningCover: React.FC<OpeningCoverProps> = ({ isOpen, onOpen }) => {
  const [stage, setStage] = useState<Stage>('sealed');

  const handleTap = () => {
    if (stage === 'sealed') {
      setStage('opening');
    } else if (stage !== 'done') {
      // Tap during animation skips directly to the website
      setStage('revealing');
      onOpen();
      window.setTimeout(() => setStage('done'), 800);
    }
  };

  useEffect(() => {
    let t1: number, t2: number, t3: number, t4: number;

    if (stage === 'opening') {
      // 1. Flap unfolds upwards over 750ms, then card starts rising
      t1 = window.setTimeout(() => setStage('rising'), 750);
    }

    if (stage === 'rising') {
      // 2. Card glides up smoothly over 1300ms, then holds in place
      t2 = window.setTimeout(() => setStage('held'), 1350);
    }

    if (stage === 'held') {
      // 3. Hold card in full view for 1600ms so guests can read names & date
      t3 = window.setTimeout(() => {
        setStage('revealing');
        onOpen();
      }, 1600);
    }

    if (stage === 'revealing') {
      // 4. Smooth fade out revealing the website
      t4 = window.setTimeout(() => setStage('done'), 800);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [stage, onOpen]);

  if (stage === 'done') return null;

  return (
    <div
      className={`oc-screen oc-${stage}`}
      onClick={handleTap}
      aria-label="Tap to open wedding invitation"
    >
      <div className="oc-scene">
        {/* Envelope Container */}
        <div className="oc-envelope">
          
          {/* Layer 1: Back panel inside the envelope */}
          <div className="oc-env-back" />

          {/* Layer 2: The Top Flap (hinged at top, rotates upwards & backwards) */}
          <div className="oc-env-flap">
            <svg viewBox="0 0 400 155" className="oc-flap-svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flapFrontGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#7a1020" />
                  <stop offset="60%" stopColor="#580b15" />
                  <stop offset="100%" stopColor="#44070f" />
                </linearGradient>
              </defs>
              <path d="M 0 10 A 10 10 0 0 1 10 0 L 390 0 A 10 10 0 0 1 400 10 L 200 152 Z" fill="url(#flapFrontGrad)" />
            </svg>

            {/* Gold Wax Heart Seal at the tip of the flap */}
            <div className="oc-wax-seal">
              <img src="/images/gold-heart-seal-clean.png" alt="Royal Gold Heart Wax Seal" />
            </div>
          </div>

          {/* Layer 3: The Invitation Card (sandwiched inside envelope pocket) */}
          <div className="oc-card">
            <div className="oc-card-inner">
              <span className="oc-card-crown">&#9812;</span>
              <p className="oc-card-eyebrow">ROYAL WEDDING INVITATION</p>
              <h2 className="oc-card-names">Aarav &amp; Meera</h2>
              <div className="oc-card-rule">
                <span className="oc-card-diamond">&#9670;</span>
              </div>
              <p className="oc-card-date">21 February 2027</p>
              <p className="oc-card-place">Lake Pichola &middot; Udaipur</p>
              <p className="oc-card-script">&#10022; Welcome to our celebration &#10022;</p>
            </div>
          </div>

          {/* Layer 4: Front Pocket (bottom and side flaps in front of card) */}
          <div className="oc-env-pocket">
            <svg viewBox="0 0 400 270" className="oc-pocket-svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pocketLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#620d1a" />
                  <stop offset="100%" stopColor="#4a0812" />
                </linearGradient>
                <linearGradient id="pocketRightGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5a0c18" />
                  <stop offset="100%" stopColor="#40060e" />
                </linearGradient>
                <linearGradient id="pocketBottomGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#6c0f1e" />
                  <stop offset="60%" stopColor="#540a15" />
                  <stop offset="100%" stopColor="#460710" />
                </linearGradient>
                <filter id="pocketShadow" x="-10%" y="-20%" width="120%" height="140%">
                  <feDropShadow dx="0" dy="-4" stdDeviation="5" floodColor="#140205" floodOpacity="0.65" />
                </filter>
              </defs>
              {/* Left flap */}
              <path d="M 0 0 L 215 145 L 0 270 Z" fill="url(#pocketLeftGrad)" />
              {/* Right flap */}
              <path d="M 400 0 L 185 145 L 400 270 Z" fill="url(#pocketRightGrad)" />
              {/* Bottom flap with soft top shadow */}
              <path d="M 0 270 L 400 270 L 200 135 Z" fill="url(#pocketBottomGrad)" filter="url(#pocketShadow)" />
            </svg>
          </div>

        </div>

        {/* Tap Cue below envelope */}
        <div className="oc-cue">
          <p className="oc-cue-title">&#10022; TAP TO OPEN &#10022;</p>
          <p className="oc-cue-sub">Aarav &amp; Meera cordially invite you</p>
        </div>
      </div>
    </div>
  );
};
