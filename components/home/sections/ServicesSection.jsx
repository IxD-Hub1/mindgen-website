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
    description: "Elevate your digital presence by creating compelling, results-driven experiences and products that deeply engage customers with your brand.",
    offerings: ["Customer Journey Strategy", "UX Research & Service Design", "Product Design Systems", "Conversion Optimization Programs"],
  },
  {
    id: "engineering",
    title: "Digital Product & Platform Engineering",
    description: "Modernize legacy applications and optimize platforms to stay competitive and enhance user engagement.",
    offerings: ["Cloud-native Product Engineering", "API & Microservices Architecture", "Quality Engineering Automation", "Performance & Scalability Optimization"],
  },
  {
    id: "transformation",
    title: "Enterprise Digital Transformation",
    description: "Empower your organization with our collaborative approach to digital transformation, optimizing processes, change management, and driving business growth.",
    offerings: ["Digital Roadmap Development", "Operating Model Transformation", "Enterprise Change Enablement", "Transformation Program Governance"],
  },
  {
    id: "data",
    title: "Data & Analytics",
    description: "Discover how our expertise in data and analysis can transform your business through enhanced data visibility to drive success.",
    offerings: ["Data Strategy & Governance", "Modern Data Platform Engineering", "Business Intelligence & Visualization", "Advanced Analytics & Forecasting"],
  },
  {
    id: "cloud",
    title: "Cloud Enablement & Modernization",
    description: "Unlock the full potential of your infrastructure with our comprehensive cloud services, designed to enhance scale, resilience, and cost efficiency.",
    offerings: ["Cloud Migration Strategy", "Platform Operations & SRE", "FinOps & Cost Optimization", "Security & Compliance Automation"],
  },
  {
    id: "marketing",
    title: "Marketing Activation & Loyalty",
    description: "Engage individuals at every stage of their journey with our comprehensive, data-driven marketing strategies.",
    offerings: ["Audience & Segmentation Strategy", "Campaign Orchestration & Automation", "Loyalty Program Design", "Attribution & Measurement"],
  },
  {
    id: "commerce",
    title: "Digital Commerce",
    description: "Leverage our tailored digital commerce solutions to enhance customer satisfaction, streamline operations, and maximize conversions for your business.",
    offerings: ["Composable Commerce Architecture", "Checkout & Conversion Optimization", "Marketplace Integration Services", "Merchandising & Personalization"],
  },
];

export default function ServicesSection() {
  const aiService = services.find((s) => s.id === "ai");
  const coreServices = services.filter((s) => s.id !== "ai");

  // Track the active item inside our Interactive Hub panel
  const [activeHubId, setActiveHubId] = useState(coreServices[0].id);
  const activeService = coreServices.find((s) => s.id === activeHubId);

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

        {/* FEATURED STANDALONE HERO CARD (Artificial Intelligence) */}
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

        {/* THE SPLIT-PANE INTERACTIVE HUB */}
        <div className="services-hub-pane">
          
          {/* Left Menu Selection Column */}
          <div className="hub-sidebar-menu">
            {coreServices.map((service) => (
              <button
                key={service.id}
                className={`hub-menu-tab ${activeHubId === service.id ? "is-active" : ""}`}
                onClick={() => setActiveHubId(service.id)}
              >
                <span className="hub-tab-dot"></span>
                {service.title}
              </button>
            ))}
          </div>

          {/* Right Active Details Display Panel */}
          <div className="hub-display-panel">
            {activeService && (
              <div className="hub-panel-inner animate-fade-in">
                <h3>{activeService.title}</h3>
                <p className="hub-panel-description">{activeService.description}</p>
                
                <div className="hub-panel-offerings">
                  <h4>Offerings Include:</h4>
                  <ul>
                    {activeService.offerings.map((item) => (
                      <li key={item}>
                        <span className="bullet-diamond">♦</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}