"use client";

const solutions = [
  ["/assets/images/services/ai/Supply Chain.webp", "Supply chain leaders reviewing operational metrics", "Supply Chain", "Build a more agile, resilient, and customer-centric supply chain with AI-guided planning, visibility, and response.", "Explore MindGen AI for supply chain"],
  ["/assets/images/services/ai/finance.webp", "Finance and business dashboard discussion", "Finance", "Enhance cashflows, boost revenue, and optimise profit margins with AI-powered insights and finance workflows.", "Explore MindGen AI in finance"],
  ["/assets/images/services/ai/procurement.webp", "Procurement professional using tablet in warehouse", "Procurement", "Boost your bottom line with AI that improves supplier performance, streamlines operations, and reduces cost pressure.", "Explore MindGen AI in procurement"],
  ["/assets/images/services/ai/Human-resources.webp", "Human resources leader in a virtual conversation", "Human Resources", "Drive the success of every employee and achieve organisational agility with AI for recruiting, support, and knowledge.", "Explore MindGen AI in human resources"],
  ["/assets/images/services/ai/customer-experience.webp", "Customer experience team and AI interface", "Customer Experience", "Drive profitable growth with AI that streamlines workflows, optimises engagement, and delivers seamless experiences.", "Explore MindGen AI in customer experience"],
  ["/assets/images/services/ai/it-and-developers.webp", "IT and developer team working with AI systems", "IT and Developers", "Use AI to boost productivity, accelerate innovation, and maximise uptime and system reliability across engineering teams.", "Explore MindGen AI for IT and developers"],
];

export default function AiSolutionsSection() {
  return (
    <section className="ai-solutions" id="ai-solutions" aria-label="AI solutions by business team">
      <div className="ai-shell">
        <div className="ai-section-heading">
          <h2>Be more productive, faster, across every team in your business.</h2>
          <p>Create tangible value across every part of your business, from supply chain to finance, procurement, HR, customer experience, and IT.</p>
        </div>
        <div className="ai-solution-grid">
          {solutions.map(([src, alt, title, copy, cta]) => (
            <article className="ai-solution-card premium-hover-card" key={title}>
              <div className="ai-card-img-wrapper">
                <img src={src} alt={alt} />
              </div>
              <div className="ai-solution-copy">
                <h3>{title}</h3>
                <p>{copy}</p>
                <a href="#ai-contact" className="text-link">{cta} &rarr;</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}