'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  const [formData, setFormData] = useState({
    'enquiry-type': 'Strategy Workshop',
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
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ 
        'enquiry-type': 'Strategy Workshop', 'first-name': '', 'last-name': '', 
        'biz-email': '', 'phone-number': '', 'company-name': '', 
        'country-city': '', 'company-size': '', 'service-interest': '', 
        'budget-range': '', 'timeline': '' 
      });
      setMarketingOptIn(false);
    }, 1500);
  };

  return (
    <section id="contact" className="premium-contact-section" aria-label="Book a Strategy Workshop">
      <div className="premium-contact-container">
        
        {/* LEFT PANEL: Strategy Workshop Pitch */}
        <div className="contact-left-panel">
          <h2 className="contact-premium-heading">
            Book a Strategy <br />
            <span className="text-gradient">Workshop.</span>
          </h2>
          <p className="contact-subtitle">
            Stop experimenting and start scaling. Bring your business challenges to our advisory team to architect a transformation roadmap.
          </p>

          <div className="premium-testimonial-card">
            <div className="carousel-content-track">
              <h3 className="workshop-heading">What to Expect:</h3>
              <ul className="workshop-deliverables">
                <li>
                  <strong>01. Business Diagnostic</strong>
                  <p>We analyze your current operating model and execution barriers.</p>
                </li>
                <li>
                  <strong>02. AI & Data Readiness</strong>
                  <p>An honest assessment of your technical infrastructure.</p>
                </li>
                <li>
                  <strong>03. ROI Mapping</strong>
                  <p>Identifying where AI creates measurable, immediate business value.</p>
                </li>
              </ul>
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
                  <option value="Strategy Workshop">Book a Strategy Workshop</option>
                  <option value="Transformation Program">Enterprise Transformation Program</option>
                  <option value="Partnerships">Partnerships & Co-Innovation</option>
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
              </div>

              <div className="marketing-optin-row">
                <input id="marketing-check" type="checkbox" checked={marketingOptIn} onChange={(e) => setMarketingOptIn(e.target.checked)}/>
                <label htmlFor="marketing-check">
                  I would like to receive corporate updates, case studies, and insights from MindGen.
                </label>
              </div>

              {/* Note: Insert official react-google-recaptcha component here */}

              <button className="premium-submit-btn" type="submit" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'SUBMITTING...' : 'REQUEST WORKSHOP'}
              </button>

              {formStatus === 'success' && (
                <div className="form-message success-message">
                  ✓ Request sent successfully! Our advisory team will reach out shortly.
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