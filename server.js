const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Avpydj18*',
  database: 'paws_connect'
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Handle signup POST request
app.post('/signup', (req, res) => {
    console.log('Signup endpoint hit');
    console.log('Received signup request:', req.body);
  const { username, email, password } = req.body;

  // Insert signup data into database
  const sql = 'INSERT INTO data (username, email, password) VALUES (?, ?, ?)';
  connection.query(sql, [username, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting record:', err);
      res.sendStatus(500); // Internal server error
      return;
    }
    console.log('Inserted record with ID:', result.insertId);
    res.sendStatus(200); // Successful insertion
  });
});

// Handle login POST request
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    res.status(400).send('Email and password are required.');
    return;
  }

  // Query the database to check if email and password match
  const sql = 'SELECT * FROM data WHERE email = ? AND password = ?';
  connection.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Internal server error.');
      return;
    }

    console.log('Query results:', results);

    // Check if any matching user is found
    if (results.length === 0) {
      console.log('No matching user found.');
      res.status(401).send('Invalid email or password.');
      return;
    }

    console.log('Matching user found:', results[0]);

    // Successful login
    res.sendStatus(200);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
