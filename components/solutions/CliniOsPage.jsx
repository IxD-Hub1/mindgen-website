"use client";
import { useState } from 'react';
// ... existing imports ...

import BodyClassName from "../BodyClassName";
import SiteHeader from "../site/SiteHeader";
import SiteFooter from "../site/SiteFooter";
const cliniosModules = [
  {
    id: "enquiry",
    name: "Enquiry Management",
    tagline: "Never lose a high-intent lead.",
    description: "Consolidate every inbound inquiry from WhatsApp, Instagram, Facebook, and your website into a single, intelligent inbox. Automatically score and route leads to the right front-desk staff before they bounce to a competitor.",
    features: ["Omnichannel Inbox", "Automated Lead Scoring", "Instant Auto-Replies", "Source Attribution"]
  },
  {
    id: "crm",
    name: "Intelligent Patient CRM",
    tagline: "The complete 360° patient view.",
    description: "Move beyond fragmented spreadsheets. Maintain unified patient profiles that track clinical history, past inquiries, upcoming appointments, and lifetime value in one secure, compliant interface.",
    features: ["Unified Patient Profiles", "Interaction History", "Family Tagging", "Custom Data Fields"]
  },
  {
    id: "appointments",
    name: "Smart Appointments",
    tagline: "Zero-touch scheduling and reminders.",
    description: "Eliminate front-desk bottleneck. Allow patients to book directly via WhatsApp or your website. The system automatically handles calendar syncing, waitlists, and sends dynamic reminders to drop no-show rates to near zero.",
    features: ["WhatsApp Booking", "Automated Reminders", "Waitlist Management", "Multi-Doctor Sync"]
  },
  {
    id: "campaigns",
    name: "Campaign Automation",
    tagline: "Precision marketing that drives walk-ins.",
    description: "Launch highly targeted WhatsApp and SMS campaigns based on patient segments. Send preventive care reminders, seasonal offers, or follow-ups to dormant patients, and track the exact revenue generated from each blast.",
    features: ["Segmented Broadcasts", "WhatsApp API Integration", "Template Manager", "ROI Tracking"]
  },
  {
    id: "pathways",
    name: "Care Pathways",
    tagline: "Automated post-visit follow-ups.",
    description: "Patient care shouldn't stop at the exit door. Automatically trigger post-consultation check-ins, medication reminders, and feedback collection workflows to elevate patient satisfaction and secure high Google ratings.",
    features: ["Post-Op Automation", "Diet & Med Reminders", "Feedback Collection", "NPS Scoring"]
  },
  {
    id: "billing",
    name: "Revenue & Billing",
    tagline: "Plug the revenue leakage.",
    description: "Generate transparent digital estimates, track advance payments, and send one-click payment links via WhatsApp. Instantly identify unpaid dues and automate gentle collection reminders.",
    features: ["Digital Estimates", "Payment Link Generation", "Dues Tracking", "Revenue Dashboards"]
  },
  {
    id: "telehealth",
    name: "Integrated Tele-Health",
    tagline: "Extend your clinic beyond physical walls.",
    description: "Seamlessly transition standard inquiries into paid virtual consultations. Secure video links and digital prescriptions are automatically generated and sent to the patient's WhatsApp.",
    features: ["Secure Video Links", "Digital Prescriptions", "Pre-Consult Payments", "Automated Triaging"]
  },
  {
    id: "analytics",
    name: "Growth Analytics",
    tagline: "Boardroom-level insights for clinic owners.",
    description: "Stop guessing what drives your growth. Access real-time executive dashboards that track patient acquisition costs (PAC), campaign ROI, staff response times, and daily revenue metrics.",
    features: ["Executive Dashboards", "Staff Performance", "Revenue vs. Spend", "Custom Reporting"]
  }
];

