/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Fetch job details from the server
    axios.get(`/api/jobs/${id}`)
      .then(response => setJob(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-detail-page">
      <h1>Job Detail</h1>
      <div className="job-detail">
        <h2>{job.title}</h2>
        <p>{job.description}</p>
        <p>Employer: {job.employer.name}</p>
        <p>Requirements: {job.requirements}</p>
        <p>Salary: {job.salary}</p>
        <a href={`/apply/${job._id}`}>Apply Now</a>
      </div>
    </div>
  );
};

export default JobDetailPage;


// Fetch job details
async function getJobDetails(jobId) {
  try {
    const response = await fetch(`/api/jobs/${jobId}`);
    const job = await response.json();
    renderJobDetails(job);
  } catch (error) {
    console.error('Error fetching job details:', error);
  }
}*/

// Render job details
function renderJobDetails(job) {
  const jobDetailContainer = document.querySelector('.job-detail');

  const jobTitle = document.createElement('h2');
  jobTitle.textContent = job.title;

  const company = document.createElement('div');
  company.className = 'company';
  company.textContent = job.company;

  const jobDescription = document.createElement('div');
  jobDescription.className = 'job-description';
  jobDescription.textContent = job.description;

  const salary = document.createElement('div');
  salary.className = 'salary';
  salary.textContent = `Salary: ${job.salary}`;

  const applyButton = document.createElement('a');
  applyButton.href = `/apply/${job.id}`;
  applyButton.className = 'apply-button';
  applyButton.textContent = 'Apply Now';

  jobDetailContainer.appendChild(jobTitle);
  jobDetailContainer.appendChild(company);
  jobDetailContainer.appendChild(jobDescription);
  jobDetailContainer.appendChild(salary);
  jobDetailContainer.appendChild(applyButton);
}

// Call the getJobDetails function with the job ID
const jobId = new URLSearchParams(window.location.search).get('id');
getJobDetails(jobId);
