const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "Dannyboy1!",
    database: "employee_tracker_db"
  });