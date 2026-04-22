import React, { useState } from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import ScholarshipCard from '../components/ScholarshipCard';
import { Input, Select, Checkbox } from '../components/FormElements';
import './Scholarships.css';

const Scholarships = () => {
  // Dummy data
  const allScholarships = [
    {
      id: 1, title: "The BlueTech Innovation Award", amount: "$25,000", deadline: "Oct 15, 2026",
      eligibility: "Undergraduates in STEM fields with 3.5+ GPA.", type: "Merit Based", isFeatured: true, seats: 50, state: "California"
    },
    {
      id: 2, title: "Elite Global Leadership Fund", amount: "$12,000", deadline: "Nov 30, 2026",
      eligibility: "International students pursuing Social Sciences.", type: "Need Based", isFeatured: false, seats: 100, state: "New York"
    },
    {
      id: 3, title: "Medical Excellence Grant", amount: "$50,000", deadline: "Dec 30, 2026",
      eligibility: "PhD candidates in Biotechnology research tracks.", type: "Medical", isFeatured: false, seats: 20, state: "Texas"
    },
    {
      id: 4, title: "Women in Tech Scholarship", amount: "$15,000", deadline: "Sep 01, 2026",
      eligibility: "Female students entering computer science programs.", type: "Merit Based", isFeatured: true, seats: 75, state: "Washington"
    },
    {
      id: 5, title: "First Generation College Fund", amount: "$5,000", deadline: "Aug 15, 2026",
      eligibility: "First in family to attend college, minimum 3.0 GPA.", type: "Need Based", isFeatured: false, seats: 200, state: "All States"
    },
    {
      id: 6, title: "Arts & Humanities Fellowship", amount: "$8,000", deadline: "Jan 15, 2027",
      eligibility: "Portfolio review for MFA candidates.", type: "Merit Based", isFeatured: false, seats: 15, state: "Illinois"
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  const handleCategoryChange = (e, cat) => {
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, cat]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    }
  };

  const filteredScholarships = allScholarships.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.eligibility.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(s.type);
    const matchesState = !selectedState || s.state === selectedState;
    return matchesSearch && matchesCategory && matchesState;
  });

  return (
    <div className="scholarships-page">
      <div className="container page-header">
        <h1>Find Your <span className="text-gradient">Scholarship</span></h1>
        <p className="text-muted">Browse through thousands of verified opportunities tailored to your profile.</p>
        
        <div className="search-bar glass-panel">
          <Search className="search-icon" size={20} />
          <input 
            type="text" 
            placeholder="Search by name, course, or keyword..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      <div className="container layout-grid">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar glass-panel desktop-only">
          <div className="filters-header flex-between">
            <h3>Filters</h3>
            <SlidersHorizontal size={18} />
          </div>
          
          <div className="filter-group">
            <h4>Category</h4>
            <div className="filter-options">
              <Checkbox id="cat-merit" label="Merit Based (342)" checked={selectedCategories.includes('Merit Based')} onChange={(e) => handleCategoryChange(e, 'Merit Based')} />
              <Checkbox id="cat-need" label="Need Based (215)" checked={selectedCategories.includes('Need Based')} onChange={(e) => handleCategoryChange(e, 'Need Based')} />
              <Checkbox id="cat-sports" label="Sports (89)" checked={selectedCategories.includes('Sports')} onChange={(e) => handleCategoryChange(e, 'Sports')} />
              <Checkbox id="cat-medical" label="Medical (120)" checked={selectedCategories.includes('Medical')} onChange={(e) => handleCategoryChange(e, 'Medical')} />
            </div>
          </div>

          <div className="filter-group">
            <h4>Education Level</h4>
            <div className="filter-options">
              <Checkbox id="edu-hs" label="High School" />
              <Checkbox id="edu-ug" label="Undergraduate" />
              <Checkbox id="edu-pg" label="Postgraduate" />
              <Checkbox id="edu-phd" label="PhD / Research" />
            </div>
          </div>

          <div className="filter-group">
            <h4>Income Range</h4>
            <Select id="income-filter" options={['Below $30,000', '$30,000 - $60,000', '$60,000 - $100,000', 'Any Income']} />
          </div>
          
          <div className="filter-group">
            <h4>State</h4>
            <Select 
              id="state-filter" 
              options={['California', 'New York', 'Texas', 'Washington', 'Illinois', 'Florida']} 
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <h4>Demographics</h4>
            <div className="filter-options">
              <Checkbox id="demo-women" label="Women Only" />
              <Checkbox id="demo-minority" label="Minorities" />
              <Checkbox id="demo-veteran" label="Veterans" />
            </div>
          </div>

          <button className="btn btn-outline w-100" style={{marginTop: '16px'}} onClick={() => { setSearchQuery(''); setSelectedCategories([]); setSelectedState(''); }}>Clear Filters</button>
        </aside>

        {/* Main Content */}
        <main className="results-main">
          <div className="results-header flex-between">
            <p>Showing <strong>{filteredScholarships.length}</strong> scholarships</p>
            <div className="sort-by flex-center" style={{gap: '8px'}}>
              <span className="text-muted" style={{fontSize: '0.9rem'}}>Sort by:</span>
              <select className="form-input" style={{padding: '8px 16px', width: 'auto', minWidth: '150px'}}>
                <option>Newest First</option>
                <option>Amount: High to Low</option>
                <option>Closing Soon</option>
              </select>
            </div>
          </div>

          <div className="scholarships-grid list-view">
            {filteredScholarships.map(scholarship => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
            {filteredScholarships.length === 0 && (
              <div style={{gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: 'var(--text-muted)'}}>
                No scholarships found matching your criteria.
              </div>
            )}
          </div>

          <div className="pagination">
            <button className="btn btn-outline" disabled>Previous</button>
            <div className="page-numbers">
              <button className="page-num active">1</button>
              <button className="page-num">2</button>
              <button className="page-num">3</button>
              <span className="page-ellipsis">...</span>
              <button className="page-num">12</button>
            </div>
            <button className="btn btn-outline">Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Scholarships;
