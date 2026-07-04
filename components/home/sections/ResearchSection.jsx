"use client";

const researchItems = [
  {
    id: "ai-value-trap",
    type: "Industry Report",
    title: "The AI Value Trap: Moving from Pilot to Production",
    description: "An analysis of why 70% of enterprise AI initiatives fail to scale beyond the pilot phase and the strategic frameworks needed to capture measurable ROI.",
    link: "/research/ai-value-trap",
    date: "Published: Oct 2025",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "governance-llms",
    type: "Policy Brief",
    title: "Governance & Compliance in Enterprise LLMs",
    description: "A comprehensive guide to building secure, compliant generative AI architectures within highly regulated sectors like BFSI and Healthcare.",
    link: "/research/governance-llms",
    date: "Published: Nov 2025",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "agentic-workflows",
    type: "Strategic Insight",
    title: "Agentic Workflows: Redesigning the Future of Operations",
    description: "How autonomous AI agents are shifting the enterprise focus from simple task automation to complex, multi-step decision intelligence.",
    link: "/research/agentic-workflows",
    date: "Published: Dec 2025",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  }
];

export default function ResearchSection() {
  return (
    <section id="research" className="research-section" aria-label="Research and Insights">
      <div className="research-container">
        
        <div className="research-header-flex">
          <div className="research-header-text">
            <h2>MindGen Research & Insights</h2>
            <p>Proprietary frameworks, policy briefs, and strategic analysis for enterprise leaders navigating the AI landscape.</p>
          </div>
          <a href="/research" className="research-view-all">
            View All Insights
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div className="research-grid">
          {researchItems.map((item) => (
            <a href={item.link} className="research-card" key={item.id}>
              
              {/* New Image Wrapper */}
              <div className="research-image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              
              <div className="research-text-content">
                <div>
                  <span className="research-type">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="research-card-footer">
                  <span className="research-date">{item.date}</span>
                  <svg className="research-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}