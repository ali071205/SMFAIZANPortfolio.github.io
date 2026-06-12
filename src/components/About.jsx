import { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="reveal-on-scroll">
            <span className="font-label-caps about-label">The Architect</span>
            <h2 className="about-heading">
              Architecture is the learned game, correct and magnificent, of forms assembled in light.
            </h2>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
              <p className="font-body-lg about-text">
                With a passion for innovative design and a solid foundation in architectural principles, 
                I bring a unique perspective to every project. My work sits at the intersection of utility and 
                poetry — every line drawn serves a purpose, every void created evokes an emotion.
              </p>
              <p className="font-body-md about-text-secondary">
                From residential villas to commercial construction, my portfolio spans a wide range of 
                architectural typologies. I combine hands-on site supervision experience with advanced 3D 
                modelling and rendering capabilities to deliver designs that transcend fleeting trends.
              </p>
              <div className="about-image-wrapper">
                <img
                  className="about-image"
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop"
                  alt="Architectural detail"
                />
                <p className="font-label-caps about-image-caption">
                  DETAIL: ARCHITECTURAL COMPOSITION
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
