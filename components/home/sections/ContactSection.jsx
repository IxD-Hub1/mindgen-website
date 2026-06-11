'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "MindGen completely transformed our cloud infrastructure. Their team didn't just write code; they acted as true strategic partners, helping us architect a highly scalable environment that reduced our operational latency by over 40%. The level of engineering maturity they bring is unmatched.",
    author: "Marcus Chen",
    title: "CHIEF TECHNOLOGY OFFICER",
    company: "NexaFlow"
  },
  {
    quote: "Thank you so much for asking the right questions, co-innovating with us along the way, and always being receptive and providing us valid feedback on the solution and code. On behalf of the member portal technical team, thank you again for all the hard work and effort that you have put in to get our project to production.",
    author: "Linitha Balan",
    title: "SENIOR APPLICATION DEVELOPER",
    company: "vsp."
  },
  {
    quote: "Their approach to omnichannel integration allowed us to seamlessly connect our physical storefronts with our digital inventory. The transition was flawless, and the predictive analytics dashboard they built has completely revolutionized how we handle peak holiday demand.",
    author: "Sarah Jenkins",
    title: "VP OF DIGITAL PRODUCT",
    company: "RetailEdge"
  }
];

export default function ContactSection() {
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [currentSlide, setCurrentSlide] = useState(0);

  const [formData, setFormData] = useState({
    'enquiry-type': 'New Business',
    'first-name': '', 'last-name': '', 'biz-email': '', 'phone-number': '',
    'company-name': '', 'country-city': '', 'company-size': '',
    'service-interest': '', 'budget-range': '', 'timeline': ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaChecked) {
      alert("Please confirm you are not a robot.");
      return;
    }
    setFormStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, marketingOptIn }),
      });
      if (response.ok) {
        setFormStatus('success');
        setFormData({ 
          'enquiry-type': 'New Business', 'first-name': '', 'last-name': '', 
          'biz-email': '', 'phone-number': '', 'company-name': '', 
          'country-city': '', 'company-size': '', 'service-interest': '', 
          'budget-range': '', 'timeline': '' 
        });
        setCaptchaChecked(false);
        setMarketingOptIn(false);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus('error');
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="contact" className="premium-contact-section" aria-label="Contact Us">
      <div className="premium-contact-container">
        
        {/* LEFT PANEL: Heading & Testimonial */}
        <div className="contact-left-panel">
          <h2 className="contact-premium-heading">
            Let's innovate<br />
            <span className="text-gradient">together.</span>
          </h2>
          <p className="contact-subtitle">
            Tell us about your business challenges. Our team of AI and strategy experts will help you build a roadmap to measurable ROI.
          </p>

          <div className="premium-testimonial-card">
            <svg className="quote-icon" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 21L16.41 14.909V3H21V14.909L18.608 21H14.017ZM3 21L5.392 14.909V3H9.983V14.909L7.59 21H3Z" />
            </svg>
            <div className="carousel-content-track">
              <p className="carousel-quote">"{testimonials[currentSlide].quote}"</p>
              <div className="author-block">
                <h3>{testimonials[currentSlide].author}</h3>
                <p className="author-title">{testimonials[currentSlide].title}</p>
                <div className="author-brand">{testimonials[currentSlide].company}</div>
              </div>
            </div>
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={currentSlide === index ? 'dot active' : 'dot'}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Form Card */}
        <div className="contact-right-panel">
          <div className="premium-form-card">
            <form className="innovate-form" onSubmit={handleSubmit}>
              
              <div className="form-full-width">
                <label htmlFor="enquiry-type">Type of Enquiry*</label>
                <select id="enquiry-type" name="enquiry-type" required value={formData['enquiry-type']} onChange={handleInputChange}>
                  <option value="New Business">New Business Strategy & Consulting</option>
                  <option value="Partnerships">Partnerships & Co-Innovation</option>
                  <option value="Careers">Careers & Talent Network</option>
                  <option value="General">General Inquiry</option>
                </select>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="first-name">First Name*</label>
                  <input id="first-name" name="first-name" type="text" required value={formData['first-name']} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name*</label>
                  <input id="last-name" name="last-name" type="text" required value={formData['last-name']} onChange={handleInputChange} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="biz-email">Business Email*</label>
                  <input id="biz-email" name="biz-email" type="email" required value={formData['biz-email']} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone-number">Phone Number</label>
                  <input id="phone-number" name="phone-number" type="tel" value={formData['phone-number']} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="company-name">Company Name*</label>
                  <input id="company-name" name="company-name" type="text" required value={formData['company-name']} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="country-city">Country / City</label>
                  <input id="country-city" name="country-city" type="text" value={formData['country-city']} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="company-size">Company Size</label>
                  <select id="company-size" name="company-size" value={formData['company-size']} onChange={handleInputChange}>
                    <option value="">Select size...</option>
                    <option value="1-50">1 - 50 employees</option>
                    <option value="51-200">51 - 200 employees</option>
                    <option value="201-1000">201 - 1,000 employees</option>
                    <option value="1000+">1,000+ employees</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="service-interest">Service Interest</label>
                  <select id="service-interest" name="service-interest" value={formData['service-interest']} onChange={handleInputChange}>
                    <option value="">Select service...</option>
                    <option value="AI Strategy">AI Strategy & Readiness</option>
                    <option value="Workflow Automation">Agentic Workflow Automation</option>
                    <option value="Data Dashboards">Data Intelligence & Dashboards</option>
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="budget-range">Budget Range</label>
                  <select id="budget-range" name="budget-range" value={formData['budget-range']} onChange={handleInputChange}>
                    <option value="">Select budget...</option>
                    <option value="Under $50k">Under $50k</option>
                    <option value="$50k - $150k">$50k - $150k</option>
                    <option value="$150k+">$150k+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="timeline">Project Timeline</label>
                  <select id="timeline" name="timeline" value={formData['timeline']} onChange={handleInputChange}>
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

              <div className={`captcha-box ${captchaChecked ? 'verified' : ''}`} onClick={() => setCaptchaChecked(!captchaChecked)}>
                <span className="captcha-check">
                  {captchaChecked && (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>)}
                </span>
                <span className="captcha-label">I&apos;m not a robot</span>
                <span className="captcha-badge">reCAPTCHA</span>
              </div>

              <button className="premium-submit-btn" type="submit" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'SENDING...' : 'SEND BUSINESS BRIEF'}
              </button>

              {formStatus === 'success' && (
                <div className="form-message success-message">
                  ✓ Business brief sent successfully! We will review your requirements and reach out shortly.
                </div>
              )}
              {formStatus === 'error' && (
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
        </div>

      </div>
    </section>
  );
}