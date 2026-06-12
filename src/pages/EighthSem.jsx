import React from 'react';
import { Link } from 'react-router-dom';

const EighthSem = () => {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-on-background)] min-h-screen font-sans pb-16">
      {/* Header */}
      <header className="bg-[var(--color-surface-container-lowest)] text-center py-24 px-6 md:px-16 border-b border-white/5">
        <h1 className="font-serif text-4xl md:text-5xl mb-3 text-[var(--color-on-background)] tracking-tight">Urban Design — VIII Sem</h1>
        <p className="font-sans text-sm tracking-widest text-[var(--color-secondary)] opacity-80 italic mb-6">Innovative Architectural Design for Urban Spaces in Indore</p>
        <p className="font-sans text-xs tracking-widest text-[var(--color-on-surface-variant)] opacity-60 uppercase border-t border-white/5 pt-4 max-w-3xl mx-auto leading-relaxed">
          Submitted by: IOA, Sage University, Indore | Subject: Design VIII | Team: SMFAIZAN, Aamir Khan, Rajkumar Sahu, Anshika Jaiswal, Isha Doraya, Sakshi Sharma
        </p>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#121413]/85 backdrop-blur-md border-b border-white/10 px-6 md:px-16 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <ul className="flex items-center gap-8 h-14 max-w-[1440px] mx-auto m-0 p-0 list-none">
          <li>
            <Link to="/" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">
              ← PORTFOLIO
            </Link>
          </li>
          <li><a href="#section-before-after" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Before & After</a></li>
          <li><a href="#section-maps" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Maps</a></li>
          <li><a href="#section-team" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Documents</a></li>
        </ul>
      </nav>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 mt-16">
        {/* Main Section: Project Overview */}
        <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 mb-20 border-b border-white/5 pb-20">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-6">Bhawarkua Footpath Initiative: A Vision for a Safer City</h2>
            <div className="mb-6 overflow-hidden bg-[var(--color-surface-container)] border border-white/5">
              <img src="/academic work/8thSemisterProject/main img.jpg" alt="Proposed streetscape design render" className="w-full h-auto max-h-[400px] object-cover grayscale-[0.3] hover:grayscale-0 hover:scale-[1.02] transition-all duration-500" />
            </div>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-[var(--color-on-surface-variant)]">
              <p>In this architectural proposal, we have aimed to address a major issue at Bhawarkua Square on Bholaram Ustad Marg in Indore. This issue is the encroachment of public spaces and footpaths by vendors, which creates traffic jams and safety hazards for pedestrians.</p>
              <p>Our solution is a comprehensive streetscape design that improves public spaces with better organization and infrastructure. Key features include designated vendor zones so that vendors do not encroach on pedestrian paths and roads.</p>
              <p>Additionally, the plan includes wide, unobstructed pedestrian pathways and clear signage and accessibility ramps, ensuring safe and easy travel for all citizens, especially people with disabilities.</p>
            </div>
          </div>
          
          <div className="bg-[var(--color-surface-container)] border border-white/5 p-8 h-fit sticky top-24">
            <h3 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] border-b border-[var(--color-outline-variant)] pb-3 mb-5">Highlights</h3>
            <ul className="flex flex-col gap-3 list-none p-0 mb-8">
              <li><a href="#section-maps" className="text-sm text-[var(--color-on-surface)] hover:text-[var(--color-secondary)] transition-colors">Detailed Site Maps & Analysis</a></li>
              <li><a href="#section-before-after" className="text-sm text-[var(--color-on-surface)] hover:text-[var(--color-secondary)] transition-colors">Before and After Visuals</a></li>
              <li><a href="#section-team" className="text-sm text-[var(--color-on-surface)] hover:text-[var(--color-secondary)] transition-colors">Project Documents</a></li>
            </ul>

            <h3 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] border-b border-[var(--color-outline-variant)] pb-3 mb-5 mt-8">Featured Renders</h3>
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden border border-white/5">
                <img src="/academic work/8thSemisterProject/main just baad vali img.jpg" alt="Render" className="w-full h-[200px] object-cover grayscale-[0.3] hover:grayscale-0 hover:scale-[1.02] transition-all duration-500" />
              </div>
              <div className="overflow-hidden border border-white/5">
                <img src="/academic work/8thSemisterProject/main kar second vali .jpg" alt="Render" className="w-full h-[200px] object-cover grayscale-[0.3] hover:grayscale-0 hover:scale-[1.02] transition-all duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Before and After Grid Component */}
        <section id="section-before-after" className="mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-10 border-b border-white/10 pb-4">Before and After: A Visual Comparison</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: 'current state.jpg', title: 'Current State of the Site', desc: 'Current state of streets where vendor blockage causes congestion.' },
              { src: 'proposed streetscape.jpg', title: 'The Proposed Design', desc: 'Organized vendor stalls that don\'t obstruct pedestrian paths.' },
              { src: 'congestion and risk.jpg', title: 'Congestion and Risk', desc: 'The crowd problem making the need for a dedicated walkway clear.' },
              { src: 'exiting site form above.jpg', title: 'Existing Site from Above', desc: 'Aerial view showing narrowness of streets and lack of organized space.' },
              { src: 'street view form site.jpg', title: 'Street View from the Side', desc: 'Current disorganization with vehicles and pedestrians sharing the same space.' },
              { src: 'bus.jpg', title: 'Proposed Streetscape with Bus', desc: 'Organized traffic for buses and cars with clear pedestrian paths.' },
              { src: 'aliternate streetscape desing.jpg', title: 'Alternate Streetscape Design', desc: 'A different aesthetic incorporating flags and different materials.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[var(--color-surface-container)] border border-white/5 overflow-hidden hover:-translate-y-1 hover:border-white/15 transition-all group">
                <div className="overflow-hidden">
                  <img src={`/academic work/8thSemisterProject/${item.src}`} alt={item.title} className="w-full h-[250px] object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-[var(--color-on-surface)] mb-3 leading-snug">{item.title}</h3>
                  <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed opacity-70 m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Maps and Analysis Grid */}
        <section id="section-maps" className="mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-10 border-b border-white/10 pb-4">Detailed Maps & Analysis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: 'base map of bhaverekua.jpg', title: 'Base Map of Bhawarkua', desc: 'Main areas including Tower Chouraha and IT Park Square.' },
              { src: 'road hierarcy_page-0001.jpg', title: 'Road Hierarchy Analysis', desc: 'Primary, secondary, and tertiary roads important for planning.' },
              { src: 'worksiter and path plan .jpg', title: 'Working Site & Pathway Plan', desc: 'Site selected for the project and the existing road network.' },
              { src: '4000 m_pages-to-jpg-0001.jpg', title: '4000 Meter Diameter Map', desc: 'Larger area of impact for the project.' },
              { src: 'site plan.jpg', title: 'Site Plan', desc: 'A clear site plan for buildings and roads.' },
              { src: 'road type legend.jpg', title: 'Color-Coded Analysis Map', desc: 'Recreational zones and buildings highlighted with different colors.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[var(--color-surface-container)] border border-white/5 overflow-hidden hover:-translate-y-1 hover:border-white/15 transition-all group">
                <div className="overflow-hidden">
                  <img src={`/academic work/8thSemisterProject/${item.src}`} alt={item.title} className="w-full h-[250px] object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-[var(--color-on-surface)] mb-3 leading-snug">{item.title}</h3>
                  <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed opacity-70 m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Documents Grid */}
        <section id="section-team">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-10 border-b border-white/10 pb-4">Project Documents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: 'design 8 prop_page-0001.jpg', title: 'Design Process', desc: 'Documentation of the design development process.' },
              { src: 'desing procide.jpg', title: 'Technical Drawings', desc: 'Detailed technical documentation and drawings.' },
              { src: 'design 8 prop_page-0001.jpg', title: 'Design VIII Proposal', desc: 'Academic design proposal submission.' },
              { src: 'FINAL 2 RAAJ_page-0001.jpg', title: 'Final Report', desc: 'Complete project analysis and final documentation.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[var(--color-surface-container)] border border-white/5 overflow-hidden hover:-translate-y-1 hover:border-white/15 transition-all group">
                <div className="overflow-hidden">
                  <img src={`/academic work/8thSemisterProject/${item.src}`} alt={item.title} className="w-full h-[250px] object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 bg-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-[var(--color-on-surface)] mb-3 leading-snug">{item.title}</h3>
                  <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed opacity-70 m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-12 px-6 bg-[var(--color-surface-container-lowest)] border-t border-white/5 text-[var(--color-on-surface-variant)] opacity-60 font-sans text-xs tracking-widest uppercase mt-20">
        <p>© 2025 Architectural Portfolio. IOA, Sage University, Indore.</p>
      </footer>
    </div>
  );
};

export default EighthSem;
