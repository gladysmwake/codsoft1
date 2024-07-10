// employerdash.js

// Function to handle form submissions
document.addEventListener('DOMContentLoaded', (event) => {
    const accountForm = document.querySelector('.account-management form');
    const jobForm = document.querySelector('.job-posting form');

    accountForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle account update logic here
        const companyName = document.getElementById('company-name').value;
        const contactEmail = document.getElementById('contact-email').value;
        if (companyName && contactEmail) {
            alert('Profile updated successfully!');
            // Perform the AJAX request to update profile here
        } else {
            alert('Please fill out all fields.');
        }
    });

    jobForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle job submission logic here
        const jobTitle = document.getElementById('job_title').value;
        const companyName = document.getElementById('company_name').value;
        const jobDescription = document.getElementById('job_description').value;
        const jobLocation = document.getElementById('job_location').value;
        const jobType = document.getElementById('job_type').value;
        const applicationEmail = document.getElementById('application_email').value;

        if (jobTitle && companyName && jobDescription && applicationEmail) {
            alert('Job posted successfully!');
            // Perform the AJAX request to post the job here
        } else {
            alert('Please fill out all required fields.');
        }
    });
});
