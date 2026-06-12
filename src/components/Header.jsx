import { useState, useEffect, useCallback } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = useCallback((e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  }, []);

  const navItems = [
    { id: '#home', label: 'HOME', icon: 'home' },
    { id: '#about', label: 'ABOUT', icon: 'person' },
    { id: '#projects', label: 'PROJECTS', icon: 'grid_view' },
    { id: '#experience', label: 'EXPERIENCE', icon: 'work' },
    { id: '#skills', label: 'SKILLS', icon: 'construction' },
    { id: '#contact', label: 'CONTACT', icon: 'mail' },
  ];

  return (
    <>
      <header className={`top-app-bar${isScrolled ? ' scrolled' : ''}`}>
        <div className="top-app-bar-inner">
          <div className="logo">
            <span className="material-symbols-outlined logo-icon">architecture</span>
            <span className="logo-text">S.M FAIZAN KHALID</span>
          </div>

          <nav className="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link${activeSection === item.id.substring(1) ? ' active' : ''}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="nav-contact-btn"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
          >
            CONTACT
          </button>

          <button
            className="menu-toggle-btn"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay${isMenuOpen ? ' open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside className={`mobile-drawer${isMenuOpen ? ' open' : ''}`}>
        <div className="mobile-drawer-header">
          <span className="font-label-caps" style={{ color: 'var(--on-surface-variant)' }}>
            NAVIGATION
          </span>
          <button className="mobile-drawer-close" onClick={() => setIsMenuOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="mobile-nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link${activeSection === item.id.substring(1) ? ' active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, item.id)}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Header;
