import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Camera, Briefcase, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="container">
        
        {/* Newsletter Section */}
        <div className="newsletter-section glass-card">
          <div className="newsletter-content">
            <h3>Stay ahead of deadlines.</h3>
            <p>Get curated scholarship alerts directly in your inbox every Monday.</p>
          </div>
          <form className="newsletter-form flex-center">
            <input type="email" placeholder="Enter your student email" className="form-input" required />
            <button type="submit" className="btn btn-gold">Subscribe</button>
          </form>
        </div>

        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-icon">🎓</span>
              <span className="logo-text">Scholar<span className="text-gradient">Blue</span></span>
            </Link>
            <p className="brand-desc">
              The Blueprint of Achievement. We are dedicated to making elite education accessible for every deserving mind globally.
            </p>
            <div className="social-links">
              <a href="#" className="btn-icon"><Globe size={20} /></a>
              <a href="#" className="btn-icon"><MessageCircle size={20} /></a>
              <a href="#" className="btn-icon"><Camera size={20} /></a>
              <a href="#" className="btn-icon"><Briefcase size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Platform</h4>
              <Link to="/scholarships">Scholarships</Link>
              <Link to="/#how-it-works">How it Works</Link>
              <Link to="/resources">Resources</Link>
              <Link to="/deadlines">Deadlines</Link>
            </div>
            <div className="link-group">
              <h4>Support</h4>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact Support</Link>
            </div>
            <div className="link-group">
              <h4>Contact Us</h4>
              <p className="flex-center" style={{justifyContent: 'flex-start', gap: '8px', color: 'var(--text-muted)'}}>
                <MapPin size={16} /> 123 Scholar Way, CA
              </p>
              <p className="flex-center" style={{justifyContent: 'flex-start', gap: '8px', color: 'var(--text-muted)'}}>
                <Mail size={16} /> hello@scholarblue.com
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ScholarBlue Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
