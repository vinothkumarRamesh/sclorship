import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ShieldCheck, MapPin, Users } from 'lucide-react';
import './ScholarshipCard.css';

const ScholarshipCard = ({ scholarship }) => {
  const { 
    id, title, amount, deadline, 
    eligibility, type, isFeatured,
    seats, state
  } = scholarship;

  return (
    <div className={`scholarship-card glass-card ${isFeatured ? 'featured' : ''}`}>
      <div className="card-header">
        <div className="card-type-icon flex-center">
          {type === 'Merit Based' ? 'A' : type === 'Need Based' ? '⚖️' : '🎓'}
        </div>
        <div className="card-badges">
          <span className="badge badge-outline">{type}</span>
          {isFeatured && <span className="badge badge-gold">High Priority</span>}
        </div>
      </div>

      <h3 className="card-title">{title}</h3>
      
      <div className="card-stats">
        <div className="stat">
          <span className="stat-label">Amount</span>
          <span className="stat-value text-gradient">{amount}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Deadline</span>
          <span className="stat-value deadline-value">{deadline}</span>
        </div>
      </div>

      <div className="card-details">
        {state && (
          <p className="detail-item">
            <MapPin size={16} /> {state}
          </p>
        )}
        <p className="detail-item">
          <Users size={16} /> {seats} Seats Available
        </p>
        <p className="detail-item eligibility-desc">
          <ShieldCheck size={16} className="min-icon" /> 
          <span>{eligibility}</span>
        </p>
      </div>

      <div className="card-footer">
        <Link to={`/scholarships/${id}`} className="btn btn-primary w-100">
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default ScholarshipCard;
