const express = require('express');
const app = express();

// Serve the HTML, CSS, and JavaScript files
app.use(express.static('public'));

// API endpoint for job details
app.get('/api/jobs/:id', (req, res) => {
  const jobId = req.params.id;
  // Fetch job details from the database
  const job = {
    id: jobId,
    title: 'Software Engineer',
    company: 'ABC Company',
    description: 'We are looking for an experienced software engineer to join our team.',
    salary: '$80,000 - $100,000'
  };
  res.json(job);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
