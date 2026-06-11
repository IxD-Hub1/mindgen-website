'use client';

export default function SiteFooter() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="footer-top">
        <div className="footer-container">
          
          {/* 1. Premium Circular Back-to-Top Button */}
          <div className="back-to-top-wrapper">
            <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Scroll back to top">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </button>
          </div>

          <div className="footer-brandline">
            <img
              src="/assets/images/mindgen-logo.svg"
              alt="MindGen logo"
              className="footer-logo"
            />
          </div>

          <nav className="footer-links" aria-label="Footer primary">
            <a href="/solutions">Solutions</a>
            <a href="/industries">Industries</a>
            <a href="/case-studies">Case Studies</a>
            <a href="/insights">Insights</a>
            <a href="/about-us">About</a>
            <a href="/careers">Careers</a>
            <a href="/contact-us">Contact</a>
          </nav>

          {/* 2. Stacked Emails and Social Icons */}
          <div className="footer-contact-column">
            <div className="footer-emails">
              <a href="mailto:admin@mindgen.in">admin@mindgen.in</a>
              <span className="email-divider">|</span>
              <a href="mailto:coo@mindgen.in">coo@mindgen.in</a>
            </div>

            <div className="footer-social" aria-label="Social media links">
              <a href="#" aria-label="LinkedIn">
                <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="9" width="4" height="12"></rect>
                  <circle cx="5" cy="5" r="2"></circle>
                  <path d="M11 21V9h4v2c.8-1.2 2-2 3.6-2 3 0 4.4 2 4.4 5.4V21h-4v-5.7c0-1.6-.5-2.6-1.8-2.6-1 0-1.7.7-2 1.6-.1.2-.1.5-.1.8V21h-4z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="4" ry="4"></rect>
                  <circle cx="12" cy="12" r="3.5"></circle>
                  <circle cx="17.5" cy="6.5" r="1.2"></circle>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.5 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V10H9v3h2.4v8h3.1z"></path>
                </svg>
              </a>
              <a href="#" aria-label="X">
                <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 4l5.7 7.8L5.5 20H8l4-5.3L16 20h3L13 11.6 18.2 4h-2.5L12 8.8 8.5 4H5z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-addresses">
            <div className="address-block">
              <strong>Mumbai Office</strong>
              <p>1A107, Wework, Raheja Platinum, Sagbaugh Road,<br />Marol, Andheri East, Mumbai - 400059, Maharashtra.</p>
            </div>
            <div className="address-block">
              <strong>Chennai Office</strong>
              <p>No 5, Syndicate Bank Colony, 200 feet Road,<br />Kovilambakkam, Chennai - 600117, Tamil Nadu.</p>
            </div>
          </div>
          
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container footer-bottom-inner">
          {/* 3. Re-aligned Bottom Bar */}
          <div className="footer-legal">
            <span>&copy; 2026 MindGen</span>
            <a href="#">LEGAL NOTICES</a>
            <a href="#">NEWSROOM</a>
            <a href="#">PRIVACY</a>
            <a href="#">ACCESSIBILITY</a>
            <a href="#">COOKIE SETTINGS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}