import React, { useState } from 'react'
import './Signup.css'

const Signup = () => {
  const [userType, setUserType] = useState('')
  const [mechanicType, setMechanicType] = useState('')

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (userType === 'mechanic' && !mechanicType) {
      alert('Please select a mechanic type.')
      return
    }

    alert('Sign up successful!')
    window.location.href = '/'
  }

  return (
    <div className="page-wrapper">
      <div className="container">
        {/* Background 3D Animation */}
        <div className="animated-bg">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="cube" />
          ))}
        </div>

        <div className="signup-box">
          <h2>Sign Up</h2>
          <p>Create an account to get started</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Enter your full name" required />

            <label htmlFor="mobile">Mobile Number</label>
            <input type="number" id="mobile" placeholder="Enter your mobile number" required />

            <label htmlFor="userType">I am a:</label>
            <select id="userType" value={userType} onChange={handleUserTypeChange} required>
              <option value="" disabled>Select user type</option>
              <option value="user">User</option>
              <option value="mechanic">Mechanic</option>
            </select>

            {userType === 'mechanic' && (
              <>
                <label htmlFor="mechanicType">Mechanic Type</label>
                <select
                  id="mechanicType"
                  value={mechanicType}
                  onChange={(e) => setMechanicType(e.target.value)}
                  required
                >
                  <option value="" disabled>Select mechanic type</option>
                  <option value="electrician">Electrician</option>
                  <option value="plumber">Plumber</option>
                  <option value="acMechanic">AC Mechanic</option>
                </select>
              </>
            )}

            <button type="submit">Sign Up</button>

            <p className="login-link">Already have an account? <a href="/Login">Login</a></p>
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
  )
}

export default Signup
