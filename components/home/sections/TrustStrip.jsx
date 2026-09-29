'use client';

import { useState, useEffect, useRef } from 'react';

// Lightweight custom counter component
const AnimatedCounter = ({ end, suffix, label }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500; // 1.5 seconds to finish counting
          const incrementTime = 30;
          const totalSteps = Math.ceil(duration / incrementTime);
          const stepValue = end / totalSteps;

          const counter = setInterval(() => {
            start += stepValue;
            if (start >= end) {
              setCount(end);
              clearInterval(counter);
            } else {
              setCount(Math.ceil(start));
            }
          }, incrementTime);

          // Disconnect so it only animates the very first time they scroll to it
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } // Triggers when 50% of the element is visible
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return (
    <strong ref={nodeRef}>
      {count}{suffix} {label}
    </strong>
  );
};

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="MindGen Credibility and Experience">
      <div className="trust-strip-container">
        
        <p className="trust-strip-label">
          Built on enterprise, technology, and transformation experience
        </p>

        <div className="trust-metrics-grid">
          
          <div className="trust-metric-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trust-icon">
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
            <p className="trust-metric-text">
              <AnimatedCounter end={20} suffix="+" label="years" />
              of transformation experience
            </p>
          </div>

          <div className="trust-metric-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trust-icon">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <p className="trust-metric-text">
              <AnimatedCounter end={75} suffix="+" label="countries" />
              served through founding-team experience
            </p>
          </div>

          <div className="trust-metric-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trust-icon">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="trust-metric-text">
              <strong>Enterprise &amp; government</strong>
              advisory mindset
            </p>
          </div>

          <div className="trust-metric-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trust-icon">
              <circle cx="12" cy="8" r="7" />
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
            <p className="trust-metric-text">
              <strong>Strategy, AI, data,</strong>
              workflow, and growth expertise
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}