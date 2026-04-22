import React from 'react';
import { Link } from 'react-router-dom';
import './AuthLayout.css';

const AuthLayout = ({ children, title, subtitle, imageSrc }) => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left desktop-only">
          <div className="auth-visual glass-panel">
            <div className="visual-image" style={{ backgroundImage: `url(${imageSrc || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'})` }}></div>
            <div className="auth-quote">
              <h3>"Education is the most powerful weapon which you can use to change the world."</h3>
              <p>— Nelson Mandela</p>
            </div>
          </div>
        </div>
        <div className="auth-right">
          <div className="auth-form-container glass-card">
            <div className="auth-header">
              <Link to="/" className="logo">
                <span className="logo-icon">🎓</span>
                <span className="logo-text">Scholar<span className="text-gradient">Blue</span></span>
              </Link>
              <h2>{title}</h2>
              <p className="text-muted">{subtitle}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
