"use client";
import BodyClassName from "../BodyClassName";
import SiteHeader from "../site/SiteHeader";
import SiteFooter from "../site/SiteFooter";

export default function BusinessGrowthPage() {
  return (
    <>
      <BodyClassName className="product-page-body" />
      <SiteHeader />
      <main className="business-growth-page">
        
        {/* --- 1. EXECUTIVE HERO --- */}
        <section className="service-hero growth-hero">
          <div className="company-shell">
            <div className="service-hero-content fade-in">
              <div className="product-badge service-badge">
                <span className="pulse-dot"></span>
                Executive Partnership
              </div>
              <h1>Technology is a tool. Market share is the goal.</h1>
              <p className="hero-subtext">
                Beautiful code and AI models mean nothing if they don't drive EBITDA. We partner with CEOs and hospital boards to align our custom AI architectures with aggressive, measurable revenue targets.
              </p>
              <div className="hero-actions">
                <a href="/contact-us" className="about-pill-btn strategy-btn">Book an Executive Briefing</a>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. THE THREE PILLARS OF SCALING --- */}
        <section className="growth-pillars-section">
          <div className="company-shell">
            <div className="section-header center-align">
              <h2>The Mechanics of Margin Expansion</h2>
              <p>How we translate digital transformation into boardroom metrics.</p>
            </div>
            
            <div className="growth-grid">
              <div className="growth-card">
                <div className="g-metric">01</div>
                <h3>Velocity of Execution</h3>
                <p>We eliminate operational bottlenecks. By automating legacy workflows with agentic AI, your teams can launch campaigns, close deals, and process data 10x faster than competitors.</p>
              </div>
              <div className="growth-card">
                <div className="g-metric">02</div>
                <h3>Cost Optimization</h3>
                <p>Growth isn't just about top-line revenue. Our unified API architectures consolidate bloated tech stacks, reducing your reliance on expensive, redundant SaaS subscriptions.</p>
              </div>
              <div className="growth-card">
                <div className="g-metric">03</div>
                <h3>Predictive Revenue</h3>
                <p>We transition your business from reactive to proactive. By establishing a single source of truth, we enable predictive modeling for customer churn and lifetime value (LTV).</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. FRACTIONAL CAIO (CHIEF AI OFFICER) PANEL --- */}
        <section className="fractional-caio-section">
          <div className="company-shell">
            <div className="caio-container">
              <div className="caio-text">
                <h2>Your Fractional Chief AI Officer</h2>
                <p>Enterprise growth requires continuous steering. Instead of hiring a full-time, million-dollar AI executive, MindGen embeds directly into your boardroom.</p>
                <ul className="caio-list">
                  <li><strong>Board-Level Reporting:</strong> Monthly deep-dives into AI ROI and operational performance.</li>
                  <li><strong>Continuous R&D:</strong> We keep your architecture ahead of the curve as new LLMs and compliance laws emerge.</li>
                  <li><strong>Vendor Negotiation:</strong> We evaluate and negotiate with third-party tech vendors on your behalf, preventing costly lock-ins.</li>
                </ul>
              </div>
              <div className="caio-visual">
                <div className="boardroom-mockup">
                  <div className="mockup-header">
                    <span>Strategic Roadmap 2027</span>
                    <span className="status-live">Live</span>
                  </div>
                  <div className="mockup-body">
                    <div className="roadmap-item completed">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Phase 1: DPDP Compliance & Infrastructure Audit
                    </div>
                    <div className="roadmap-item completed">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Phase 2: CliniOS / Hospital OS AI Deployment
                    </div>
                    <div className="roadmap-item in-progress">
                      <span className="spinner"></span>
                      Phase 3: Agentic Workflow Expansion
                    </div>
                    <div className="roadmap-item pending">
                      <span className="pending-dot"></span>
                      Phase 4: Predictive Market Domination
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. FINAL CTA --- */}
        <section className="clinios-cta-section" style={{ marginTop: '100px' }}>
          <div className="company-shell">
            <div className="clinios-cta-card">
              <div className="cta-content">
                <h2>Ready to scale?</h2>
                <p>Stop experimenting. Start executing. Partner with MindGen to engineer your next phase of aggressive growth.</p>
              </div>
              <div className="cta-actions">
                <a href="/contact-us" className="about-pill-btn strategy-btn" style={{ background: '#ffffff', color: '#0f172a' }}>Initiate Partnership</a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}