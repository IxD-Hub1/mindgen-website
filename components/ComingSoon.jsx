'use client';

export default function ComingSoon({ pageName }) {
  return (
    <div className="coming-soon-wrapper" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', textAlign: 'center', padding: '0 20px' }}>
      <div style={{ maxWidth: '600px' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1e3a8a', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          MindGen {pageName}
        </span>
        <h1 style={{ fontSize: '3rem', color: '#0f172a', fontWeight: '800', margin: '20px 0', lineHeight: '1.2' }}>
          We are architecting something <span style={{ color: '#3b82f6' }}>powerful.</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.6', marginBottom: '30px' }}>
          The {pageName} experience is currently undergoing a strategic upgrade. Check back shortly to explore our latest AI-led frameworks and transformations.
        </p>
        <a href="/" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#1e3a8a', color: 'white', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', transition: 'background 0.3s ease' }}>
          Return to Homepage
        </a>
      </div>
    </div>
  );
}