"use client";

const strategicIndustries = [
  {
    id: "government",
    title: "Government",
    copy: "AI, dashboards, citizen services, policy research, and digital transformation programs for public institutions.",
    link: "/industries/government",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 20 7 4 7 12 2"></polygon></svg>
  },
  {
    id: "bfsi",
    title: "BFSI",
    copy: "Customer journeys, compliance workflows, fraud intelligence, decision systems, and AI-enabled operating models.",
    link: "/industries/bfsi",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
  },
  {
    id: "healthcare",
    title: "Healthcare",
    copy: "Patient engagement, operational dashboards, care workflow optimization, and AI-enabled hospital transformation.",
    link: "/industries/healthcare",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path><circle cx="20" cy="10" r="2"></circle></svg>
  },
  {
    id: "education",
    title: "Education",
    copy: "War-room dashboards, institutional diagnostics, learning analytics, administrative automation, and AI readiness programs.",
    link: "/industries/education",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
  },
  {
    id: "retail",
    title: "Retail & Consumer",
    copy: "Shelf intelligence, customer journeys, merchandising compliance, demand insights, loyalty analytics, and store-level performance.",
    link: "/industries/retail",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Energy",
    copy: "Operational visibility, predictive insights, workflow modernization, asset intelligence, and AI-led productivity improvement.",
    link: "/industries/manufacturing",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg>
  }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="industry-showcase" aria-label="Industry Solutions">
      <div className="industry-container">
        
        <div className="industry-header-wrap">
          <h2>
            Built for Sectors Where Decisions, Trust, and Execution Matter
          </h2>
          <p className="industry-subheadline">
            MindGen works across sectors where transformation requires more than technology. We combine domain research, AI strategy, workflow design, data systems, and implementation support for complex operating environments.
          </p>
        </div>

        <div className="industry-bento-grid">
          {strategicIndustries.map((industry) => (
            <a href={industry.link} className="industry-card-link" key={industry.id}>
              <article className="industry-bento-card">
                <div className="card-content-top">
                  <div className="industry-icon-wrapper">
                    {industry.icon}
                  </div>
                  <h3>{industry.title}</h3>
                  <p>{industry.copy}</p>
                </div>
                <div className="card-action-bottom">
                  <span className="card-cta-text">Explore Solutions</span>
                  <svg className="card-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </article>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}