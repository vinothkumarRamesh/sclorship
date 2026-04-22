import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { Input } from '../components/FormElements';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    identifier: '', otp: '', newPassword: '', confirmPassword: ''
  });

  const handleSendOTP = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <AuthLayout 
      title="Reset Password" 
      subtitle="Recover access to your account"
      imageSrc="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    >
      {step === 1 && (
        <form className="auth-form" onSubmit={handleSendOTP}>
          <p className="text-muted" style={{fontSize: '0.9rem', marginBottom: '8px'}}>
            Enter your email or mobile number associated with your account to receive a verification code.
          </p>
          <Input 
            label="Email or Mobile" 
            id="identifier" 
            type="text" 
            placeholder="Enter your registered email/mobile"
            required 
            value={formData.identifier}
            onChange={(e) => setFormData({...formData, identifier: e.target.value})}
          />
          <button type="submit" className="btn btn-primary" style={{marginTop: '8px', padding: '14px'}}>
            Send OTP
          </button>
        </form>
      )}

      {step === 2 && (
        <form className="auth-form" onSubmit={handleVerifyOTP}>
          <p className="text-muted" style={{fontSize: '0.9rem', marginBottom: '8px', textAlign: 'center'}}>
            Code sent to {formData.identifier}
          </p>
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
            Verify OTP
          </button>
        </form>
      )}

      {step === 3 && (
        <form className="auth-form" onSubmit={handleResetPassword}>
          <Input 
            label="New Password" 
            id="newPassword" 
            type="password" 
            placeholder="Enter new password"
            required 
            value={formData.newPassword}
            onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
          />
          <Input 
            label="Confirm New Password" 
            id="confirmPassword" 
            type="password" 
            placeholder="Confirm new password"
            required 
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          />
          <button type="submit" className="btn btn-primary" style={{marginTop: '8px', padding: '14px'}}>
            Reset Password
          </button>
        </form>
      )}

      <div className="auth-form-footer">
        Remembered your password? <Link to="/login" className="auth-link">Login</Link>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
