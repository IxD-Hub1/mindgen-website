"use client";

import { useState } from "react";
import BodyClassName from "../BodyClassName";
import SiteFooter from "../site/SiteFooter";
import SiteHeader from "../site/SiteHeader";

const contactCards = [
  {
    title: "New Business",
    detail: "share@mindgen.in",
    copy: "Tell us what you're building, where you're stuck, and what success looks like.",
  },
  {
    title: "Careers",
    detail: "careers@mindgen.in",
    copy: "Questions about open roles, hiring timelines, or team expectations are welcome.",
  },
  {
    title: "Partnerships",
    detail: "partners@mindgen.in",
    copy: "Reach out if you want to collaborate on delivery, platforms, or go-to-market programs.",
  },
];

const offices = ["Chennai", "Mumbai"];

export default function ContactUsPage() {
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");

  const [formData, setFormData] = useState({
    "enquiry-type": "New Business",
    "first-name": "", "last-name": "", "biz-email": "", "phone-number": "",
    "company-name": "", "country-city": "", "company-size": "",
    "service-interest": "", "budget-range": "", "timeline": ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Note: Official reCAPTCHA validation logic should go here before the fetch
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, marketingOptIn }),
      });
      if (response.ok) {
        setFormStatus("success");
        setFormData({ 
          "enquiry-type": "New Business", "first-name": "", "last-name": "", 
          "biz-email": "", "phone-number": "", "company-name": "", 
          "country-city": "", "company-size": "", "service-interest": "", 
          "budget-range": "", "timeline": "" 
        });
        setMarketingOptIn(false);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus("error");
    }
  };

  return (
    <>
      <BodyClassName className="company-page-body" />
      <SiteHeader />
      <main className="company-page contact-page">
        
        <section className="company-hero contact-hero">
          <div className="company-shell contact-hero-inner">
            <p className="company-eyebrow">Contact Us</p>
            <h1>Let's talk about the outcomes you need and the path to get there.</h1>
            <p className="company-hero-copy">
              Whether you're shaping an AI roadmap, modernizing operations, or looking for a hands-on delivery partner, we're
              ready to help you turn momentum into execution.
            </p>
          </div>
        </section>

        <section className="contact-cards-section">
          <div className="company-shell">
            <div className="contact-card-grid">
              {contactCards.map((item) => (
                <article key={item.title} className="contact-feature-card premium-hover-card">
                  <h3>{item.title}</h3>
                  <a href={`mailto:${item.detail}`} className="contact-email-link">{item.detail}</a>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="company-shell contact-form-grid">
            
            <div className="contact-form-card">
              <div className="contact-form-header">
                <p className="contact-section-kicker">Send us a note</p>
                <h2>Let's innovate together.</h2>
                <p className="form-subheading">Tell us about your business challenges. Our team of AI and strategy experts will help you build a roadmap to measurable ROI.</p>
              </div>

              <form className="innovate-form" onSubmit={handleSubmit}>
                
                {/* Standard Inputs */}
                <div className="form-full-width">
                  <label htmlFor="enquiry-type">Type of Enquiry*</label>
                  <select id="enquiry-type" name="enquiry-type" required value={formData["enquiry-type"]} onChange={handleInputChange}>
                    <option value="New Business">New Business Strategy & Consulting</option>
                    <option value="Partnerships">Partnerships & Co-Innovation</option>
                    <option value="Careers">Careers & Talent Network</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="first-name">First Name*</label>
                    <input id="first-name" name="first-name" type="text" required value={formData["first-name"]} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name">Last Name*</label>
                    <input id="last-name" name="last-name" type="text" required value={formData["last-name"]} onChange={handleInputChange} />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="biz-email">Business Email*</label>
                    <input id="biz-email" name="biz-email" type="email" required value={formData["biz-email"]} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input id="phone-number" name="phone-number" type="tel" value={formData["phone-number"]} onChange={handleInputChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company-name">Company Name*</label>
                    <input id="company-name" name="company-name" type="text" required value={formData["company-name"]} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country-city">Country / City</label>
                    <input id="country-city" name="country-city" type="text" value={formData["country-city"]} onChange={handleInputChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company-size">Company Size</label>
                    <select id="company-size" name="company-size" value={formData["company-size"]} onChange={handleInputChange}>
                      <option value="">Select size...</option>
                      <option value="1-50">1 - 50 employees</option>
                      <option value="51-200">51 - 200 employees</option>
                      <option value="201-1000">201 - 1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="service-interest">Service Interest</label>
                    <select id="service-interest" name="service-interest" value={formData["service-interest"]} onChange={handleInputChange}>
                      <option value="">Select service...</option>
                      <option value="AI Strategy">AI Strategy & Readiness</option>
                      <option value="Workflow Automation">Agentic Workflow Automation</option>
                      <option value="Data Dashboards">Data Intelligence & Dashboards</option>
                      <option value="Other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget-range">Budget Range</label>
                    <select id="budget-range" name="budget-range" value={formData["budget-range"]} onChange={handleInputChange}>
                      <option value="">Select budget...</option>
                      <option value="Under $50k">Under $50k</option>
                      <option value="$50k - $150k">$50k - $150k</option>
                      <option value="$150k+">$150k+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="timeline">Project Timeline</label>
                    <select id="timeline" name="timeline" value={formData["timeline"]} onChange={handleInputChange}>
                      <option value="">Select timeline...</option>
                      <option value="Immediate">Immediately</option>
                      <option value="1-3 Months">1 - 3 Months</option>
                      <option value="Exploring">Just Exploring</option>
                    </select>
                  </div>
                </div>

                <div className="marketing-optin-row">
                  <input id="marketing-check" type="checkbox" checked={marketingOptIn} onChange={(e) => setMarketingOptIn(e.target.checked)}/>
                  <label htmlFor="marketing-check">
                    I would like to receive corporate updates, case studies, and occasional marketing or promotional materials from MindGen.
                  </label>
                </div>

                <button className="premium-submit-btn contact-submit-btn" type="submit" disabled={formStatus === "submitting"}>
                  {formStatus === "submitting" ? "SENDING..." : "SEND BUSINESS BRIEF"}
                </button>

                {formStatus === "success" && (
                  <div className="form-message success-message">
                    ✓ Business brief sent successfully! We will review your requirements and reach out shortly.
                  </div>
                )}
                {formStatus === "error" && (
                  <div className="form-message error-message">
                    ✕ Submission failed. Please try again or email us directly at admin@mindgen.in.
                  </div>
                )}

                <p className="consent-copy">
                  By clicking submit, you consent to us sending you the communications requested above in accordance with our
                  <a href="#"> privacy policy</a>.
                </p>
              </form>
            </div>

            <div className="contact-form-aside">
              <div className="contact-aside-card">
                <p className="contact-section-kicker">What to expect</p>
                <ul className="contact-check-list">
                  <li>
                    <svg className="principle-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Response within 1 business day
                  </li>
                  <li>
                    <svg className="principle-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Intro call tailored to your business context
                  </li>
                  <li>
                    <svg className="principle-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Clear next steps after the conversation
                  </li>
                </ul>
              </div>

              <div className="contact-aside-card">
                <p className="contact-section-kicker">Locations & remote</p>
                <div className="contact-office-list">
                  {offices.map((office) => (
                    <span key={office}>{office}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-band-section">
          <div className="company-shell contact-band-grid">
            <div className="contact-band-text">
              <p className="contact-section-kicker">Need a faster path?</p>
              <h2>For active projects, we can move from intro to working session quickly.</h2>
            </div>
            <div className="contact-band-actions">
              <p>
                If you already have a use case, challenge area, or transformation brief, include it in your note and we'll shape
                the first conversation around it.
              </p>
              <a href="/careers" className="contact-outline-btn">Explore careers instead</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}