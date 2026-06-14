"use client";

import { useState } from "react";

const strategicServices = [
  {
    id: "ai-strategy",
    title: "AI Strategy & Readiness",
    copy: "Roadmaps, operating models, and prioritization that connect AI ambition to the realities of enterprise business execution.",
    features: ["AI Co-Innovation Workshops", "Readiness Audits", "Governance & Security Protocols"],
    link: "/solutions/ai-strategy",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "agentic-workflow",
    title: "Agentic Workflow Automation",
    copy: "Leverage autonomous AI agents to streamline complex operational tasks, eliminate bottlenecks, and drastically reduce manual overhead.",
    features: ["Process Mining", "Autonomous Agent Deployment", "Workflow Optimization"],
    link: "/solutions/agentic-workflow",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "martech-revops",
    title: "Martech & RevOps Transformation",
    copy: "Aligning marketing technology stacks and revenue operations to drive measurable, highly scalable business growth.",
    features: ["Tech Stack Audits", "CRM & Automation Alignment", "Revenue Funnel Optimization"],
    link: "/solutions/martech-revops",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "data-intelligence",
    title: "Data Intelligence & Dashboards",
    copy: "Transforming fragmented data lakes into real-time, predictive dashboards designed for rapid executive decision-making.",
    features: ["Predictive Analytics", "Real-Time BI Dashboards", "Data Infrastructure Modernization"],
    link: "/solutions/data-intelligence",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "ai-training",
    title: "AI Training & Adoption",
    copy: "Empowering your internal teams with the skills, workflows, and governance needed to safely scale AI tools across the organization.",
    features: ["Custom Team Upskilling", "Adoption Playbooks", "Change Management"],
    link: "/solutions/ai-training",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "business-growth",
    title: "Business Growth Consulting",
    copy: "Strategic executive advisory focused on entering new markets, optimizing pricing models, and maximizing overall enterprise value.",
    features: ["Market Expansion Strategy", "Pricing Optimization", "M&A Technical Due Diligence"],
    link: "/solutions/business-growth",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(strategicServices[0]);

  return (
    <section id="services" className="split-service-section" aria-label="Our Solutions">
      <div className="split-service-container">
        
        <div className="split-service-header">
          <h2>Services that Drive Real Results</h2>
          <p>We bring together a broad set of capabilities harnessing artificial intelligence, modern engineering, and deep industry expertise.</p>
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
              
              {/* NEW: The Background Image Layer */}
              <div className="stage-bg-layer">
                <img src={activeTab.image} alt="" aria-hidden="true" />
                <div className="stage-bg-overlay"></div>
              </div>

              {/* Existing Content wrapped to sit above the image */}
              <div className="service-card-inner">
                <span className="service-eyebrow">Primary Capability</span>
                <h3>{activeTab.title}</h3>
                <p className="service-main-copy">{activeTab.copy}</p>
                
                <div className="service-features">
                  <span className="features-label">Core Offerings</span>
                  <ul>
                    {activeTab.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="feature-bullet">✦</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={activeTab.link} className="service-action-btn">
                  Explore Capabilities
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}