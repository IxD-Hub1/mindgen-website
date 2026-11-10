"use client";
import { useState } from 'react';
import BodyClassName from "../BodyClassName";
import SiteHeader from "../site/SiteHeader";
import SiteFooter from "../site/SiteFooter";

const aiModels = [
  {
    id: "tagging",
    name: "Patient Tagging",
    tagline: "Intelligent cohort identification.",
    description: "Automatically derives recall priority and care-continuity tags directly from historical visit data and departmental interactions, ensuring no patient falls through the cracks.",
    features: ["Care-Continuity Tagging", "Recall Prioritization", "Departmental Mapping"]
  },
  {
    id: "lookalike",
    name: "Look-Alike Modeling",
    tagline: "Precision audience expansion.",
    description: "Identifies and builds audience segments that closely resemble your highest-value seed groups, dramatically improving the ROI of targeted healthcare marketing.",
    features: ["Value-Based Seeding", "Predictive Expansion", "High-Intent Targeting"]
  },
  {
    id: "intent",
    name: "Intent Scoring",
    tagline: "Prioritize your sales follow-ups.",
    description: "Scores the urgency of every inbound enquiry based on pipeline stage, follow-up timing, clicks, and engagement recency so your call center focuses on the hottest leads.",
    features: ["Recency Tracking", "Pipeline Stage Scoring", "Call Center Routing"]
  },
  {
    id: "content",
    name: "Multilingual Content Generation",
    tagline: "Genuine South Indian localization.",
    description: "Produces campaign copy tuned to specific service lines and audiences in English, Tamil, Telugu, Malayalam, Kannada, and Hindi. We provide clinically-reviewed outreach in the actual working languages of your patient base.",
    features: ["6-Language Support", "Service-Line Tuning", "Native Contextualization"]
  },
  {
    id: "compliance",
    name: "Clinical Compliance Gating",
    tagline: "Zero unsafe medical claims.",
    description: "Every generated campaign passes an automated screen for unsafe claims (e.g., treatment guarantees) and is assigned a severity score before entering a 5-stage human approval chain.",
    features: ["Unsafe Claim Detection", "5-Stage Human Review", "Immutable Audit Logging"]
  }
];

const valueDrivers = [
  {
    title: "More Users & Departments",
    impact: "Unifies the call centre, marketing, front office, management, and customer experience teams onto one intelligence layer."
  },
  {
    title: "High Integration Capability",
    impact: "Seamlessly connects with existing HMS/EMR, call systems, messaging APIs, website leads, CRM, and finance modules."
  },
  {
    title: "Patient Database Scale",
    impact: "Unlocks massive recall and continuity revenue opportunities hidden within your large historical patient base."
  },
  {
    title: "High Operational Stickiness",
    impact: "Embedded workflows, role-based permissions, and custom reporting increase system reliance and operational efficiency."
  },
  {
    title: "Executive Visibility",
    impact: "Boardroom dashboards explicitly link marketing spend and patient experience directly to the revenue pipeline."
  },
  {
    title: "Modular Expansion",
    impact: "Easily activate AI agents, specialty workflows, multi-location rollouts, and referral management as the hospital scales."
  }
];

