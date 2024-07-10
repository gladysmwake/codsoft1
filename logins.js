/*const express = require('express');
const app = express();

// Serve the HTML, CSS, and JavaScript files
app.use(express.static('public'));

// Parse JSON request bodies
app.use(express.json());

// Login API endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Validate the email and password
  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  // Check the user credentials against the database
  // (This is a simplified example, in a real application you would use a database)
  if (email === 'example@example.com' && password === 'password') {
    // Login successful, return a success response
    return res.json({ message: 'Login successful' });
  } else {
    // Login failed, return an error response
    return res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});*/


const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
