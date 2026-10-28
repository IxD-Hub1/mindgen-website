"use client";

import BodyClassName from "../BodyClassName";
import SiteFooter from "../site/SiteFooter";
import SiteHeader from "../site/SiteHeader";

const focusAreas = [
  {
    title: "Strategy Into Execution",
    copy: "We help organizations move from AI ambition to operating roadmaps, shipped experiences, and measurable business results.",
  },
  {
    title: "Responsible Transformation",
    copy: "Governance, security, adoption, and change enablement are built into delivery so transformation can scale with confidence.",
  },
  {
    title: "Cross-Functional Partnership",
    copy: "Our teams bring product, design, data, and engineering together in one shared delivery motion instead of fragmented handoffs.",
  },
];

const capabilityPillars = [
  {
    title: "AI Strategy",
    copy: "Roadmaps, operating models, and prioritization that connect AI ambition to the realities of business execution.",
  },
  {
    title: "Product & Experience",
    copy: "Service design, product thinking, and customer-centered experiences that teams can adopt and evolve over time.",
  },
  {
    title: "Engineering Delivery",
    copy: "Modern application, platform, and integration work that turns strategy into durable systems and shipped outcomes.",
  },
];

const principles = [
  "Practical AI built around business outcomes, not demos.",
  "Collaborative operating models that help teams adopt what gets shipped.",
  "Senior delivery partnership across strategy, design, data, and engineering.",
];

const metrics = [
  { value: "150+", label: "Programs shaped across AI, data, and digital experience" },
  { value: "92%", label: "Client partnership retention across multi-phase engagements" },
  { value: "24/7", label: "Distributed collaboration model spanning strategy, build, and support" },
];

const foundersData = [
  {
    name: "S. Thirugnana Sambandam",
    role: "FOUNDER & CEO",
    image: "", // Add actual path when ready
    stats: [
      { value: "16+ yrs", label: "STRATEGY & GOVERNANCE" },
      { value: "180+", label: "BRANDS TRANSFORMED" },
      { value: "IIM Indore", label: "EXECUTIVE AI ALUMNUS" }
    ],
    bio: [
      "S. Thirugnana Sambandam is a strategy and management professional with over 16 years of experience across corporate leadership, strategic advisory, and governance initiatives. He pursued studies in Strategy Management in Australia and has worked with PwC, before moving into middle and senior management roles across diverse corporate organisations.",
      "Over the course of his career, he has contributed to the strategy, positioning, and growth of more than 180 brands across multiple sectors, working closely with company chairpersons, promoters, senior leadership teams, and organisations on business and strategic management initiatives. His academic and executive learning credentials include specialisation in Environmental Economics and an Executive Management Programme in Artificial Intelligence from IIM Indore.",
      "As Co-Founder of MindGen, he plays a key role in shaping the company’s strategic direction, institutional positioning, governance approach, and ecosystem development. He supports the company in identifying high-value opportunities, strengthening institutional credibility, and building partnerships that can accelerate the adoption and commercialisation of MindGen’s AI-led solutions."
    ],
    award: "Beyond the corporate sector, he has contributed to public-sector strategy, governance, and institutional initiatives. He served as an Advisor to the Governor of Tamil Nadu from 2022 to 2026 and currently serves as Principal Advisor to the Hon’ble Governor of West Bengal."
  },
  {
    name: "Manas Panda",
    role: "CO-FOUNDER & COO",
    image: "/assets/images/founders/manas.jpg", // Add actual path when ready
    stats: [
      { value: "22+ yrs", label: "AI STRATEGY & MARTECH" },
      { value: "APAC • MENA\nSouth Asia • Africa", label: "MARKETS BUILT" },
      { value: "IIM Bangalore\nIIM Indore", label: "ALUMNUS" }
    ],
    bio: [
      "Manas Panda is an AI strategist, transformation consultant, and growth-driven marketing leader with over 22 years of experience across AI-led transformation, MarTech, Go-To-Market strategy, business growth, customer experience, and international market expansion. His experience spans APAC, South Asia, MENA, Africa, and international markets, with leadership roles across MoneyGram International, Paragon Group UK, HH Global, and DDB Mudra Group.",
      "Over the course of his career, he has worked across global and regional markets, connecting business strategy, marketing, technology, data, operations, and customer experience to deliver measurable growth and transformation. His experience includes building and managing complex client, partner, vendor, and delivery ecosystems.",
      "As Co-Founder & COO of MindGen Pvt Ltd, he leads AI strategy, product development, Forward Deployment Engineering, go-to-market, and commercialisation initiatives. He works closely with organisations to identify business challenges, data and workflow gaps, prioritise high-value AI use cases, and translate them into practical, scalable, and measurable AI-led solutions."
    ]
  },
  {
    name: "Dr. P Pavithra",
    role: "CO-FOUNDER & DIRECTOR",
    image: "", // Add actual path when ready
    stats: [
      { value: "10+ yrs", label: "EDTECH & INSTITUTIONS" },
      { value: "Forbes India", label: "MARQUEE EDUPRENEUR 2019" },
      { value: "PebHok", label: "TRADEMARKED BRAND FOUNDER" }
    ],
    bio: [
      "Dr. Pavithra is an education entrepreneur and healthcare professional with over 10 years of experience across education, early learning, EdTech, and institution building. She pursued Dentistry from Annamalai University and spent nearly five years in the healthcare sector before transitioning into education and entrepreneurship.",
      "Over the past decade, she has built and developed her own trademarked education brand, PebHok, creating learning and training initiatives across multiple locations. Through her EdTech and preschool ventures, she has trained more than 1,000 learners and supported the education and development of thousands of primary and preschool children.",
      "For MindGen, her background can inform educator readiness, Health-Tech design, assessment journeys and institutional adoption. This complements the founding team’s strategy, growth and AI implementation experience."
    ],
    award: "Her work received national recognition when she was featured in the Forbes India Marquee Edition 2019 among 35 Edupreneurs recognised for their contribution to children’s education in India. Her institution has also been recognised as a Great Place to Study."
  }
];

