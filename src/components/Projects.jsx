import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorImage, setCursorImage] = useState('');
  const [cursorVisible, setCursorVisible] = useState(false);
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

  const projectItems = [
    {
      year: '2024',
      name: 'Bachelor Projects - 7th Semester',
      type: 'ACADEMIC',
      link: '/seventh-sem',
      preview: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    },
    {
      year: '2024',
      name: 'Bachelor Projects - 8th Semester',
      type: 'ACADEMIC',
      link: '/eighth-sem',
      preview: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=1000&auto=format&fit=crop',
    },
    {
      year: '2025',
      name: 'Professional Training - 9th Semester',
      type: 'ACADEMIC',
      link: '/ninth-sem',
      preview: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000&auto=format&fit=crop',
    },
    {
      year: '2025',
      name: 'Bachelor Projects - Thesis',
      type: 'ACADEMIC',
      link: '/thesis',
      preview: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop',
    },
    {
      year: '2023',
      name: 'Planning & 3D Modelling',
      type: 'PERSONAL',
      link: '/rowhouse',
      preview: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=1000&auto=format&fit=crop',
    },
    {
      year: '2023',
      name: 'Residential Projects - Ground Floor Work',
      type: 'PERSONAL',
      link: '/groundwork',
      preview: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  const handleMouseEnter = (preview) => {
    setCursorImage(preview);
    setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
  };

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX + 30, y: e.clientY - 125 });
  };

  return (
    <section id="projects" className="featured-projects-section" ref={sectionRef}>
      <div className="container">
        <div className="featured-projects-header reveal-on-scroll">
          <div>
            <span className="font-label-caps featured-projects-label">Portfolio</span>
            <h2 className="featured-projects-title">Featured Projects</h2>
          </div>
          <Link to="/freelancing" className="btn-all-work">
            FREELANCING WORK
          </Link>
        </div>

        <div className="project-list reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
          {projectItems.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="project-list-item"
              onMouseEnter={() => handleMouseEnter(project.preview)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <div className="project-list-item-left">
                <span className="project-list-year font-label-caps">{project.year}</span>
                <h3 className="project-list-name">{project.name}</h3>
              </div>
              <div className="project-list-item-right">
                <span className="project-list-type font-label-caps">{project.type}</span>
                <span className="material-symbols-outlined project-list-arrow">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Cursor Follower */}
      <div
        className="cursor-follower"
        style={{
          opacity: cursorVisible ? 1 : 0,
          backgroundImage: `url(${cursorImage})`,
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
        }}
      />
    </section>
  );
};

export default Projects;
