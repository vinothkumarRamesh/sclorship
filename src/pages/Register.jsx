import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { Input } from '../components/FormElements';

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', password: '', confirmPassword: '', otp: ''
  });

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Dummy register
    navigate('/login');
  };

  return (
    <AuthLayout 
      title="Create Account" 
      subtitle="Join ScholarBlue and start your journey"
      imageSrc="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    >
      {step === 1 ? (
        <form className="auth-form" onSubmit={handleNext}>
          <Input 
            label="Full Name" 
            id="name" 
            type="text" 
            placeholder="John Doe"
            required 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <Input 
            label="Email Address" 
            id="email" 
            type="email" 
            placeholder="john@example.com"
            required 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <Input 
            label="Mobile Number" 
            id="mobile" 
            type="tel" 
            placeholder="+1 234 567 8900"
            required 
            value={formData.mobile}
            onChange={(e) => setFormData({...formData, mobile: e.target.value})}
          />
          <Input 
            label="Password" 
            id="password" 
            type="password" 
            placeholder="Create a password"
            required 
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <Input 
            label="Confirm Password" 
            id="confirmPassword" 
            type="password" 
            placeholder="Confirm your password"
            required 
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          />
          
          <button type="submit" className="btn btn-primary" style={{marginTop: '8px', padding: '14px'}}>
            Continue
          </button>
        </form>
      ) : (
        <form className="auth-form" onSubmit={handleRegister}>
          <div style={{textAlign: 'center', marginBottom: '16px'}}>
            <p className="text-muted">We sent a verification code to your email/mobile.</p>
          </div>
          <Input 
            label="Enter OTP" 
            id="otp" 
            type="text" 
            placeholder="123456"
            required 
            value={formData.otp}
            onChange={(e) => setFormData({...formData, otp: e.target.value})}
          />
          
          <button type="submit" className="btn btn-primary" style={{marginTop: '8px', padding: '14px'}}>
            Verify & Create Account
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => setStep(1)}>
            Back
          </button>
        </form>
      )}

      <div className="auth-form-footer">
        Already have an account? <Link to="/login" className="auth-link">Login</Link>
      </div>
    </AuthLayout>
  );
};

export default Register;
