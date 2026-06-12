import { useEffect, useRef } from 'react';

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="education" className="edu-section" ref={sectionRef}>
      <div className="container">
        <div className="edu-grid">
          <div className="edu-block reveal-on-scroll">
            <span className="font-label-caps edu-block-label">Education</span>
            <h3 className="edu-block-title">Bachelor of Architecture</h3>
            <p className="edu-block-text">
              IOA, Sage University, Indore<br />
              2020 — 2025
            </p>
          </div>
          <div className="edu-block reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <span className="font-label-caps edu-block-label">Professional Membership</span>
            <h3 className="edu-block-title">NASA — National Association of Students of Architecture</h3>
            <p className="edu-block-text">
              Ex-Unit Designee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
