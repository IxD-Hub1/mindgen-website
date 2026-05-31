"use client";

import { useState, useEffect } from "react";

const tabs = [
  ["financial", "Financial", "Services"],
  ["healthcare", "Healthcare", ""],
  ["telecom", "Telecommunications", ""],
  ["retail", "Retail", ""],
  ["restaurant", "Restaurant &", "Convenience"],
  ["consumer", "Consumer", "Goods"],
  ["logistics", "Logistics", ""],
  ["travel", "Travel &", "Hospitality"],
  ["industrial", "Industrial &", "Manufacturing"],
  ["media", "Media, Tech, &", "Entertainment"],
];

const industriesContent = {
  financial: {
    headline: "Modernizing Banking Assets with Cloud-Native Security",
    paragraph: "Accelerating secure asset transactions, automated risk scoring engines, and strict compliance deployments for global institutions.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    insights: [
      { tag: "CASE STUDY", title: "Automating Asset Valuation via Secure Machine Learning Models", url: "/insights/banking-case-study", iconType: "case-study" },
      { tag: "ARTICLE", title: "The New Framework for Cloud Banking Regulatory Compliance", url: "/blog/banking-cloud-framework", iconType: "article" },
      { tag: "REPORT", title: "Generative AI Applications within Sovereign Wealth Management", url: "/resources/sovereign-wealth-ai", iconType: "report" }
    ]
  },
  healthcare: {
    headline: "Reimagining Care Journeys with Intelligent Platforms",
    paragraph: "Creating connected digital experiences that improve patient outcomes, lower care costs, and streamline operational hospital systems.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80",
    insights: [
      { tag: "HEALTH SYSTEM", title: "Transforming Patient Access with AI-Powered Triage", url: "/insights/ai-patient-triage", iconType: "pulse" },
      { tag: "CASE STUDY", title: "Improving Clinical Workflows Through Automation", url: "/insights/clinical-workflow-automation", iconType: "case-study" },
      { tag: "ARTICLE", title: "Designing Digital Trust in Modern Healthcare", url: "/blog/digital-trust-healthcare", iconType: "article" }
    ]
  },
  telecom: {
    headline: "Enabling Seamless Journeys and Unlocking New Revenue Streams",
    paragraph: "Partnering with telecom leaders to modernize core digital operating systems, personalize customer touchpoints, and clear edge data bottlenecks.",
    image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1400&q=80",
    insights: [
      { tag: "LEADING TELECOM", title: "Leading Telecom Company Reimagines Risk Analysis with GenAI", url: "/insights/telecom-risk-genai", iconType: "case-study" },
      { tag: "ARTICLE", title: "Taking Telcos to the Sky via Distributed Core Nodes", url: "/blog/distributed-core-nodes", iconType: "article" },
      { tag: "OPERATOR", title: "Resolving Severe Inefficiencies in Systemic Call Logging", url: "/insights/call-logging-inefficiencies", iconType: "report" }
    ]
  },
  retail: {
    headline: "Unified Omnichannel Retail Built for Hyper-Scale",
    paragraph: "Unifying brick-and-mortar operations with real-time digital storefronts, predictive inventory intelligence, and frictionless checkout lanes.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    insights: [
      { tag: "E-COMMERCE", title: "Predicting Post-Holiday Demand Using Real-Time Data Pipelines", url: "/insights/retail-demand-prediction", iconType: "report" },
      { tag: "INSIGHT", title: "The Architecture of Frictionless Micro-Fulfillment Centers", url: "/blog/micro-fulfillment-centers", iconType: "article" },
      { tag: "CASE STUDY", title: "Scaling Headless Commerce for 15M Monthly Active Shoppers", url: "/insights/headless-commerce-scale", iconType: "case-study" }
    ]
  },
  restaurant: {
    headline: "Flipping the Script on Restaurant Tech Ecosystems",
    paragraph: "Optimizing automated kitchen display networks, third-party logistics integrations, and personalized multi-brand customer loyalty mechanics.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80",
    insights: [
      { tag: "QSR TRENDS", title: "Reducing Drive-Thru Friction via Predictive AI Menu Ingestion", url: "/blog/qsr-predictive-menu", iconType: "report" },
      { tag: "CASE STUDY", title: "Architecting POS Consolidation Across 400 Global Franchises", url: "/insights/pos-consolidation-franchise", iconType: "case-study" },
      { tag: "WHITE PAPER", title: "The Next Era of Supply Chain Integrity in Food Service", url: "/resources/foodservice-supply-chain", iconType: "article" }
    ]
  },
  consumer: {
    headline: "Direct-to-Consumer Architectures That Foster Real Loyalty",
    paragraph: "Empowering consumer goods brands with predictive data fabrics to anticipate behavior shifts, shorten cycles, and manage demand signals.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80",
    insights: [
      { tag: "CPG INSIGHT", title: "Leveraging First-Party Consumer Data in a Post-Cookie Web", url: "/blog/first-party-cpg-data", iconType: "article" },
      { tag: "CASE STUDY", title: "Automating Dynamic SKU Rebalancing Across Regional Hubs", url: "/insights/sku-rebalancing-automation", iconType: "case-study" },
      { tag: "REPORT", title: "Sustainable Packaging Lifecycle Auditing via Ledger Tech", url: "/resources/sustainable-packaging-ledger", iconType: "report" }
    ]
  },
  logistics: {
    headline: "Autonomous Supply Chains Engineered for Ultimate Predictability",
    paragraph: "Replacing cross-docking friction and transit blind spots with intelligent asset tracking networks and dynamic multi-modal route modeling.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    insights: [
      { tag: "LAST MILE", title: "Dynamic Route Optimization Engines Under High Volatility", url: "/insights/route-optimization-engines", iconType: "report" },
      { tag: "CASE STUDY", title: "Migrating Global Freight Auditing to Serverless Architecture", url: "/insights/serverless-freight-auditing", iconType: "case-study" },
      { tag: "ARTICLE", title: "Real-Time Telematics Ingestion Using Scalable Event Streams", url: "/blog/realtime-telematics-ingestion", iconType: "article" }
    ]
  },
  travel: {
    headline: "Smart Booking Dynamics for Complex Global Networks",
    paragraph: "Modernizing historical booking mainframes into responsive API layers capable of managing real-time pricing and personalization requests.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
    insights: [
      { tag: "HOSPITALITY", title: "Building High-Throughput Dynamic Room Pricing Protocols", url: "/insights/dynamic-room-pricing", iconType: "report" },
      { tag: "CASE STUDY", title: "Modernizing Legacy GDS Engines Without Service Downtime", url: "/insights/legacy-gds-modernization", iconType: "case-study" },
      { tag: "TRENDS", title: "Biometric Identity Frameworks in International Transit Hubs", url: "/blog/biometric-identity-transit", iconType: "pulse" }
    ]
  },
  industrial: {
    headline: "Connecting the Operational Fabric of Smart Factories",
    paragraph: "Bridging isolated on-premise hardware networks with cloud intelligence to trigger automated preventive maintenance actions instantly.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
    insights: [
      { tag: "INDUSTRY 4.0", title: "Reducing Unexpected Factory Floor Downtime via Edge ML", url: "/insights/edge-ml-factory-downtime", iconType: "report" },
      { tag: "CASE STUDY", title: "Securing Mission-Critical SCADA Infrastructure via Zero-Trust", url: "/insights/secure-scada-zerotrust", iconType: "case-study" },
      { tag: "WHITE PAPER", title: "Deploying Private 5G Topologies in Heavy Manufacturing", url: "/resources/private-5g-manufacturing", iconType: "article" }
    ]
  },
  media: {
    headline: "Ultra-Low Latency Streaming and AI Content Supply Chains",
    paragraph: "Powering modern asset streaming architectures, global delivery edges, and automated digital asset rights tracking nodes.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1400&q=80",
    insights: [
      { tag: "STREAMING", title: "Optimizing Multi-CDN Streaming Matrices Under Peak Load", url: "/insights/multi-cdn-streaming-optimization", iconType: "report" },
      { tag: "CASE STUDY", title: "Automated Metadata Tagging Using Multi-Modal AI Pipelines", url: "/insights/multimodal-metadata-tagging", iconType: "case-study" },
      { tag: "INSIGHT", title: "Securing Live Premium Broadcast Ingestion via WebRTC Overlays", url: "/blog/webrtc-live-broadcast-security", iconType: "article" }
    ]
  }
};

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const rotationTimer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length);
    }, 6000);
    return () => clearInterval(rotationTimer);
  }, [isPaused]);

  const activeKey = tabs[activeIndex][0];
  const activeContent = industriesContent[activeKey] || industriesContent["financial"];

  const handleTabClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true); 
  };

  // Helper handling unique matching vector graphics
  const renderInsightIcon = (type) => {
    switch (type) {
      case "case-study":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "article":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case "report":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 002-2h2a2 2 0 002 2v10a2 2 0 00-2 2h-2a2 2 0 00-2-2zm9 0v-4a2 2 0 00-2-2h-2a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2z" />
          </svg>
        );
      case "pulse":
      default:
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
    }
  };

  return (
    <section id="industries" className="industry-showcase" aria-label="Industry showcase">
      <div className="industry-container">
        
        <h2>
          Empowering Industry Leaders to Navigate the Future with<br />End-to-End Innovation
        </h2>

        {/* Tab Strip */}
        <div className="industry-tabs-shell">
          <button className="tab-arrow tab-arrow-left" type="button" aria-label="Scroll tabs left">&lt;</button>
          <div className="industry-tabs" role="tablist" aria-label="Industry categories">
            {tabs.map(([key, line1, line2], index) => (
              <button
                key={key}
                className={`industry-tab${activeIndex === index ? " active" : ""}`}
                role="tab"
                aria-selected={activeIndex === index ? "true" : "false"}
                onClick={() => handleTabClick(index)}
              >
                {line1}
                {line2 ? <><br />{line2}</> : null}
              </button>
            ))}
          </div>
          <button className="tab-arrow tab-arrow-right" type="button" aria-label="Scroll tabs right">&gt;</button>
        </div>

        {/* Core Frame Dashboard Layout */}
        <div className="industry-dashboard-frame">
          
          <div className="dashboard-media-panel">
            <img
              src={activeContent.image}
              alt={`${tabs[activeIndex][1]} asset showcase`}
              key={activeKey}
            />
          </div>
          
          <div className="dashboard-content-panel">
            <div className="panel-top-details">
              
              {/* Refactored High-Affordance Circular Play/Pause Button */}
              <div className="autoplay-toggle-wrapper">
                <button 
                  className={`autoplay-toggle-btn ${isPaused ? "paused" : "playing"}`}
                  onClick={() => setIsPaused(!isPaused)}
                  type="button"
                  aria-label={isPaused ? "Resume auto rotation" : "Pause auto rotation"}
                >
                  {isPaused ? "▶" : "II"}
                </button>
              </div>
              
              <h3 className="featured-headline">{activeContent.headline}</h3>
              <p className="featured-paragraph">{activeContent.paragraph}</p>
              <button className="industry-action-btn">LEARN MORE</button>
            </div>

            {/* Semantic Link Redirect Cards */}
            <div className="panel-integrated-insights">
              {activeContent.insights.map((card, index) => (
                <a 
                  href={card.url} 
                  className="mini-icon-card-link" 
                  key={index}
                  title={`Read more about ${card.title}`}
                >
                  <article className="mini-icon-card">
                    <div className="mini-icon-box">
                      {renderInsightIcon(card.iconType)}
                    </div>
                    <div className="mini-card-text">
                      <span className="mini-tag">{card.tag}</span>
                      <h4>{card.title}</h4>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}