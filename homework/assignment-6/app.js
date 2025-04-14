const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const sqlite3    = require('sqlite3').verbose();
const app        = express();

const dbPath     = path.join(__dirname, 'database', 'data.sqlite');
const db         = new sqlite3.Database(dbPath);

const PORT       = process.env.PORT || 3001;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/lookup', (req, res) => {
  const query = req.body.query;
  db.all("SELECT * FROM items WHERE name LIKE ?", [`%${query}%`], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
