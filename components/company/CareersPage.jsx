"use client";

import BodyClassName from "../BodyClassName";
import SiteFooter from "../site/SiteFooter";
import SiteHeader from "../site/SiteHeader";

const growthCards = [
  {
    title: "Amplify Your Digital Influence",
    copy: "Work on programs that combine strategy, product thinking, AI, and engineering delivery at meaningful scale.",
  },
  {
    title: "Expand Your Horizons",
    copy: "Collaborate across disciplines, learn from senior teammates, and grow through real ownership instead of narrow tasks.",
  },
  {
    title: "Elevate Your Impact",
    copy: "Help organizations make confident transformation decisions and see your work shape products people actually use.",
  },
];

const cultureCards = [
  {
    title: "Work You Want",
    copy: "Choose projects where your curiosity, craft, and problem-solving style can do their best work.",
    // Updated to abstract/architectural textures
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Empowered by Belonging",
    copy: "We build teams where people can contribute fully, speak candidly, and keep learning from one another.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Innovative Client Work",
    copy: "Our delivery teams move between AI strategy, digital products, experience design, and modernization programs.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Stay Connected",
    copy: "Remote-friendly collaboration, intentional planning, and healthy communication are built into the day-to-day.",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=900&q=80",
  },
];

const benefits = [
  "Award-winning culture centered on collaboration, trust, and thoughtful delivery.",
  "Flexible working options across home, hub, and client environments when the work calls for it.",
  "Hands-on growth through mentorship, cross-functional teaming, and visible ownership.",
  "Professional development support for certifications, workshops, and emerging tools.",
  "Competitive benefits that support both long-term growth and day-to-day wellbeing.",
  "A chance to contribute to work that creates measurable business and customer impact.",
];

const reputationLogos = ["Built In", "Out in Tech", "Glassdoor", "The Muse"];

const awards = [
  {
    title: "WorkLife Awards",
    meta: "News",
    copy: "MindGen recognized for building a modern culture shaped by trust, learning, and shared ownership.",
  },
  {
    title: "Delivery Excellence",
    meta: "Awards",
    copy: "Our teams continue to earn recognition for partnering closely and delivering complex work with rigor.",
  },
  {
    title: "Women in Leadership",
    meta: "Culture",
    copy: "We celebrate the people and practices helping our teams become stronger, more inclusive, and more ambitious.",
  },
];

export default function CareersPage() {
  return (
    <>
      <BodyClassName className="company-page-body" />
      <SiteHeader />
      <main className="company-page careers-page">
        <section className="company-hero company-hero-careers careers-hero">
          <div className="company-shell careers-hero-inner">
            <p className="company-eyebrow">Careers</p>
            <h1>Shape the Future of AI</h1>
            <p className="company-hero-copy">
              Join a global team working at the intersection of engineering, experience, and AI. We're growing with people who
              want to build excellent work and keep evolving while they do it.
            </p>
          </div>
        </section>

        <section className="careers-growth-section">
          <div className="company-shell">
            <div className="careers-split-heading">
              <div>
                <p className="careers-mini-label">Grow</p>
                <h2>With Us</h2>
              </div>
              <p>
                Our teams are built for people who want to solve meaningful problems, contribute across disciplines, and develop in
                public through real collaboration.
              </p>
            </div>

            <div className="careers-growth-grid">
              {growthCards.map((item) => (
                <article key={item.title} className="careers-growth-card premium-hover-card">
                  <span className="careers-growth-line" aria-hidden="true"></span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>

            <div className="careers-culture-grid">
              {cultureCards.map((item) => (
                <article
                  key={item.title}
                  className="careers-culture-card"
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(10, 18, 36, 0.04), rgba(10, 18, 36, 0.85)), url(${item.image})` }}
                >
                  <div className="careers-culture-copy">
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="careers-benefits-section">
          <div className="company-shell careers-benefits-grid">
            <div className="careers-benefits-copy">
              <p className="careers-mini-label">Value-driven</p>
              <h2>Benefits</h2>
              <p>
                We care about the conditions that help great work happen: flexibility, support, strong communication, and room to
                grow. Benefits should make work better, not noisier.
              </p>
            </div>
            <div className="careers-benefits-list">
              {benefits.map((item) => (
                <div key={item} className="careers-benefit-item">
                  <svg className="principle-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="talent-network-section">
          <div className="company-shell talent-network-grid">
            <div className="talent-network-copy">
              <p className="careers-mini-label">Continuous Growth</p>
              <h2>Join Our Talent Network</h2>
              <p>
                We are always looking to connect with exceptional strategists, engineers, and product leaders. 
                Share your details with us, and our leadership team will reach out directly when an opportunity aligns with your expertise.
              </p>
              <div className="talent-meta-tags">
                <span className="talent-tag">Remote-First Culture</span>
                <span className="talent-tag">Global Enterprise Projects</span>
              </div>
            </div>

            <div className="talent-form-wrapper">
              <form className="talent-network-form" action="#" method="POST">
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required />
                    <span className="focus-marker"></span>
                  </div>
                  <div className="input-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />
                    <span className="focus-marker"></span>
                  </div>
                </div>
                
                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                  <span className="focus-marker"></span>
                </div>

                <div className="input-group">
                  <label htmlFor="linkedin">LinkedIn Profile URL</label>
                  <input type="url" id="linkedin" name="linkedin" />
                  <span className="focus-marker"></span>
                </div>

                <div className="input-group">
                  <label htmlFor="expertise">Primary Area of Expertise</label>
                  <div className="select-wrapper">
                    <select id="expertise" name="expertise" required defaultValue="">
                      <option value="" disabled>Select your field...</option>
                      <option value="ai-strategy">AI Strategy & Transformation</option>
                      <option value="engineering">Software & Cloud Engineering</option>
                      <option value="data-science">Data Science & Analytics</option>
                      <option value="product-design">Product & Experience Design</option>
                      <option value="leadership">Operations & Delivery Leadership</option>
                    </select>
                    <span className="focus-marker"></span>
                  </div>
                </div>

                <button type="submit" className="talent-submit-btn">Submit Profile</button>
              </form>
            </div>
          </div>
        </section>

        {/* --- INJECTED MISSING AWARDS SECTION --- */}
        <section className="careers-awards-section">
          <div className="company-shell">
            <div className="careers-awards-grid">
              {awards.map((item) => (
                <article key={item.title} className="careers-award-card premium-hover-card">
                  <span className="award-meta">{item.meta}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="careers-reputation-section">
          <div className="company-shell careers-reputation-grid">
            <div className="careers-reputation-copy">
              <p className="careers-mini-label">Our reputation</p>
              <h2>Discover the MindGen Experience</h2>
              <p>See how people describe the culture, opportunities, and day-to-day experience of building with our teams.</p>
            </div>
            <div className="careers-logo-grid">
              {reputationLogos.map((item) => (
                <div key={item} className="careers-logo-card">{item}</div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}