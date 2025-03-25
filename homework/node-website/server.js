const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Set view engine to Pug and define views directory
app.set('view engine', 'pug');

// Stuff for other dirs
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Home page from index.pug
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

