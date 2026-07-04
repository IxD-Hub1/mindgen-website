"use client";

import { useState } from "react";

// Categorized technology ecosystem based on client requirements
const techCategories = [
  {
    id: "cloud",
    label: "Cloud",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>,
    techs: ["AWS", "Google Cloud", "Microsoft Azure"]
  },
  {
    id: "data",
    label: "Data",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>,
    techs: ["Snowflake", "Databricks"]
  },
  {
    id: "ai",
    label: "AI",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>,
    techs: ["Anthropic", "OpenAI Ecosystem", "Hugging Face"] 
  },
  {
    id: "workflow",
    label: "Workflow",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="8" y="8" rx="2"/><path d="M12 2v6"/><path d="M12 16v6"/><path d="M2 12h6"/><path d="M16 12h6"/></svg>,
    techs: ["ServiceNow", "Salesforce"]
  },
  {
    id: "experience",
    label: "Experience",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    techs: ["Adobe", "Acquia", "Optimizely"]
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>,
    techs: ["Tableau", "Power BI", "Looker"]
  }
];

export default function PartnershipsSection() {
  const [activeCategory, setActiveCategory] = useState(techCategories[0]);

  return (
    <section id="ecosystems" className="ecosystems-section" aria-label="Technology Ecosystems">
      <div className="ecosystems-container">
        
        <div className="ecosystems-header">
          {/* Exact copy from the deck */}
          <h2>Technology-Agnostic. Enterprise-Ready.</h2>
          <p className="ecosystems-intro">
            We design solutions using leading cloud, data, AI, workflow, analytics, and experience platforms. Our goal is not to force a stack, but to select the architecture that fits each client's maturity, security, scalability, and business objectives.
          </p>
        </div>

        {/* Interactive Category Tabs */}
        <div className="tech-tabs-wrapper">
          <div className="tech-tabs-scroll">
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`tech-tab-btn ${activeCategory.id === cat.id ? "active" : ""}`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Tech Grid */}
        <div className="tech-display-area">
          <div className="ecosystems-grid" key={activeCategory.id}>
            {activeCategory.techs.map((tech, index) => (
              <div className="ecosystem-pill fade-in" key={index}>
                {tech}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}