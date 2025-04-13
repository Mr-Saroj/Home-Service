import React, { useState, useEffect } from 'react';
import './Forgot.css';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [showResend, setShowResend] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (otpSent && countdown > 0) {
      timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
    } else if (countdown === 0) {
      setShowResend(true);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [otpSent, countdown]);

  const sendOTP = () => {
    if (!mobile.trim()) {
      alert('Please enter your mobile number.');
      return;
    }
    setOtpSent(true);
    setCountdown(60);
    setShowResend(false);
  };

  const resendOTP = () => {
    setOtp('');
    setCountdown(60);
    setShowResend(false);
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      alert('Please enter the OTP.');
      return;
    }
    if (otp === '123456') {
      alert('OTP verified! Redirecting to reset password...');
      navigate('/reset-password');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="forgot-page">
      {/* Background 3D Animation */}
      <div className="animated-bg">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="cube" />
        ))}
      </div>

      <div className="forgot-content">
        <div className="forgot-box">
          <h2>Forget Password</h2>
          <p>Enter your registered mobile number to reset your password.</p>
          <form onSubmit={verifyOTP}>
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="number"
              id="mobile"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              disabled={otpSent}
            />

            {!otpSent ? (
              <button type="button" onClick={sendOTP}>
                Send OTP
              </button>
            ) : (
              <div style={{ marginTop: '20px' }}>
                <label htmlFor="otp">Enter OTP</label>
                <input
                  type="text"
                  id="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <div className="timer">
                  {countdown > 0 ? `OTP valid for: ${countdown}s` : 'OTP expired.'}
                </div>

                <button type="submit" style={{ marginTop: '10px' }}>
                  Verify OTP
                </button>

                {showResend && (
                  <button
                    type="button"
                    className="resend-btn"
                    onClick={resendOTP}
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            )}

            <p className="back-login">
              Remembered? <a href="/Login">Go back to login</a>
            </p>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: support@homeservice.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Bhubaneswar, Odisha</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; Tech Titans.</p>
        </div>
      </footer>
    </div>
  );
};

export default ForgetPassword;
