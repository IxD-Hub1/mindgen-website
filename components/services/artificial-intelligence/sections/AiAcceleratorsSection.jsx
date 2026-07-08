export default function AiAcceleratorsSection() {
  return (
    <section className="ai-accelerators" aria-label="Artificial intelligence accelerators">
      <div className="ai-shell">
        <div className="ai-section-heading">
          <span className="ai-eyebrow">Accelerators</span>
          <h2>Explore delivery accelerators that shorten the path to value.</h2>
        </div>
        <div className="ai-accelerator-grid">
          <article className="ai-accelerator-card premium-hover-card">
            <div>
              <span className="ai-mini-label">MindGen Agent Studio</span>
              <h3>Prototype copilots and workflow agents in weeks, not quarters.</h3>
              <p>Reusable patterns, prompt frameworks, orchestration templates, and governance controls to de-risk delivery.</p>
            </div>
            <a className="premium-submit-btn" href="/#contact">Launch a pilot</a>
          </article>
          <article className="ai-accelerator-card premium-hover-card">
            <div>
              <span className="ai-mini-label">AI Readiness Framework</span>
              <h3>Align data, policy, platform, and product priorities before you scale.</h3>
              <p>Quickly identify gaps across architecture, security, change enablement, and business value realization.</p>
            </div>
            <a className="contact-outline-btn dark-variant" href="#ai-delivery">Review the framework</a>
          </article>
        </div>
      </div>
    </section>
  );
}