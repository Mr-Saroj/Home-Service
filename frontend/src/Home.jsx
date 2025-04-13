import React from "react";
import "./Home.css";
import logo from "./assets/logo.jpg";
import heroImage from "./assets/Home.jpg";
import electrician from "./assets/electrician.jpeg";
import acMechanic from "./assets/AC.jpeg";
import plumber from "./assets/plumber.jpeg";
import carpenter from "./assets/carpenter.jpg";

function Home() {
  React.useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="home-container">
      {/* Background Animation */}
      <div className="animated-bg">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="cube" />
        ))}
      </div>

      {/* Main Content with glass effect */}
      <div className="home-glass">
        {/* Header */}
        <header className="main-header">
          <div className="logo">
            <img src={logo} alt="Home Service Logo" />
            <h2>Home Service</h2>
          </div>
          <div className="header-buttons">
            <nav className="nav-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
            </nav>
            <a href="/login">
              <button className="login-btn">Login</button>
            </a>
          </div>
        </header>


        {/* Hero Section */}
        <section className="hero-section">
          <div className="left">
            <h1>
              Find Your Home
              <br />
              Services Expert
            </h1>
            <p>Our App services care will save your time & money</p>
          </div>
          <div className="right">
            <img src={heroImage} alt="Home service illustration" className="hero-image" />
          </div>
        </section>

        {/* Service Cards */}
        <section className="card-section">
          <div className="service-card animate-left">
            <img src={electrician} alt="Electrician service" />
            <h3>Electrician</h3>
            <p>Rating: ⭐⭐⭐⭐☆ (4.5)</p>
            <p>“Very professional and quick service!”</p>
          </div>
          <div className="service-card animate-right">
            <img src={acMechanic} alt="AC Mechanic service" />
            <h3>AC Mechanic</h3>
            <p>Rating: ⭐⭐⭐⭐☆ (4.3)</p>
            <p>“Fixed my AC perfectly, highly recommended!”</p>
          </div>
          <div className="service-card animate-left">
            <img src={plumber} alt="Plumbing service" />
            <h3>Plumber</h3>
            <p>Rating: ⭐⭐⭐⭐⭐ (4.8)</p>
            <p>“Quick response and solved the leakage.”</p>
          </div>
          <div className="service-card animate-right">
            <img src={carpenter} alt="Carpentry service" />
            <h3>Carpenter</h3>
            <p>Rating: ⭐⭐⭐⭐⭐ (4.8)</p>
            <p>“Amazing precision and finish in work.”</p>
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
              <li><a href="#">Home</a></li>
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
    </div>
  );
}

export default Home;
