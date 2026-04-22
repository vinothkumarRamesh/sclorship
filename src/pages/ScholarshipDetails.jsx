import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Clock, Calendar, MapPin, Users, CheckCircle, FileText, Share2, Bookmark } from 'lucide-react';
import './ScholarshipDetails.css';

const ScholarshipDetails = () => {
  const { id } = useParams();

  // Dummy details data based on ID
  const scholarship = {
    title: "The BlueTech Innovation Award",
    amount: "$25,000",
    deadline: "Oct 15, 2026",
    daysLeft: 45,
    eligibility: "Undergraduates in STEM fields with 3.5+ GPA and demonstrated leadership.",
    type: "Merit Based",
    seats: 50,
    state: "California",
    sponsor: "BlueTech Global Inc.",
    description: "The BlueTech Innovation Award is designed to empower the next generation of technological visionaries. We are looking for students who are not only academically exceptional but also show a strong commitment to solving real-world problems through technology.",
    requirements: [
      "Must be enrolled full-time in an accredited 4-year university.",
      "Must be pursuing a degree in Computer Science, Engineering, or related STEM field.",
      "Minimum cumulative GPA of 3.5 on a 4.0 scale.",
      "Demonstrated leadership in extracurricular activities."
    ],
    documents: [
      "Latest Academic Transcript",
      "Statement of Purpose (500-800 words)",
      "2 Letters of Recommendation",
      "Resume / CV"
    ]
  };

  return (
    <div className="details-page">
      {/* Banner Section */}
      <div className="details-banner">
        <div className="container banner-container">
          <div className="banner-content">
            <div className="badge badge-gold" style={{marginBottom: '16px'}}>High Priority</div>
            <h1>{scholarship.title}</h1>
            <p className="sponsor-text">Sponsored by {scholarship.sponsor}</p>
            
            <div className="banner-stats flex-center" style={{justifyContent: 'flex-start', gap: '32px', marginTop: '24px'}}>
              <div className="stat-highlight">
                <span className="stat-highlight-label">Amount Offered</span>
                <span className="text-gradient stat-highlight-val">{scholarship.amount}</span>
              </div>
              <div className="stat-highlight">
                <span className="stat-highlight-label">Application Deadline</span>
                <span className="stat-highlight-val" style={{color: '#E63946'}}>{scholarship.deadline}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container details-layout">
        <main className="details-main">
          <section className="detail-section glass-panel">
            <h2>Overview</h2>
            <p>{scholarship.description}</p>
            
            <div className="quick-facts grid">
              <div className="fact-item">
                <MapPin size={20} className="fact-icon" />
                <div>
                  <strong>Location</strong>
                  <p>{scholarship.state}</p>
                </div>
              </div>
              <div className="fact-item">
                <Users size={20} className="fact-icon" />
                <div>
                  <strong>Available Seats</strong>
                  <p>{scholarship.seats} Students</p>
                </div>
              </div>
              <div className="fact-item">
                <Clock size={20} className="fact-icon" />
                <div>
                  <strong>Duration</strong>
                  <p>1 Academic Year</p>
                </div>
              </div>
            </div>
          </section>

          <section className="detail-section glass-panel">
            <h2>Eligibility Criteria</h2>
            <ul className="criteria-list">
              {scholarship.requirements.map((req, index) => (
                <li key={index}>
                  <CheckCircle size={20} className="list-icon" color="var(--accent-blue)" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="detail-section glass-panel">
            <h2>Required Documents</h2>
            <ul className="criteria-list">
              {scholarship.documents.map((doc, index) => (
                <li key={index}>
                  <FileText size={20} className="list-icon" color="var(--text-muted)" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="detail-section glass-panel">
            <h2>Terms & Conditions</h2>
            <p className="text-muted" style={{fontSize: '0.9rem'}}>
              By applying for this scholarship, you agree to the terms and conditions set forth by the sponsoring organization. Funds must be used strictly for tuition, books, and board. Misrepresentation of facts will result in immediate disqualification.
            </p>
          </section>
        </main>

        <aside className="details-sidebar">
          <div className="apply-card glass-panel sticky-sidebar">
            <div className="countdown text-center" style={{marginBottom: '24px'}}>
              <h3 style={{fontSize: '2rem', color: '#E63946', margin: 0}}>{scholarship.daysLeft}</h3>
              <p className="text-muted" style={{textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600}}>Days Left to Apply</p>
            </div>
            
            <Link to="/apply" className="btn btn-primary w-100" style={{padding: '16px', fontSize: '1.1rem'}}>
              Apply Now
            </Link>

            <div className="flex-between" style={{marginTop: '16px'}}>
              <button className="btn btn-outline flex-center" style={{flex: 1, marginRight: '8px'}}>
                <Bookmark size={18} /> Save
              </button>
              <button className="btn btn-outline flex-center" style={{flex: 1, marginLeft: '8px'}}>
                <Share2 size={18} /> Share
              </button>
            </div>

            <div className="sidebar-divider"></div>

            <div className="contact-sponsor">
              <h4>Questions about this grant?</h4>
              <p className="text-muted" style={{fontSize: '0.9rem', marginBottom: '12px'}}>Contact the sponsor directly for clarifications.</p>
              <button className="btn btn-ghost w-100">Contact Sponsor</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
