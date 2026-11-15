"use client";
import BodyClassName from "../BodyClassName";
import SiteHeader from "../site/SiteHeader";
import SiteFooter from "../site/SiteFooter";

export default function MartechRevopsPage() {
  return (
    <>
      <BodyClassName className="product-page-body" />
      <SiteHeader />
      <main className="revops-page">
        
        {/* --- 1. REVOPS HERO --- */}
        <section className="service-hero revops-hero">
          <div className="company-shell">
            <div className="service-hero-content fade-in">
              <div className="product-badge service-badge">
                <span className="pulse-dot"></span>
                RevOps Transformation
              </div>
              <h1>Stop guessing your ROI. Engineer a unified revenue engine.</h1>
              <p className="hero-subtext">
                Your marketing, sales, and operations are bleeding margin through disconnected silos. We build the custom middleware required to track a customer from their first ad click to their final invoice, giving your executive team total visibility.
              </p>
              <div className="hero-actions">
                <a href="/contact-us" className="about-pill-btn strategy-btn">Audit Your RevOps Stack</a>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. SINGLE SOURCE OF TRUTH ARCHITECTURE --- */}
        <section className="architecture-hub-section">
          <div className="company-shell">
            <div className="section-header center-align">
              <h2>The End of Manual CSV Exports</h2>
              <p>We replace brittle, out-of-sync integrations with foundational data engineering.</p>
            </div>
            
            <div className="hub-visual-container">
              {/* Left Panel: The Problem */}
              <div className="hub-panel problem-panel">
                <div className="panel-header">Disconnected Tools</div>
                <ul className="panel-list">
                  <li>Sales CRM</li>
                  <li>Warehouse Stock</li>
                  <li>Fleet Routing</li>
                  <li>Accounting Software</li>
                </ul>
                <div className="panel-status error-status">Manual CSV Exports & Out-of-Sync Records</div>
              </div>

              {/* Center: The Hub */}
              <div className="hub-center">
                <div className="animated-data-lines">
                  <div className="line line-1"></div>
                  <div className="line line-2"></div>
                </div>
                <div className="hub-core">
                  <div className="core-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                  </div>
                  <h3>Custom Node.js API & Webhook Hub</h3>
                  <span className="hub-tag">Single Source of Truth</span>
                </div>
                <div className="animated-data-lines reverse">
                  <div className="line line-1"></div>
                  <div className="line line-2"></div>
                </div>
              </div>

              {/* Right Panel: The Solution */}
              <div className="hub-panel solution-panel">
                <div className="panel-header">Connected Architecture</div>
                <ul className="panel-list success-list">
                  <li>Automated Sync</li>
                  <li>Real-Time Dashboards</li>
                  <li>Predictive Analytics</li>
                  <li>Zero Data Leakage</li>
                </ul>
                <div className="panel-status success-status">Custom API & Webhook Middleware</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. REVOPS CAPABILITIES GRID --- */}
        <section className="revops-capabilities-section">
          <div className="company-shell">
            <div className="capabilities-grid">
              <div className="cap-card">
                <div className="cap-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3>Full-Funnel Attribution</h3>
                <p>Map exact revenue figures back to specific Meta and Google Ad campaigns. Stop relying on platform-reported metrics and start tracking actual closed deals.</p>
              </div>
              <div className="cap-card">
                <div className="cap-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3>Automated Lead Routing</h3>
                <p>Inbound queries are instantly scored by AI and pushed directly into your sales team's HubSpot or custom CRM via secure webhooks, reducing response time to seconds.</p>
              </div>
              <div className="cap-card">
                <div className="cap-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </div>
                <h3>Executive Data Dashboards</h3>
                <p>We build secure Next.js front-ends that pull real-time metrics from your single source of truth, giving the C-Suite a live pulse on the company's financial health.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}