export default function ProblemSection() {
  return (
    <section className="problem-section" aria-label="Why AI Initiatives Fail">
      <div className="problem-container">
        
        <div className="problem-header">
          <h2>Why Most AI Initiatives Never Scale</h2>
          <p className="problem-intro">
            Organizations are investing in AI, but many struggle to move beyond pilots. The reason is rarely the model alone. It is usually fragmented data, legacy workflows, unclear ownership, weak governance, low adoption, and no clear path to ROI.
          </p>
        </div>

        <div className="problem-grid">
          
          <div className="problem-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="problem-icon">
              <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
            </svg>
            <div className="problem-content">
              <h3>Disconnected strategy</h3>
              <p>AI pilots are not linked to business priorities.</p>
            </div>
          </div>

          <div className="problem-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="problem-icon">
              <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M21 12A9 3 0 0 1 3 12"/><path d="M13 21l-2-5 6-4-6 1-2-5"/>
            </svg>
            <div className="problem-content">
              <h3>Fragmented data</h3>
              <p>Teams lack trusted, usable, decision-ready data.</p>
            </div>
          </div>

          <div className="problem-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="problem-icon">
              <rect width="8" height="8" x="8" y="8" rx="2"/><path d="M12 2v6"/><path d="M12 16v6"/><path d="M2 12h6"/><path d="M16 12h6"/>
            </svg>
            <div className="problem-content">
              <h3>Legacy workflows</h3>
              <p>Old processes are automated instead of redesigned.</p>
            </div>
          </div>

          <div className="problem-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="problem-icon">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
            </svg>
            <div className="problem-content">
              <h3>Governance gaps</h3>
              <p>Privacy, security, accountability, and risk are not embedded early.</p>
            </div>
          </div>

          <div className="problem-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="problem-icon">
              <path d="M18 21a8 8 0 0 0-12 0"/><circle cx="12" cy="11" r="4"/><path d="M22 21a8 8 0 0 0-3-5"/><circle cx="17" cy="10" r="3"/><path d="M2 21a8 8 0 0 1 3-5"/><circle cx="7" cy="10" r="3"/>
            </svg>
            <div className="problem-content">
              <h3>Low adoption</h3>
              <p>Teams do not understand how AI changes daily work.</p>
            </div>
          </div>

          <div className="problem-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="problem-icon">
              <path d="M15.6 2.7a10 10 0 1 0 5.7 5.8"/><circle cx="12" cy="12" r="2"/><path d="M12 14v8"/><path d="M12 2v2"/><path d="M22 12h-2"/><path d="M4 12H2"/><path d="M19.1 19.1l-1.4-1.4"/><path d="M6.3 6.3 4.9 4.9"/><path d="M6.3 17.7l-1.4 1.4"/>
            </svg>
            <div className="problem-content">
              <h3>Unclear ROI</h3>
              <p>Leaders cannot see where AI creates measurable value.</p>
            </div>
          </div>

        </div>

        <div className="problem-closing">
          <p>
            MindGen helps leaders connect business priorities, operating models, technology, and execution into one AI transformation roadmap.
          </p>
        </div>

      </div>
    </section>
  );
}