/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    // Fetch featured job listings from the server
    axios.get('/api/jobs/featured')
      .then(response => setFeaturedJobs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to the Job Board</h1>
      <p>Find your dream job today!</p>
      <div className="featured-jobs">
        <h2>Featured Jobs</h2>
        <div className="job-list">
          {featuredJobs.map(job => (
            <div key={job._id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>Employer: {job.employer.name}</p>
              <a href={`/job/${job._id}`}>View Job</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
// Fetch featured job listings
async function getFeaturedJobs() {
  try {
    const response = await fetch('/api/jobs?featured=true');
    const jobs = await response.json();
    renderFeaturedJobs(jobs);
  } catch (error) {
    console.error('Error fetching featured jobs:', error);
  }
}*/

// Render featured job listings
function renderFeaturedJobs(jobs) {
  const featuredJobsContainer = document.querySelector('.featured-jobs ul');

  // Clear previous job listings
  featuredJobsContainer.innerHTML = '';

  jobs.forEach((job) => {
    const jobItem = document.createElement('li');

    const jobTitle = document.createElement('h3');
    jobTitle.textContent = job.title;

    const company = document.createElement('p');
    company.textContent = job.company;

    const viewDetailsLink = document.createElement('a');
    viewDetailsLink.href = `/job-details/${job.id}`;
    viewDetailsLink.textContent = 'View Details';

    jobItem.appendChild(jobTitle);
    jobItem.appendChild(company);
    jobItem.appendChild(viewDetailsLink);

    featuredJobsContainer.appendChild(jobItem);
  });
}

// Call the getFeaturedJobs function when the page loads
window.addEventListener('DOMContentLoaded', getFeaturedJobs);
