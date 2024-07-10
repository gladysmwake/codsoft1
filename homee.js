const express = require('express');
const app = express();

// Serve the HTML, CSS, and JavaScript files
app.use(express.static('public'));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
