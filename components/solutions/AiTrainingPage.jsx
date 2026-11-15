"use client";
import BodyClassName from "../BodyClassName";
import SiteHeader from "../site/SiteHeader";
import SiteFooter from "../site/SiteFooter";

export default function AiTrainingPage() {
  return (
    <>
      <BodyClassName className="product-page-body" />
      <SiteHeader />
      <main className="ai-training-page">
        
        {/* --- 1. TRAINING HERO --- */}
        <section className="service-hero training-hero">
          <div className="company-shell">
            <div className="service-hero-content fade-in">
              <div className="product-badge service-badge">
                <span className="pulse-dot"></span>
                Workforce Transformation
              </div>
              <h1>The best AI architecture is useless if your team refuses to use it.</h1>
              <p className="hero-subtext">
                We do not conduct generic motivational seminars. We engineer operational adoption. MindGen trains your C-Suite, engineers, and front-line operators to securely leverage AI workflows while maintaining strict <strong>DPDP Act 2023 compliance</strong>.
              </p>
              <div className="hero-actions">
                <a href="/contact-us" className="about-pill-btn strategy-btn">Schedule Team Training</a>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. THE ADOPTION BOTTLENECK (COMPARISON UI) --- */}
        <section className="training-comparison-section">
          <div className="company-shell">
            <div className="section-header center-align">
              <h2>Why Standard Corporate AI Training Fails</h2>
              <p>Passing around a PDF of "Top 10 Prompts" is a security risk, not a strategy.</p>
            </div>
            
            <div className="comparison-grid">
              {/* The Old Way */}
              <div className="comp-card negative-card">
                <div className="comp-header">The Standard Approach</div>
                <ul className="comp-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    Generic "How to use ChatGPT" seminars.
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    Zero operational integration with daily tools.
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    Employees unknowingly leak sensitive data to public LLMs.
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    Adoption drops to 0% within two weeks.
                  </li>
                </ul>
              </div>

              {/* The MindGen Way */}
              <div className="comp-card positive-card">
                <div className="comp-header">The MindGen Methodology</div>
                <ul className="comp-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Role-specific training on custom, internal AI tooling.
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Direct integration into existing CRM and ERP workflows.
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Strict DPDP frameworks preventing unauthorized data sharing.
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Measured KPIs tracking actual workflow acceleration.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. ROLE-BASED CURRICULUM GRID --- */}
        <section className="curriculum-section">
          <div className="company-shell">
            <div className="section-header">
              <h2>Role-Specific Immersion</h2>
              <p>We segment your workforce to deliver targeted technical and strategic capabilities.</p>
            </div>
            
            <div className="curriculum-grid">
              
              <div className="curr-card">
                <div className="curr-tier">Tier 01</div>
                <h3>Executive & C-Suite</h3>
                <p>Focused entirely on ROI, strategic deployment, and risk mitigation.</p>
                <div className="curr-divider"></div>
                <ul>
                  <li>AI Investment Allocation</li>
                  <li>DPDP 2023 Risk Governance</li>
                  <li>Evaluating Vendor-Agnostic LLMs</li>
                  <li>Measuring Workflow Margin Impact</li>
                </ul>
              </div>

              <div className="curr-card">
                <div className="curr-tier">Tier 02</div>
                <h3>Engineering & Data Teams</h3>
                <p>Deep-dive technical training for managing custom middleware and webhooks.</p>
                <div className="curr-divider"></div>
                <ul>
                  <li>Node.js / Python API Integration</li>
                  <li>Vector Database Architecture</li>
                  <li>Deploying Local Open-Source Models</li>
                  <li>Zero-Trust Data Pipelines</li>
                </ul>
              </div>

              <div className="curr-card">
                <div className="curr-tier">Tier 03</div>
                <h3>Front-Line Operations</h3>
                <p>Tactical workflow execution for sales, marketing, and support teams.</p>
                <div className="curr-divider"></div>
                <ul>
                  <li>Prompt Engineering for Internal Tools</li>
                  <li>Automating Lead Enrichment</li>
                  <li>Safe Data Handling Protocols</li>
                  <li>Executing Agentic Workflows</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}