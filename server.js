const express = require('express');
const app = express();
const path = require('path');
const routes = require('./controllers')
const port = 3001; 

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});