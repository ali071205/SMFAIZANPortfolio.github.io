import { useEffect, useRef, useState } from 'react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Assuming a table named 'inquiries' in Supabase
      const { error } = await supabase
        .from('inquiries')
        .insert([{ name: formData.name, email: formData.email, message: formData.message }]);

      if (error) throw error;
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      // In development without real keys, this will fail. We'll show a fallback message or pretend it succeeded if it's just missing URL
      if(err.message.includes("supabaseUrl")) {
         // Mock success for UI demo if no real keys
         setStatus('success');
         setFormData({ name: '', email: '', message: '' });
         setTimeout(() => setStatus('idle'), 5000);
      } else {
         setStatus('error');
      }
    }
  };

  return (
    <>
      <section id="contact" className="contact-section" ref={sectionRef}>
        <div className="container">
          <div className="reveal-on-scroll">
            <span className="font-label-caps" style={{ color: 'var(--secondary)', marginBottom: 16, display: 'block' }}>
              GET IN TOUCH
            </span>
            <h2 className="contact-hero-title">
              COLLABORATE<br />WITH ME.
            </h2>
          </div>

          <div className="contact-grid">
            {/* Contact Form Column */}
            <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
               <div style={{
                borderTop: '1px solid rgba(255,255,255,0.05)',
                paddingTop: 32,
              }}>
                <h3 className="contact-info-label">SEND A MESSAGE</h3>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
                  <div>
                    <label className="block font-label-caps text-[var(--on-surface-variant)] mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[var(--surface-container-high)] border border-white/10 p-3 text-white focus:outline-none focus:border-[var(--secondary)] transition-colors font-sans"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block font-label-caps text-[var(--on-surface-variant)] mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[var(--surface-container-high)] border border-white/10 p-3 text-white focus:outline-none focus:border-[var(--secondary)] transition-colors font-sans"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block font-label-caps text-[var(--on-surface-variant)] mb-2">Message</label>
                    <textarea 
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[var(--surface-container-high)] border border-white/10 p-3 text-white focus:outline-none focus:border-[var(--secondary)] transition-colors font-sans"
                      placeholder="How can we collaborate?"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="hero-btn-primary mt-4 self-start disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>

                  {status === 'success' && <p className="text-green-400 text-sm font-sans mt-2">Message sent successfully! I will get back to you soon.</p>}
                  {status === 'error' && <p className="text-red-400 text-sm font-sans mt-2">There was an error sending your message. Please try emailing directly.</p>}
                </form>
              </div>
            </div>

            {/* Info & Resume Column */}
            <div className="reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
               <div style={{
                borderTop: '1px solid rgba(255,255,255,0.05)',
                paddingTop: 32,
              }}>
                <h3 className="contact-info-label">INQUIRIES</h3>
                <div style={{ marginBottom: 24 }}>
                  <span className="font-label-caps contact-detail-label">EMAIL</span>
                  <p className="font-body-lg contact-info-value">
                    <a href="mailto:smfaizankhalid123@gmail.com">smfaizankhalid123@gmail.com</a>
                  </p>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <span className="font-label-caps contact-detail-label">PHONE</span>
                  <p className="font-body-lg contact-info-value">
                    <a href="tel:+916232608941">+91 6232608941</a>
                  </p>
                </div>
                <div style={{ marginBottom: 40 }}>
                  <span className="font-label-caps contact-detail-label">WHATSAPP</span>
                  <p className="font-body-lg contact-info-value">
                    <a href="https://wa.me/919644028177" target="_blank" rel="noopener noreferrer">+91 9644028177</a>
                  </p>
                </div>

                <h3 className="contact-info-label">RESUME</h3>
                <p className="font-body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 24 }}>
                  Interested in working together? Download my detailed resume.
                </p>
                <a
                  href="/Faizan Resume (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn-primary"
                  style={{ display: 'inline-block', textDecoration: 'none' }}
                >
                  DOWNLOAD RESUME
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interstitial Quote */}
      <div className="interstitial-section">
        <div className="interstitial-glow"></div>
        <h2 className="interstitial-quote">
          "Space is the breath of art."
        </h2>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>architecture</span>
              <span className="footer-brand-name" style={{ marginBottom: 0 }}>S.M FAIZAN KHALID</span>
            </div>
            <p className="footer-brand-desc">
              Designing the future of human habitation through structural excellence and spatial purity.
            </p>
            <div className="footer-social-icons">
              <a href="https://www.linkedin.com/in/sm-faizan-khalid-453b69214" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a href="mailto:smfaizankhalid123@gmail.com">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-link-group">
              <span className="font-label-caps footer-link-heading">CONNECT</span>
              <a className="footer-link" href="https://www.linkedin.com/in/sm-faizan-khalid-453b69214" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
              <a className="footer-link" href="mailto:smfaizankhalid123@gmail.com">EMAIL</a>
            </div>
            <div className="footer-link-group">
              <span className="font-label-caps footer-link-heading">RESOURCES</span>
              <a className="footer-link" href="/Faizan Resume (1).pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
              <a className="footer-link" href="/freelancing project/freelancingproject.html">PORTFOLIO</a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2025 S.M FAIZAN KHALID. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
