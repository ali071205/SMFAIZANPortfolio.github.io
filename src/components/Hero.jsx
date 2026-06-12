import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroImgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroImgRef.current) {
        const scrolled = window.pageYOffset;
        heroImgRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <img
          ref={heroImgRef}
          src="/img/profile.png"
          alt="S.M Faizan Khalid — Architect"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000&auto=format&fit=crop';
          }}
        />
      </div>
      <div className="hero-content">
        <div className="hero-content-inner">
          <h1 className="hero-title">
            Crafting Spaces<br />
            <span className="italic">That Endure.</span>
          </h1>
          <p className="hero-subtitle">
            Architect with a passion for innovative design and a solid foundation in architectural principles. 
            Eager to contribute to dynamic architectural projects and develop skills in a collaborative environment.
          </p>
          <div className="hero-actions">
            <button className="hero-btn-primary" onClick={handleScrollToProjects}>
              VIEW PORTFOLIO
            </button>
            <a href="#about" className="hero-link" onClick={handleScrollToAbout}>
              ABOUT ME
            </a>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
