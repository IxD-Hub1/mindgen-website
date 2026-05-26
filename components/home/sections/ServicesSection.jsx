"use client";
import { useState } from "react";

const services = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    image: "https://picsum.photos/id/180/1100/680",
    alt: "Artificial intelligence concept visual",
    description: "Leverage the full potential of AI with transformative solutions to improve operations, drive growth and scalable innovation for long-term business agility.",
    link: "/services/artificial-intelligence",
    offerings: [
      "AI Co-Innovation Studio Workshops",
      "AI Strategy, Governance & Adoption",
      "Generative AI Development & Integration",
      "Data Modernization for AI Readiness",
      "AI-Driven Operational Efficiency & Automation",
      "Custom AI Product Engineering & Innovation",
      "Platform AI Optimization & Integration Services",
    ],
  },
  {
    id: "experience",
    title: "Experience Innovation & Design",
    image: "https://picsum.photos/id/366/1100/680",
    alt: "Design workshop board",
    description: "Elevate your digital presence by creating compelling, results-driven experiences and products that deeply engage customers with your brand.",
    offerings: ["Customer Journey Strategy", "UX Research & Service Design", "Product Design Systems", "Conversion Optimization Programs"],
  },
  {
    id: "engineering",
    title: "Digital Product & Platform Engineering",
    image: "https://picsum.photos/id/0/1100/680",
    alt: "Developer working on platform engineering",
    description: "Modernize legacy applications and optimize platforms to stay competitive and enhance user engagement.",
    offerings: ["Cloud-native Product Engineering", "API & Microservices Architecture", "Quality Engineering Automation", "Performance & Scalability Optimization"],
  },
  {
    id: "transformation",
    title: "Enterprise Digital Transformation",
    image: "https://picsum.photos/id/48/1100/680",
    alt: "Business digital transformation",
    description: "Empower your organization with our collaborative approach to digital transformation, optimizing processes, change management, and driving business growth.",
    offerings: ["Digital Roadmap Development", "Operating Model Transformation", "Enterprise Change Enablement", "Transformation Program Governance"],
  },
  {
    id: "data",
    title: "Data & Analytics",
    image: "https://picsum.photos/id/119/1100/680",
    alt: "Data and analytics dashboard",
    description: "Discover how our expertise in data and analysis can transform your business through enhanced data visibility to drive success.",
    offerings: ["Data Strategy & Governance", "Modern Data Platform Engineering", "Business Intelligence & Visualization", "Advanced Analytics & Forecasting"],
  },
  {
    id: "cloud",
    title: "Cloud Enablement & Modernization",
    image: "https://picsum.photos/id/1011/1100/680",
    alt: "Cloud infrastructure engineering",
    description: "Unlock the full potential of your infrastructure with our comprehensive cloud services, designed to enhance scale, resilience, and cost efficiency.",
    offerings: ["Cloud Migration Strategy", "Platform Operations & SRE", "FinOps & Cost Optimization", "Security & Compliance Automation"],
  },
  {
    id: "marketing",
    title: "Marketing Activation & Loyalty",
    image: "https://picsum.photos/id/64/1100/680",
    alt: "Marketing collaboration session",
    description: "Engage individuals at every stage of their journey with our comprehensive, data-driven marketing strategies.",
    offerings: ["Audience & Segmentation Strategy", "Campaign Orchestration & Automation", "Loyalty Program Design", "Attribution & Measurement"],
  },
  {
    id: "commerce",
    title: "Digital Commerce",
    image: "https://picsum.photos/id/1060/1100/680",
    alt: "Digital commerce checkout experience",
    description: "Leverage our tailored digital commerce solutions to enhance customer satisfaction, streamline operations, and maximize conversions for your business.",
    offerings: ["Composable Commerce Architecture", "Checkout & Conversion Optimization", "Marketplace Integration Services", "Merchandising & Personalization"],
  },
];

export default function ServicesSection() {
  // Track which standard service card is currently expanded (null means none are expanded)
  const [expandedServiceId, setExpandedServiceId] = useState(null);

  const toggleService = (id) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  // Separate the featured AI service from the other 7 core services
  const aiService = services.find(s => s.id === "ai");
  const coreServices = services.filter(s => s.id !== "ai");

  return (
    <section id="services" className="services-results" aria-label="Services that drive real results">
      <div className="services-container">
        <div className="services-header">
          <h2>Services that Drive Real Results</h2>
          <p className="services-intro">
            We bring together a broad set of capabilities across our global integrated teams, 
            harnessing cutting-edge technology, artificial intelligence, and deep industry expertise.
          </p>
        </div>

        {/* 1. FEATURED HERO CARD (Artificial Intelligence) */}
        {aiService && (
          <div className="featured-ai-card">
            <div className="featured-ai-image-wrap">
              <img src={aiService.image} alt={aiService.alt} />
              <div className="featured-ai-overlay"></div>
            </div>
            <div className="featured-ai-content">
              <span className="badge">PRIMARY CAPABILITY</span>
              <h3>{aiService.title}</h3>
              <p>{aiService.description}</p>
              
              <div className="featured-offerings">
                <h4>Core Architectural Offerings</h4>
                <ul>
                  {aiService.offerings.map((item) => (
                    <li key={item}>
                      <span className="bullet-marker">✦</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a className="prime-service-btn" href={aiService.link || "#"}>EXPLORE AI CAPABILITIES</a>
            </div>
          </div>
        )}

        {/* 2. THE CORE SERVICES GRID */}
        <div className="services-grid">
          {coreServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;
            return (
              <article 
                className={`grid-service-item ${isExpanded ? "is-expanded" : ""}`} 
                key={service.id}
              >
                <div className="grid-card-main" onClick={() => toggleService(service.id)}>
                  <div className="grid-card-title-row">
                    <h3>{service.title}</h3>
                    <button 
                      className="grid-card-toggle"
                      aria-label={`Toggle ${service.title} offerings`}
                      aria-expanded={isExpanded}
                    >
                      <span className="toggle-icon">{isExpanded ? "−" : "+"}</span>
                    </button>
                  </div>
                  <p>{service.description}</p>
                </div>

                {/* Collapsible Offerings Drawer */}
                <div className="grid-card-drawer">
                  <div className="drawer-inner-content">
                    <h4>Offerings</h4>
                    <ul>
                      {service.offerings.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}