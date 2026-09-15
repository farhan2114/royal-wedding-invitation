import React, { useState, useEffect } from 'react';

interface OpeningCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

// 5-stage animation: sealed → opening → paper-out → paper-hold → revealing → done
type Stage = 'sealed' | 'opening' | 'paper-out' | 'paper-hold' | 'revealing' | 'done';

export const OpeningCover: React.FC<OpeningCoverProps> = ({ isOpen, onOpen }) => {
  const [stage, setStage] = useState<Stage>('sealed');

  const handleTap = () => {
    if (stage === 'sealed') {
      setStage('opening');
    } else if (stage === 'opening' || stage === 'paper-out' || stage === 'paper-hold') {
      // Impatient tap: fast-forward
      setStage('revealing');
      onOpen();
      window.setTimeout(() => setStage('done'), 800);
    }
  };

  useEffect(() => {
    let t1: number, t2: number, t3: number, t4: number;

    if (stage === 'opening') {
      // Phase 1: Envelope flap opens (800ms), then envelope fades away
      t1 = window.setTimeout(() => setStage('paper-out'), 900);
    }
    if (stage === 'paper-out') {
      // Phase 2: Paper slides up (1800ms total for full travel)
      t2 = window.setTimeout(() => setStage('paper-hold'), 1800);
    }
    if (stage === 'paper-hold') {
      // Phase 3: Hold paper fully visible for 1s
      t3 = window.setTimeout(() => {
        setStage('revealing');
        onOpen();
      }, 1000);
    }
    if (stage === 'revealing') {
      t4 = window.setTimeout(() => setStage('done'), 900);
    }

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [stage, onOpen]);

  if (stage === 'done') return null;

  return (
    <div
      className={`oc-screen oc-${stage}`}
      onClick={handleTap}
      aria-label="Tap to open wedding invitation"
    >
      {/* ── ENVELOPE ──────────────────────────────────────────────────────── */}
      <div className="oc-env-container">

        {/* CSS Envelope built from scratch — matches image colors */}
        <div className="oc-env-box">

          {/* Back of envelope (always visible) */}
          <div className="oc-env-back" />

          {/* Top triangular flap — rotates open on tap */}
          <div className="oc-env-flap">
            <svg viewBox="0 0 400 220" preserveAspectRatio="none" className="oc-flap-svg">
              <defs>
                <linearGradient id="flapG" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b1020" />
                  <stop offset="100%" stopColor="#5c0810" />
                </linearGradient>
              </defs>
              <polygon points="0,0 200,210 400,0" fill="url(#flapG)" />
              <polyline points="0,0 200,210 400,0" fill="none" stroke="rgba(180,80,80,0.3)" strokeWidth="1" />
            </svg>
          </div>

          {/* Side flaps */}
          <div className="oc-env-flap-left" />
          <div className="oc-env-flap-right" />

          {/* Bottom flap */}
          <div className="oc-env-flap-bottom">
            <svg viewBox="0 0 400 180" preserveAspectRatio="none" className="oc-flap-svg">
              <defs>
                <linearGradient id="botG" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#6b0f1e" />
                  <stop offset="100%" stopColor="#4a0810" />
                </linearGradient>
              </defs>
              <polygon points="0,180 400,180 200,20" fill="url(#botG)" />
            </svg>
          </div>

          {/* Wax seal image — overlaid at flap junction */}
          <div className="oc-seal-img-wrap">
            <img
              src="/images/red-envelope.png"
              className="oc-seal-img"
              alt="Gold heart wax seal"
              draggable={false}
            />
          </div>

        </div>

        {/* ── PAPER CARD — outside envelope box, rises from below ────────── */}
        <div className="oc-paper">
          <div className="oc-paper-inner">
            <span className="oc-paper-crown">♔</span>
            <p className="oc-paper-eyebrow">ROYAL WEDDING INVITATION</p>
            <h2 className="oc-paper-names">Aarav &amp; Meera</h2>
            <div className="oc-paper-rule">
              <span className="oc-paper-diamond">◆</span>
            </div>
            <p className="oc-paper-date">21 February 2027</p>
            <p className="oc-paper-place">Lake Pichola · Udaipur</p>
            <p className="oc-paper-script">✦ Welcome to our celebration ✦</p>
          </div>
        </div>

      </div>

      {/* Tap cue */}
      <div className="oc-cue">
        <p className="oc-cue-title">✦ TAP TO OPEN ✦</p>
        <p className="oc-cue-sub">Aarav &amp; Meera cordially invite you</p>
      </div>
    </div>
  );
};
