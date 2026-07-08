"use client";

const resources = [
  ["https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80", "Speaker presenting AI strategy", "Webinar", "From experimentation to enterprise AI adoption", "How teams create the governance and operating discipline needed to scale."],
  ["https://images.unsplash.com/photo-1516321310764-8d7b5a4e1f9f?auto=format&fit=crop&w=1200&q=80", "Team speaking on stage about product delivery", "Case Study", "Designing intelligent service operations for a complex enterprise environment", "A practical look at platform integration, workflow design, and measurable efficiency gains."],
  ["https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80", "Developer workstation with code and dashboards", "Guide", "The AI readiness checklist for product, data, and platform leaders", "Use this checklist to align stakeholders before your next major AI investment."],
];

export default function AiResourcesSection() {
  return (
    <section className="ai-resources" id="ai-resources" aria-label="Artificial intelligence resources">
      <div className="ai-shell">
        <div className="ai-section-heading">
          <span className="ai-eyebrow">Resources</span>
          <h2>Explore recent perspectives, demos, and playbooks.</h2>
        </div>
        <div className="ai-resource-grid">
          {resources.map(([src, alt, type, title, copy]) => (
            <article className="ai-resource-card premium-hover-card" key={title}>
              <div className="ai-card-img-wrapper">
                <img src={src} alt={alt} />
              </div>
              <div className="ai-resource-copy">
                <span className="ai-resource-type">{type}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}