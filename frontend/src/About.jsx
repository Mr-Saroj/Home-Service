import React from "react";
import "./About.css";
import logo from "./assets/logo.jpg";
import homeImage from "./assets/Home.jpg";

const About = () => {
  return (
    <div className="home-container">
      {/* Background Animation */}
      <div className="animated-bg">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="cube" />
        ))}
      </div>

      {/* Glass wrapper */}
      <div className="home-glass">
        {/* Header */}
        <header className="main-header">
          <div className="logo">
            <img src={logo} alt="Home Service Logo" />
            <h2>Home Service</h2>
          </div>
          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
          <div className="header-buttons">
            <a href="/login">
              <button className="login-btn">Login</button>
            </a>
          </div>
        </header>

        {/* About Section */}
        <section className="about-section">
          <div className="about-text">
            <h1>Join the Home Services Team!</h1>
            <p>Home Service provides great opportunities for professionals in electrician work, plumbing, and AC repair services across Odisha.</p>
            <p>We believe our greatest strength is our people. If you're passionate about service and quality, we want you on our team.</p>
            <p>Send your resume to <a href="mailto:support@homeservice.com">support@homeservice.com</a> and be part of something impactful.</p>

            <h3>Current Openings:</h3>
            <ul>
              <li>Electricians</li>
              <li>Plumbers</li>
              <li>AC Mechanics</li>
              <li>Carpenters</li>
            </ul>
          </div>

          <div className="about-image">
            <img src={homeImage} alt="Professional offering home services" />
          </div>
        </section>

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
            <p>&copy; 2025 Home Service | Tech Titans</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
