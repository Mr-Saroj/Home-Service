import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import logo from './assets/logo.jpg';
import { FaRegUser } from "react-icons/fa";

const Dashboard = () => {
  const [username, setUsername] = useState('User');
  const [page, setPage] = useState('');
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username') || 'User';
    setUsername(storedUsername);
  }, []);

  // Fetch complaints with status and ratings
  const fetchComplaints = async () => {
    setLoading(true);
    try {
      // Simulate fetching data from a database
      const data = [
        {
          id: 1,
          name: "John Doe",
          mobile: "9876543210",
          address: "123 Main St",
          type: "Electrician",
          image: "https://via.placeholder.com/100",
          status: "Pending",
          rating: 3,
          ratingSubmitted: true, // New field to track if rating is submitted
        },
        {
          id: 2,
          name: "Jane Smith",
          mobile: "9123456789",
          address: "456 Park Ave",
          type: "Plumber",
          image: "https://via.placeholder.com/100",
          status: "Completed",
          rating: 4,
          ratingSubmitted: true,
        }
      ];
      setComplaints(data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page === 'view-complaints') {
      fetchComplaints();
    }
  }, [page]);

  const submitComplaint = (e) => {
    e.preventDefault();
    alert("Complaint submitted successfully!");
    e.target.reset();
  };

  const logout = () => {
    localStorage.removeItem('username');
    window.location.href = '/';
  };

  // Submit the rating to the database and prevent further changes
  const handleRatingChange = async (id, newRating) => {
    const complaintToUpdate = complaints.find(complaint => complaint.id === id);

    if (complaintToUpdate.ratingSubmitted) {
      alert('Rating cannot be changed after submission.');
      return;
    }

    // Simulate saving the rating to the database
    try {
      await saveRatingToDatabase(id, newRating);
      setComplaints(prevComplaints =>
        prevComplaints.map(complaint =>
          complaint.id === id ? { ...complaint, rating: newRating, ratingSubmitted: true } : complaint
        )
      );
    } catch (error) {
      console.error("Error saving rating:", error);
    }
  };

  // Simulate backend API to save the rating
  const saveRatingToDatabase = (id, rating) => {
    return new Promise((resolve, reject) => {
      // Simulating database save with a delay
      setTimeout(() => {
        console.log(`Saved rating for complaint ${id}: ${rating}`);
        resolve();
      }, 1000);
    });
  };

  const renderContent = () => {
    if (page === 'add-complaint') {
      return (
        <div>
          <h2 style={{ marginBottom: '20px' }}>📋 Add Your Complaint</h2>
          <div className="form-card">
            <form onSubmit={submitComplaint}>
              <label>Full Name</label>
              <input type="text" required placeholder="Enter your name" />

              <label>Mobile Number</label>
              <input type="number" required placeholder="Enter your mobile number" />

              <label>Address</label>
              <input type="text" required placeholder="Enter your address" />

              <label>Complaint Type</label>
              <select required defaultValue="">
                <option value="" disabled>Select Type</option>
                <option>Electrician</option>
                <option>Plumber</option>
                <option>AC Mechanic</option>
              </select>

              <label>Upload Photo</label>
              <input type="file" required />

              <button type="submit">Submit Complaint</button>
            </form>
          </div>
        </div>
      );
    }

    if (page === 'view-complaints') {
      return (
        <div>
          <h2>{username}'s Complaint Details</h2>
          {loading ? (
            <p>Loading complaints...</p>
          ) : (
            <div className="complaint-list">
              {complaints.map((complaint) => (
                <div className="complaint-card" key={complaint.id}>
                  <img src={complaint.image} alt="Complaint" />
                  <div>
                    <h4>{complaint.name}</h4>
                    <p>📞 {complaint.mobile}</p>
                    <p>🏠 {complaint.address}</p>
                    <p>🔧 {complaint.type}</p>
                    <p>Status: {complaint.status}</p>
                    <div>
                      <p>Rating:</p>
                      <select
                        value={complaint.rating}
                        onChange={(e) => handleRatingChange(complaint.id, parseInt(e.target.value))}
                        disabled={complaint.ratingSubmitted} // Prevent rating change if already submitted
                      >
                        {[1, 2, 3, 4, 5].map((star) => (
                          <option key={star} value={star}>
                            {star} {star === 1 ? 'Star' : 'Stars'}
                          </option>
                        ))}
                      </select>
                      {complaint.ratingSubmitted && <span> - Rating Submitted</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="default-content">
        <h2>Welcome, {username} 👋</h2>
        <p style={{ marginBottom: "20px" }}>Explore our exclusive service offers:</p>
        <div className="offer-cards">
          <div className="offer-card">
            <h3>💡 10% Off Electrician Services</h3>
            <p>Get expert help at discounted prices.</p>
          </div>
          <div className="offer-card">
            <h3>🚿 Free Plumbing Inspection</h3>
            <p>Book a service and get your pipes checked for free.</p>
          </div>
          <div className="offer-card">
            <h3>❄️ AC Check-up at ₹199</h3>
            <p>Limited time offer for pre-summer servicing!</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="username"><FaRegUser />&nbsp;&nbsp;Welcome, {username}</div>
      </header>

      <div className="main">
        <aside className="sidebar">
          <ul>
            <li onClick={() => setPage('add-complaint')}>Add Your Complaint</li>
            <li onClick={() => setPage('view-complaints')}>See Your Complaint Details</li>
            <li onClick={logout}>Logout</li>
          </ul>
        </aside>
        <section className="content" id="content-area">
          {renderContent()}
        </section>
      </div>
      <footer className="footer">
        <p>&copy; Tech Titans.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
