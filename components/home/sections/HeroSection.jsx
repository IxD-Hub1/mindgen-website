export default function HeroSection() {
  return (
    <section id="hero" className="hero" aria-label="MindGen AI Strategy" data-component="hero">
      <div className="hero-video-wrap" aria-hidden="true">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/assets/videos/MindGen Hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content premium-hero-layout">
        
        <h1>Build an AI-Native Business, Not Just Another AI Project</h1>
        
        <p className="hero-subheadline">
          MindGen helps enterprises, governments, and growth-focused organizations redesign strategy, workflows, data, and decision systems to create measurable business outcomes with AI.
        </p>
        
        <div className="hero-cta-group">
          <a href="/contact-us" className="hero-btn-primary">
            Book A Strategy Workshop
          </a>
          <a
            href="https://mindgen-airi-production.up.railway.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-secondary"
          >
            Assess Your AI Readiness
          </a>
        </div>

        <div className="hero-pain-statement">
          <p>
            <strong>AI does not fail because the technology is weak.</strong> AI fails when strategy, workflows, data, governance, and people are not redesigned together. MindGen closes that execution gap.
          </p>
        </div>
        
      </div>
    </section>
  );
}