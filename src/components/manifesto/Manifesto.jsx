import { useScrollReveal } from '../../hooks/useScrollReveal';
import './manifesto.css';

function Manifesto() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="manifesto" aria-labelledby="manifesto-heading">
      <div className="manifesto-inner">
        <div className="section-meta">
          <span className="section-index">01</span>
          <span className="eyebrow">Our Philosophy</span>
        </div>

        <p
          ref={ref}
          id="manifesto-heading"
          className={`manifesto-statement reveal ${isVisible ? 'is-visible' : ''}`}
        >
          Some addresses are just real estate.{' '}
          <span className="manifesto-accent">Others become landmarks.</span>{' '}
          We only take on the second kind, one property at a time, in Mallorca.
        </p>

        <hr className="hairline" />
      </div>
    </section>
  );
}

export default Manifesto;
