import React, { useState, useEffect } from 'react';

interface OpeningCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

type Stage = 'sealed' | 'seal-breaking' | 'paper-rising' | 'paper-full' | 'revealing' | 'done';

export const OpeningCover: React.FC<OpeningCoverProps> = ({ isOpen, onOpen }) => {
  const [stage, setStage] = useState<Stage>('sealed');

  const handleTap = () => {
    if (stage === 'sealed') {
      setStage('seal-breaking');
    } else if (stage === 'seal-breaking' || stage === 'paper-rising' || stage === 'paper-full') {
      setStage('revealing');
      onOpen();
      window.setTimeout(() => setStage('done'), 800);
    }
  };

  useEffect(() => {
    let t1: number, t2: number, t3: number, t4: number;

    if (stage === 'seal-breaking') {
      // Brief tap-shake pause, then paper starts emerging
      t1 = window.setTimeout(() => setStage('paper-rising'), 480);
    }
    if (stage === 'paper-rising') {
      // Paper slides up for ~1.6s, then hold
      t2 = window.setTimeout(() => setStage('paper-full'), 1650);
    }
    if (stage === 'paper-full') {
      // Hold card in view for 0.9s then reveal site
      t3 = window.setTimeout(() => {
        setStage('revealing');
        onOpen();
      }, 900);
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
      aria-label="Tap to open royal wedding invitation"
    >
      <div className="oc-envelope-wrap">
        <div className="oc-envelope-scene">

          {/* Paper card — starts hidden below, rises UP through the envelope opening */}
          <div className="oc-paper">
            <div className="oc-paper-inner">
              <span className="oc-paper-crown">&#9812;</span>
              <p className="oc-paper-eyebrow">ROYAL WEDDING INVITATION</p>
              <h2 className="oc-paper-names">Aarav &amp; Meera</h2>
              <div className="oc-paper-divider">
                <span className="oc-paper-diamond">&#9670;</span>
              </div>
              <p className="oc-paper-date">21 February 2027</p>
              <p className="oc-paper-place">Lake Pichola, Udaipur</p>
              <p className="oc-paper-script">&#10022; Welcome to our celebration &#10022;</p>
            </div>
          </div>

          {/* Red envelope image — renders ON TOP of paper (z-10 > z-5) */}
          {/* When paper-full: paper z-index jumps to z-15 (via CSS class) */}
          <img
            src="/images/red-envelope.png"
            className="oc-envelope-img"
            alt="Royal red envelope with gold wax seal"
            draggable={false}
          />

          {/* Invisible click zone over the physical gold wax seal in the image */}
          <button
            className="oc-seal-btn"
            onClick={(e) => { e.stopPropagation(); handleTap(); }}
            aria-label="Tap the seal to open your invitation"
            type="button"
          >
            <span className="oc-seal-ring" />
          </button>

        </div>
      </div>

      {/* Tap cue text — directly below envelope, gap handled by flex gap on .oc-screen */}
      <div className="oc-cue">
        <p className="oc-cue-title">&#10022; TAP THE SEAL TO OPEN &#10022;</p>
        <p className="oc-cue-sub">Aarav &amp; Meera cordially invite you</p>
      </div>
    </div>
  );
};
