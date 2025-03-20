const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Set view engine to Pug and define views directory
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Route: Home page rendered from index.pug
app.get('/', (req, res) => {
  res.render('index');
});

// Route: Process form submission (POST)
app.post('/submit', (req, res) => {
  const formData = req.body;
  // Here you could process the form data further if needed.
  res.render('submit', { data: formData });
});

// Route: Canvas page with client-side JS drawing on a canvas
app.get('/canvas', (req, res) => {
  res.render('canvas');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
