import { useScrollReveal } from '../../hooks/useScrollReveal';
import './philosophy.css';

function Philosophy() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="philosophy" id="about" aria-labelledby="philosophy-heading">
      <div
        ref={ref}
        className={`philosophy-inner reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="philosophy-text">
          <div className="section-meta">
            <span className="section-index">03</span>
            <span className="eyebrow">About Villa Balear</span>
          </div>

          <h2 id="philosophy-heading" className="philosophy-title">
            An Uncompromising Standard
          </h2>

          <p className="philosophy-copy">
            Villa Balear exists for a narrow class of property: architecture that
            will still matter in fifty years. Every residence we represent is
            selected in person, verified for provenance, and presented with
            the same editorial care as the homes themselves.
          </p>
          <p className="philosophy-copy">
            We work with a small circle of owners, architects and buyers who
            share a single conviction — that the Balearic Islands deserve
            better than the ordinary market.
          </p>

          <a className="philosophy-link" href="#journal">
            Read our story
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

        <div className="philosophy-visual">
          <img
            src="/images/villa-medium.jpg"
            alt="Interior of a Villa Balear landmark residence, Ibiza"
            className="philosophy-image"
            loading="lazy"
            width="1000"
            height="562"
          />
          <span className="badge-circle philosophy-badge">VB</span>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
