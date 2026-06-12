import { useEffect, useRef } from 'react';

const Experience = () => {
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

  const experiences = [
    {
      title: 'Intern Architect',
      company: 'Kotis Architects, Dehradun',
      date: 'June 2024 – February 2025',
      duties: [
        'Assisted in residential, commercial, and institutional projects.',
        'Worked on design development, drawings, and construction documentation.',
        'Implemented sustainable design strategies in multiple projects.',
        'Collaborated with architects and engineers across all project phases.',
      ],
    },
    {
      title: 'Site Supervision',
      company: 'Universal Construction Pvt. Ltd., Sagore, Pithampur (MP)',
      date: '2021 – 2023',
      duties: [
        'Supervised the construction site of Virjo Healthcare Pvt. Ltd., SIP (Smart Industrial Park).',
        'Monitored daily operations, coordinated subcontractors, and ensured smooth workflow.',
        'Oversaw villa, row house, and warehouse construction projects.',
      ],
    },
    {
      title: 'Freelance Projects',
      company: 'Independent Practice',
      date: 'Ongoing',
      duties: [
        'Designed residential villas and row houses.',
        'Managed small-scale construction and interior projects independently.',
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="container">
        <div className="reveal-on-scroll">
          <span className="font-label-caps experience-label">Career</span>
          <h2 className="experience-title">Professional Experience</h2>
        </div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-item reveal-on-scroll"
            style={{ transitionDelay: `${(index + 1) * 150}ms` }}
          >
            <div className="experience-item-header">
              <h3>{exp.title}</h3>
              <p className="font-body-md" style={{ color: 'var(--on-surface-variant)', opacity: 0.7, marginBottom: 8 }}>
                {exp.company}
              </p>
              <span className="font-label-caps experience-item-date">{exp.date}</span>
            </div>
            <ul>
              {exp.duties.map((duty, dIndex) => (
                <li key={dIndex}>{duty}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
