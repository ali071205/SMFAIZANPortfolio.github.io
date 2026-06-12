import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RowHouse = () => {
  const [version, setVersion] = useState('row1');

  const pdfMap = {
    row1: [
      '/self_project/pdf_section/row_house1day_page-0001.jpg',
      '/self_project/pdf_section/row_house1night_page-0001.jpg'
    ],
    row2: [
      '/self_project/pdf_section/row_house2_day_page-0001.jpg',
      '/self_project/pdf_section/row_house2_night_page-0001.jpg'
    ]
  };

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-on-background)] min-h-screen font-sans">
      {/* Header */}
      <header className="bg-[var(--color-surface-container-lowest)] text-center py-24 px-6 md:px-16 border-b border-white/5">
        <h1 className="font-serif text-4xl md:text-5xl mb-3 text-[var(--color-on-background)] tracking-tight">Row House Project</h1>
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
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-8">About the Project</h2>
        <p className="text-base leading-relaxed text-[var(--color-on-surface-variant)] max-w-3xl">
          This Row House Project explores residential planning with a modern design approach.
          The concept integrates functional living spaces, efficient circulation, and options
          for both day and night views. The layout ensures maximum usability, comfort, and
          architectural aesthetics.
        </p>
      </section>

      {/* Design Details */}
      <section id="details" className="py-20 md:py-32 px-6 md:px-16 max-w-[1440px] mx-auto border-b border-white/5">
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-8">Design Details</h2>
        <ul className="list-none p-0 m-0">
          {[
            'Open Living Area with TV and natural light access',
            'Spacious Master Bedroom with attached toilet',
            'Dining and Kitchen linked for functional use',
            'Pooja room near entrance for cultural integration',
            'Car Parking and Green Zone'
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
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-8">Project Gallery</h2>
        <div className="flex justify-center gap-2 mb-8">
          <button 
            className={`px-6 py-2 font-sans text-xs tracking-widest uppercase border border-white/15 transition-all ${version === 'row1' ? 'bg-[var(--color-secondary)] text-[#3d2e16] border-[var(--color-secondary)]' : 'bg-transparent text-[var(--color-on-surface)] hover:border-[var(--color-secondary)]'}`}
            onClick={() => setVersion('row1')}
          >
            Row House 1 (Day + Night)
          </button>
          <button 
            className={`px-6 py-2 font-sans text-xs tracking-widest uppercase border border-white/15 transition-all ${version === 'row2' ? 'bg-[var(--color-secondary)] text-[#3d2e16] border-[var(--color-secondary)]' : 'bg-transparent text-[var(--color-on-surface)] hover:border-[var(--color-secondary)]'}`}
            onClick={() => setVersion('row2')}
          >
            Row House 2 (Day + Night)
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mt-6">
          <img 
            src={pdfMap[version][0]} 
            alt={`Row House ${version.slice(-1)} Day View`}
            className="w-full md:w-[48%] h-auto object-cover grayscale-[0.3] hover:grayscale-0 hover:scale-[1.01] transition-all duration-500"
          />
          <img 
            src={pdfMap[version][1]} 
            alt={`Row House ${version.slice(-1)} Night View`}
            className="w-full md:w-[48%] h-auto object-cover grayscale-[0.3] hover:grayscale-0 hover:scale-[1.01] transition-all duration-500"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-32 px-6 md:px-16 max-w-[1440px] mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {['Efficient Planning', 'Modern Aesthetics', 'Day & Night Design Options', 'Integration of Open Green Spaces'].map((feature, idx) => (
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

export default RowHouse;
