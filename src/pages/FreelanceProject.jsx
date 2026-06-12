import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FreelanceProject = () => {
  const location = useLocation();
  const path = location.pathname;

  let title = "Project";
  let isVilla = false;

  if (path.includes('clinic')) title = "Health Clinic";
  else if (path.includes('mosque')) title = "Mosque";
  else if (path.includes('cafe')) title = "Cafe";
  else if (path.includes('rental-house')) title = "Rental House";
  else if (path.includes('villa')) {
    title = "30x50 House Project";
    isVilla = true;
  }

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-on-background)] min-h-screen font-sans pb-16">
      {/* Header */}
      <header className="bg-[var(--color-surface-container-lowest)] text-center py-24 px-6 md:px-16 border-b border-white/5">
        <h1 className="font-serif text-4xl md:text-5xl mb-3 text-[var(--color-on-background)] tracking-tight">{title}</h1>
        <p className="font-sans text-sm tracking-widest text-[var(--color-on-surface-variant)] opacity-60 uppercase">Freelancing Project Showcase</p>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#121413]/85 backdrop-blur-md border-b border-white/10 px-6 md:px-16">
        <ul className="flex items-center gap-8 h-14 max-w-[1440px] mx-auto m-0 p-0 list-none">
          <li>
            <Link to="/freelancing" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">
              ← FREELANCING
            </Link>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 mt-20">
        <section>
          {isVilla ? (
            <div className="bg-[var(--color-surface-container)] border border-white/5 p-8 md:p-12">
              <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-on-background)] mb-6 border-b border-white/10 pb-4">About This Project</h2>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed mb-8">
                This project highlights the design and layout of a 30x50 house. It focuses on modern architecture, efficient space utilization, and aesthetic appeal.
              </p>
              
              <img src="/freelancing project/villa img/WhatsApp Image 2025-08-17 at 23.10.45_40865810.jpg" alt="30x50 House" className="w-full h-auto object-cover border border-white/10 mb-8" />
              
              <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-on-background)] mb-6 border-b border-white/10 pb-4">Project Details</h2>
              <ul className="flex flex-col gap-3 list-none p-0">
                <li className="relative pl-6 text-[var(--color-on-surface-variant)]"><span className="absolute left-0 top-3 w-2 h-px bg-[var(--color-secondary)]"></span>Size: 30x50 plot</li>
                <li className="relative pl-6 text-[var(--color-on-surface-variant)]"><span className="absolute left-0 top-3 w-2 h-px bg-[var(--color-secondary)]"></span>Category: Residential house</li>
                <li className="relative pl-6 text-[var(--color-on-surface-variant)]"><span className="absolute left-0 top-3 w-2 h-px bg-[var(--color-secondary)]"></span>Design: Contemporary style</li>
              </ul>
            </div>
          ) : (
            <div className="bg-[var(--color-surface-container)] border border-white/5 p-8 md:p-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-6">Project Coming Soon</h2>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed max-w-lg mx-auto">
                Details for this project are currently being documented. Check back soon.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-12 px-6 bg-[var(--color-surface-container-lowest)] border-t border-white/5 text-[var(--color-on-surface-variant)] opacity-60 font-sans text-xs tracking-widest uppercase mt-20">
        <p>&copy; {new Date().getFullYear()} S.M Faizan Khalid</p>
      </footer>
    </div>
  );
};

export default FreelanceProject;
