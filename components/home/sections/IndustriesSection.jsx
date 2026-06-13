"use client";

import { useState } from "react";

const strategicIndustries = [
  {
    id: "bfsi",
    title: "BFSI & Fintech",
    copy: "Modernizing core banking assets with cloud-native security, automated risk scoring engines, and strict compliance deployments.",
    link: "/industries/bfsi-fintech"
  },
  {
    id: "retail",
    title: "Retail & Consumer",
    copy: "Unifying brick-and-mortar operations with real-time digital storefronts, predictive inventory, and frictionless checkout.",
    link: "/industries/retail-consumer"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    copy: "Reimagining care journeys with connected digital experiences that improve patient outcomes and streamline hospital operations.",
    link: "/industries/healthcare"
  },
  {
    id: "education",
    title: "Education",
    copy: "Building scalable digital learning ecosystems and data-driven administrative workflows for modern institutions.",
    link: "/industries/education"
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    copy: "Connecting the operational fabric of smart factories with cloud intelligence to trigger automated preventive maintenance.",
    link: "/industries/manufacturing"
  },
  {
    id: "real-estate",
    title: "Real Estate",
    copy: "Transforming property lifecycle management, portfolio analytics, and tenant experiences through intelligent automation.",
    link: "/industries/real-estate"
  },
  {
    id: "government",
    title: "Government & Institutions",
    copy: "Securing public sector infrastructure, ensuring regulatory compliance, and modernizing citizen-facing digital services.",
    link: "/industries/government"
  }
];

export default function IndustriesSection() {
  // Sets the default active industry to the first one
  const [activeTab, setActiveTab] = useState(strategicIndustries[0]);

  return (
    <section id="industries" className="split-industry-section" aria-label="Industry Solutions">
      <div className="split-industry-container">
        
        <div className="split-industry-header">
          <h2>Empowering Industry Leaders to Navigate the Future with End-to-End Innovation</h2>
          <p>Tailored AI transformations and operational workflows across global enterprise ecosystems.</p>
        </div>

        <div className="split-industry-layout">
          
          {/* LEFT SIDE: The Interactive Hover List */}
          <div className="split-list-column">
            {strategicIndustries.map((industry) => (
              <button
                key={industry.id}
                className={`split-list-item ${activeTab.id === industry.id ? "active" : ""}`}
                onMouseEnter={() => setActiveTab(industry)}
                onClick={() => setActiveTab(industry)} // Fallback for mobile tap
              >
                {industry.title}
                <svg className="list-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            ))}
          </div>

          {/* RIGHT SIDE: The Dynamic Stage */}
          <div className="split-stage-column">
            {/* The 'key' forces React to re-render and trigger the fade animation on change */}
            <div className="split-stage-card" key={activeTab.id}>
              <div className="stage-card-inner">
                <span className="stage-eyebrow">Industry Focus</span>
                <h3>{activeTab.title}</h3>
                <p>{activeTab.copy}</p>
                <a href={activeTab.link} className="stage-action-btn">
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