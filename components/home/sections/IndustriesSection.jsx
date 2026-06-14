"use client";

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
  return (
    <section id="industries" className="industry-showcase" aria-label="Industry Solutions">
      <div className="industry-container">
        
        <div className="industry-header-wrap">
          <h2>
            Empowering Industry Leaders to Navigate the Future with End-to-End Innovation
          </h2>
          <p className="industry-subheadline">
            Tailored AI transformations and operational workflows across global enterprise ecosystems.
          </p>
        </div>

        <div className="industry-bento-grid">
          {strategicIndustries.map((industry) => (
            <a href={industry.link} className="industry-card-link" key={industry.id}>
              <article className="industry-bento-card">
                <div className="card-content-top">
                  <h3>{industry.title}</h3>
                  <p>{industry.copy}</p>
                </div>
                <div className="card-action-bottom">
                  <span className="card-cta-text">Explore Solutions</span>
                  <svg className="card-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </article>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}