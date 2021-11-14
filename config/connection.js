require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "employee_tracker_db",
    port: 3306
  }
);
module.exports = db;