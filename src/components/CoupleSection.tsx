import React from 'react';
import { X } from 'lucide-react';

interface CoupleSectionProps {
  expandedProfile: "meera" | "aarav" | null;
  setExpandedProfile: (profile: "meera" | "aarav" | null) => void;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ expandedProfile, setExpandedProfile }) => {
  const profileDetails = {
    meera: {
      name: "Meera",
      role: "The Bride",
      image: "/images/bride-makeup.jpg",
      alt: "Portrait of Meera",
      short: "She notices the small things, brings warmth wherever she goes, and turns ordinary moments into unforgettable celebrations.",
      fullDetail: "She brings joy and grace to every room she walks into. Meera believes the best days are woven together from laughter, thoughtful rituals, and the warmth of the people who matter most."
    },
    aarav: {
      name: "Aarav",
      role: "The Groom",
      image: "/images/groom-sherwani.jpg",
      alt: "Portrait of Aarav",
      short: "He carries the steady laugh, the long stories, and an instinct for making every place feel a little more like home.",
      fullDetail: "Steady, adventurous, and always knowing when to stay a little longer. Aarav finds joy in spontaneous moments and brings enduring strength and laughter to every step of this journey."
    }
  };

  const activeModal = expandedProfile ? profileDetails[expandedProfile] : null;

  return (
    <section className="paper-section couple-paper-section" aria-labelledby="couple-title">
      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">03 · THE TWO OF US</p>
        <h2 className="paper-section-title" id="couple-title">A Good Story Needs Two</h2>
      </div>

      <div className="couple-large-cards-container reveal">
        {/* Meera Card */}
        <article className="couple-large-card">
          <button
            type="button"
            className="couple-arch-button"
            onClick={() => setExpandedProfile("meera")}
            aria-label="View portrait of Meera"
          >
            <div className="arch-photo-box hover-lift-img">
              <img src={profileDetails.meera.image} alt={profileDetails.meera.alt} />
              <div className="arch-hover-badge">View Story</div>
            </div>
          </button>
          <div className="couple-card-text">
            <span className="couple-role-tag">{profileDetails.meera.role}</span>
            <h3 className="couple-person-name">Meera</h3>
            <p className="couple-short-bio-large">{profileDetails.meera.short}</p>
          </div>
        </article>

        {/* Aarav Card */}
        <article className="couple-large-card">
          <button
            type="button"
            className="couple-arch-button"
            onClick={() => setExpandedProfile("aarav")}
            aria-label="View portrait of Aarav"
          >
            <div className="arch-photo-box hover-lift-img">
              <img src={profileDetails.aarav.image} alt={profileDetails.aarav.alt} />
              <div className="arch-hover-badge">View Story</div>
            </div>
          </button>
          <div className="couple-card-text">
            <span className="couple-role-tag">{profileDetails.aarav.role}</span>
            <h3 className="couple-person-name">Aarav</h3>
            <p className="couple-short-bio-large">{profileDetails.aarav.short}</p>
          </div>
        </article>
      </div>

      {/* Expanded Modal */}
      {activeModal && (
        <div
          className="profile-modal-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setExpandedProfile(null)}
        >
          <div className="profile-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              type="button"
              onClick={() => setExpandedProfile(null)}
              aria-label="Close portrait modal"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
            <div className="modal-inner-grid">
              <div className="modal-img-col">
                <img src={activeModal.image} alt={activeModal.alt} />
              </div>
              <div className="modal-copy-col">
                <span className="couple-role-tag">{activeModal.role}</span>
                <h3>{activeModal.name}</h3>
                <p className="modal-bio-text">{activeModal.fullDetail}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
