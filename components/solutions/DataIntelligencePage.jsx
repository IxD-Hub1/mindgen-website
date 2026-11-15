"use client";
import BodyClassName from "../BodyClassName";
import SiteHeader from "../site/SiteHeader";
import SiteFooter from "../site/SiteFooter";

export default function DataIntelligencePage() {
  return (
    <>
      <BodyClassName className="product-page-body" />
      <SiteHeader />
      <main className="data-intel-page">
        
        {/* --- 1. DATA HERO --- */}
        <section className="service-hero data-hero">
          <div className="company-shell">
            <div className="service-hero-content fade-in">
              <div className="product-badge service-badge">
                <span className="pulse-dot"></span>
                Data & Analytics
              </div>
              <h1>Stop drowning in spreadsheets. Start predicting revenue.</h1>
              <p className="hero-subtext">
                Raw data is a liability without structure. We engineer secure data pipelines and build custom, real-time Next.js dashboards that give your boardroom absolute clarity on customer acquisition, churn, and operational bottlenecks.
              </p>
              <div className="hero-actions">
                <a href="/contact-us" className="about-pill-btn strategy-btn">Request Dashboard Demo</a>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. EXECUTIVE DASHBOARD MOCKUP (CSS UI) --- */}
        <section className="dashboard-visual-section">
          <div className="company-shell">
            <div className="section-header center-align">
              <h2>Boardroom-Ready Visualization</h2>
              <p>We don't just dump data into Tableau. We build bespoke, blazingly fast web applications tailored to your exact KPIs.</p>
            </div>
            
            <div className="custom-dashboard-mockup">
              {/* Sidebar */}
              <div className="dash-sidebar">
                <div className="dash-logo"></div>
                <div className="dash-nav-item active"></div>
                <div className="dash-nav-item"></div>
                <div className="dash-nav-item"></div>
              </div>
              
              {/* Main Content Area */}
              <div className="dash-main">
                <div className="dash-header">
                  <div className="dash-title">Executive Overview - Q3</div>
                  <div className="dash-user"></div>
                </div>
                
                {/* Top Metrics Row */}
                <div className="dash-metrics-row">
                  <div className="dash-metric-card">
                    <span className="m-label">Patient Acquisition Cost</span>
                    <span className="m-value positive">₹850 ↘</span>
                  </div>
                  <div className="dash-metric-card">
                    <span className="m-label">Predicted Churn Risk</span>
                    <span className="m-value warning">12.4% ↗</span>
                  </div>
                  <div className="dash-metric-card">
                    <span className="m-label">Automated Revenue</span>
                    <span className="m-value positive">₹4.2M ↗</span>
                  </div>
                </div>
                
                {/* Main Chart Area */}
                <div className="dash-chart-area">
                  <div className="chart-header">Pipeline Velocity vs. Ad Spend</div>
                  <div className="simulated-chart">
                    {/* CSS Bars for Chart Simulation */}
                    <div className="chart-bar" style={{height: "40%"}}></div>
                    <div className="chart-bar" style={{height: "65%"}}></div>
                    <div className="chart-bar" style={{height: "45%"}}></div>
                    <div className="chart-bar" style={{height: "80%"}}></div>
                    <div className="chart-bar" style={{height: "60%"}}></div>
                    <div className="chart-bar" style={{height: "95%"}}></div>
                    <div className="chart-bar highlight-bar" style={{height: "100%"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. CORE DATA CAPABILITIES --- */}
        <section className="data-capabilities-section">
          <div className="company-shell">
            <div className="data-cap-grid">
              
              <div className="data-cap-card">
                <div className="dc-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                </div>
                <h3>Automated Data Cleaning</h3>
                <p>We build Python-based ETL (Extract, Transform, Load) pipelines that automatically ingest, clean, and standardize messy data from legacy systems before it ever reaches your dashboard.</p>
              </div>

              <div className="data-cap-card">
                <div className="dc-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                </div>
                <h3>Predictive Modeling</h3>
                <p>Move from looking at what happened yesterday to predicting what will happen tomorrow. We deploy machine learning models to forecast demand, spot churn risks, and optimize pricing.</p>
              </div>

              <div className="data-cap-card">
                <div className="dc-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <h3>Strict DPDP Governance</h3>
                <p>Enterprise data cannot be reckless. Every dashboard and pipeline we build enforces role-based access controls (RBAC) and compliance with India's DPDP Act 2023.</p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}