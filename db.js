// db.js
const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust the connection limit as needed
  host: 'localhost',
  user: 'root', // Change this to your MySQL username
  password: 'Avpydj18*', // Change this to your MySQL password
  database: 'paws_connect', // Change this to your database name
});

module.exports = pool;
