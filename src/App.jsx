import React from 'react';

function App() {
  return (
    <main className="hero-section">
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
        <div className="logo-text">QTM</div>
        <div className="nav-center">
          <span>COLLECTION</span>
        </div>
        <div className="nav-right">
          <span>ABOUT</span>
          <span>JOURNAL</span>
        </div>
      </header>

      <section className="hero-main">
        <h1 className="hero-title">QUANTUM</h1>
        <h2 className="hero-subtitle">Landmark Properties in the Balearic Islands</h2>
      </section>

      <footer className="hero-footer">
        <div className="hero-badge">Q</div>
        <button className="hero-cta">
          VIEW COLLECTION ↗
        </button>
      </footer>
    </main>
  );
}

export default App;
