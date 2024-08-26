// src/pages/admin/admin.js
import React, { useState, useEffect } from 'react';
import './admin.css';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [filter, setFilter] = useState('all'); // Default filter is 'all'

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded admin default credentials
    const adminDefaultUsername = 'Propel';
    const adminDefaultPassword = 'p2eDev';

    if (username === adminDefaultUsername && password === adminDefaultPassword) {
      setIsLoggedIn(true);
      sessionStorage.setItem('isLoggedIn', 'true');
      fetchAllApplications(); // Fetch all applications on successful login
    } else {
      alert('Incorrect username or password');
    }
  };

  const fetchAllApplications = () => {
    const endpoints = ['/students', '/volunteers', '/companies'];

    // Fetch applications from all endpoints
    Promise.all(endpoints.map(endpoint =>
      fetch(`https://api.propel2excel.com:5000/api${endpoint}`)
        .then(response => response.json())
    ))
    .then((data) => {
      // Combine all applications into a single array
      const combinedApplications = [].concat(...data);
      setApplications(combinedApplications);
      setFilteredApplications(combinedApplications); // Initialize with all applications
    })
    .catch(error => console.error('Error fetching applications:', error));
  };

  const handleStatusChange = (id, status) => {
    // Logic to update the application status in your backend
    console.log(`Application ID: ${id} - Status: ${status}`);
    // Example: Send a request to your backend to update the application status
  };

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === 'all') {
      setFilteredApplications(applications);
    } else {
      const filtered = applications.filter(app => app.applicationType === selectedFilter);
      setFilteredApplications(filtered);
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin Login</h2>
      {!isLoggedIn ? (
        <form className="admin-form" onSubmit={handleLogin}>
          <div className="admin-form-group">
            <label className="admin-label">Username:</label>
            <input
              type="text"
              className="admin-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Password:</label>
            <input
              type="password"
              className="admin-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="admin-button">Login</button>
        </form>
      ) : (
        <div className="applications-container">
          <h3>Review Applications</h3>
          <div className="filter-container">
            <label htmlFor="filter">Filter by Type:</label>
            <select id="filter" value={filter} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="students">Students</option>
              <option value="volunteers">Volunteers</option>
              <option value="companies">Companies</option>
            </select>
          </div>

          {filteredApplications.length > 0 ? (
            filteredApplications.map((application) => (
              <div key={application.id} className="application-card">
                <h4>Application ID: {application.id}</h4>
                <p>Name: {application.firstName || application.companyName} {application.lastName || ''}</p>
                <p>Email: {application.email}</p>
                <p>Type: {application.applicationType}</p>
                {/* Display more fields as needed */}
                
                <div className="status-buttons">
                  <button onClick={() => handleStatusChange(application.id, 'approved')}>Approve</button>
                  <button onClick={() => handleStatusChange(application.id, 'denied')}>Deny</button>
                  <button onClick={() => handleStatusChange(application.id, 'under review')}>Under Review</button>
                </div>
              </div>
            ))
          ) : (
            <p>No applications found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
