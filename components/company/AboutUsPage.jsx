"use client";

import BodyClassName from "../BodyClassName";
import SiteFooter from "../site/SiteFooter";
import SiteHeader from "../site/SiteHeader";

const focusAreas = [
  {
    title: "Strategy Into Execution",
    copy: "We help organizations move from AI ambition to operating roadmaps, shipped experiences, and measurable business results.",
  },
  {
    title: "Responsible Transformation",
    copy: "Governance, security, adoption, and change enablement are built into delivery so transformation can scale with confidence.",
  },
  {
    title: "Cross-Functional Partnership",
    copy: "Our teams bring product, design, data, and engineering together in one shared delivery motion instead of fragmented handoffs.",
  },
];

const capabilityPillars = [
  {
    title: "AI Strategy",
    copy: "Roadmaps, operating models, and prioritization that connect AI ambition to the realities of business execution.",
  },
  {
    title: "Product & Experience",
    copy: "Service design, product thinking, and customer-centered experiences that teams can adopt and evolve over time.",
  },
  {
    title: "Engineering Delivery",
    copy: "Modern application, platform, and integration work that turns strategy into durable systems and shipped outcomes.",
  },
];

const principles = [
  "Practical AI built around business outcomes, not demos.",
  "Collaborative operating models that help teams adopt what gets shipped.",
  "Senior delivery partnership across strategy, design, data, and engineering.",
];

const metrics = [
  { value: "150+", label: "Programs shaped across AI, data, and digital experience" },
  { value: "92%", label: "Client partnership retention across multi-phase engagements" },
  { value: "24/7", label: "Distributed collaboration model spanning strategy, build, and support" },
];

export default function AboutUsPage() {
  return (
    <>
      <BodyClassName className="company-page-body" />
      <SiteHeader />
      <main className="company-page about-page">
        
        <section className="company-hero about-hero">
          <div className="company-shell about-hero-inner">
            <p className="company-eyebrow">About Us</p>
            <h1>Building AI systems that turn bold ideas into durable business outcomes.</h1>
            <p className="company-hero-copy">
              MindGen partners with ambitious teams to design, ship, and scale practical AI experiences. We blend strategy, product
              thinking, and engineering execution so transformation stays grounded in the realities of the business.
            </p>
            <div className="about-hero-badges">
              <span className="premium-badge">AI Strategy</span>
              <span className="premium-badge">Product Thinking</span>
              <span className="premium-badge">Engineering Execution</span>
            </div>
          </div>
        </section>

        <section className="about-intro-section">
          <div className="company-shell">
            <div className="about-story-grid">
              <div className="about-story-panel">
                <p className="about-mini-label">What we solve</p>
                <h3>Organizations need more than experimentation. They need delivery discipline that scales.</h3>
                <p>
                  We help teams create momentum across strategy, implementation, adoption, and measurable value creation so change can
                  survive real organizational complexity.
                </p>
              </div>

              <div className="about-focus-grid">
                {focusAreas.map((item) => (
                  <article key={item.title} className="about-focus-card premium-hover-card">
                    <span className="about-growth-line" aria-hidden="true"></span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-principles-section">
          <div className="company-shell about-principles-grid">
            <div className="about-principles-copy">
              <p className="about-mini-label">How we work</p>
              <h2>We turn potential into performance with clarity at every step.</h2>
              <p>
                That means aligning stakeholders early, building responsibly, and creating experiences that teams can adopt. Our role
                is to make transformation feel executable, not abstract.
              </p>
            </div>

            <div className="about-principles-list">
              {principles.map((item) => (
                <div key={item} className="about-principle-item">
                  <svg className="principle-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-capabilities-section">
          <div className="company-shell">
            <div className="about-section-heading">
              <p className="about-mini-label">What we bring</p>
              <h2>Integrated capability across strategy, experience, and build.</h2>
            </div>
            <div className="about-capabilities-grid">
              {capabilityPillars.map((item) => (
                <article key={item.title} className="about-capability-card premium-hover-card">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-metrics-section">
          <div className="company-shell">
            <div className="about-metrics-grid">
              {metrics.map((item) => (
                <article key={item.value} className="about-metric-card premium-hover-card">
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-journey-section">
          <div className="company-shell">
            <div className="about-journey-heading">
              <p className="about-mini-label">Our Genesis</p>
              <h2>Built for modern transformation.</h2>
            </div>
            
            <div className="founder-statement-wrapper">
              <article className="founder-statement-card">
                <div className="statement-header">
                  <span className="statement-year">2024–2025</span>
                  <div className="statement-line"></div>
                </div>
                <h3>MindGen is Formed</h3>
                <p>
                  MindGen was shaped as an AI-native strategy and workflow transformation practice, 
                  built on the founders’ long experience in marketing, procurement, technology adoption, 
                  and business transformation.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="about-cta-section">
          <div className="company-shell">
            <div className="about-cta-card">
              <div>
                <p className="about-section-kicker">Partner with MindGen</p>
                <h2>Looking for a team that can connect AI ambition to execution?</h2>
              </div>
              <a href="/#contact" className="about-pill-btn strategy-btn">Book a Strategy Workshop</a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}