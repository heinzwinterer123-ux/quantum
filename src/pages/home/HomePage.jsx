import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Manifesto from '../../components/manifesto/Manifesto';
import Collection from '../../components/collection/Collection';
import Showcase from '../../components/showcase/Showcase';
import Philosophy from '../../components/philosophy/Philosophy';
import CtaBand from '../../components/cta/CtaBand';
import SiteFooter from '../../components/footer/Footer';

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' });
  }, [hash]);

  return (
    <>
      <main className="hero-section" id="top">
        <video
          src="/new-loop.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg"
        ></video>
        <div className="hero-overlay"></div>

        <header className="hero-header">
          <a href="#top" className="logo-text">VB</a>
          <div className="nav-center">
          </div>
          <div className="nav-right">
            <a href="#collection">COLLECTION</a>
            <a href="#about">ABOUT</a>
          </div>
        </header>

        <section className="hero-main">
          <h1 className="hero-title">VILLA BALEAR</h1>
          <h2 className="hero-subtitle">Landmark Properties in the Balearic Islands</h2>
        </section>

        <footer className="hero-footer">

          <a href="#collection" className="hero-cta">
            VIEW COLLECTION
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </footer>
      </main>

      <Manifesto />
      <Collection />
      <Showcase />
      <Philosophy />
      <CtaBand />
      <SiteFooter />
    </>
  );
}

export default HomePage;
