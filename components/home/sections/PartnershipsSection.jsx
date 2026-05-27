"use client";

const partners = [
  { name: "AWS", logo: "/assets/images/partners/AWS.svg", tier: "Advanced Tier Services Partner" },
  { name: "Adobe", logo: "/assets/images/partners/Adobe.svg", tier: "Gold Solution Partner" },
  { name: "Microsoft", logo: "/assets/images/partners/Microsoft.svg", tier: "Microsoft Cloud Partner" },
  { name: "Google", logo: "/assets/images/partners/Google.svg", tier: "Top Reseller and Provider" },
  { name: "Salesforce", logo: "/assets/images/partners/Salesforce.svg", tier: "Summit-Level Partner" },
  { name: "Acquia", logo: "/assets/images/partners/Acquia.svg", tier: "Elite Partner" },
  { name: "Snowflake", logo: "/assets/images/partners/Snowflake.svg", tier: "Services Partner Select Tier" },
  { name: "Anthropic", logo: "/assets/images/partners/Anthropic.svg", tier: "Service Partner" },
  { name: "Optimizely", logo: "/assets/images/partners/Optimizely.svg", tier: "Platinum Partner" },
  { name: "Fabric", logo: "/assets/images/partners/Fabric.svg", tier: "Solution Partner" },
  { name: "Iterable", logo: "/assets/images/partners/Iterable.svg", tier: "Innovator Solution Partner" },
  { name: "ServiceNow", logo: "/assets/images/partners/ServiceNow.svg", tier: "Solution Partner" },
];

export default function PartnershipsSection() {
  // We duplicate the array to create a seamless, gapless infinite loop scroll animation
  const doublePartners = [...partners, ...partners];

  return (
    <section id="partnerships" className="partners-section" aria-label="Our partnerships">
      <div className="partners-container">
        
        <div className="partners-header">
          <h2>Our Partnerships Accelerate Innovation</h2>
          <p className="partners-intro">
            We elevate brand experiences through our partnerships and unparalleled platform expertise.
          </p>
        </div>

        {/* INFINITE MARQUEE TRACK */}
        <div className="marquee-viewport">
          <div className="marquee-track">
            {doublePartners.map((partner, index) => (
              <div className="partner-logo-card" key={`${partner.name}-${index}`}>
                <div className="logo-wrapper">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo - ${partner.tier}`}
                    loading="lazy"
                    onError={(e) => {
                      // Fallback typography placeholder if an image file is missing
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="logo-fallback-text" style={{ display: 'none' }}>
                    {partner.name}
                  </span>
                </div>
                <span className="partner-tier-badge">{partner.tier}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="partners-action-row">
          <button className="partners-btn">VIEW ALL PARTNERS</button>
        </div>

      </div>
    </section>
  );
}