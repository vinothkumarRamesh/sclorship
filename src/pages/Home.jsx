import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Briefcase, Filter, CheckCircle, Clock, Shield, DollarSign } from 'lucide-react';
import ScholarshipCard from '../components/ScholarshipCard';
import './Home.css';

const Home = () => {
  const featuredScholarships = [
    {
      id: 1,
      title: "The BlueTech Innovation Award",
      amount: "$25,000",
      deadline: "Oct 15, 2026",
      eligibility: "Undergraduates in STEM fields with 3.5+ GPA and demonstrated leadership.",
      type: "High Priority",
      isFeatured: true,
      seats: 50,
      state: "California"
    },
    {
      id: 2,
      title: "Elite Global Leadership Fund",
      amount: "$12,000",
      deadline: "Nov 30, 2026",
      eligibility: "International students pursuing Social Sciences with community impact history.",
      type: "Need Based",
      isFeatured: false,
      seats: 100,
      state: "New York"
    },
    {
      id: 3,
      title: "Medical Excellence Grant",
      amount: "$50,000",
      deadline: "Dec 30, 2026",
      eligibility: "PhD candidates in Biotechnology or Molecular Medicine research tracks.",
      type: "Medical",
      isFeatured: false,
      seats: 20,
      state: "Texas"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge badge-gold" style={{marginBottom: '24px'}}>🌟 Empowering Elite Scholars Worldwide</div>
            <h1>Apply Scholarships for Your <span className="text-gradient">Bright Future</span></h1>
            <p className="hero-subtitle">
              Navigate the elite academic landscape with the visionary mentor platform. We provide the digital blueprint for your success.
            </p>
            <div className="hero-actions">
              <Link to="/scholarships" className="btn btn-primary">Explore Funding →</Link>
              <Link to="/#how-it-works" className="btn btn-outline glass-panel">How it works</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="glass-card visual-card">
              <div className="visual-image"></div>
              <div className="floating-badge glass-panel top-right">
                <span className="icon">🎓</span> 10k+ Alumni
              </div>
              <div className="floating-badge glass-panel bottom-left">
                <span className="icon">💡</span> $2.5M+ Distributed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="search-section">
        <div className="container">
          <div className="glass-panel search-bar-container">
            <div className="search-field">
              <label>Course</label>
              <select className="form-input">
                <option>Engineering</option>
                <option>Medical</option>
                <option>Arts</option>
              </select>
            </div>
            <div className="search-field">
              <label>State</label>
              <div className="input-with-icon">
                <select className="form-input">
                  <option>California</option>
                  <option>Texas</option>
                  <option>New York</option>
                </select>
                <MapPin size={18} className="field-icon" />
              </div>
            </div>
            <div className="search-field">
              <label>Income Bracket</label>
              <div className="input-with-icon">
                <select className="form-input">
                  <option>&lt; $50,000</option>
                  <option>$50k - $100k</option>
                </select>
                <Briefcase size={18} className="field-icon" />
              </div>
            </div>
            <div className="search-field">
              <label>Category</label>
              <div className="input-with-icon">
                <select className="form-input">
                  <option>Merit Based</option>
                  <option>Need Based</option>
                </select>
                <Filter size={18} className="field-icon" />
              </div>
            </div>
            <button className="btn btn-primary search-btn">
              <Search size={20} /> Find Match
            </button>
          </div>
        </div>
      </section>

      {/* Stats Counters */}
      <section className="stats-section">
        <div className="container flex-between stats-grid">
          <div className="stat-item">
            <h2 className="text-gradient counter">150k+</h2>
            <p>Applications Tracked</p>
          </div>
          <div className="stat-item">
            <h2 className="text-gradient counter">12k+</h2>
            <p>Active Scholarships</p>
          </div>
          <div className="stat-item">
            <h2 className="text-gradient counter">92%</h2>
            <p>Success Rate</p>
          </div>
          <div className="stat-item">
            <h2 className="text-gradient counter">$45M</h2>
            <p>Funds Distributed</p>
          </div>
        </div>
      </section>

      {/* Featured Scholarships */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header flex-between">
            <div>
              <span className="badge badge-outline">Curated Selection</span>
              <h2>Featured Scholarships</h2>
            </div>
            <Link to="/scholarships" className="btn btn-ghost">View All Opportunities →</Link>
          </div>
          <div className="scholarships-grid">
            {featuredScholarships.map(scholarship => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="container">
          <div className="section-header center">
            <h2>Your Success Blueprint</h2>
            <p>Five simple steps to secure your academic future using our precision-engineered platform.</p>
          </div>
          
          <div className="steps-container">
            {[
              { icon: '📝', title: 'Register', desc: 'Create your elite scholar profile in minutes.' },
              { icon: '✍️', title: 'Fill Form', desc: 'Detailed application with precision guidance.' },
              { icon: '📄', title: 'Upload', desc: 'Securely host your academic credentials.' },
              { icon: '🚀', title: 'Submit', desc: 'Single-click submission to multiple grants.' },
              { icon: '🏆', title: 'Track', desc: 'Real-time status updates on your dashboard.' }
            ].map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-icon glass-panel">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                {index < 4 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Testimonials */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefits-content">
              <h2>Why Scholars Choose <span className="text-gradient">ScholarBlue</span></h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <CheckCircle className="benefit-icon" color="var(--gold)" />
                  <div>
                    <h4>Verified Grants</h4>
                    <p>Every listing is hand-verified by our ombudsman.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <Shield className="benefit-icon" color="var(--gold)" />
                  <div>
                    <h4>AI Matching</h4>
                    <p>Precision algorithm finding grants you will win.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <Clock className="benefit-icon" color="var(--gold)" />
                  <div>
                    <h4>Swift Support</h4>
                    <p>Professional feedback on your scholarship essays.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <DollarSign className="benefit-icon" color="var(--gold)" />
                  <div>
                    <h4>Deadline Sync</h4>
                    <p>Automated reminders for all your applications.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card glass-panel">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                "ScholarBlue didn't just help me find funding; it provided a structured path that took the anxiety out of the application process. I'm now a full-ride student at Oxford thanks to their blueprint."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">AT</div>
                <div>
                  <h4>Aria Thompson</h4>
                  <p>Oxford Scholar '28</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header center">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-container">
            <div className="faq-item glass-panel">
              <div className="faq-question">
                <h4>Is there a fee to use ScholarBlue?</h4>
                <span>+</span>
              </div>
            </div>
            <div className="faq-item glass-panel">
              <div className="faq-question">
                <h4>How do I verify my eligibility?</h4>
                <span>+</span>
              </div>
            </div>
            <div className="faq-item glass-panel active">
              <div className="faq-question">
                <h4>What documents are mandatory?</h4>
                <span>-</span>
              </div>
              <div className="faq-answer">
                <p>Typically, you need your latest academic transcripts, a statement of purpose, 2 letters of recommendation, and proof of income if applying for need-based grants. Our document vault helps you manage these easily.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
