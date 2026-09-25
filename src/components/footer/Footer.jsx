import './footer.css';

const columns = [
  {
    heading: 'Collection',
    links: ['Ibiza', 'Mallorca', 'Menorca', 'Formentera'],
  },
  {
    heading: 'Company',
    links: ['About', 'Journal', 'Careers'],
  },
  {
    heading: 'Contact',
    links: ['enquiries@villabalear.com', '+34 971 000 000', 'Instagram'],
  },
];

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="site-footer-brand">
          <span className="badge-circle">VB</span>
          <div>
            <div className="site-footer-logo">VILLA BALEAR</div>
            <p className="site-footer-tagline">
              Landmark Properties in the Balearic Islands
            </p>
          </div>
        </div>

        <nav className="site-footer-nav" aria-label="Footer navigation">
          {columns.map((column) => (
            <div className="site-footer-column" key={column.heading}>
              <span className="eyebrow">{column.heading}</span>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <hr className="hairline" />

      <div className="site-footer-bottom">
        <span>© {new Date().getFullYear()} Villa Balear. All rights reserved.</span>
        <div className="site-footer-legal">
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
