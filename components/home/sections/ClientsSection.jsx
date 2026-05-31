"use client";

const clientCards = [
  ["https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80", "Team collaboration background", "iserv."],
  ["https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=900&q=80", "Laptop and workspace background", "COMMERZBANK"],
  ["https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80", "Mobile app cards background", "Wawa"],
  ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80", "Business meeting background", "PBS"],
  ["https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80", "Office interior background", "Allsteel"],
  ["https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80", "Payment terminal background", "CHASE"],
  ["https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80", "Beverage can background", "Coca-Cola"],
];

export default function ClientsSection() {
  // Combines two matching card sets to build a flawless infinite wrapping stream
  const structuralLoopTrack = [...clientCards, ...clientCards];

  return (
    <section id="clients" className="clients" aria-label="Client logos" data-component="clients">
      <div className="carousel-wrap">
        <div className="carousel-track">
          {structuralLoopTrack.map(([src, alt, label], index) => (
            <article className="logo-card" key={`${label}-${index}`}>
              <div className="card-media-wrapper">
                <img className="card-bg" src={src} alt={alt} />
                <div className="card-white-overlay"></div>
              </div>
              <span className="card-label-text">{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}