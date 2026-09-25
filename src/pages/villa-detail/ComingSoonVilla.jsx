import { useScrollReveal } from '../../hooks/useScrollReveal';

function ComingSoonVilla({ villa }) {
  const [editorialRef, editorialVisible] = useScrollReveal();
  const [forwardRef, forwardVisible] = useScrollReveal();
  const [enquireRef, enquireVisible] = useScrollReveal();

  const enquirySubject = encodeURIComponent(`${villa.name} enquiry`);

  return (
    <main className="villa-detail">
      <section className="villa-masthead villa-masthead--teaser">
        <span className="villa-masthead-monogram" aria-hidden="true">{villa.monogram}</span>
        <div className="villa-masthead-content">
          <span className="eyebrow">In Development</span>
          <h1 className="villa-name">{villa.name}</h1>
          <p className="villa-tagline">{villa.tagline}</p>
        </div>
      </section>

      <section
        ref={editorialRef}
        className={`villa-editorial villa-editorial--teaser reveal ${editorialVisible ? 'is-visible' : ''}`}
      >
        <div className="villa-editorial-text">
          {villa.description.map((paragraph) => (
            <p className="villa-editorial-copy" key={paragraph.slice(0, 24)}>
              {paragraph}
            </p>
          ))}
          {villa.releaseNote && (
            <p className="villa-release-note">{villa.releaseNote}</p>
          )}
        </div>
      </section>

      <section
        ref={forwardRef}
        className={`villa-features reveal ${forwardVisible ? 'is-visible' : ''}`}
      >
        <h2 className="villa-features-heading">What We Can Share</h2>
        <ul className="villa-features-list">
          {villa.forwardNotes.map((note) => (
            <li className="villa-features-item" key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section
        ref={enquireRef}
        className={`villa-enquire reveal ${enquireVisible ? 'is-visible' : ''}`}
      >
        <span className="eyebrow">Register Interest</span>
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

export default ComingSoonVilla;
