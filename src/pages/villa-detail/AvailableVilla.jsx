import { useEffect, useMemo, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function AvailableVilla({ villa }) {
  const [metaRef, metaVisible] = useScrollReveal();
  const [narrativeRef, narrativeVisible] = useScrollReveal();
  const [showcaseRef, showcaseVisible] = useScrollReveal();
  const [enquireRef, enquireVisible] = useScrollReveal();

  const enquirySubject = encodeURIComponent(`${villa.name} enquiry`);
  const metaImage = villa.factsImage ?? villa.gallery[0] ?? villa.heroImage;
  const showcaseImages = useMemo(
    () => [villa.heroImage, ...villa.gallery].filter(Boolean),
    [villa.heroImage, villa.gallery]
  );
  const [showcaseIndex, setShowcaseIndex] = useState(0);

  // Arrow clicks used to feel laggy because each new image only started
  // downloading on click. Preload the full gallery up front so navigating
  // between images is instant once the browser has cached them.
  useEffect(() => {
    const preloaded = showcaseImages.map((image) => {
      const img = new Image();
      img.src = image.src;
      return img;
    });
    return () => {
      preloaded.forEach((img) => {
        img.src = '';
      });
    };
  }, [showcaseImages]);

  function showPreviousImage() {
    setShowcaseIndex((index) => (index - 1 + showcaseImages.length) % showcaseImages.length);
  }

  function showNextImage() {
    setShowcaseIndex((index) => (index + 1) % showcaseImages.length);
  }

  return (
    <main className="villa-detail">
      <section className="villa-masthead">
        <img
          src={villa.heroImage.src}
          alt={villa.heroImage.alt}
          className="villa-masthead-media"
          loading="eager"
          fetchPriority="high"
          width={villa.heroImage.width}
          height={villa.heroImage.height}
        />
        <div className="villa-masthead-overlay" />
        <div className="villa-masthead-content">
          <h1 className={`villa-name${villa.heroMark ? ' villa-name--mark' : ''}`}>
            {villa.heroMark ?? villa.name}
          </h1>
        </div>
      </section>

      <div className="villa-intro">
        <span className="eyebrow">{villa.location}</span>
      </div>

      <section
        ref={metaRef}
        className={`villa-meta reveal ${metaVisible ? 'is-visible' : ''}`}
      >
        <div className="villa-meta-visual">
          <img
            src={metaImage.src}
            alt={metaImage.alt}
            className="villa-meta-image"
            loading="lazy"
            width={metaImage.width}
            height={metaImage.height}
          />
          <span className="badge-circle villa-meta-badge">{villa.monogram}</span>
        </div>
        <dl className="villa-meta-facts">
          {villa.facts.map((fact) => (
            <div className="villa-meta-fact" key={fact.label}>
              <dt className="villa-meta-fact-label">{fact.label}</dt>
              <dd className="villa-meta-fact-value">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div
        ref={narrativeRef}
        className={`villa-narrative-group reveal ${narrativeVisible ? 'is-visible' : ''}`}
      >
        {villa.narrative.map((block, index) => (
          <section
            className={[
              'villa-narrative',
              index % 2 === 1 ? 'villa-narrative--offset' : '',
              block.reverse ? 'villa-narrative--reverse' : '',
            ].filter(Boolean).join(' ')}
            key={block.heading}
          >
            <div className="villa-narrative-text">
              <h2 className="villa-narrative-heading">{block.heading}</h2>
              {block.paragraphs.map((paragraph) => (
                <p className="villa-editorial-copy" key={paragraph.slice(0, 24)}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="villa-narrative-visual">
              <img
                src={block.image.src}
                alt={block.image.alt}
                className="villa-narrative-image"
                loading="lazy"
                width={block.image.width}
                height={block.image.height}
              />
            </div>
          </section>
        ))}
      </div>

      {showcaseImages.length > 0 && (
        <section
          ref={showcaseRef}
          className={`villa-showcase reveal ${showcaseVisible ? 'is-visible' : ''}`}
          aria-label={`${villa.name} gallery`}
        >
          {showcaseImages.length > 1 && (
            <button
              type="button"
              className="villa-showcase-arrow villa-showcase-arrow--prev"
              onClick={showPreviousImage}
              aria-label="Previous image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="6" y2="12"></line>
                <polyline points="11 6 5 12 11 18"></polyline>
              </svg>
            </button>
          )}
          <img
            src={showcaseImages[showcaseIndex].src}
            alt={showcaseImages[showcaseIndex].alt}
            className="villa-showcase-image"
            loading="eager"
            decoding="async"
            width={showcaseImages[showcaseIndex].width}
            height={showcaseImages[showcaseIndex].height}
          />
          {showcaseImages.length > 1 && (
            <button
              type="button"
              className="villa-showcase-arrow villa-showcase-arrow--next"
              onClick={showNextImage}
              aria-label="Next image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="18" y2="12"></line>
                <polyline points="13 6 19 12 13 18"></polyline>
              </svg>
            </button>
          )}
        </section>
      )}

      <section
        ref={enquireRef}
        className={`villa-enquire reveal ${enquireVisible ? 'is-visible' : ''}`}
      >
        <span className="eyebrow">Private Enquiries</span>
        <h2 className="villa-enquire-heading">Enquire about {villa.name}</h2>
        <a
          className="btn-pill"
          href={`mailto:enquiries@villabalear.com?subject=${enquirySubject}`}
        >
          Enquire Now
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </section>
    </main>
  );
}

export default AvailableVilla;
