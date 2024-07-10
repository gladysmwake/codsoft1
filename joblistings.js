const express = require('express');
const app = express();

// Serve the HTML, CSS, and JavaScript files
app.use(express.static('public'));

// API endpoint for job listings
app.get('/api/jobs', (req, res) => {
  // Fetch job listings from the database
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'ABC Company' },
    { id: 2, title: 'Marketing Coordinator', company: 'XYZ Inc.' },
    { id: 3, title: 'Product Manager', company: 'Acme Corp.' },
    // Add more job listings as needed
  ];
  res.json(jobs);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
