"use client";

const outcomes = [
  {
    id: "logistics",
    sector: "Global Logistics & Supply Chain",
    challenge: "Fragmented data silos and reactive routing models led to high operational overhead, frequent delivery delays, and unpredictable fuel costs.",
    solution: "We deployed a predictive AI routing engine and a unified data dashboard, giving leadership real-time visibility across the entire fleet network.",
    metric: "32%",
    impact: "Reduction in routing delays and operational overhead."
  },
  {
    id: "banking",
    sector: "Commercial Banking",
    challenge: "Manual compliance reviews and legacy risk-scoring models created a massive operational bottleneck, slowing down enterprise loan approvals.",
    solution: "We architected an automated, AI-assisted risk-scoring workflow integrated securely into their highly regulated core banking environment.",
    metric: "60%",
    impact: "Increase in compliance workflow speed and accuracy."
  },
  {
    id: "healthcare",
    sector: "National Healthcare Network",
    challenge: "Disconnected patient data systems across dozens of clinics resulted in poor care continuity and a massive administrative burden for practitioners.",
    solution: "We engineered a centralized, compliant data ecosystem with an AI-driven administrative interface to automate patient outreach and scheduling.",
    metric: "45%",
    impact: "Reduction in administrative manual data entry."
  }
];

export default function ProofSection() {
  return (
    <section id="proof" className="proof-section" aria-label="Client Outcomes and Case Studies">
      <div className="proof-container">
        
        <div className="proof-header">
          <h2>Proven Business Outcomes</h2>
          <p className="proof-intro">
            We measure the success of an AI transformation not by the sophistication of the model, but by the measurable impact on your operational efficiency and bottom line.
          </p>
        </div>

        <div className="proof-grid">
          {outcomes.map((item) => (
            <article className="proof-card" key={item.id}>
              
              <div className="proof-card-top">
                <span className="proof-sector">{item.sector}</span>
                <div className="proof-metric-wrap">
                  <span className="proof-metric-number">{item.metric}</span>
                  <p className="proof-metric-text">{item.impact}</p>
                </div>
              </div>
              
              <div className="proof-card-bottom">
                <div className="proof-detail-group">
                  <h4>The Challenge</h4>
                  <p>{item.challenge}</p>
                </div>
                <div className="proof-detail-group">
                  <h4>The Architecture</h4>
                  <p>{item.solution}</p>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}