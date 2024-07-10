import React from 'react';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to our Job Portal</h1>
        <p>Find your dream job today!</p>
      </header>

      <main>
        <section className="featured-jobs">
          <h2>Featured Job Listings</h2>
          <ul>
            <li>
              <h3>Software Engineer</h3>
              <p>ABC Company</p>
              <a href="/job-details/1">View Details</a>
            </li>
            <li>
              <h3>Marketing Coordinator</h3>
              <p>XYZ Inc.</p>
              <a href="/job-details/2">View Details</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
