const inquirer = require("inquirer")
const mysql = require("mysql2")
const cTable = require('console.table');
const db = require("./config/connection")

const PORT = process.env.PORT || 3306;

  db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
  } else {
    console.log("connected to Database");
    startApp();
  }
});

function getDepartmentTable(){
  db.promise().query("SELECT * FROM department;")
  .then(([data]) => {
      console.log(data);
      startApp();
  })
  .catch(console.log(data));
};


function getRoleTable(){
  db.query(`SELECT * FROM role;`, (err, results) => {
    console.table(results)
  }).catch(err)
  console.log(err);
};

function getEmployeeTable(){
  db.query(`SELECT * FROM employee;`, function (err, results) {
    console.table(results);
  }).catch(err)
  console.log(err);
   startApp();
};

const MainQuestions = 
  {
    type: "list",
    message: "What would you like to do",
    choices: [
    'View all departments',
    'View all roles',
    'View all employees',
    'Add new department',
    'Add new role',
    'Add new employee',
    'Update employee role'
  ],
    name: "home_Questions"
  };
  
async function startApp(){
await inquirer.prompt(MainQuestions)
  .then((result) => {
    if (result.choice ==="View all employees?") {
          getEmployeeTable();
    }
  });
}
