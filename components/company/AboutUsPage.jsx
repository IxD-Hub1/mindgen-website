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
    role: "FOUNDER",
    stats: [
      { value: "~20 yrs", label: "CORPORATE STRATEGY" },
      { value: "180+", label: "BRANDS TRANSFORMED" },
      { value: "IIM Indore", label: "ALUMNUS" }
    ],
    bio: [
      "A corporate strategist and AI transformation leader with nearly two decades of experience across FMCG, real estate, healthcare and diversified industries, having led strategy and business transformation for over 180 brands. An alumnus of IIM Indore, with Strategy Management qualifications from Australia and Executive Management in Artificial Intelligence, he brings a rare combination of business strategy, technology and governance expertise.",
      "As Founder of MindGen Pvt Ltd he is driving enterprise and public-sector AI adoption through strategic consulting and AI-native solutions. He has contributed to strategy, public policy and governance initiatives, serving as an Advisor to the Governors of Tamil Nadu and West Bengal, and is associated with the Indo-Australia Business Council."
    ],
    award: "Under his leadership MindGen was honoured with the Best AI Startup Award at the AICRA Summit, supported by the Ministry of Electronics and Information Technology (MeitY), Government of India."
  },
  {
    name: "Manas Panda",
    role: "CO-FOUNDER & COO",
    stats: [
      { value: "22+ yrs", label: "MARKETING & GROWTH" },
      { value: "APAC • MENA\nSouth Asia • Africa", label: "MARKETS BUILT" },
      { value: "MoneyGram\nInternational", label: "APAC, ME & AFRICA LEADERSHIP" }
    ],
    bio: [
      "A growth-driven marketing leader and AI strategist with more than 22 years of experience across consumer marketing, MarTech, go-to-market, business growth and global market expansion. He works at the intersection of business, data, product and execution, helping organisations move from AI ideas to practical, scalable systems that improve decision-making, customer experience, workflow efficiency and revenue growth.",
      "At MindGen he leads Forward Deployment Engineering — working closely with clients to understand their real business challenges, data gaps, workflows and growth priorities, then designing and deploying AI-led solutions that are usable, measurable and commercially relevant.",
      "He has worked across Asia Pacific, South Asia, MENA, Africa and other international markets, building omnichannel strategies, managing regional portfolios, driving ROI-led campaigns and scaling business outcomes — including a leadership role at MoneyGram International covering APAC, the Middle East and Africa."
    ]
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
              {foundersData.map((founder, index) => (
                <article key={founder.name} className="founder-card">
                  <aside className="founder-sidebar">
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
                        <strong>Honoured:</strong> {founder.award.replace('Honoured with the ', '')}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        <section className="about-principles-section">
          <div className="company-shell about-principles-grid">
            <div className="about-principles-copy">
              <p className="about-mini-label">How we work</p>
              <h2>We turn potential into performance with clarity at every step.</h2>
              <p>
                That means aligning stakeholders early, building responsibly, and creating experiences that teams can adopt. Our role
                is to make transformation feel executable, not abstract.
              </p>
            </div>

            <div className="about-principles-list">
              {principles.map((item) => (
                <div key={item} className="about-principle-item">
                  <svg className="principle-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <p>{item}</p>
                </div>
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