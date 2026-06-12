import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SeventhSem = () => {
  const [activeFloor, setActiveFloor] = useState('ground');

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-on-background)] min-h-screen font-sans pb-16">
      {/* Header */}
      <header className="bg-[var(--color-surface-container-lowest)] text-center py-24 px-6 md:px-16 border-b border-white/5">
        <h1 className="font-serif text-4xl md:text-5xl mb-3 text-[var(--color-on-background)] tracking-tight">Hospital Design Project</h1>
        <p className="font-sans text-sm tracking-widest text-[var(--color-on-surface-variant)] opacity-60 uppercase">7th Semester — Bachelor of Architecture</p>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#121413]/85 backdrop-blur-md border-b border-white/10 px-6 md:px-16 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <ul className="flex items-center gap-8 h-14 max-w-[1440px] mx-auto m-0 p-0 list-none">
          <li>
            <Link to="/" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">
              ← PORTFOLIO
            </Link>
          </li>
          <li><a href="#floors" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Floor Plans</a></li>
          <li><a href="#elevation" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Elevation</a></li>
          <li><a href="#siteplan" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Site Plan</a></li>
          <li><a href="#details" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Design Details</a></li>
        </ul>
      </nav>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Floor Plans */}
        <section id="floors" className="py-20 md:py-32 border-b border-white/5">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-12">Floor Plans</h2>
          
          <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
            <button 
              className={`px-6 py-2 font-sans text-xs tracking-widest uppercase border border-white/15 transition-all whitespace-nowrap ${activeFloor === 'ground' ? 'bg-[var(--color-secondary)] text-[#3d2e16] border-[var(--color-secondary)]' : 'bg-transparent text-[var(--color-on-surface)] hover:border-[var(--color-secondary)]'}`}
              onClick={() => setActiveFloor('ground')}
            >
              Ground Floor
            </button>
            <button 
              className={`px-6 py-2 font-sans text-xs tracking-widest uppercase border border-white/15 transition-all whitespace-nowrap ${activeFloor === 'first' ? 'bg-[var(--color-secondary)] text-[#3d2e16] border-[var(--color-secondary)]' : 'bg-transparent text-[var(--color-on-surface)] hover:border-[var(--color-secondary)]'}`}
              onClick={() => setActiveFloor('first')}
            >
              First Floor
            </button>
            <button 
              className={`px-6 py-2 font-sans text-xs tracking-widest uppercase border border-white/15 transition-all whitespace-nowrap ${activeFloor === 'second' ? 'bg-[var(--color-secondary)] text-[#3d2e16] border-[var(--color-secondary)]' : 'bg-transparent text-[var(--color-on-surface)] hover:border-[var(--color-secondary)]'}`}
              onClick={() => setActiveFloor('second')}
            >
              Second Floor
            </button>
          </div>

          <div className="bg-[var(--color-surface-container)] border border-white/5 p-8">
            {activeFloor === 'ground' && (
              <div className="animate-fade-in">
                <h3 className="font-serif text-2xl text-[var(--color-on-surface)] mb-6">Ground Floor Plan</h3>
                <img src="/academic work/7thSemproject/HOSPITAL DESIGN 7Tth Semestergroundf-Model_page-0001.jpg" alt="Ground Floor Plan" className="w-full h-auto object-contain bg-white/5 border border-white/10 mb-8" />
                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] mb-4">Key Areas</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
                    {['Reception & Waiting Area', 'OPD (Outpatient Department)', 'Emergency Ward', 'General Wards', 'Diagnostic Areas (X-ray, Sonography, Pathology)', 'Staff Rooms & Pharmacy'].map((item, idx) => (
                      <li key={idx} className="relative pl-6 py-1 text-sm text-[var(--color-on-surface-variant)]"><span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-px bg-[var(--color-secondary)]"></span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {activeFloor === 'first' && (
              <div className="animate-fade-in">
                <h3 className="font-serif text-2xl text-[var(--color-on-surface)] mb-6">First Floor Plan</h3>
                <img src="/academic work/7thSemproject/HOSPITAL DESIGN 7Tth Semesterfirstf-Model_page-0001.jpg" alt="First Floor Plan" className="w-full h-auto object-contain bg-white/5 border border-white/10 mb-8" />
                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] mb-4">Key Areas</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
                    {['Cardiac Ward', 'ENT Ward', 'Orthopedic Ward', 'Gynec Ward', 'Nurse Station', 'Doctor Cabins'].map((item, idx) => (
                      <li key={idx} className="relative pl-6 py-1 text-sm text-[var(--color-on-surface-variant)]"><span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-px bg-[var(--color-secondary)]"></span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {activeFloor === 'second' && (
              <div className="animate-fade-in">
                <h3 className="font-serif text-2xl text-[var(--color-on-surface)] mb-6">Second Floor Plan</h3>
                <img src="/academic work/7thSemproject/HOSPITAL DESIGN 7Tth Semestersecondf-Model_page-0001.jpg" alt="Second Floor Plan" className="w-full h-auto object-contain bg-white/5 border border-white/10 mb-8" />
                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] mb-4">Key Areas</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
                    {['Cardiac Operation Theaters', 'Gynec Operation Theaters', 'General Operation Theater', 'ICU (Intensive Care Unit)', 'Private & Semi-Private Rooms', 'Clean Utility & Disposal Areas'].map((item, idx) => (
                      <li key={idx} className="relative pl-6 py-1 text-sm text-[var(--color-on-surface-variant)]"><span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-px bg-[var(--color-secondary)]"></span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Elevation */}
        <section id="elevation" className="py-20 md:py-32 border-b border-white/5">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-12">Building Elevation</h2>
          <div className="bg-[var(--color-surface-container)] border border-white/5 p-4">
            <img src="/academic work/7thSemproject/HOSPITAL DESIGN 7Tth Semesterelevation-Model_page-0001.jpg" alt="Building Elevation" className="w-full h-auto object-contain" />
          </div>
        </section>

        {/* Site Plan */}
        <section id="siteplan" className="py-20 md:py-32 border-b border-white/5">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-12">Site Plan</h2>
          <div className="bg-[var(--color-surface-container)] border border-white/5 p-4">
            <img src="/academic work/7thSemproject/HOSPITAL DESIGN 7Tth Semestersiteplan-Model_page-0001.jpg" alt="Site Plan" className="w-full h-auto object-contain" />
          </div>
        </section>

        {/* Design Details */}
        <section id="details" className="py-20 md:py-32">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-12">Design Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-surface-container)] border border-white/5 p-8">
              <h3 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] mb-6 border-b border-white/10 pb-4">Project Notes</h3>
              <ul className="list-none p-0 flex flex-col gap-4">
                <li className="relative pl-6 text-sm text-[var(--color-on-surface-variant)]"><span className="absolute left-0 top-2 w-2 h-px bg-[var(--color-primary)]"></span>All dimensions are in millimeters (mm)</li>
                <li className="relative pl-6 text-sm text-[var(--color-on-surface-variant)]"><span className="absolute left-0 top-2 w-2 h-px bg-[var(--color-primary)]"></span>Only written dimensions should be followed</li>
                <li className="relative pl-6 text-sm text-[var(--color-on-surface-variant)]"><span className="absolute left-0 top-2 w-2 h-px bg-[var(--color-primary)]"></span>For size of structural members, refer structural drawings</li>
                <li className="relative pl-6 text-sm text-[var(--color-on-surface-variant)]"><span className="absolute left-0 top-2 w-2 h-px bg-[var(--color-primary)]"></span>In case of any disparity, contact architect</li>
              </ul>
            </div>
            <div className="bg-[var(--color-surface-container)] border border-white/5 p-8">
              <h3 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] mb-6 border-b border-white/10 pb-4">Technical Specifications</h3>
              <ul className="list-none p-0 flex flex-col gap-4">
                <li className="relative pl-6 text-sm text-[var(--color-on-surface-variant)]"><span className="absolute left-0 top-2 w-2 h-px bg-[var(--color-primary)]"></span>Total Built-up Area: Approximately 5,000 sqm</li>
                <li className="relative pl-6 text-sm text-[var(--color-on-surface-variant)]"><span className="absolute left-0 top-2 w-2 h-px bg-[var(--color-primary)]"></span>Floor-to-Floor Height: 3.5 meters</li>
                <li className="relative pl-6 text-sm text-[var(--color-on-surface-variant)]"><span className="absolute left-0 top-2 w-2 h-px bg-[var(--color-primary)]"></span>Structure: RCC Framed Structure</li>
                <li className="relative pl-6 text-sm text-[var(--color-on-surface-variant)]"><span className="absolute left-0 top-2 w-2 h-px bg-[var(--color-primary)]"></span>Materials: Concrete, Glass, Steel, and Stone Cladding</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-12 px-6 bg-[var(--color-surface-container-lowest)] border-t border-white/5 text-[var(--color-on-surface-variant)] opacity-60 font-sans text-xs tracking-widest uppercase mt-12">
        <p>© 2025 | Hospital Design Project by S.M Faizan Khalid</p>
      </footer>
    </div>
  );
};

export default SeventhSem;
