import { useScrollReveal } from '../../hooks/useScrollReveal';
import './showcase.css';

const stats = [
  { value: '40+', label: 'Landmark Residences' },
  { value: '12', label: 'Islands Represented' },
  { value: '2026', label: 'Est.' },
];

function Showcase() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="showcase" aria-labelledby="showcase-heading">
      <img
        src="/images/villa-full.jpg"
        alt=""
        className="showcase-media"
        loading="lazy"
      />
      <div className="showcase-overlay" />

      <div
        ref={ref}
        className={`showcase-content reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <span className="eyebrow" id="showcase-heading">
          Villa Balear in Numbers
        </span>

        <div className="showcase-stats">
          {stats.map((stat, index) => (
            <div className="showcase-stat" key={stat.label}>
              {index > 0 && <span className="showcase-divider" aria-hidden="true" />}
              <span className="showcase-stat-value">{stat.value}</span>
              <span className="showcase-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
