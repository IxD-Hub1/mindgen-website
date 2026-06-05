'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(true);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false); // Issue 6 State Tracker
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const [formData, setFormData] = useState({
    'biz-email': '',
    'first-name': '',
    'last-name': '',
    'company-name': '',
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
      // Connects directly to our new Next.js internal server route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          marketingOptIn: marketingOptIn // Appends the newsletter preference selection
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ 'biz-email': '', 'first-name': '', 'last-name': '', 'company-name': '' });
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

  return (
    <section id="contact" className="innovate-contact" aria-label="Let's innovate together" data-component="contact">
      <div className="innovate-container">
        
        <div className="innovate-title-wrap">
          <button 
            className={`innovate-toggle ${isOpen ? '' : 'collapsed'}`}
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
          >
            Let&apos;s innovate together
            <span className="innovate-caret" aria-hidden="true"></span>
          </button>
        </div>

        {isOpen && (
          <div className="innovate-body" id="innovateBody">
            <div className="innovate-testimonial">
              <span className="quote-mark" aria-hidden="true">&ldquo;</span>
              <p>
                Thank you so much for asking the right questions, co-innovating with us along the way, and always being receptive and
                providing us valid feedback on the solution and code. On behalf of the member portal technical team, thank you again for
                all the hard work and effort that you have put in to get our project to production. It was great working with you.
              </p>
              <div className="author-block">
                <span className="author-line"></span>
                <h3>Linitha Balan</h3>
                <p>SENIOR APPLICATION DEVELOPER, VSP</p>
                <div className="author-brand">vsp.</div>
              </div>
            </div>

            <form className="innovate-form" onSubmit={handleSubmit}>
              <label htmlFor="biz-email">Business Email*</label>
              <input id="biz-email" name="biz-email" type="email" required value={formData['biz-email']} onChange={handleInputChange} />

              <label htmlFor="first-name">First Name*</label>
              <input id="first-name" name="first-name" type="text" required value={formData['first-name']} onChange={handleInputChange} />

              <label htmlFor="last-name">Last Name*</label>
              <input id="last-name" name="last-name" type="text" required value={formData['last-name']} onChange={handleInputChange} />

              <label htmlFor="company-name">Company Name*</label>
              <input id="company-name" name="company-name" type="text" required value={formData['company-name']} onChange={handleInputChange} />

              {/* Issue 6: Marketing Outreach Selection Box Layout Row */}
              <div className="marketing-optin-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', margin: '20px 0' }}>
                <input 
                  id="marketing-check"
                  type="checkbox" 
                  checked={marketingOptIn}
                  onChange={(e) => setMarketingOptIn(e.target.checked)}
                  style={{ width: '18px', height: '18px', marginTop: '2px', cursor: 'pointer' }}
                />
                <label htmlFor="marketing-check" style={{ fontSize: '0.88rem', cursor: 'pointer', userSelect: 'none', lineHeight: '1.4', fontWeight: '400' }}>
                  I would like to receive corporate updates, case studies, and occasional marketing or promotional materials from MindGen.
                </label>
              </div>

              {/* Issue 5 Fix: Re-engineered Interactive Captcha Engine Container */}
              <div 
                className={`captcha-box ${captchaChecked ? 'verified' : ''}`} 
                onClick={() => setCaptchaChecked(!captchaChecked)}
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', userSelect: 'none' }}
              >
                <span className="captcha-check" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', border: '2px solid #c1c1c1', backgroundColor: '#f9f9f9', borderRadius: '2px', position: 'relative' }}>
                  {captchaChecked && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#009d57" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
                <span className="captcha-label">I&apos;m not a robot</span>
                <span className="captcha-badge">reCAPTCHA</span>
              </div>

              {/* Dynamic Status Display Text Alerts */}
              <button className="innovate-submit" type="submit" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'SENDING...' : 'SUBMIT'}
              </button>

              {formStatus === 'success' && (
                <div style={{ color: '#009d57', background: 'rgba(0,157,87,0.08)', padding: '12px', borderRadius: '6px', fontWeight: 'bold', marginTop: '15px', fontSize: '0.95rem' }}>
                  ✓ Message sent successfully! We will get back to you shortly.
                </div>
              )}
              {formStatus === 'error' && (
                <div style={{ color: '#EF4444', background: 'rgba(239,68,68,0.08)', padding: '12px', borderRadius: '6px', fontWeight: 'bold', marginTop: '15px', fontSize: '0.95rem' }}>
                  ✕ Submission failed. Please try again or email us directly.
                </div>
              )}

              <p className="consent-copy">
                By clicking submit, you consent to us sending you the communications requested above in accordance with our
                <a href="#"> privacy policy</a>.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}