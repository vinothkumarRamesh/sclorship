import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Camera, Save, Shield } from 'lucide-react';
import { Input, Select } from '../components/FormElements';
import '../pages/StudentDashboard.css'; // Reusing some layout styles

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="dashboard-page">
      <div className="container dashboard-layout">
        
        {/* Sidebar */}
        <aside className="dashboard-sidebar glass-panel">
          <div className="profile-summary">
            <div className="avatar-circle" style={{position: 'relative'}}>
              <User size={32} />
              <button className="btn-icon" style={{position: 'absolute', bottom: -5, right: -5, background: 'var(--bg-color)', border: '1px solid var(--glass-border)'}}>
                <Camera size={14} />
              </button>
            </div>
            <h3>Alex Johnson</h3>
            <p className="text-muted">Student ID: SB-2026-8921</p>
          </div>
          
          <nav className="dashboard-nav">
            <Link to="/student-dashboard" className="nav-item">Dashboard</Link>
            <Link to="/profile" className="nav-item active">My Profile</Link>
            <Link to="/scholarships" className="nav-item">Find Scholarships</Link>
            <a href="#" className="nav-item">Settings</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          <div className="dashboard-header flex-between">
            <h2>Profile Settings</h2>
            <button className="btn btn-primary"><Save size={18} /> Save Changes</button>
          </div>

          <div className="glass-panel" style={{marginBottom: '24px'}}>
            <div style={{display: 'flex', borderBottom: '1px solid var(--glass-border)'}}>
              <button 
                className={`btn btn-ghost ${activeTab === 'personal' ? 'active text-gradient' : ''}`} 
                style={{padding: '16px 24px', borderRadius: 0, borderBottom: activeTab === 'personal' ? '2px solid var(--primary-blue)' : 'none'}}
                onClick={() => setActiveTab('personal')}
              >
                Personal Details
              </button>
              <button 
                className={`btn btn-ghost ${activeTab === 'bank' ? 'active text-gradient' : ''}`} 
                style={{padding: '16px 24px', borderRadius: 0, borderBottom: activeTab === 'bank' ? '2px solid var(--primary-blue)' : 'none'}}
                onClick={() => setActiveTab('bank')}
              >
                Bank Details
              </button>
              <button 
                className={`btn btn-ghost ${activeTab === 'security' ? 'active text-gradient' : ''}`} 
                style={{padding: '16px 24px', borderRadius: 0, borderBottom: activeTab === 'security' ? '2px solid var(--primary-blue)' : 'none'}}
                onClick={() => setActiveTab('security')}
              >
                Security
              </button>
            </div>

            <div style={{padding: '32px'}}>
              {activeTab === 'personal' && (
                <div className="form-grid">
                  <Input label="First Name" id="fname" defaultValue="Alex" />
                  <Input label="Last Name" id="lname" defaultValue="Johnson" />
                  <Input label="Email Address" id="email" type="email" defaultValue="alex.j@example.com" />
                  <Input label="Phone Number" id="phone" type="tel" defaultValue="+1 234 567 8900" />
                  <Select label="Education Level" id="edulevel" options={['High School', 'Undergraduate', 'Postgraduate']} />
                  <Input label="University/School" id="uni" defaultValue="Stanford University" />
                </div>
              )}

              {activeTab === 'bank' && (
                <div className="form-grid">
                  <Input label="Account Holder Name" id="accname" defaultValue="Alex Johnson" />
                  <Input label="Bank Name" id="bankname" defaultValue="Chase Bank" />
                  <Input label="Account Number" id="accno" type="password" defaultValue="1234567890" />
                  <Input label="Routing Number" id="routing" defaultValue="021000021" />
                </div>
              )}

              {activeTab === 'security' && (
                <div className="form-grid">
                  <div style={{gridColumn: '1 / -1', marginBottom: '16px'}}>
                    <div className="flex-center" style={{justifyContent: 'flex-start', gap: '12px', padding: '16px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', color: '#10B981'}}>
                      <Shield size={24} />
                      <div>
                        <strong style={{display: 'block'}}>Two-Factor Authentication is Enabled</strong>
                        <span style={{fontSize: '0.85rem'}}>Your account is protected.</span>
                      </div>
                    </div>
                  </div>
                  <Input label="Current Password" id="currpass" type="password" />
                  <div></div>
                  <Input label="New Password" id="newpass" type="password" />
                  <Input label="Confirm New Password" id="confirmpass" type="password" />
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
