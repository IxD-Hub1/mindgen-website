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

const milestones = [
  {
    year: "2024–2025",
    title: "MindGen is Formed",
    copy: "MindGen was shaped as an AI-native strategy and workflow transformation practice, built on the founders’ long experience in marketing, procurement, technology adoption, and business transformation.",
  }
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
              <span>AI strategy</span>
              <span>Product thinking</span>
              <span>Engineering execution</span>
            </div>
          </div>
        </section>

        <section className="about-intro-section">
          <div className="company-shell">
            {/* <div className="careers-split-heading about-split-heading">
              <div>
                <p className="careers-mini-label">Who we are</p>
                <h2>Enterprise change works better when technology, people, and process move together.</h2>
              </div>
              <p>
                We work with leaders who need more than experimentation. They need operating models, delivery discipline, and
                measurable value creation that can survive the complexity of real organizations and evolve with them over time.
              </p>
            </div> */}

            <div className="about-story-grid">
              <div className="about-story-panel">
                <p className="careers-mini-label">What we solve</p>
                <h3>Organizations need more than experimentation. They need delivery discipline that scales.</h3>
                <p>
                  We help teams create momentum across strategy, implementation, adoption, and measurable value creation so change can
                  survive real organizational complexity.
                </p>
              </div>

              <div className="careers-growth-grid about-focus-grid">
                {focusAreas.map((item) => (
                  <article key={item.title} className="careers-growth-card about-focus-card">
                    <span className="careers-growth-line" aria-hidden="true"></span>
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
              <p className="careers-mini-label">How we work</p>
              <h2>We turn potential into performance with clarity at every step.</h2>
              <p>
                That means aligning stakeholders early, building responsibly, and creating experiences that teams can adopt. Our role
                is to make transformation feel executable, not abstract.
              </p>
              {/* <a href="https://mindgen.in" className="company-pill-btn">Visit mindgen.in</a> */}
            </div>

            <div className="about-principles-list">
              {principles.map((item) => (
                <div key={item} className="careers-benefit-item about-principle-item">
                  <span aria-hidden="true">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-capabilities-section">
          <div className="company-shell">
            <div className="about-section-heading">
              <p className="careers-mini-label">What we bring</p>
              <h2>Integrated capability across strategy, experience, and build.</h2>
            </div>
            <div className="about-capabilities-grid">
              {capabilityPillars.map((item) => (
                <article key={item.title} className="about-capability-card">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-metrics-section">
          <div className="company-shell">
            <div className="company-metrics-grid about-metrics-grid">
              {metrics.map((item) => (
                <article key={item.value} className="company-metric-card about-metric-card">
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-journey-section">
          <div className="company-shell">
            <div className="careers-awards-heading about-journey-heading">
              <p className="careers-mini-label">Our journey</p>
              <h2>Built for modern transformation.</h2>
            </div>
            <div className="company-timeline about-timeline">
              {milestones.map((item) => (
                <article key={item.year} className="company-timeline-card about-timeline-card">
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="company-cta-section about-cta-section">
          <div className="company-shell">
            <div className="company-cta-card">
              <div>
                <p className="company-section-kicker">Partner with MindGen</p>
                <h2>Looking for a team that can connect AI ambition to execution?</h2>
              </div>
              <a href="/contact-us" className="company-pill-btn">Contact us</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
