// Import the required modules
const express = require('express');
const path = require('path');

// Create an instance of express
const app = express();

// Set the port for the server
const port = process.env.PORT || 3000;

// Serve static files like images, CSS, and JavaScript from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
