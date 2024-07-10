import React from 'react';

const JobApplicationPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // e.g., send the form data to the server
    console.log('Form submitted!');
  };

  return (
    <main>
      <section className="job-application">
        <h2>Apply for Software Engineer</h2>
        <form id="job-application-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="resume">Resume</label>
            <input type="file" id="resume" name="resume" required />
          </div>
          <div className="form-group">
            <label htmlFor="cover-letter">Cover Letter</label>
            <textarea id="cover-letter" name="cover-letter" required></textarea>
          </div>
          <button type="submit">Submit Application</button>
        </form>
      </section>
    </main>
  );
};

export default JobApplicationPage;
