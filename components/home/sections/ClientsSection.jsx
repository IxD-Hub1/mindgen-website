"use client";

export default function ClientsSection() {
  return (
    <section id="ecosystem-marquee" className="ecosystem-marquee-section" aria-label="Ecosystem Experience">
      <div className="text-marquee-wrap">
        <div className="text-marquee-track">
          {/* We repeat the string to create a flawless infinite scroll */}
          <h2>
            OUR TEAM HAS WORKED ACROSS GLOBAL ENTERPRISE ECOSYSTEMS <span className="marquee-dot">•</span> 
            PLATFORM EXPERIENCE ACROSS AWS, GOOGLE CLOUD, MICROSOFT, ADOBE, SALESFORCE, SNOWFLAKE <span className="marquee-dot">•</span> 
            OUR TEAM HAS WORKED ACROSS GLOBAL ENTERPRISE ECOSYSTEMS <span className="marquee-dot">•</span> 
            PLATFORM EXPERIENCE ACROSS AWS, GOOGLE CLOUD, MICROSOFT, ADOBE, SALESFORCE, SNOWFLAKE <span className="marquee-dot">•</span>
          </h2>
        </div>
      </div>
    </section>
  );
}