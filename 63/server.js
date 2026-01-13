const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const db = new sqlite3.Database('users.db');

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE,
    password TEXT
  )
`);

app.post('/register', async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  db.run(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [req.body.username, hash],
    err => res.json(err ? 'error' : 'ok')
  );
});

app.listen(3000);
