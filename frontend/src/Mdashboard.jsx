import React, { useEffect, useState } from "react";
import "./Mdashboard.css";
import logo from "./assets/logo.jpg";
import { FaRegUser } from "react-icons/fa";

const Mdashboard = () => {
  const [mechanicUsername, setMechanicUsername] = useState("Mechanic");
  const [mechanicType, setMechanicType] = useState("electrician");
  const [complaints, setComplaints] = useState([]);
  const [section, setSection] = useState("notifications");

  useEffect(() => {
    const username = localStorage.getItem("mechanicUsername") || "Mechanic";
    const type = localStorage.getItem("mechanicType") || "electrician";
    setMechanicUsername(username);
    setMechanicType(type);

    // Dummy complaints data (replace with API later)
    const dummyComplaints = [
      {
        id: 1,
        customer: "Alice",
        number: "9876543210",
        address: "123 Main St",
        category: "electrician",
        assigned: false,
        status: "Pending",
        schedule: "",
      },
      {
        id: 2,
        customer: "Bob",
        number: "9876543211",
        address: "456 Market Rd",
        category: "plumber",
        assigned: false,
        status: "Pending",
        schedule: "",
      },
      {
        id: 3,
        customer: "Charlie",
        number: "9876543212",
        address: "789 Garden Ave",
        category: "electrician",
        assigned: true,
        status: "Pending",
        schedule: "2025-04-14T10:00",
      },
    ];

    // Filter complaints by mechanic's specialization
    const filtered = dummyComplaints.filter(
      (c) => c.category === type
    );
    setComplaints(filtered);
  }, []);

  const handleAcceptComplaint = (id) => {
    setComplaints((prev) =>
      prev.map((c) => (c.id === id ? { ...c, assigned: true } : c))
    );
    alert(`Complaint #${id} accepted.`);
  };

  const updateStatus = (id, status) => {
    setComplaints((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c))
    );
  };

  const setSchedule = (id, schedule) => {
    setComplaints((prev) =>
      prev.map((c) => (c.id === id ? { ...c, schedule } : c))
    );
  };

  const saveComplaint = (id) => {
    const c = complaints.find((c) => c.id === id);
    alert(
      `Complaint #${id} updated:\nStatus: ${c.status}\nSchedule: ${
        c.schedule || "Not set"
      }`
    );
  };

  const logout = () => {
    localStorage.removeItem("mechanicUsername");
    localStorage.removeItem("mechanicType");
    alert("Logged out successfully!");
    window.location.href = "/login";
  };

  const renderNotifications = () => {
    const pending = complaints.filter((c) => !c.assigned);
    return (
      <div>
        <h2>🔔 Notifications</h2>
        {pending.length === 0 ? (
          <p>No new complaints for your role.</p>
        ) : (
          <ul>
            {pending.map((c) => (
              <li key={c.id}>
                Complaint from <strong>{c.customer}</strong> ({c.number}) at{" "}
                {c.address} regarding <strong>{c.category}</strong>
                <button onClick={() => handleAcceptComplaint(c.id)}>
                  Accept
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const renderComplaints = () => {
    const accepted = complaints.filter((c) => c.assigned);
    return (
      <div>
        <h2>📋 All Complaints</h2>
        {accepted.length === 0 ? (
          <p>No complaints accepted yet.</p>
        ) : (
          <table border="1" cellPadding="10" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Number</th>
                <th>Address</th>
                <th>Category</th>
                <th>Status</th>
                <th>Schedule</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {accepted.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.customer}</td>
                  <td>{c.number}</td>
                  <td>{c.address}</td>
                  <td>{c.category}</td>
                  <td>
                    <select
                      value={c.status || "Pending"}
                      onChange={(e) => updateStatus(c.id, e.target.value)}
                    >
                      <option>Pending</option>
                      <option>Completed</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="datetime-local"
                      value={c.schedule || ""}
                      onChange={(e) => setSchedule(c.id, e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={() => saveComplaint(c.id)}>Save</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  };

  return (
    <div className="dashboard">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="username"><FaRegUser />&nbsp;&nbsp;Welcome, {mechanicUsername}</div>
      </header>

      <div className="main">
        <aside className="sidebar">
          <ul>
            <li onClick={() => setSection("notifications")}>🔔 Notifications</li>
            <li onClick={() => setSection("complaints")}>📋 All Complaints</li>
            <li onClick={logout}>🚪 Logout</li>
          </ul>
        </aside>

        <section className="content">
          {section === "notifications" ? renderNotifications() : renderComplaints()}
        </section>
      </div>

      <footer className="footer">
        <p>&copy; Tech Titans.</p>
      </footer>
    </div>
  );
};

export default Mdashboard;
