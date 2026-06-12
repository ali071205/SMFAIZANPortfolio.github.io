import React from 'react';
import { Link } from 'react-router-dom';

const GroundWork = () => {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-on-background)] min-h-screen font-sans">
      {/* Header */}
      <header className="bg-[var(--color-surface-container-lowest)] text-center py-24 px-6 md:px-16 border-b border-white/5">
        <h1 className="font-serif text-4xl md:text-5xl mb-3 text-[var(--color-on-background)] tracking-tight">Ground Work Project</h1>
        <p className="font-sans text-sm tracking-widest text-[var(--color-on-surface-variant)] opacity-60 uppercase">By S.M Faizan Khalid</p>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#121413]/85 backdrop-blur-md border-b border-white/10 px-6 md:px-16">
        <ul className="flex items-center h-14 max-w-[1440px] mx-auto m-0 p-0 list-none">
          <li>
            <Link to="/" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">
              ← PORTFOLIO
            </Link>
          </li>
        </ul>
      </nav>

      {/* About the Project */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-16 max-w-[1440px] mx-auto border-b border-white/5">
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-8">About This Project</h2>
        <p className="text-base leading-relaxed text-[var(--color-on-surface-variant)] max-w-3xl">
          This Ground Work Project focuses on a residential planning layout. 
          The design emphasizes space efficiency, functionality, and integration of 
          natural light with modern living standards. Key spaces include a living area, master bedroom, 
          guest entrance, dining area, kitchen, pooja room, car parking, and green area.
        </p>
      </section>

      {/* Design Details */}
      <section id="details" className="py-20 md:py-32 px-6 md:px-16 max-w-[1440px] mx-auto border-b border-white/5">
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-8">Design Details</h2>
        <ul className="list-none p-0 m-0">
          {[
            'Living Area with TV unit and natural light access',
            'Master Bedroom with attached toilet',
            'Dining & Kitchen connected with utility space',
            'Pooja room near main entrance',
            'Dedicated car parking',
            'Green area for outdoor relaxation'
          ].map((item, idx) => (
            <li key={idx} className="relative pl-6 py-2 text-base leading-relaxed text-[var(--color-on-surface-variant)] border-b border-white/5">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-px bg-[var(--color-secondary)]"></span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 md:py-32 px-6 md:px-16 max-w-[1440px] mx-auto border-b border-white/5">
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-8">Project Layout</h2>
        <div className="mt-6 overflow-hidden">
          <img 
            src="/self_project/pdf_section/groundwork_page-0001.jpg" 
            alt="Ground Work Layout"
            className="w-full h-auto object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-32 px-6 md:px-16 max-w-[1440px] mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {['Efficient Space Planning', 'Sustainable Layout', 'Modern Living Standards', 'Integration of Green Area'].map((feature, idx) => (
            <div key={idx} className="bg-[var(--color-surface-container)] border border-white/5 p-6 text-center text-sm text-[var(--color-on-surface)] hover:-translate-y-1 hover:border-[var(--color-secondary)] transition-all">
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 px-6 bg-[var(--color-surface-container-lowest)] border-t border-white/5 text-[var(--color-on-surface-variant)] opacity-60 font-sans text-xs tracking-widest uppercase">
        <p>© 2025 | Designed by S.M Faizan Khalid</p>
      </footer>
    </div>
  );
};

export default GroundWork;
