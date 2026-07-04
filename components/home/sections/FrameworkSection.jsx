export default function FrameworkSection() {
  return (
    <section id="framework" className="framework-section" aria-label="The MindGen Transformation Framework">
      <div className="framework-container">
        
        <div className="framework-header">
          <h2>The MindGen Transformation Framework</h2>
          <p className="framework-intro">
            We combine strategic intelligence, business diagnostics, workflow redesign, AI implementation, and change adoption into one practical transformation model.
          </p>
        </div>

        {/* The 4-Stage Model */}
        <div className="framework-stages-wrapper">
          <div className="framework-connecting-line" aria-hidden="true"></div>
          <div className="framework-grid">
            
            {/* Stage 1: Think */}
            <div className="framework-card">
              <div className="framework-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="framework-icon">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div className="framework-content">
                <span className="stage-label">01. THINK</span>
                <p>We study the business context, operating model, customer behavior, data maturity, and execution barriers before recommending technology.</p>
              </div>
            </div>

            {/* Stage 2: Strategize */}
            <div className="framework-card">
              <div className="framework-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="framework-icon">
                  <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>
                </svg>
              </div>
              <div className="framework-content">
                <span className="stage-label">02. STRATEGIZE</span>
                <p>We define the AI roadmap, transformation priorities, governance model, platform choices, investment logic, and measurable outcomes.</p>
              </div>
            </div>

            {/* Stage 3: Transform */}
            <div className="framework-card">
              <div className="framework-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="framework-icon">
                  <rect width="8" height="8" x="8" y="8" rx="2"/><path d="M12 2v6"/><path d="M12 16v6"/><path d="M2 12h6"/><path d="M16 12h6"/>
                </svg>
              </div>
              <div className="framework-content">
                <span className="stage-label">03. TRANSFORM</span>
                <p>We redesign workflows, build intelligent systems, automate high-value processes, and integrate AI into business operations.</p>
              </div>
            </div>

            {/* Stage 4: Scale */}
            <div className="framework-card">
              <div className="framework-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="framework-icon">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                </svg>
              </div>
              <div className="framework-content">
                <span className="stage-label">04. SCALE</span>
                <p>We measure impact, improve adoption, optimize performance, and help teams turn AI capability into repeatable business advantage.</p>
              </div>
            </div>

          </div>
        </div>

        <div className="framework-action">
          <a href="/framework" className="framework-btn-primary">
            Explore Our Framework
          </a>
        </div>

      </div>
    </section>
  );
}