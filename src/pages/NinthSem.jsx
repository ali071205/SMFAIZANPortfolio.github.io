import React from 'react';
import { Link } from 'react-router-dom';

const NinthSem = () => {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-on-background)] min-h-screen font-sans pb-16">
      {/* Header */}
      <header className="bg-[var(--color-surface-container-lowest)] text-center py-24 px-6 md:px-16 border-b border-white/5">
        <h1 className="font-serif text-4xl md:text-5xl mb-3 text-[var(--color-on-background)] tracking-tight">Completion Certificate</h1>
        <p className="font-sans text-sm tracking-widest text-[var(--color-on-surface-variant)] opacity-60 uppercase">Kotis Architects | Internship Program</p>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#121413]/85 backdrop-blur-md border-b border-white/10 px-6 md:px-16 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <ul className="flex items-center gap-8 h-14 max-w-[1440px] mx-auto m-0 p-0 list-none">
          <li>
            <Link to="/" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">
              ← PORTFOLIO
            </Link>
          </li>
          <li><a href="#about" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">About</a></li>
          <li><a href="#certificate" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Certificate</a></li>
          <li><a href="#contact" className="font-sans text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Contact</a></li>
        </ul>
      </nav>

      <div className="max-w-4xl mx-auto px-6 md:px-16">
        {/* About Section */}
        <section id="about" className="py-20 md:py-24 border-b border-white/5">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-12">About the Internship</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-[var(--color-surface-container)] border border-white/5 p-8">
              <h3 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] mb-6 border-b border-white/10 pb-4">Intern</h3>
              <div className="flex flex-col gap-3 text-[var(--color-on-surface-variant)]">
                <p><strong className="text-[var(--color-on-surface)] font-normal uppercase text-xs tracking-widest">Name:</strong> Faizan Shaikh</p>
                <p><strong className="text-[var(--color-on-surface)] font-normal uppercase text-xs tracking-widest">Duration:</strong> 8th July – 31st December</p>
              </div>
            </div>
            <div className="bg-[var(--color-surface-container)] border border-white/5 p-8">
              <h3 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] mb-6 border-b border-white/10 pb-4">Organization</h3>
              <div className="flex flex-col gap-3 text-[var(--color-on-surface-variant)]">
                <p>Kotis Architects</p>
                <p>Koppitha Infra Developers Pvt. Ltd.</p>
                <p>Dehradun, Uttarakhand</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Section */}
        <section id="certificate" className="py-20 md:py-24 border-b border-white/5">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-12">Certificate Details</h2>
          <div className="bg-[var(--color-surface-container)] border border-white/5 p-8 md:p-12">
            <div className="flex flex-col gap-6 text-base leading-relaxed text-[var(--color-on-surface-variant)] font-serif italic mb-10">
              <p>
                This is to certify that <strong className="text-[var(--color-on-surface)] font-normal not-italic">Faizan Shaikh</strong> successfully completed his
                architectural training program with <strong className="text-[var(--color-on-surface)] font-normal not-italic">Kotis Architects</strong> from
                <em className="text-[var(--color-secondary)]"> 8th July to 31st December</em>. During this period, Faizan consistently
                demonstrated sincerity and professionalism, delivering outstanding performance.
              </p>
              <p>
                He showcased exceptional skills in project detailing and exhibited a strong
                interest in practical aspects of architecture at the site. His ability to analyze
                on-site challenges and provide effective solutions was commendable. Faizan also
                displayed a sharp eye for detail and a strong drive to expand his knowledge.
              </p>
              <p>
                Considering his exemplary performance and dedication, we would be thrilled to
                welcome him back in the future. We are confident in his ability to excel in any
                professional endeavor.
              </p>
            </div>
            
            <div className="mt-8 mb-12 flex justify-center">
              <img src="/academic work/9thsemproject/Completion Letter_Faizan Shaikh_page-0001.jpg" alt="Certificate Preview" className="w-full max-w-2xl border border-white/10 shadow-2xl" />
            </div>

            <div className="text-center mt-12 mb-16">
              <a href="/academic work/9thsemproject/Completion Letter_Faizan Shaikh.pdf" download className="inline-block px-8 py-4 bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] font-sans text-xs tracking-widest uppercase hover:bg-[var(--color-primary)] hover:text-[#2f3133] transition-colors">
                Download Certificate PDF
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-12">
              <div className="col-span-full">
                <h3 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] mb-6 text-center">Signed By</h3>
              </div>
              <div className="text-center">
                <p className="text-[var(--color-on-surface)] mb-1">Ar Pranav Semwal</p>
                <p className="text-[var(--color-on-surface-variant)] text-sm">Director, Kotis Architects</p>
              </div>
              <div className="text-center">
                <p className="text-[var(--color-on-surface)] mb-1">Ar Rhea Naithani</p>
                <p className="text-[var(--color-on-surface-variant)] text-sm">Kotis Architects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-24">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-on-background)] mb-12">Contact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-[var(--color-surface-container)] border border-white/5 p-8">
              <h3 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] mb-6 border-b border-white/10 pb-4">Address</h3>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed">227/II, Vasant Vihar, Dehradun 248001, Uttarakhand, India</p>
            </div>
            <div className="bg-[var(--color-surface-container)] border border-white/5 p-8">
              <h3 className="font-sans text-xs tracking-widest uppercase text-[var(--color-secondary)] mb-6 border-b border-white/10 pb-4">Contact</h3>
              <div className="flex flex-col gap-3 text-[var(--color-on-surface-variant)]">
                <p>Phone: +91 8800195475</p>
                <p>Email: pranav@kotis.in</p>
                <p>Website: <a href="http://www.kotis.in" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] hover:underline">www.kotis.in</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-12 px-6 bg-[var(--color-surface-container-lowest)] border-t border-white/5 text-[var(--color-on-surface-variant)] opacity-60 font-sans text-xs tracking-widest uppercase mt-12">
        <p>&copy; 2025 Kotis Architects | Internship Certificate</p>
      </footer>
    </div>
  );
};

export default NinthSem;
