"use client";

import { useState, useEffect } from "react";

export default function SiteHeader() {
  const [isDark, setIsDark] = useState(false);
  // Now tracks only 'solutions' and 'industries'
  const [activeMega, setActiveMega] = useState(null); 

  useEffect(() => {
    const isCurrentlyDark = document.body.classList.contains("theme-dark");
    setIsDark(isCurrentlyDark);
  }, []);

  const handleThemeToggle = () => {
    if (isDark) {
      document.body.classList.remove("theme-dark");
      setIsDark(false);
    } else {
      document.body.classList.add("theme-dark");
      setIsDark(true);
    }
  };

  // Helper methods to cleanly manage mouse enter/leave thresholds
  const handleMouseEnter = (menuId) => setActiveMega(menuId);
  const handleMouseLeave = () => setActiveMega(null);

  return (
    <header className="site-header-wrap" onMouseLeave={handleMouseLeave}>
      <div className="site-header">
        
        <a href="/" className="brand" aria-label="MindGen Home">
          <img
            src={isDark ? "/assets/images/mindgen-logo-dark.svg" : "/assets/images/mindgen-logo.svg"}
            alt="MindGen logo"
            className="brand-logo"
          />
        </a>

        {/* 1. New Streamlined Navigation Hierarchy */}
        <nav className="main-nav" aria-label="Main navigation">
          <a 
            href="#" 
            className={`has-mega ${activeMega === "solutions" ? "active-link" : ""}`}
            onMouseEnter={() => handleMouseEnter("solutions")}
          >
            Solutions
          </a>
          <a 
            href="#" 
            className={`has-mega nav-industries-link ${activeMega === "industries" ? "active-link" : ""}`}
            onMouseEnter={() => handleMouseEnter("industries")}
          >
            Industries
          </a>
          {/* Single-click links instantly close the mega menu on hover */}
          <a href="/case-studies" onMouseEnter={handleMouseLeave}>Case Studies</a>
          <a href="/insights" onMouseEnter={handleMouseLeave}>Insights</a>
          <a href="/about-us" onMouseEnter={handleMouseLeave}>About</a>
          <a href="/careers" onMouseEnter={handleMouseLeave}>Careers</a>
        </nav>

        <div className="header-actions">
          <button
            id="themeToggle"
            className="theme-toggle-btn"
            type="button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDark ? "true" : "false"}
            onClick={handleThemeToggle}
          >
            {isDark ? "Light" : "Dark"}
          </button>
          <button className="icon-btn icon-btn-search" aria-label="Search">
            <span className="search-icon"></span>
          </button>
          <a href="/contact-us" className="contact-btn">CONTACT US</a>
          <button className="menu-btn" aria-label="Open menu" aria-expanded="false">
            Menu
          </button>
        </div>
      </div>

      {/* 2. MEGA NAV PANELS */}
      
      {/* Solutions Panel */}
      <div 
        className={`mega-nav ${activeMega === "solutions" ? "visible-panel" : ""}`} 
        onMouseEnter={() => handleMouseEnter("solutions")}
      >
        <div className="mega-nav-inner">
          <div className="mega-col" style={{ maxWidth: '280px' }}>
            <h3>Solutions</h3>
            <p>AI-native strategy and workflow transformation for growth-focused businesses.</p>
          </div>

          <div className="mega-col">
            <ul>
              {/* Added className="industries-link" to all anchor tags */}
              <li><a href="/solutions/ai-strategy" className="industries-link">AI Strategy &amp; Readiness</a></li>
              <li><a href="/solutions/agentic-workflow" className="industries-link">Agentic Workflow Automation</a></li>
              <li><a href="/solutions/martech-revops" className="industries-link">Martech &amp; RevOps Transformation</a></li>
            </ul>
          </div>

          <div className="mega-col">
            <ul>
              <li><a href="/solutions/data-intelligence" className="industries-link">Data Intelligence &amp; Dashboards</a></li>
              <li><a href="/solutions/ai-training" className="industries-link">AI Training &amp; Adoption</a></li>
              <li><a href="/solutions/business-growth" className="industries-link">Business Growth Consulting</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Industries Panel */}
      <div 
        className={`mega-nav ${activeMega === "industries" ? "visible-panel" : ""}`}
        onMouseEnter={() => handleMouseEnter("industries")}
      >
        <div className="mega-nav-inner industries-mega-inner">
          <div className="mega-col" style={{ maxWidth: '280px' }}>
            <h3>Industries</h3>
            <p>Tailored AI transformations and operational workflows across global enterprise ecosystems.</p>
          </div>
          
          <div className="mega-col">
            <ul>
              <li><a href="/industries/bfsi-fintech" className="industries-link">BFSI &amp; Fintech</a></li>
              <li><a href="/industries/retail-consumer" className="industries-link">Retail &amp; Consumer</a></li>
              <li><a href="/industries/healthcare" className="industries-link">Healthcare</a></li>
              <li><a href="/industries/education" className="industries-link">Education</a></li>
            </ul>
          </div>
          
          <div className="mega-col">
            <ul>
              <li><a href="/industries/manufacturing" className="industries-link">Manufacturing</a></li>
              <li><a href="/industries/real-estate" className="industries-link">Real Estate</a></li>
              <li><a href="/industries/government" className="industries-link">Government &amp; Institutions</a></li>
            </ul>
          </div>
        </div>
      </div>

    </header>
  );
}