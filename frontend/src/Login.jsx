import React from 'react';
import './login.css';
import im1 from './assets/person.jpg';

const Login = () => {
  return (
    <div className="login-container">
      {/* 3D Background */}
      <div className="animated-bg">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="cube" />
        ))}
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="login-box glass">
          <div className="left-panel">
            <div className="form-wrapper">
              <h2>Log In</h2>
              <p>Welcome back! Please enter your details</p>
              <form>
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  id="mobile"
                  type="tel"
                  placeholder="Enter Mobile Number"
                  required
                />

                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  required
                />

                <a href="/forgot" className="forgot">Forgot password?</a>

                <button type="submit">
                  <a href="/mdashboard" style={{ color: 'white', textDecoration: 'none' }}>
                    Log In
                  </a>
                </button>

                <p className="signup">
                  Don't have an account? <a href="/signup">Sign up</a>
                </p>
              </form>
            </div>
          </div>
          <div className="right-panel">
            <img src={im1} alt="Login visual" className="login-image" />
          </div>
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

export default Login;
