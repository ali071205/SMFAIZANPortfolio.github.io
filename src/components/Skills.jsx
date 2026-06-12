import { useEffect, useRef } from 'react';

const Skills = () => {
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

  const softwareSkills = [
    'AutoCAD', 'SketchUp', 'Enscape / D5 Render', 'Photoshop / GIMP', 'Microsoft Office',
  ];

  const architecturalSkills = [
    'Architectural Design', '3D Modelling & Rendering', 'Working Drawings',
    'Interior Design', 'Site Supervision', 'Client Management',
    'Construction Documentation', 'Sustainable Design', 'Architectural Photography',
  ];

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className="reveal-on-scroll">
          <span className="font-label-caps skills-label">Capabilities</span>
          <h2 className="skills-title">Skills & Expertise</h2>
        </div>

        <div className="mb-12">
          <h3 className="skills-category-title reveal-on-scroll" style={{ transitionDelay: '100ms' }}>SOFTWARE PROFICIENCY</h3>
          <div className="skills-grid">
            {softwareSkills.map((skill, i) => (
              <div key={i} className="skill-chip reveal-on-scroll" style={{ transitionDelay: `${200 + (i * 100)}ms` }}>{skill}</div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="skills-category-title reveal-on-scroll" style={{ transitionDelay: '100ms' }}>ARCHITECTURAL EXPERTISE</h3>
          <div className="skills-grid">
            {architecturalSkills.map((skill, i) => (
              <div key={i} className="skill-chip reveal-on-scroll" style={{ transitionDelay: `${200 + (i * 100)}ms` }}>{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
