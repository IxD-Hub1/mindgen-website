"use client";

import { useState } from "react";

// Updated data array using the exact approved copy from the content deck
const strategicServices = [
  {
    id: "ai-strategy",
    title: "AI Strategy & Readiness",
    copy: "Build an AI strategy that can actually be implemented. We help leadership teams identify the right AI opportunities, prioritize use cases, define governance, assess readiness, and create a practical roadmap for execution.",
    features: ["AI maturity assessment", "Use-case prioritization", "Governance model"],
    link: "/solutions/ai-strategy",
    bgClass: "bg-mesh-1"
  },
  {
    id: "agentic-workflow",
    title: "Intelligent Workflow Automation",
    copy: "Redesign work before automating it. We build AI-enabled workflows and agentic systems that reduce manual effort, improve decision speed, connect enterprise systems, and create operational leverage.",
    features: ["Workflow diagnostics", "AI agent design", "System integration plan"],
    link: "/solutions/workflow-automation",
    bgClass: "bg-mesh-2"
  },
  {
    id: "strategic-intelligence",
    title: "Strategic Intelligence",
    copy: "Turn market, policy, customer, and operational signals into sharper decisions. We create research-led intelligence systems, dashboards, briefs, and insight engines for leaders who need clarity before action.",
    features: ["Market intelligence reports", "Decision dashboards", "Opportunity maps"],
    link: "/solutions/strategic-intelligence",
    bgClass: "bg-mesh-3"
  },
  {
    id: "data-decisions",
    title: "Data & Decision Systems",
    copy: "Help leaders see what matters and act faster. We design dashboards, data models, AI-assisted decision workflows, and performance visibility systems for organizations that need sharper execution.",
    features: ["KPI architecture", "Decision workflow design", "AI insight layers"],
    link: "/solutions/data-decisions",
    bgClass: "bg-mesh-4"
  },
  {
    id: "customer-growth",
    title: "Customer Growth Intelligence",
    copy: "Connect marketing, customer data, journeys, and revenue operations. We help teams improve segmentation, personalization, campaign performance, and customer experience using AI and analytics.",
    features: ["Customer journey mapping", "Campaign intelligence", "Revenue operations dashboards"],
    link: "/solutions/customer-growth",
    bgClass: "bg-mesh-5"
  },
  {
    id: "ai-adoption",
    title: "AI Adoption & Training",
    copy: "Help teams understand, trust, and use AI responsibly. We design practical enablement programs for leaders, managers, and teams so AI adoption becomes part of daily work, not a one-time workshop.",
    features: ["Leadership AI workshops", "Use-case playbooks", "Responsible AI guidance"],
    link: "/solutions/ai-adoption",
    bgClass: "bg-mesh-6"
  }
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(strategicServices[0]);

  return (
    <section id="services" className="split-service-section" aria-label="Transformation Programs">
      <div className="split-service-container">
        
        <div className="split-service-header">
          {/* Updated exact headline and subheadline from the copy deck */}
          <h2>Transformation Programs Built Around Business Outcomes</h2>
          <p>MindGen does not begin with tools. We begin with the business outcome, then design the strategy, workflow, data, and AI system required to achieve it.</p>
        </div>

        <div className="split-service-layout">
          
          <div className="split-service-list">
            {strategicServices.map((service) => (
              <button
                key={service.id}
                className={`service-list-item ${activeTab.id === service.id ? "active" : ""}`}
                onMouseEnter={() => setActiveTab(service)}
                onClick={() => setActiveTab(service)}
              >
                {service.title}
                <svg className="service-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            ))}
          </div>

          <div className="split-service-stage">
            <div className="service-stage-card" key={activeTab.id}>
              
              {/* REMOVED UNSPLASH IMAGES - Replaced with premium CSS gradients */}
              <div className={`stage-bg-layer ${activeTab.bgClass}`}>
                <div className="stage-bg-overlay"></div>
              </div>

              <div className="service-card-inner">
                <span className="service-eyebrow">Program Focus</span>
                <h3>{activeTab.title}</h3>
                <p className="service-main-copy">{activeTab.copy}</p>
                
                <div className="service-features">
                  <span className="features-label">Key Deliverables</span>
                  <ul>
                    {activeTab.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="feature-bullet">✦</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={activeTab.link} className="service-action-btn">
                  Explore Solutions
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}