const flywheelData = [
  {
    num: "01",
    stage: "Diagnose",
    activity: "Business, process, data and customer-journey diagnostics",
    effect: "Consulting revenue; discovery of repeatable pain points"
  },
  {
    num: "02",
    stage: "Design",
    activity: "AI roadmap, workflow redesign, product concept and governance",
    effect: "Creates domain and workflow IP"
  },
  {
    num: "03",
    stage: "Build",
    activity: "AI applications, dashboards, agents, integrations and operating systems",
    effect: "Converts know-how into reusable software; accounting treatment requires review"
  },
  {
    num: "04",
    stage: "Deploy",
    activity: "Forward-deployed implementation, adoption and measurement",
    effect: "Produces real-world evidence and implementation revenue"
  },
  {
    num: "05",
    stage: "Productise",
    activity: "Standard packaging, modules, APIs, data schemas and controls",
    effect: "Improves gross margin and repeatability"
  },
  {
    num: "06",
    stage: "Scale",
    activity: "Subscription, usage, enterprise contracts and channel distribution",
    effect: "Creates recurring revenue and potential valuation multiple expansion"
  }
];

export default function AboutUsPage() {
  return (
    <>
      <BodyClassName className="company-page-body" />
      <SiteHeader />
      <main className="company-page about-page">
        
        <section className="company-hero about-hero">
          <div className="company-shell about-hero-inner">
            <p className="company-eyebrow">About Us</p>
            <h1>Building AI systems that turn bold ideas into durable business outcomes.</h1>
            <p className="company-hero-copy">
              MindGen partners with ambitious teams to design, ship, and scale practical AI experiences. We blend strategy, product
              thinking, and engineering execution so transformation stays grounded in the realities of the business.
            </p>
            <div className="about-hero-badges">
              <span className="premium-badge">AI Strategy</span>
              <span className="premium-badge">Product Thinking</span>
              <span className="premium-badge">Engineering Execution</span>
            </div>
          </div>
        </section>

        <section className="about-intro-section">
          <div className="company-shell">
            <div className="about-story-grid">
              <div className="about-story-panel">
                <p className="about-mini-label">What we solve</p>
                <h3>Organizations need more than experimentation. They need delivery discipline that scales.</h3>
                <p>
                  We help teams create momentum across strategy, implementation, adoption, and measurable value creation so change can
                  survive real organizational complexity.
                </p>
              </div>

              <div className="about-focus-grid">
                {focusAreas.map((item) => (
                  <article key={item.title} className="about-focus-card premium-hover-card">
                    <span className="about-growth-line" aria-hidden="true"></span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW FOUNDERS SECTION --- */}
        <section className="about-founders-section">
          <div className="company-shell">
            
            <div className="founders-intro">
              <p className="about-mini-label">Leadership</p>
              <h2>Guided by four decades of combined experience in strategy, AI, and global market growth.</h2>
              <p>
                MindGen is built by an operating team that has delivered AI transformation for enterprises and public sector bodies, successfully taking products and brands to market across the Asia Pacific, Middle East, and Africa.
              </p>
            </div>

            <div className="founders-grid">
              {foundersData.map((founder) => (
                <article key={founder.name} className="founder-card">
                  <aside className="founder-sidebar">
                    
                    {/* NEW IMAGE PLACEHOLDER */}
                    <div className="founder-image-wrapper">
                      {founder.image ? (
                        <img src={founder.image} alt={founder.name} className="founder-photo" />
                      ) : (
                        <div className="founder-photo-fallback">
                           <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                      )}
                    </div>

                    <div className="founder-header">
                      <h3>{founder.name}</h3>
                      <span className="founder-role">{founder.role}</span>
                    </div>
                    <div className="founder-stats">
                      {founder.stats.map((stat, i) => (
                        <div key={i} className="stat-item">
                          <span className="stat-value">{stat.value}</span>
                          <span className="stat-label">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </aside>
                  <div className="founder-bio">
                    {founder.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                    {founder.award && (
                      <div className="award-callout">
                        <strong>Highlight:</strong> {founder.award}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        <section className="about-flywheel-section">
          <div className="company-shell">
            
            <div className="flywheel-header">
              <p className="about-mini-label">How We Work</p>
              <h2>The Services-to-Product Value Flywheel</h2>
              <p>
                We do not just build software; we engineer measurable business outcomes. Our proven six-stage operational loop turns strategic consulting into scalable, proprietary AI products.
              </p>
            </div>

            <div className="flywheel-grid">
              {flywheelData.map((item) => (
                <article key={item.num} className="flywheel-card">
                  <div className="flywheel-card-front">
                    <span className="flywheel-num">{item.num}</span>
                    <h3>{item.stage}</h3>
                    <p className="flywheel-activity">{item.activity}</p>
                  </div>
                  
                  {/* Hidden by default, reveals on hover */}
                  <div className="flywheel-card-reveal">
                    <span className="reveal-label">Economic Effect</span>
                    <p>{item.effect}</p>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        <section className="about-capabilities-section">
          <div className="company-shell">
            <div className="about-section-heading">
              <p className="about-mini-label">What we bring</p>
              <h2>Integrated capability across strategy, experience, and build.</h2>
            </div>
            <div className="about-capabilities-grid">
              {capabilityPillars.map((item) => (
                <article key={item.title} className="about-capability-card premium-hover-card">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-metrics-section">
          <div className="company-shell">
            <div className="about-metrics-grid">
              {metrics.map((item) => (
                <article key={item.value} className="about-metric-card premium-hover-card">
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-journey-section">
          <div className="company-shell">
            <div className="about-journey-heading">
              <p className="about-mini-label">Our Genesis</p>
              <h2>Built for modern transformation.</h2>
            </div>
            
            <div className="founder-statement-wrapper">
              <article className="founder-statement-card">
                <div className="statement-header">
                  <span className="statement-year">2024–2025</span>
                  <div className="statement-line"></div>
                </div>
                <h3>MindGen is Formed</h3>
                <p>
                  MindGen was shaped as an AI-native strategy and workflow transformation practice, 
                  built on the founders’ long experience in marketing, procurement, technology adoption, 
                  and business transformation.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="about-cta-section">
          <div className="company-shell">
            <div className="about-cta-card">
              <div>
                <p className="about-section-kicker">Partner with MindGen</p>
                <h2>Looking for a team that can connect AI ambition to execution?</h2>
              </div>
              <a href="/contact-us" className="about-pill-btn strategy-btn">Book a Strategy Workshop</a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}