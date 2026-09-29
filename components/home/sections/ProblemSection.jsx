'use client';

import { useState } from 'react';

const aiProblems = [
  {
    id: "disconnected-strategy",
    title: "Disconnected strategy",
    copy: "AI pilots are not linked to business priorities.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    bgClass: "bg-mesh-1"
  },
  {
    id: "fragmented-data",
    title: "Fragmented data",
    copy: "Teams lack trusted, usable, decision-ready data.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M21 12A9 3 0 0 1 3 12"/><path d="M13 21l-2-5 6-4-6 1-2-5"/>
      </svg>
    ),
    bgClass: "bg-mesh-2"
  },
  {
    id: "legacy-workflows",
    title: "Legacy workflows",
    copy: "Old processes are automated instead of redesigned.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="8" height="8" x="8" y="8" rx="2"/><path d="M12 2v6"/><path d="M12 16v6"/><path d="M2 12h6"/><path d="M16 12h6"/>
      </svg>
    ),
    bgClass: "bg-mesh-3"
  },
  {
    id: "governance-gaps",
    title: "Governance gaps",
    copy: "Privacy, security, accountability, and risk are not embedded early.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
      </svg>
    ),
    bgClass: "bg-mesh-4"
  },
  {
    id: "low-adoption",
    title: "Low adoption",
    copy: "Teams do not understand how AI changes daily work.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 21a8 8 0 0 0-12 0"/><circle cx="12" cy="11" r="4"/><path d="M22 21a8 8 0 0 0-3-5"/><circle cx="17" cy="10" r="3"/><path d="M2 21a8 8 0 0 1 3-5"/><circle cx="7" cy="10" r="3"/>
      </svg>
    ),
    bgClass: "bg-mesh-5"
  },
  {
    id: "unclear-roi",
    title: "Unclear ROI",
    copy: "Leaders cannot see where AI creates measurable value.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.6 2.7a10 10 0 1 0 5.7 5.8"/><circle cx="12" cy="12" r="2"/><path d="M12 14v8"/><path d="M12 2v2"/><path d="M22 12h-2"/><path d="M4 12H2"/><path d="M19.1 19.1l-1.4-1.4"/><path d="M6.3 6.3 4.9 4.9"/><path d="M6.3 17.7l-1.4 1.4"/>
      </svg>
    ),
    bgClass: "bg-mesh-6"
  }
];

export default function ProblemSection() {
  const [activeTab, setActiveTab] = useState(aiProblems[0]);

  return (
    <section className="split-service-section" aria-label="Why AI Initiatives Fail">
      <div className="split-service-container">
        
        <div className="split-service-header">
          <h2>Why Most AI Initiatives Never Scale</h2>
          <p>
            Organizations are investing in AI, but many struggle to move beyond pilots. The reason is rarely the model alone. It is usually fragmented data, legacy workflows, unclear ownership, weak governance, low adoption, and no clear path to ROI.
          </p>
        </div>

        <div className="split-service-layout">
          
          <div className="split-service-list">
            {aiProblems.map((problem) => (
              <button
                key={problem.id}
                className={`service-list-item ${activeTab.id === problem.id ? "active" : ""}`}
                onMouseEnter={() => setActiveTab(problem)}
                onClick={() => setActiveTab(problem)}
              >
                {problem.title}
                <svg className="service-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            ))}
          </div>

          <div className="split-service-stage">
            <div className="service-stage-card" key={activeTab.id}>
              
              <div className={`stage-bg-layer ${activeTab.bgClass}`}>
                <div className="stage-bg-overlay"></div>
              </div>

              <div className="service-card-inner">
                <span className="service-eyebrow">The Challenge</span>
                
                <div style={{ color: '#1e3a8a', marginBottom: '24px' }}>
                  {activeTab.icon}
                </div>

                <h3>{activeTab.title}</h3>
                <p className="service-main-copy" style={{ fontSize: '1.2rem', marginBottom: '0' }}>
                  {activeTab.copy}
                </p>
                
              </div>
            </div>
          </div>

        </div>

        <div className="problem-closing" style={{ textAlign: 'center', maxWidth: '800px', margin: '60px auto 0', fontSize: '1.1rem', fontWeight: '600', color: '#1E3A8A', paddingTop: '24px', borderTop: '1px solid rgba(24, 37, 71, 0.1)' }}>
          <p>
            MindGen helps leaders connect business priorities, operating models, technology, and execution into one AI transformation roadmap.
          </p>
        </div>

      </div>
    </section>
  );
}