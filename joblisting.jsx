import React, { useState, useEffect } from 'react';

const JobListingsPage = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    // Fetch job listings when the component mounts
    async function fetchJobListings() {
      try {
        const response = await fetch('/api/jobs');
        const jobs = await response.json();
        setJobListings(jobs);
      } catch (error) {
        console.error('Error fetching job listings:', error);
      }
    }
    fetchJobListings();
  }, []);

  return (
    <div className="job-listings">
      <h2>Job Listings</h2>
      <ul>
        {jobListings.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <a href={`/job-details/${job.id}`}>View Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListingsPage;

