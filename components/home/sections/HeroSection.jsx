export default function HeroSection() {
  return (
    <section id="hero" className="hero" aria-label="MindGen AI Strategy" data-component="hero">
      <div className="hero-video-wrap" aria-hidden="true">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/assets/videos/MindGen.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content premium-hero-layout">
        
        <h1>AI-Native Strategy &amp; Workflow Transformation for Growth-Focused Businesses</h1>
        
        <p className="hero-subheadline">
          MindGen helps companies think clearly, redesign workflows, adopt AI responsibly, and scale measurable business outcomes.
        </p>
        
        <div className="hero-cta-group">
          <a href="/contact-us" className="hero-btn-primary">
            Book an AI Strategy Call
          </a>
          <a href="/solutions/ai-strategy" className="hero-btn-secondary">
            Take the AI Readiness Assessment
          </a>
        </div>

        <div className="hero-pain-statement">
          <p>
            "Most companies are experimenting with AI, but struggling to convert it into workflow, revenue, and measurable business value."
          </p>
        </div>
        
      </div>
    </section>
  );
}