export default function CliniOsPage() {
  // Add this state hook right inside the component
  const [activeModule, setActiveModule] = useState(0);

  return (
    // ... existing JSX ...
    <>
      <BodyClassName className="product-page-body" />
      <SiteHeader />
      <main className="clinios-page">
        
        {/* --- 1. PRODUCT HERO --- */}
        <section className="product-hero">
          <div className="company-shell hero-grid">
            <div className="hero-content">
              <div className="product-badge">
                <span className="pulse-dot"></span>
                CliniOS Intelligence Layer
              </div>
              <h1>The AI-Native Operating System for Growth-Focused Clinics.</h1>
              <p>
                Stop losing patients to fragmented workflows. CliniOS connects enquiry management, 
                patient CRM, and automated campaigns into a single, intelligent platform that 
                eliminates leakage and scales clinical revenue.
              </p>
              <div className="hero-actions">
                <a href="/contact-us" className="about-pill-btn strategy-btn">Request CliniOS Demo</a>
              </div>
            </div>
            
            {/* Minimalist Abstract Graphic or App Screenshot Placeholder */}
            <div className="hero-visual">
              <div className="visual-glass-panel">
                <div className="mock-ui-header">
                  <div className="mock-dots"><span></span><span></span><span></span></div>
                  <div className="mock-title">CliniOS / Dashboard</div>
                </div>
                <div className="mock-ui-body">
                  <div className="mock-stat-row">
                    <div className="mock-stat"></div>
                    <div className="mock-stat"></div>
                    <div className="mock-stat"></div>
                  </div>
                  <div className="mock-chart"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. THE STRUCTURAL PROBLEM --- */}
        <section className="product-problem-section">
          <div className="company-shell">
            <div className="problem-grid">
              <div className="problem-text">
                <span className="about-mini-label">The Core Challenge</span>
                <h2>Clinics are bleeding revenue through operational gaps.</h2>
                <p>
                  Reliance on manual WhatsApp messages, disconnected spreadsheets, and legacy billing systems creates a fragmented patient experience. The result? High patient drop-offs, missed follow-ups, and zero visibility into marketing ROI.
                </p>
              </div>
              <div className="problem-cards">
                <div className="p-card">
                  <div className="p-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                  </div>
                  <h3>Patient Leakage</h3>
                  <p>High-intent inquiries get lost across unmanaged chat threads and missed calls.</p>
                </div>
                <div className="p-card">
                  <div className="p-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <h3>Manual Follow-ups</h3>
                  <p>Front-desk staff spend hours manually tracking appointments and post-visit care.</p>
                </div>
                <div className="p-card">
                  <div className="p-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                  </div>
                  <h3>Blind Marketing</h3>
                  <p>No clear data attribution between ad spend and actual patient walk-ins.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. MARKET METRICS (ABDM) --- */}
        <section className="product-metrics-section">
          <div className="company-shell">
            <div className="metrics-banner">
              <div className="p-metric">
                <h3>485,760+</h3>
                <p>Healthcare facilities mapped under ABDM</p>
              </div>
              <div className="p-metric-divider"></div>
              <div className="p-metric">
                <h3>Zero-Touch</h3>
                <p>Automated workflows for front-desk teams</p>
              </div>
              <div className="p-metric-divider"></div>
              <div className="p-metric">
                <h3>Omnichannel</h3>
                <p>Seamless WhatsApp, SMS, and Voice integration</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. CORE PRODUCT ARCHITECTURE (INTERACTIVE UI) --- */}
        <section className="product-architecture-section">
          <div className="company-shell">
            
            <div className="architecture-header">
              <p className="about-mini-label">Platform Capabilities</p>
              <h2>One Operating System. Eight Growth Modules.</h2>
              <p>Explore the comprehensive toolset designed to automate your entire patient journey from first click to post-op care.</p>
            </div>

            <div className="architecture-layout">
              {/* Left Column: Interactive Tabs */}
              <aside className="architecture-sidebar">
                {cliniosModules.map((mod, index) => (
                  <button 
                    key={mod.id}
                    className={`module-tab ${activeModule === index ? 'active' : ''}`}
                    onMouseEnter={() => setActiveModule(index)}
                    onClick={() => setActiveModule(index)}
                  >
                    <span className="tab-number">0{index + 1}</span>
                    <span className="tab-name">{mod.name}</span>
                    <svg className="tab-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                ))}
              </aside>

              {/* Right Column: Dynamic Content Pane */}
              <article className="architecture-content-pane">
                <div key={activeModule} className="content-pane-inner fade-in">
                  <div className="pane-header">
                    <h3>{cliniosModules[activeModule].name}</h3>
                    <span className="pane-tagline">{cliniosModules[activeModule].tagline}</span>
                  </div>
                  <p className="pane-description">{cliniosModules[activeModule].description}</p>
                  
                  <div className="pane-features-grid">
                    {cliniosModules[activeModule].features.map((feature, i) => (
                      <div key={i} className="feature-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="pane-action">
                    <button className="text-link-btn">Explore Module API &rarr;</button>
                  </div>
                </div>
              </article>
            </div>

          </div>
        </section>

        {/* --- 5. INTEGRATION ECOSYSTEM --- */}
        <section className="integration-section">
          <div className="company-shell">
            <div className="integration-header">
              <h2>Plays perfectly with your existing stack.</h2>
              <p>CliniOS doesn't force a rip-and-replace. We integrate seamlessly with the digital tools and payment gateways your clinic already uses.</p>
            </div>
            <div className="integration-grid">
              <div className="integration-pill">WhatsApp Business API</div>
              <div className="integration-pill">Razorpay & Stripe</div>
              <div className="integration-pill">Legacy EMR Systems</div>
              <div className="integration-pill">Google Workspace</div>
              <div className="integration-pill">Meta Ads Pixel</div>
              <div className="integration-pill">ABDM Compliant APIs</div>
            </div>
          </div>
        </section>

        {/* --- 6. BOTTOM CTA --- */}
        <section className="clinios-cta-section">
          <div className="company-shell">
            <div className="clinios-cta-card">
              <div className="cta-content">
                <h2>Ready to stop patient leakage?</h2>
                <p>Deploy CliniOS and transform your clinic into a high-growth, automated, and patient-centric ecosystem within weeks.</p>
              </div>
              <div className="cta-actions">
                <a href="/contact-us" className="about-pill-btn strategy-btn">Request CliniOS Demo</a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}