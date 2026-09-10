import React from 'react';

export const PhotoDumpSection: React.FC = () => {
  return (
    <section className="paper-section dump-paper-section" aria-labelledby="dump-title">
      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">04 · MOMENTS IN TIME</p>
        <h2 className="paper-section-title" id="dump-title">Cherished Glimpses</h2>
        <p className="paper-section-subtitle">
          Unfiltered frames from our story together.
        </p>
      </div>

      <div className="photo-dump-refined-grid reveal">
        <figure className="refined-photo-card">
          <div className="photo-inner-crop">
            <img src="/images/couple-flowers.jpg" alt="Aarav and Meera among flowers" />
          </div>
          <figcaption>The beginning of a garden</figcaption>
        </figure>

        <figure className="refined-photo-card">
          <div className="photo-inner-crop">
            <img src="/images/couple-temple.jpg" alt="Aarav and Meera outside a temple" />
          </div>
          <figcaption>Under old arches</figcaption>
        </figure>

        <figure className="refined-photo-card">
          <div className="photo-inner-crop">
            <img src="/images/couple-nikkah.jpg" alt="Aarav and Meera in a quiet wedding moment" />
          </div>
          <figcaption>The quiet yes</figcaption>
        </figure>

        <figure className="refined-photo-card">
          <div className="photo-inner-crop">
            <img src="/images/event-hands.jpg" alt="Hands gathered together at the wedding" />
          </div>
          <figcaption>Many hands, one day</figcaption>
        </figure>
      </div>
    </section>
  );
};
