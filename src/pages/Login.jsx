import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { Input, Checkbox } from '../components/FormElements';

const Login = () => {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState('password'); // 'password' or 'otp'
  const [step, setStep] = useState(1); // 1 for input, 2 for OTP verification
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ identifier: '', password: '', otp: '', remember: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/student-dashboard');
    }, 1000);
  };

  const handleSendOTP = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate sending OTP
    setTimeout(() => {
      setIsLoading(false);
      alert(`OTP sent successfully to ${formData.identifier}`);
      setStep(2);
    }, 1500);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate verifying OTP
    setTimeout(() => {
      setIsLoading(false);
      navigate('/student-dashboard');
    }, 1000);
  };

  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Sign in to your ScholarBlue account"
      imageSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    >
      {loginMethod === 'password' ? (
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="flex-between" style={{marginBottom: '16px'}}>
            <span style={{fontWeight: 600}}>Password Login</span>
            <button type="button" className="btn btn-ghost" onClick={() => setLoginMethod('otp')} style={{padding: '4px 8px', fontSize: '0.9rem'}}>
              Login with OTP instead
            </button>
          </div>

          <Input 
            label="Email or Mobile Number" 
            id="identifier" 
            type="text" 
            placeholder="Enter your email or mobile"
            required 
            value={formData.identifier}
            onChange={(e) => setFormData({...formData, identifier: e.target.value})}
          />
          
          <Input 
            label="Password" 
            id="password" 
            type="password" 
            placeholder="Enter your password"
            required 
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />

          <div className="flex-between">
            <Checkbox 
              label="Remember me" 
              id="remember"
              checked={formData.remember}
              onChange={(e) => setFormData({...formData, remember: e.target.checked})}
            />
            <Link to="/forgot-password" className="auth-link" style={{fontSize: '0.9rem'}}>
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary" style={{marginTop: '8px', padding: '14px'}} disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Login'}
          </button>
        </form>
      ) : (
        <form className="auth-form" onSubmit={step === 1 ? handleSendOTP : handleVerifyOTP}>
          <div className="flex-between" style={{marginBottom: '16px'}}>
            <span style={{fontWeight: 600}}>OTP Login</span>
            <button type="button" className="btn btn-ghost" onClick={() => { setLoginMethod('password'); setStep(1); }} style={{padding: '4px 8px', fontSize: '0.9rem'}}>
              Use Password instead
            </button>
          </div>

          {step === 1 ? (
            <>
              <Input 
                label="Email or Mobile Number" 
                id="identifier" 
                type="text" 
                placeholder="Enter your email or mobile"
                required 
                value={formData.identifier}
                onChange={(e) => setFormData({...formData, identifier: e.target.value})}
              />
              <button type="submit" className="btn btn-primary" style={{marginTop: '8px', padding: '14px'}} disabled={isLoading}>
                {isLoading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </>
          ) : (
            <>
              <p className="text-muted" style={{fontSize: '0.9rem', marginBottom: '8px'}}>
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
              <button type="submit" className="btn btn-primary" style={{marginTop: '8px', padding: '14px'}} disabled={isLoading}>
                {isLoading ? 'Verifying...' : 'Verify & Login'}
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => setStep(1)} style={{marginTop: '8px'}}>
                Back
              </button>
            </>
          )}
        </form>
      )}

      <div className="auth-form">
        <div className="divider">or</div>

        <button type="button" className="btn btn-outline" style={{padding: '14px'}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" style={{width: '20px'}} />
          Continue with Google
        </button>

        <div className="auth-form-footer">
          Don't have an account? <Link to="/register" className="auth-link">Register Now</Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
