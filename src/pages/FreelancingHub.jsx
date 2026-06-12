import React from 'react';
import { Link } from 'react-router-dom';

const FreelancingHub = () => {
  const projects = [
    { title: 'Residential Project — Health Clinic', link: '/freelancing/clinic' },
    { title: 'Residential Project — Mosque', link: '/freelancing/mosque' },
    { title: 'Residential Project — Cafe', link: '/freelancing/cafe' },
    { title: 'Residential Project — Villa', link: '/freelancing/villa' },
    { title: 'Residential Project — Rental House', link: '/freelancing/rental-house' }
  ];

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-on-background)] min-h-screen font-sans pb-16">
      {/* Header */}
      <header className="bg-[var(--color-surface-container-lowest)] text-center py-24 px-6 md:px-16 border-b border-white/5">
        <h1 className="font-serif text-4xl md:text-5xl mb-3 text-[var(--color-on-background)] tracking-tight">Freelancing Work</h1>
        <p className="font-sans text-sm tracking-widest text-[var(--color-on-surface-variant)] opacity-60 uppercase">Independent Architectural Projects</p>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#121413]/85 backdrop-blur-md border-b border-white/10 px-6 md:px-16">
        <ul className="flex items-center gap-8 h-14 max-w-[1440px] mx-auto m-0 p-0 list-none">
          <li>
            <Link to="/" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">
              ← PORTFOLIO
            </Link>
          </li>
        </ul>
      </nav>

      {/* Projects List */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 mt-20">
        <section id="projects">
          <div className="bg-[var(--color-surface-container)] border border-white/5 p-8 md:p-12">
            <h3 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] mb-8 border-b border-white/10 pb-4">My Freelancing Work</h3>
            <div className="flex flex-col gap-4">
              {projects.map((proj, idx) => (
                <Link 
                  key={idx} 
                  to={proj.link}
                  className="block w-full p-6 bg-[var(--color-surface-container-lowest)] border border-white/5 hover:border-[var(--color-secondary)] transition-all group hover:-translate-y-1"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-xl text-[var(--color-on-surface)] group-hover:text-[var(--color-secondary)] transition-colors">{proj.title}</span>
                    <span className="material-symbols-outlined text-[var(--color-on-surface-variant)] group-hover:text-[var(--color-secondary)] transition-colors">arrow_forward</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-12 px-6 bg-[var(--color-surface-container-lowest)] border-t border-white/5 text-[var(--color-on-surface-variant)] opacity-60 font-sans text-xs tracking-widest uppercase mt-20">
        <p>&copy; {new Date().getFullYear()} | Designed by S.M Faizan Khalid</p>
      </footer>
    </div>
  );
};

export default FreelancingHub;
