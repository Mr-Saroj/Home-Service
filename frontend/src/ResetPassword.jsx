import React, { useState } from 'react';
import './Forgot.css';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    if (newPass.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    if (newPass !== confirmPass) {
      alert('Passwords do not match.');
      return;
    }

    alert('Password reset successful! You can now log in.');
    navigate('/');
  };

  return (
    <div className="container">
      {/* Background 3D Animation */}
      <div className="animated-bg">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="cube" />
        ))}
      </div>
      <div className="forgot-box">
        <h2>Reset Password</h2>
        <p>Create a new strong password for your account.</p>
        <form onSubmit={handleReset}>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            placeholder="Enter new password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            required
          />

          <button type="submit">Reset Password</button>

          <p className="back-login">
            Back to <a href="/">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;