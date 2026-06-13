"use client";

const ecosystems = [
  "AWS", "Google Cloud", "Microsoft Azure", "Adobe", "Salesforce", 
  "Snowflake", "Acquia", "Anthropic", "Optimizely", "Databricks", "ServiceNow"
];

export default function PartnershipsSection() {
  return (
    <section id="ecosystems" className="ecosystems-section" aria-label="Technology Ecosystems">
      <div className="ecosystems-container">
        
        <div className="ecosystems-header">
          <h2>Representative Technology Ecosystems</h2>
          <p className="ecosystems-intro">
            Our engineering and strategy teams bring deep implementation experience across modern enterprise platforms to accelerate your transformation.
          </p>
        </div>

        {/* Clean, compliant text-based capability pills */}
        <div className="ecosystems-grid">
          {ecosystems.map((tech, index) => (
            <div className="ecosystem-pill" key={index}>
              {tech}
            </div>
          ))}
        </div>

        {/* Client's Required Legal Disclaimer */}
        <div className="ecosystems-disclaimer">
          <p>
            * Disclaimer: Platform and technology names reflect the collective integration and delivery experience of our founding team, 
            and do not represent formal agency-level certifications or partner tier statuses.
          </p>
        </div>

      </div>
    </section>
  );
}