export default function HospitalOsPage() {
  const [activeModel, setActiveModel] = useState(0);

  return (
    <>
      <BodyClassName className="product-page-body" />
      <SiteHeader />
      <main className="hospital-os-page">
        
        {/* --- 1. ENTERPRISE HERO (No Rip & Replace) --- */}
        <section className="enterprise-hero">
          <div className="company-shell hero-grid">
            <div className="hero-content">
              <div className="product-badge enterprise-badge">
                <span className="pulse-dot secure-dot"></span>
                Hospital OS AI
              </div>
              <h1>The Growth & Intelligence Layer for Enterprise Hospitals.</h1>
              <p>
                Hospital OS AI sits securely <strong>above or alongside your existing HMS / EMR</strong>. 
                Retain your core clinical and billing systems while adding a connected patient CRM, 
                growth workflow, and AI command centre—with zero rip-and-replace friction.
              </p>
              <div className="hero-actions">
                <a href="/contact-us" className="about-pill-btn strategy-btn enterprise-btn">Book Boardroom Demo</a>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="visual-glass-panel command-center-panel">
                <div className="mock-ui-header dark-header">
                  <div className="mock-dots"><span></span><span></span><span></span></div>
                  <div className="mock-title">AI Command Centre / Live</div>
                </div>
                <div className="mock-ui-body dark-body">
                  <div className="mock-data-stream">
                    <div className="stream-line"><span>[SYS]</span> HMS Sync Complete...</div>
                    <div className="stream-line"><span>[AI]</span> Tagging 14,020 Patient Records...</div>
                    <div className="stream-line secure"><span>[DPDP]</span> Consent Gates Verified.</div>
                    <div className="stream-line"><span>[OP]</span> Executing Multilingual Recall Campaign.</div>
                  </div>
                  <div className="mock-chart enterprise-chart"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. DPDP 2023 & STRUCTURAL COMPLIANCE --- */}
        <section className="structural-compliance-section">
          <div className="company-shell">
            <div className="compliance-header">
              <p className="about-mini-label secure-label">DPDP Act 2023 Ready</p>
              <h2>Built for Indian regulation from the first schema.</h2>
              <p>
                Compliance isn't an appendix written later. In Hospital OS AI, purpose-bound consent, retention limits, 
                and data classification are hardcoded database constraints. 
                <em>The system physically cannot do otherwise.</em>
              </p>
            </div>
            
            <div className="compliance-grid">
              <div className="compliance-card">
                <div className="c-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h3>Consent as Architecture</h3>
                <p>A campaign physically cannot address a patient who has not consented. It is a schema decision, not a checkbox a user can forget.</p>
              </div>
              <div className="compliance-card">
                <div className="c-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <h3>Zero Data Leakage</h3>
                <p>A bug in the application layer cannot leak patient data. The database layer automatically refuses unauthorized reads.</p>
              </div>
              <div className="compliance-card">
                <div className="c-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <h3>Immutable Audit Trail</h3>
                <p>Append-only enforcement ensures complete transparency. The system rejects deletion attempts, even from the database superuser.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. THE 5-STAGE AI LAYER (Reusing Tab UI) --- */}
        <section className="product-architecture-section enterprise-ai-section">
          <div className="company-shell">
            
            <div className="architecture-header">
              <p className="about-mini-label">The AI Layer</p>
              <h2>Five models. One unified path.</h2>
              <p>Each model solves one specific step, chained together from raw patient record to approved, compliant outreach.</p>
            </div>

            <div className="architecture-layout">
              {/* Left Column: Interactive Tabs */}
              <aside className="architecture-sidebar">
                {aiModels.map((mod, index) => (
                  <button 
                    key={mod.id}
                    className={`module-tab ${activeModel === index ? 'active' : ''}`}
                    onMouseEnter={() => setActiveModel(index)}
                    onClick={() => setActiveModel(index)}
                  >
                    <span className="tab-number">0{index + 1}</span>
                    <span className="tab-name">{mod.name}</span>
                    <svg className="tab-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                ))}
              </aside>

              {/* Right Column: Dynamic Content Pane */}
              <article className="architecture-content-pane">
                <div key={activeModel} className="content-pane-inner fade-in">
                  <div className="pane-header">
                    <h3>{aiModels[activeModel].name}</h3>
                    <span className="pane-tagline">{aiModels[activeModel].tagline}</span>
                  </div>
                  <p className="pane-description">{aiModels[activeModel].description}</p>
                  
                  <div className="pane-features-grid">
                    {aiModels[activeModel].features.map((feature, i) => (
                      <div key={i} className="feature-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>

          </div>
        </section>

        {/* --- 4. ENTERPRISE ACV & BUSINESS VALUE --- */}
        <section className="enterprise-value-section">
          <div className="company-shell">
            <div className="value-header">
              <h2>Enterprise Business Impact</h2>
              <p>Why leading multi-speciality hospitals trust Hospital OS AI to drive operational expansion.</p>
            </div>
            
            <div className="value-grid">
              {valueDrivers.map((driver, idx) => (
                <div key={idx} className="value-card premium-hover-card">
                  <div className="v-indicator"></div>
                  <h3>{driver.title}</h3>
                  <p>{driver.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 5. BOTTOM CTA --- */}
        <section className="clinios-cta-section">
          <div className="company-shell">
            <div className="clinios-cta-card enterprise-cta">
              <div className="cta-content">
                <h2>Deploy the Intelligence Layer.</h2>
                <p>Connect your fragmented EMR, pipeline, and compliance data into a single, scalable growth engine.</p>
              </div>
              <div className="cta-actions">
                <a href="/contact-us" className="about-pill-btn strategy-btn">Request Enterprise Demo</a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}