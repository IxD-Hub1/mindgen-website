export default function HeroSection() {
  return (
    <section id="hero" className="hero" aria-label="Hero section" data-component="hero">
      <div className="hero-video-wrap" aria-hidden="true">
        <video autoPlay muted loop playsInline className="hero-video">
          {/* UPDATED PATH: Points exactly to your assets folder structure */}
          <source src="/assets/videos/MindGen.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1>Innovation.<br />Intelligence.<br />Impact.</h1>
        <p>
          We harness Co-Innovation and AI
          to spark bold ideas, power smarter solutions,
          and deliver lasting value.
        </p>
      </div>
    </section>
  );
}