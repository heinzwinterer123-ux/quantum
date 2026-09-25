import { useScrollReveal } from '../../hooks/useScrollReveal';
import './cta.css';

function CtaBand() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="cta-band" id="enquire" aria-labelledby="cta-heading">
      <div
        ref={ref}
        className={`cta-band-inner reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <span className="eyebrow">Private Enquiries</span>
        <h2 id="cta-heading" className="cta-band-title">
          Begin Your Search
        </h2>
        <p className="cta-band-copy">
          Speak with a Villa Balear advisor about a landmark residence, on or
          off the market.
        </p>
        <a className="btn-pill cta-band-btn" href="mailto:enquiries@villabalear.com">
          Enquire Now
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
        <a className="cta-band-phone" href="tel:+34971000000">
          or call +34 971 000 000
        </a>
      </div>
    </section>
  );
}

export default CtaBand;
