import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Users, FileCheck, CheckSquare, Settings, Search, MoreVertical, Plus, BarChart3, TrendingUp } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      {/* Admin Sidebar */}
      <aside className="admin-sidebar glass-panel">
        <div className="admin-brand">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">Admin<span className="text-gradient">Panel</span></span>
        </div>
        
        <nav className="admin-nav">
          <a href="#" className="admin-nav-item active"><LayoutDashboard size={20} /> Overview</a>
          <a href="#" className="admin-nav-item"><Users size={20} /> Students</a>
          <a href="#" className="admin-nav-item"><FileCheck size={20} /> Verifications</a>
          <a href="#" className="admin-nav-item"><CheckSquare size={20} /> Approvals</a>
          <a href="#" className="admin-nav-item"><Plus size={20} /> Manage Scholarships</a>
          <a href="#" className="admin-nav-item"><Settings size={20} /> Settings</a>
        </nav>
      </aside>

      {/* Main Admin Content */}
      <main className="admin-main">
        <header className="admin-header glass-panel flex-between">
          <div className="search-bar" style={{margin: 0, padding: '8px 16px', background: 'var(--bg-color)'}}>
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search students or applications..." className="search-input" />
          </div>
          
          <div className="admin-profile flex-center" style={{gap: '12px'}}>
            <span className="text-muted">System Admin</span>
            <div className="avatar-small">A</div>
          </div>
        </header>

        <div className="admin-content">
          <div className="dashboard-header flex-between">
            <h2>Dashboard Overview</h2>
            <button className="btn btn-primary"><Plus size={18} /> New Scholarship</button>
          </div>

          <div className="status-cards-grid" style={{gridTemplateColumns: 'repeat(4, 1fr)'}}>
            <div className="status-card glass-panel border-primary">
              <div className="status-info">
                <p>Total Applications</p>
                <h3>1,245</h3>
              </div>
              <div className="status-icon"><BarChart3 size={24} color="var(--primary-blue)" /></div>
            </div>
            <div className="status-card glass-panel border-warning">
              <div className="status-info">
                <p>Pending Review</p>
                <h3>342</h3>
              </div>
              <div className="status-icon"><FileCheck size={24} color="#F59E0B" /></div>
            </div>
            <div className="status-card glass-panel border-success">
              <div className="status-info">
                <p>Approved</p>
                <h3>850</h3>
              </div>
              <div className="status-icon"><TrendingUp size={24} color="#10B981" /></div>
            </div>
            <div className="status-card glass-panel border-danger">
              <div className="status-info">
                <p>Rejected</p>
                <h3>53</h3>
              </div>
              <div className="status-icon"><Users size={24} color="#EF4444" /></div>
            </div>
          </div>

          <div className="admin-sections-grid">
            {/* Recent Applications Table */}
            <div className="admin-section glass-panel" style={{gridColumn: '1 / span 2'}}>
              <div className="section-header flex-between">
                <h3>Recent Applications</h3>
                <button className="btn btn-ghost">View All</button>
              </div>
              <div className="table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Applicant</th>
                      <th>Scholarship</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Sarah Jenkins</strong><br/>
                        <span className="text-muted" style={{fontSize: '0.8rem'}}>sj@example.com</span>
                      </td>
                      <td>BlueTech Innovation</td>
                      <td>Oct 20, 2026</td>
                      <td><span className="badge" style={{background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B'}}>Pending</span></td>
                      <td><button className="btn-icon"><MoreVertical size={16}/></button></td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Michael Chang</strong><br/>
                        <span className="text-muted" style={{fontSize: '0.8rem'}}>mc@example.com</span>
                      </td>
                      <td>Global Leadership Fund</td>
                      <td>Oct 19, 2026</td>
                      <td><span className="badge" style={{background: 'rgba(16, 185, 129, 0.1)', color: '#10B981'}}>Approved</span></td>
                      <td><button className="btn-icon"><MoreVertical size={16}/></button></td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Emily Davis</strong><br/>
                        <span className="text-muted" style={{fontSize: '0.8rem'}}>em@example.com</span>
                      </td>
                      <td>Medical Excellence Grant</td>
                      <td>Oct 18, 2026</td>
                      <td><span className="badge" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444'}}>Rejected</span></td>
                      <td><button className="btn-icon"><MoreVertical size={16}/></button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Document Verification Queue */}
            <div className="admin-section glass-panel">
              <div className="section-header flex-between">
                <h3>Doc Verification Queue</h3>
              </div>
              <div className="doc-queue">
                <div className="queue-item">
                  <div className="queue-info">
                    <strong>Income Certificate</strong>
                    <p className="text-muted" style={{fontSize: '0.85rem'}}>David Wilson • Applied 2h ago</p>
                  </div>
                  <button className="btn btn-outline" style={{padding: '6px 12px', fontSize: '0.85rem'}}>Review</button>
                </div>
                <div className="queue-item">
                  <div className="queue-info">
                    <strong>Aadhaar Card</strong>
                    <p className="text-muted" style={{fontSize: '0.85rem'}}>Jessica Moore • Applied 5h ago</p>
                  </div>
                  <button className="btn btn-outline" style={{padding: '6px 12px', fontSize: '0.85rem'}}>Review</button>
                </div>
                <div className="queue-item">
                  <div className="queue-info">
                    <strong>Academic Transcript</strong>
                    <p className="text-muted" style={{fontSize: '0.85rem'}}>Robert Taylor • Applied 1d ago</p>
                  </div>
                  <button className="btn btn-outline" style={{padding: '6px 12px', fontSize: '0.85rem'}}>Review</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
