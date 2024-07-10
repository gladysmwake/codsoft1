import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobListingsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch job listings from the server
    axios.get('/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSearch = () => {
    // Filter job listings based on search term
    axios.get(`/api/jobs?search=${searchTerm}`)
      .then(response => setJobs(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div className="job-listings-page">
      <h1>Job Listings</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="job-list">
        {jobs.map(job => (
          <div key={job._id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Employer: {job.employer.name}</p>
            <Link to={`/job/${job._id}`}>View Job</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListingsPage;


