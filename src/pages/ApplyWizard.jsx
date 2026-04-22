import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, UploadCloud } from 'lucide-react';
import { Input, Select, Checkbox } from '../components/FormElements';
import './ApplyWizard.css';

const STEPS = [
  "Personal",
  "Education",
  "Family",
  "Bank Details",
  "Documents",
  "Declaration"
];

const ApplyWizard = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit
    navigate('/student-dashboard');
  };

  return (
    <div className="wizard-page">
      <div className="container wizard-container">
        
        <div className="wizard-header glass-panel">
          <h2>Application Form</h2>
          <p className="text-muted">The BlueTech Innovation Award</p>

          <div className="progress-container">
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
              ></div>
            </div>
            
            <div className="step-indicators">
              {STEPS.map((stepName, index) => {
                const stepNum = index + 1;
                const isCompleted = currentStep > stepNum;
                const isActive = currentStep === stepNum;
                
                return (
                  <div key={stepName} className={`step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
                    <div className="step-circle flex-center">
                      {isCompleted ? <Check size={16} /> : stepNum}
                    </div>
                    <span className="step-label desktop-only">{stepName}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="wizard-content glass-card">
          <form onSubmit={currentStep === 6 ? handleSubmit : handleNext}>
            
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="step-pane">
                <h3 className="pane-title">Personal Details</h3>
                <div className="form-grid">
                  <Input label="Full Name" id="fullName" required placeholder="As per Aadhaar" />
                  <Input label="Date of Birth" id="dob" type="date" required />
                  <Select label="Gender" id="gender" options={['Male', 'Female', 'Other']} required />
                  <Input label="Aadhaar Number" id="aadhaar" required placeholder="XXXX XXXX XXXX" />
                  <Input label="Mobile Number" id="mobile" type="tel" required />
                  <Input label="Email Address" id="email" type="email" required />
                  <div style={{gridColumn: '1 / -1'}}>
                    <Input label="Residential Address" id="address" required />
                  </div>
                  <Select label="State" id="state" options={['California', 'Texas', 'New York']} required />
                  <Input label="District" id="district" required />
                  <Input label="Pincode" id="pincode" required />
                </div>
              </div>
            )}

            {/* Step 2: Education Details */}
            {currentStep === 2 && (
              <div className="step-pane">
                <h3 className="pane-title">Education Details</h3>
                <div className="form-grid">
                  <div style={{gridColumn: '1 / -1'}}>
                    <Input label="School / College Name" id="college" required />
                  </div>
                  <Select label="Course" id="course" options={['B.Tech', 'B.Sc', 'B.A', 'M.Tech']} required />
                  <Input label="Department" id="department" required />
                  <Select label="Current Year" id="year" options={['1st Year', '2nd Year', '3rd Year', '4th Year']} required />
                  <Input label="Marks / CGPA" id="cgpa" required placeholder="e.g. 8.5 or 85%" />
                  <Input label="Passing Year" id="passingYear" type="number" required placeholder="YYYY" />
                </div>
              </div>
            )}

            {/* Step 3: Family Details */}
            {currentStep === 3 && (
              <div className="step-pane">
                <h3 className="pane-title">Family Details</h3>
                <div className="form-grid">
                  <Input label="Father's Name" id="fatherName" required />
                  <Input label="Mother's Name" id="motherName" required />
                  <Input label="Father's Occupation" id="occupation" required />
                  <Input label="Annual Family Income" id="income" type="number" required placeholder="In USD" />
                  <Select label="Category / Community" id="category" options={['General', 'OBC', 'SC/ST', 'Minority']} required />
                </div>
              </div>
            )}

            {/* Step 4: Bank Details */}
            {currentStep === 4 && (
              <div className="step-pane">
                <h3 className="pane-title">Bank Details</h3>
                <div className="form-grid">
                  <div style={{gridColumn: '1 / -1'}}>
                    <Input label="Account Holder Name" id="accName" required placeholder="Exactly as in bank passbook" />
                  </div>
                  <Input label="Bank Name" id="bankName" required />
                  <Input label="Account Number" id="accNumber" required />
                  <Input label="IFSC / Routing Code" id="ifsc" required />
                  <Input label="Branch Name" id="branch" required />
                </div>
              </div>
            )}

            {/* Step 5: Upload Documents */}
            {currentStep === 5 && (
              <div className="step-pane">
                <h3 className="pane-title">Upload Documents</h3>
                <p className="text-muted" style={{marginBottom: '24px', fontSize: '0.9rem'}}>Please upload clear, legible copies of your documents. Max size: 2MB per file (PDF/JPG/PNG).</p>
                
                <div className="upload-grid">
                  {[
                    "Student Photo", "Aadhaar Card", "Income Certificate",
                    "Community Certificate", "Previous Marksheet", 
                    "Bonafide Certificate", "Bank Passbook"
                  ].map((doc, i) => (
                    <div key={i} className="upload-box glass-panel">
                      <UploadCloud size={32} color="var(--primary-blue)" style={{marginBottom: '8px'}} />
                      <span className="upload-label">{doc}</span>
                      <button type="button" className="btn btn-outline" style={{padding: '6px 12px', fontSize: '0.8rem', marginTop: '12px'}}>Choose File</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Declaration */}
            {currentStep === 6 && (
              <div className="step-pane">
                <h3 className="pane-title">Declaration & Preview</h3>
                <div className="preview-container glass-panel" style={{marginBottom: '24px', padding: '24px'}}>
                  <p>Please review all details provided in previous steps. Once submitted, modifications may require admin approval.</p>
                  <button type="button" className="btn btn-outline" style={{marginTop: '16px'}}>Preview Application Data</button>
                </div>

                <div className="declaration-box">
                  <Checkbox 
                    id="declaration" 
                    required 
                    label="I hereby declare that all the information provided by me in this application is true and correct to the best of my knowledge. I understand that any false information may result in the rejection of my application and potential legal action."
                  />
                </div>
              </div>
            )}

            <div className="wizard-actions flex-between">
              {currentStep > 1 ? (
                <button type="button" className="btn btn-outline" onClick={handlePrev}>Back</button>
              ) : <div></div>}
              
              <button type="submit" className="btn btn-primary">
                {currentStep === 6 ? 'Submit Application' : 'Save & Next'}
              </button>
            </div>
            
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default ApplyWizard;
