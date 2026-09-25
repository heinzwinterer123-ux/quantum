import { useScrollReveal } from '../../hooks/useScrollReveal';
import './journal.css';

const articles = [
  {
    category: 'Architecture',
    date: 'March 2026',
    title: 'The Architecture of Discretion',
    excerpt:
      'Why the most compelling Balearic residences are the ones you never see from the road.',
  },
  {
    category: 'Ibiza',
    date: 'February 2026',
    title: "Ibiza's Quiet Coast",
    excerpt:
      'Beyond the marina — a guide to the island’s last undeveloped headlands.',
  },
  {
    category: 'Investing',
    date: 'January 2026',
    title: 'Investing in Landmark Real Estate',
    excerpt:
      'What separates an appreciating landmark from a depreciating asset.',
  },
];

function Journal() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="journal" id="journal" aria-labelledby="journal-heading">
      <header className="journal-header">
        <div className="section-meta">
          <span className="section-index">04</span>
          <span className="eyebrow">The Journal</span>
        </div>
        <h2 id="journal-heading" className="journal-title">
          Field Notes
        </h2>
      </header>

      <div
        ref={ref}
        className={`journal-grid reveal ${isVisible ? 'is-visible' : ''}`}
      >
        {articles.map((article) => (
          <article className="journal-card" key={article.title}>
            <hr className="hairline" />
            <div className="journal-card-meta">
              <span>{article.category}</span>
              <span>{article.date}</span>
            </div>
            <h3 className="journal-card-title">{article.title}</h3>
            <p className="journal-card-excerpt">{article.excerpt}</p>
            <a className="journal-card-link" href="#journal">
              Read
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
          </article>
        ))}
      </div>
    </section>
  );
}

export default Journal;
