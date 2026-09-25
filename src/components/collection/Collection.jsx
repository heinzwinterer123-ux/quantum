import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { villas } from '../../data/villas';
import './collection.css';

const featuredVilla = villas.find((villa) => villa.status === 'available');
const upcomingResidences = villas.filter((villa) => villa.status === 'coming-soon');

function Collection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="collection" id="collection" aria-labelledby="collection-heading">
      <header className="collection-header">
        <div className="section-meta collection-meta">
          <span className="section-index">02</span>
          <span className="eyebrow">The Collection</span>
        </div>
        <h2 id="collection-heading" className="collection-title">
          Selected Residences
        </h2>
      </header>

      <div
        ref={ref}
        className={`collection-grid reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <article className="collection-card collection-card--feature">
          <img
            src={featuredVilla.heroImage.src}
            alt={featuredVilla.heroImage.alt}
            className="collection-card-media"
            loading="lazy"
            width={featuredVilla.heroImage.width}
            height={featuredVilla.heroImage.height}
          />
          <div className="collection-card-scrim" />
          <div className="collection-card-content">
            <span className="eyebrow">{featuredVilla.location}</span>
            <h3 className="collection-card-title">{featuredVilla.name}</h3>
            <Link
              className="btn-pill collection-card-cta"
              to={`/villas/${featuredVilla.slug}`}
            >
              View Residence
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
            </Link>
          </div>
        </article>

        {upcomingResidences.map((residence) => (
          <article className="collection-card collection-card--teaser" key={residence.slug}>
            <span className="collection-card-monogram">{residence.monogram}</span>
            <div className="collection-card-content">
              <span className="eyebrow">Coming Soon</span>
              <h3 className="collection-card-title">{residence.location}</h3>
              <Link className="collection-card-link" to={`/villas/${residence.slug}`}>
                Preview
              </Link>
            </div>
          </article>
        ))}
      </div>


    </section>
  );
}

export default Collection;
