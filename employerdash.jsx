import React, { useState } from 'react';
import axios from 'axios';

const EmployerDashboard = () => {
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [salary, setSalary] = useState('');
  const [error, setError] = useState('');

  const handleAccountUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/employer/account', {
        companyName,
        contactEmail,
      });
      // Handle success
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleJobPosting = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/employer/jobs', {
        jobTitle,
        jobDescription,
        salary,
      });
      // Handle success
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="employer-dashboard">
      <h2>Employer Dashboard</h2>
      <div className="account-management">
        <h3>Account Management</h3>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleAccountUpdate}>
          <div className="form-group">
            <label htmlFor="company-name">Company Name</label>
            <input
              type="text"
              id="company-name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Contact Email</label>
            <input
              type="email"
              id="contact-email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>
      <div className="job-posting">
        <h3>Post a New Job</h3>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleJobPosting}>
          <div className="form-group">
            <label htmlFor="job-title">Job Title</label>
            <input
              type="text"
              id="job-title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="job-description">Job Description</label>
            <textarea
              id="job-description"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              id="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
          </div>
          <button type="submit">Post Job</button>
        </form>
      </div>
    </div>
  );
};

export default EmployerDashboard;
