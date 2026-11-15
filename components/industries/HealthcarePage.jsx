"use client";
import BodyClassName from "../BodyClassName";
import SiteHeader from "../site/SiteHeader";
import SiteFooter from "../site/SiteFooter";

export default function HealthcarePage() {
  return (
    <>
      <BodyClassName className="product-page-body" />
      <SiteHeader />
      <main className="industry-page healthcare-page">
        
        {/* --- 1. INDUSTRY HERO --- */}
        <section className="service-hero industry-hero">
          <div className="company-shell">
            <div className="service-hero-content fade-in">
              <div className="product-badge industry-badge">
                <span className="pulse-dot"></span>
                Healthcare & Telemedicine
              </div>
              <h1>Legacy EMRs manage records. We engineer growth.</h1>
              <p className="hero-subtext">
                Your Hospital Management System (HMS) is built for clinical billing, not patient acquisition or retention. We bridge the operational gap with strict <strong>DPDP-compliant AI architectures</strong> that eliminate patient leakage and automate your revenue pipeline.
              </p>
              <div className="hero-actions">
                <a href="/contact-us" className="about-pill-btn strategy-btn">Audit Your Clinical Stack</a>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. THE CORE CHALLENGE --- */}
        <section className="industry-challenge-section">
          <div className="company-shell">
            <div className="challenge-grid">
              <div className="challenge-text">
                <h2>The Patient Journey is Broken.</h2>
                <p>Hospitals and clinics are bleeding margin because their marketing, front-desk, and clinical teams operate in disconnected silos.</p>
              </div>
              <div className="challenge-cards">
                <div className="c-card error-themed">
                  <h3>Unmanaged Lead Leakage</h3>
                  <p>High-intent inquiries from WhatsApp and Google Ads get lost in manual front-desk follow-ups.</p>
                </div>
                <div className="c-card error-themed">
                  <h3>Compliance Exposure</h3>
                  <p>Using generic CRMs and spreadsheets violates DPDP Act 2023 consent and data retention mandates.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. OUR FLAGSHIP ARCHITECTURES (Integrating CliniOS & Hospital OS) --- */}
        <section className="flagship-architectures-section">
          <div className="company-shell">
            <div className="section-header center-align">
              <h2>Our Flagship Healthcare Frameworks</h2>
              <p>Purpose-built software layers designed for specific scales of clinical operation.</p>
            </div>
            
            <div className="architectures-grid">
              
              {/* Product 1: CliniOS */}
              <div className="arch-card clinios-arch">
                <div className="arch-badge">For Clinics & Polyclinics</div>
                <div className="arch-content">
                  <h3>CliniOS</h3>
                  <p className="arch-tagline">The AI-Native Operating System for Growth-Focused Clinics.</p>
                  <p className="arch-desc">Stop losing patients to fragmented workflows. CliniOS connects omnichannel enquiry management, patient CRM, and automated outreach into a single, intelligent platform.</p>
                  <ul className="arch-features">
                    <li>Omnichannel Inbox (WhatsApp, IG)</li>
                    <li>Automated Lead Scoring</li>
                    <li>Integrated Tele-Health</li>
                  </ul>
                  <a href="/solutions/clini-os" className="arch-link">Explore CliniOS Architecture →</a>
                </div>
              </div>

              {/* Product 2: Hospital OS AI */}
              <div className="arch-card hospitalos-arch">
                <div className="arch-badge enterprise-badge">For Enterprise Hospitals</div>
                <div className="arch-content">
                  <h3>Hospital OS AI</h3>
                  <p className="arch-tagline">The Growth & Intelligence Layer for Multi-Speciality Chains.</p>
                  <p className="arch-desc">Sits securely above your existing HMS/EMR. We deploy a 5-stage AI model layer handling multilingual content generation, compliance gating, and patient tagging with zero rip-and-replace.</p>
                  <ul className="arch-features">
                    <li>Strict DPDP Schema Architecture</li>
                    <li>5-Stage AI Compliance Gating</li>
                    <li>Immutable Audit Trails</li>
                  </ul>
                  <a href="/solutions/hospital-os" className="arch-link enterprise-link">Explore Enterprise Layer →</a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- 4. ABDM & COMPLIANCE STANDARD --- */}
        <section className="compliance-standard-section">
          <div className="company-shell">
            <div className="compliance-banner">
              <div className="banner-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div className="banner-text">
                <h2>Engineered for Indian Regulation</h2>
                <p>MindGen architectures are built for the <strong>DPDP Act 2023</strong> and the <strong>Ayushman Bharat Digital Mission (ABDM)</strong>. Purpose-bound consent, data localization, and role-based access are hardcoded into our database schemas, not added as an afterthought.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}