const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// index.pug home page
app.get('/', (req, res) => {
  res.render('index');
});

// Process submit bit at the bottom
app.post('/submit', (req, res) => {
  const formData = req.body;
  res.render('submit', { data: formData });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
