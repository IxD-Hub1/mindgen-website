"use client";
import BodyClassName from "../BodyClassName";
import SiteHeader from "../site/SiteHeader";
import SiteFooter from "../site/SiteFooter";

export default function AiStrategyPage() {
  return (
    <>
      <BodyClassName className="product-page-body" />
      <SiteHeader />
      <main className="ai-strategy-page">
        
        {/* --- 1. EXECUTIVE HERO --- */}
        <section className="service-hero">
          <div className="company-shell">
            <div className="service-hero-content fade-in">
              <div className="product-badge service-badge">
                <span className="pulse-dot"></span>
                Consulting & Implementation
              </div>
              <h1>90% of enterprise AI pilots fail in production. We ensure yours scales.</h1>
              <p className="hero-subtext">
                Stop wasting budget on isolated generative AI experiments. We audit your fragmented infrastructure, establish strict <strong>DPDP Act 2023 governance</strong>, and architect the custom middleware required to turn your raw data into an automated growth engine.
              </p>
              <div className="hero-actions">
                <a href="/contact-us" className="about-pill-btn strategy-btn">Book a Readiness Audit</a>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. MATURITY DIAGNOSTIC GRID --- */}
        <section className="maturity-section">
          <div className="company-shell">
            <div className="section-header">
              <h2>The Enterprise AI Maturity Curve</h2>
              <p>Where does your organization currently stand? We identify the structural gaps preventing you from reaching Stage 4.</p>
            </div>
            
            <div className="maturity-grid">
              <div className="maturity-card">
                <div className="stage-label">Stage 01</div>
                <h3>Ad-Hoc (Shadow AI)</h3>
                <p>Employees use unvetted AI tools. Data is leaked to public LLMs. Zero compliance oversight or unified strategy.</p>
              </div>
              <div className="maturity-card">
                <div className="stage-label">Stage 02</div>
                <h3>Siloed Automation</h3>
                <p>Fragmented APIs are duct-taped together. High latency, duplicate records, and no centralized single source of truth.</p>
              </div>
              <div className="maturity-card">
                <div className="stage-label active-stage">Stage 03</div>
                <h3>Connected Ecosystem</h3>
                <p>Custom Node.js API middleware unifies the data stack. Next.js front-ends deliver insights securely and instantly.</p>
              </div>
              <div className="maturity-card">
                <div className="stage-label active-stage">Stage 04</div>
                <h3>AI-Native Enterprise</h3>
                <p>Fully autonomous workflows. Predictive revenue modeling. Strict DPDP compliance baked into the architecture.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. ENGAGEMENT BLUEPRINT (TIMELINE) --- */}
        <section className="engagement-blueprint-section">
          <div className="company-shell">
            <div className="blueprint-grid">
              <div className="blueprint-text">
                <h2>The 8-Week Transformation Blueprint</h2>
                <p>We don't do endless consulting retainers. We execute targeted, rapid-deployment sprints that transition your business from vulnerable to AI-ready.</p>
              </div>
              
              <div className="blueprint-timeline">
                <div className="timeline-step">
                  <div className="t-marker"></div>
                  <div className="t-content">
                    <h4>Weeks 1-2: Data & Compliance Audit</h4>
                    <p>Deep-dive into your existing CRM, HMS/EMR, or ERP. We map data silos and evaluate DPDP 2023 exposure.</p>
                  </div>
                </div>
                <div className="timeline-step">
                  <div className="t-marker"></div>
                  <div className="t-content">
                    <h4>Weeks 3-5: Architecture Design</h4>
                    <p>Designing the custom Node.js middleware hub and webhook infrastructure to connect disconnected tools safely.</p>
                  </div>
                </div>
                <div className="timeline-step">
                  <div className="t-marker"></div>
                  <div className="t-content">
                    <h4>Weeks 6-8: Pilot & UI Deployment</h4>
                    <p>Deploying the foundational LLM architecture and a secure, high-performance Next.js dashboard for your executive team.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. TANGIBLE DELIVERABLES --- */}
        <section className="deliverables-section">
          <div className="company-shell">
            <div className="section-header center-align">
              <h2>What You Actually Receive</h2>
              <p>No fluff. Just the technical and strategic assets required to scale.</p>
            </div>
            
            <div className="deliverables-grid">
              <div className="d-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                <span>Vendor-Agnostic LLM Framework</span>
              </div>
              <div className="d-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>DPDP 2023 Compliance Matrix</span>
              </div>
              <div className="d-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                <span>Custom API & Webhook Middleware</span>
              </div>
              <div className="d-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                <span>Executive ROI Dashboard (Next.js)</span>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}