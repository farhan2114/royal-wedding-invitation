import React, { useState, useEffect } from 'react';

interface OpeningCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

type Stage = 'sealed' | 'opening' | 'paper-rising' | 'paper-hold' | 'revealing' | 'done';

export const OpeningCover: React.FC<OpeningCoverProps> = ({ isOpen, onOpen }) => {
  const [stage, setStage] = useState<Stage>('sealed');

  const handleTap = () => {
    if (stage === 'sealed') {
      setStage('opening');
    } else if (stage === 'opening' || stage === 'paper-rising' || stage === 'paper-hold') {
      setStage('revealing');
      onOpen();
      window.setTimeout(() => setStage('done'), 800);
    }
  };

  useEffect(() => {
    let t1: number, t2: number, t3: number, t4: number;
    if (stage === 'opening') {
      // Envelope fades for 700ms, then paper starts rising
      t1 = window.setTimeout(() => setStage('paper-rising'), 700);
    }
    if (stage === 'paper-rising') {
      // Paper slides up for 1.6s
      t2 = window.setTimeout(() => setStage('paper-hold'), 1650);
    }
    if (stage === 'paper-hold') {
      // Hold paper visible for 1s, then reveal site
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
      {/* Single container — envelope image + paper card stacked */}
      <div className="oc-wrap">

        {/* Invitation paper — positioned behind envelope, rises to center */}
        <div className="oc-paper">
          <div className="oc-paper-inner">
            <span className="oc-paper-crown">&#9812;</span>
            <p className="oc-paper-eyebrow">ROYAL WEDDING INVITATION</p>
            <h2 className="oc-paper-names">Aarav &amp; Meera</h2>
            <div className="oc-paper-rule">
              <span className="oc-paper-diamond">&#9670;</span>
            </div>
            <p className="oc-paper-date">21 February 2027</p>
            <p className="oc-paper-place">Lake Pichola &middot; Udaipur</p>
            <p className="oc-paper-script">&#10022; Welcome to our celebration &#10022;</p>
          </div>
        </div>

        {/* The actual envelope photo — shown on top of paper */}
        <img
          src="/images/red-envelope.png"
          className="oc-env-img"
          alt="Royal wedding envelope"
          draggable={false}
        />

      </div>

      {/* Tap cue */}
      <div className="oc-cue">
        <p className="oc-cue-title">&#10022; TAP TO OPEN &#10022;</p>
        <p className="oc-cue-sub">Aarav &amp; Meera cordially invite you</p>
      </div>
    </div>
  );
};
