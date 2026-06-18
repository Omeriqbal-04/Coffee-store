import React from 'react';
import CoffeeImg from './hero-image.png'
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      {/* Left Content Column */}
      <div className="hero-content">
        <span className="hero-subheading">Welcome!</span>

        <h1 className="hero-title">
          We serve the <br />
          <span>richest coffee</span> in <br />
          the city!
        </h1>

        <div className="hero-badge">
          <div className="badge-icon">
            {/* Minimalist Coffee Bean/Leaf Vector Asset placeholder */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <p className="badge-text">High quality beans, roasted to perfection.</p>
        </div>

        <button className="hero-cta-btn">
          Explore Menu
          <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

      {/* Right Visual Column */}
      <div className="hero-visual">
        <div className="coffee-cup-wrapper">
          <img src={CoffeeImg} alt="CoffeeImage" />
        </div>
      </div>
    </section>
  );
};

export default Hero;