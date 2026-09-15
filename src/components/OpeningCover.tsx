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
      t1 = window.setTimeout(() => setStage('paper-rising'), 480);
    }
    if (stage === 'paper-rising') {
      t2 = window.setTimeout(() => setStage('paper-full'), 1700);
    }
    if (stage === 'paper-full') {
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
      {/* oc-envelope-wrap: relative container holding both envelope AND paper.
          Paper is a sibling of oc-envelope-scene so it is NOT a child of the
          img element's filter stacking context — z-index works reliably. */}
      <div className="oc-envelope-wrap">

        {/* Paper card — SIBLING of the envelope scene, z-index 15 always.
            Starts below envelope (translateY 100%), rises to above it (-85%). */}
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

        {/* Envelope scene: the image + seal button */}
        <div className="oc-envelope-scene">
          <img
            src="/images/red-envelope.png"
            className="oc-envelope-img"
            alt="Royal red envelope with gold botanical wax seal"
            draggable={false}
          />
          {/* Invisible tap button precisely over the physical gold wax seal
              Seal measured at 40.1% from top, 49.3% from left of the image */}
          <button
            className="oc-seal-btn"
            onClick={(e) => { e.stopPropagation(); handleTap(); }}
            aria-label="Tap the gold seal to open your invitation"
            type="button"
          >
            <span className="oc-seal-ring" />
          </button>
        </div>

      </div>

      {/* Tap cue — flex gap on .oc-screen places it just below the envelope */}
      <div className="oc-cue">
        <p className="oc-cue-title">&#10022; TAP THE SEAL TO OPEN &#10022;</p>
        <p className="oc-cue-sub">Aarav &amp; Meera cordially invite you</p>
      </div>
    </div>
  );
};
