import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Thesis = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const totalImages = 18; // Theses image folder has 1.jpg to 18.jpg

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === totalImages ? 1 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 1 ? totalImages : prev - 1));
  };

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-on-background)] min-h-screen font-sans pb-16">
      {/* Header */}
      <header className="bg-[var(--color-surface-container-lowest)] text-center py-24 px-6 md:px-16 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url(/academic\\ work/finalYearProject/theises.png)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(1)' }}></div>
        <div className="relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl mb-3 text-[var(--color-on-background)] tracking-tight">River Front Resort</h1>
          <p className="font-sans text-sm tracking-widest text-[var(--color-secondary)] opacity-80 uppercase">Final Year Thesis Project</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#121413]/85 backdrop-blur-md border-b border-white/10 px-6 md:px-16 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <ul className="flex items-center gap-8 h-14 max-w-[1440px] mx-auto m-0 p-0 list-none">
          <li>
            <Link to="/" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">
              ← PORTFOLIO
            </Link>
          </li>
          <li><a href="#concept" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Concept</a></li>
          <li><a href="#site" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Site & Eco</a></li>
          <li><a href="#facilities" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Facilities</a></li>
          <li><a href="#gallery" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Renderings</a></li>
        </ul>
      </nav>

      <div className="max-w-5xl mx-auto px-6 md:px-16 mt-16 flex flex-col gap-24">
        
        {/* Concept Section */}
        <section id="concept" className="scroll-mt-24">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-10 border-b border-white/10 pb-4">Concept & Vision</h2>
          
          <div className="bg-[var(--color-surface-container)] border border-white/5 p-4 mb-10">
            <img src="/academic work/finalYearProject/theises.png" alt="Conceptual rendering" className="w-full h-auto object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700" />
            <p className="text-center font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] opacity-60 mt-4">Visualizing the blend of natural elements and architectural strategy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-[var(--color-surface-container)] border border-white/5 p-8 border-l-2 border-l-[var(--color-secondary)]">
              <h3 className="font-serif text-2xl text-[var(--color-on-surface)] mb-4">Project Vision</h3>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed">Integration of modern resort design with natural riverfront surroundings. Balance privacy, community, shade and sun.</p>
            </div>
            <div className="bg-[var(--color-surface-container)] border border-white/5 p-8 border-l-2 border-l-[var(--color-secondary)]">
              <h3 className="font-serif text-2xl text-[var(--color-on-surface)] mb-4">Philosophy</h3>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed"><strong>Nature integration:</strong> Architecture follows terrain, shade and breeze. <strong>Sustainability:</strong> Passive cooling, STP, rainwater harvesting, local materials. <strong>Balanced living:</strong> Options for privacy and communal life.</p>
            </div>
          </div>
        </section>

        {/* Site & Sustainability */}
        <section id="site" className="scroll-mt-24">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-10 border-b border-white/10 pb-4">Site & Sustainability</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[var(--color-surface-container)] border border-white/5 p-6 hover:-translate-y-1 transition-transform">
              <h3 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] mb-4">Geography</h3>
              <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">Kozhikode coast. Strategy: heavy mass inland, light floating elements by water, keep drainage lines.</p>
            </div>
            <div className="bg-[var(--color-surface-container)] border border-white/5 p-6 hover:-translate-y-1 transition-transform">
              <h3 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] mb-4">Climate</h3>
              <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">Warm humid summers, monsoon rains, pleasant winters. Design fights humidity with shade and ventilation.</p>
            </div>
            <div className="bg-[var(--color-surface-container)] border border-white/5 p-6 hover:-translate-y-1 transition-transform">
              <h3 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] mb-4">Access</h3>
              <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">Road, rail (Kozhikode), air (Calicut). Last mile: car, auto or boat transfer in high water.</p>
            </div>
          </div>

          <div className="bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] p-8">
            <h3 className="font-serif text-2xl text-[var(--color-on-surface)] mb-6 text-center">SWOT Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div><strong className="text-[var(--color-primary)]">Strengths:</strong> Prime coastal setting, low-rise plan, native planting.</div>
              <div><strong className="text-[var(--color-primary)]">Weaknesses:</strong> CRZ limits and high water table; mitigated by light structures and careful siting.</div>
              <div><strong className="text-[var(--color-primary)]">Opportunities:</strong> Eco tourism, local partnerships and research tie-ups.</div>
              <div><strong className="text-[var(--color-primary)]">Threats:</strong> Storm surge and sea-level rise; response includes raised boardwalks and evacuation routes.</div>
            </div>
          </div>
        </section>

        {/* Facilities & Architecture */}
        <section id="facilities" className="scroll-mt-24">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-10 border-b border-white/10 pb-4">Events, Wellness & Architecture</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-[var(--color-on-surface)] mb-6">Events & Gatherings</h3>
              <ul className="flex flex-col gap-6 list-none p-0">
                <li className="border-l-2 border-white/10 pl-4"><strong className="block text-[var(--color-secondary)] font-sans text-xs tracking-widest uppercase mb-1">Weddings</strong><span className="text-[var(--color-on-surface-variant)] text-sm">Lawn ceremonies, banquet hall, river decks for photos, and separate service routes.</span></li>
                <li className="border-l-2 border-white/10 pl-4"><strong className="block text-[var(--color-secondary)] font-sans text-xs tracking-widest uppercase mb-1">Corporate</strong><span className="text-[var(--color-on-surface-variant)] text-sm">Daylight meeting rooms sized 20-300, good AV, breakout courts under trees.</span></li>
                <li className="border-l-2 border-white/10 pl-4"><strong className="block text-[var(--color-secondary)] font-sans text-xs tracking-widest uppercase mb-1">Exhibitions</strong><span className="text-[var(--color-on-surface-variant)] text-sm">Flexible halls and rigging points for quick load-in.</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[var(--color-on-surface)] mb-6">Architecture & Engineering</h3>
              <ul className="flex flex-col gap-6 list-none p-0">
                <li className="border-l-2 border-white/10 pl-4"><strong className="block text-[var(--color-secondary)] font-sans text-xs tracking-widest uppercase mb-1">Main Block</strong><span className="text-[var(--color-on-surface-variant)] text-sm">Entry court, double-height lobby, restaurant, banquet hall. Service spines behind public rooms.</span></li>
                <li className="border-l-2 border-white/10 pl-4"><strong className="block text-[var(--color-secondary)] font-sans text-xs tracking-widest uppercase mb-1">Floating Systems</strong><span className="text-[var(--color-on-surface-variant)] text-sm">Pontoon logic: foam-filled modules or reinforced concrete pontoons. Elastic dock anchoring.</span></li>
                <li className="border-l-2 border-white/10 pl-4"><strong className="block text-[var(--color-secondary)] font-sans text-xs tracking-widest uppercase mb-1">Materials</strong><span className="text-[var(--color-on-surface-variant)] text-sm">Ferrocement shells for durability in salt air, bamboo frames for light loads, laterite.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Render Gallery */}
        <section id="gallery" className="scroll-mt-24 mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-10 border-b border-white/10 pb-4">3D Renderings Gallery</h2>
          
          <div className="bg-[var(--color-surface-container)] border border-white/5 p-4 flex flex-col items-center">
            <div className="relative w-full max-w-4xl aspect-[16/9] bg-black/50 overflow-hidden mb-6 group">
              <img 
                src={`/academic work/finalYearProject/thesesImg/${currentImageIndex}.jpg`} 
                alt={`Thesis rendering ${currentImageIndex}`}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[var(--color-secondary)] hover:text-black text-white flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all cursor-pointer backdrop-blur-sm border border-white/20"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[var(--color-secondary)] hover:text-black text-white flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all cursor-pointer backdrop-blur-sm border border-white/20"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            
            {/* Gallery Indicator */}
            <div className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)]">
              Image {currentImageIndex} of {totalImages}
            </div>
            
            {/* Thumbnail Strip */}
            <div className="flex gap-2 mt-6 overflow-x-auto w-full pb-2 scrollbar-hide max-w-4xl justify-start sm:justify-center">
              {Array.from({ length: totalImages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => setCurrentImageIndex(num)}
                  className={`flex-shrink-0 w-16 h-12 border ${currentImageIndex === num ? 'border-[var(--color-secondary)] opacity-100' : 'border-transparent opacity-40 hover:opacity-100'} transition-all overflow-hidden`}
                >
                  <img src={`/academic work/finalYearProject/thesesImg/${num}.jpg`} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="text-center py-12 px-6 bg-[var(--color-surface-container-lowest)] border-t border-white/5 text-[var(--color-on-surface-variant)] opacity-60 font-sans text-xs tracking-widest uppercase mt-12">
        <p>&copy; {new Date().getFullYear()} River Front Resort | Thesis Project</p>
      </footer>
    </div>
  );
};

export default Thesis;
