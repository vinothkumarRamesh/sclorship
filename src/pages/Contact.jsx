import React from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { Input } from '../components/FormElements';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container contact-container">
        
        <div className="contact-header text-center" style={{marginBottom: '60px'}}>
          <div className="badge badge-gold" style={{marginBottom: '16px'}}>We're Here to Help</div>
          <h1>Get in <span className="text-gradient">Touch</span></h1>
          <p className="text-muted" style={{maxWidth: '600px', margin: '16px auto 0'}}>
            Have questions about a scholarship or need technical assistance? Our support team is ready to guide you.
          </p>
        </div>

        <div className="contact-grid">
          
          <div className="contact-info">
            <div className="info-card glass-panel">
              <div className="info-icon"><MapPin size={24} color="var(--primary-blue)" /></div>
              <div>
                <h3>Office Address</h3>
                <p className="text-muted">123 Scholar Way, Tech District<br/>San Francisco, CA 94105</p>
              </div>
            </div>
            
            <div className="info-card glass-panel">
              <div className="info-icon"><Phone size={24} color="var(--primary-blue)" /></div>
              <div>
                <h3>Phone Support</h3>
                <p className="text-muted">+1 (800) 123-4567<br/>Mon-Fri, 9am - 6pm PST</p>
              </div>
            </div>
            
            <div className="info-card glass-panel">
              <div className="info-icon"><Mail size={24} color="var(--primary-blue)" /></div>
              <div>
                <h3>Email Us</h3>
                <p className="text-muted">support@scholarblue.com<br/>partnerships@scholarblue.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass-card">
            <h2 style={{marginBottom: '24px'}}>Send a Message</h2>
            <form className="contact-form">
              <div className="form-grid" style={{gap: '16px'}}>
                <Input label="Your Name" id="name" required placeholder="John Doe" />
                <Input label="Phone Number" id="phone" type="tel" placeholder="+1 234 567 8900" />
                <div style={{gridColumn: '1 / -1'}}>
                  <Input label="Email Address" id="email" type="email" required placeholder="john@example.com" />
                </div>
                <div style={{gridColumn: '1 / -1'}} className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    id="message" 
                    className="form-input" 
                    rows="5" 
                    required 
                    placeholder="How can we help you?"
                    style={{resize: 'vertical'}}
                  ></textarea>
                </div>
                <div style={{gridColumn: '1 / -1'}}>
                  <button type="submit" className="btn btn-primary w-100" style={{padding: '14px'}}>
                    Send Message <MessageSquare size={18} />
                  </button>
                </div>
              </div>
            </form>
          </div>
          
        </div>

        <div className="map-section glass-panel" style={{marginTop: '60px', padding: '16px', height: '400px'}}>
          {/* Placeholder for actual map implementation like Google Maps or Leaflet */}
          <div className="map-placeholder flex-center" style={{width: '100%', height: '100%', background: 'rgba(10, 37, 64, 0.05)', borderRadius: '12px'}}>
            <div className="text-center">
              <MapPin size={48} color="var(--primary-blue)" style={{marginBottom: '16px'}} />
              <h3 className="text-muted">Interactive Map View</h3>
              <p className="text-muted">123 Scholar Way, San Francisco</p>
            </div>
          </div>
        </div>

      </div>
      
      {/* Floating Chat Icon (Extra UI Feature) */}
      <button className="floating-chat-btn">
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default Contact;
