import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const JobDetailPage = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    // Fetch job details when the component mounts
    async function fetchJobDetails() {
      try {
        const response = await fetch(`/api/jobs/${id}`);
        const job = await response.json();
        setJobDetails(job);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    }
    fetchJobDetails();
  }, [id]);

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-detail">
      <h2>{jobDetails.title}</h2>
      <div className="company">{jobDetails.company}</div>
      <div className="job-description">{jobDetails.description}</div>
      <div className="salary">{jobDetails.salary}</div>
      <a href={`/apply/${jobDetails.id}`} className="apply-button">
        Apply Now
      </a>
    </div>
  );
};

export default JobDetailPage;
