"use client";

export default function AiBenefitsSection() {
  const benefits = [
    {
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
      title: "AI that fits the flow of work",
      copy: "Drive efficiency across every business function with AI embedded into the tools, workflows, and decisions your teams already use.",
      href: "#ai-solutions",
      cta: "Explore use cases"
    },
    {
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
      title: "One AI operating system for enterprise delivery",
      copy: "Accelerate AI innovation with tools to build, run, and integrate advanced AI solutions and agents at scale.",
      href: "#ai-delivery",
      cta: "Explore AI foundations"
    },
    {
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
      title: "Unified, always-on, proactive AI experience",
      copy: "Harmonise the AI experience across your business with intuitive interfaces that proactively serve AI into every workflow.",
      href: "#ai-resources",
      cta: "Explore MindGen AI"
    },
    {
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
      title: "Agentic AI that works like a teammate",
      copy: "Empower employees to solve complex challenges with role-based assistants that orchestrate agents across every function.",
      href: "#ai-faq",
      cta: "Explore AI agents"
    }
  ];

  return (
    <section className="ai-benefits" aria-label="Artificial intelligence benefits">
      <div className="ai-shell">
        <div className="ai-section-heading ai-benefits-heading">
          <h2>Why MindGen AI?</h2>
        </div>

        <div className="ai-benefit-grid">
          {benefits.map(({ icon, title, copy, href, cta }) => (
            <article className="ai-benefit-card" key={title}>
              <span className="ai-benefit-icon" aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href={href}>{cta} &rarr;</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}