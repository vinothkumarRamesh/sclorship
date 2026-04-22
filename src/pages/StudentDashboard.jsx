import React from 'react';
import { Link } from 'react-router-dom';
import { User, Bell, Download, Clock, CheckCircle, XCircle } from 'lucide-react';
import './StudentDashboard.css';

const StudentDashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="container dashboard-layout">
        
        {/* Sidebar */}
        <aside className="dashboard-sidebar glass-panel">
          <div className="profile-summary">
            <div className="avatar-circle">
              <User size={32} />
            </div>
            <h3>Alex Johnson</h3>
            <p className="text-muted">B.Tech Computer Science</p>
            <div className="profile-completion">
              <div className="flex-between" style={{fontSize: '0.85rem', marginBottom: '8px'}}>
                <span>Profile Completion</span>
                <span className="text-gradient">85%</span>
              </div>
              <div className="progress-bar-bg" style={{position: 'relative', top: 0, left: 0, right: 0}}>
                <div className="progress-bar-fill" style={{width: '85%'}}></div>
              </div>
            </div>
          </div>
          
          <nav className="dashboard-nav">
            <Link to="/student-dashboard" className="nav-item active">Dashboard</Link>
            <Link to="/profile" className="nav-item">My Profile</Link>
            <Link to="/scholarships" className="nav-item">Find Scholarships</Link>
            <a href="#" className="nav-item">Document Vault</a>
            <a href="#" className="nav-item">Settings</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          
          <div className="dashboard-header flex-between">
            <h2>Welcome back, Alex! 👋</h2>
            <div className="flex-center" style={{gap: '16px'}}>
              <button className="btn-icon" style={{position: 'relative'}}>
                <Bell size={20} />
                <span className="notification-dot"></span>
              </button>
              <Link to="/profile" className="btn btn-outline" style={{padding: '8px 16px'}}>Edit Profile</Link>
            </div>
          </div>

          <div className="status-cards-grid">
            <div className="status-card glass-panel border-warning">
              <div className="status-icon"><Clock size={24} color="#F59E0B" /></div>
              <div className="status-info">
                <h3>2</h3>
                <p>Pending Applications</p>
              </div>
            </div>
            <div className="status-card glass-panel border-success">
              <div className="status-icon"><CheckCircle size={24} color="#10B981" /></div>
              <div className="status-info">
                <h3>1</h3>
                <p>Approved Scholarships</p>
              </div>
            </div>
            <div className="status-card glass-panel border-danger">
              <div className="status-icon"><XCircle size={24} color="#EF4444" /></div>
              <div className="status-info">
                <h3>0</h3>
                <p>Rejected</p>
              </div>
            </div>
          </div>

          <div className="dashboard-sections">
            
            {/* Applied Scholarships List */}
            <div className="dashboard-section glass-panel">
              <div className="section-header flex-between">
                <h3>Applied Scholarships</h3>
                <Link to="/scholarships" className="auth-link">Apply New</Link>
              </div>
              
              <div className="application-list">
                <div className="app-list-item">
                  <div className="app-info">
                    <h4>The BlueTech Innovation Award</h4>
                    <p className="text-muted">Applied on: Oct 01, 2026</p>
                  </div>
                  <div className="app-status">
                    <span className="badge" style={{background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B', border: '1px solid #F59E0B'}}>Under Review</span>
                  </div>
                  <div className="app-actions">
                    <button className="btn btn-ghost"><Download size={18} /> Ack.</button>
                  </div>
                </div>

                <div className="app-list-item">
                  <div className="app-info">
                    <h4>State Merit Grant 2026</h4>
                    <p className="text-muted">Applied on: Sep 15, 2026</p>
                  </div>
                  <div className="app-status">
                    <span className="badge" style={{background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', border: '1px solid #10B981'}}>Approved</span>
                  </div>
                  <div className="app-actions">
                    <button className="btn btn-ghost"><Download size={18} /> Letter</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="dashboard-section glass-panel">
              <h3>Application Timeline</h3>
              <p className="text-muted" style={{marginBottom: '24px'}}>Track your latest application progress</p>
              
              <div className="timeline-container">
                <div className="timeline-item completed">
                  <div className="timeline-marker"><CheckCircle size={16} /></div>
                  <div className="timeline-content">
                    <h4>Application Submitted</h4>
                    <p className="text-muted">Oct 01, 2026 - 10:30 AM</p>
                  </div>
                </div>
                <div className="timeline-item completed">
                  <div className="timeline-marker"><CheckCircle size={16} /></div>
                  <div className="timeline-content">
                    <h4>Document Verification</h4>
                    <p className="text-muted">Oct 05, 2026 - 02:15 PM</p>
                  </div>
                </div>
                <div className="timeline-item active">
                  <div className="timeline-marker"><Clock size={16} /></div>
                  <div className="timeline-content">
                    <h4>Committee Review</h4>
                    <p className="text-muted">In Progress - Usually takes 2 weeks</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Final Decision</h4>
                    <p className="text-muted">Pending</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
};

export default StudentDashboard;
