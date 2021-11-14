const inquirer = require("inquirer")
const cTable = require('console.table');
const db = require("../config/connection");
const { employeeOptions } = require("./choices");

async function getDepartmentTable(){
    const [rows] = await db
      .promise()
      .query(`SELECT * FROM department`);
    console.log('\n');
    console.log(cTable.getTable(rows));
    
  };
  
  async function getRoleTable(){
    const [rows] = await db
      .promise()
      .query(`SELECT * FROM role`);
    console.log('\n');
    console.log(cTable.getTable(rows));
    startApp();
    
  };
  
  async function getEmployeeTable(){
    const [rows] = await db
      .promise()
      .query(`SELECT * FROM employee`);
    console.log('\n');
    console.log(cTable.getTable(rows));
    startApp();
  };
  
  async function addEmployee(){
    const Employee = await inquirer.prompt({
      type:"input",
      message: "What is new employees first name",
      name:"firstname"
    },
    {
      type:"input",
      message: "What is new employees last name",
      name:"lastname"
    },
    {
      type:"input",
      message: "What is new employees last name",
      name:"lastname",
      choices: employeeOptions
    },
  
    )
  }
  

  module.exports = {getDepartmentTable, getEmployeeTable, getRoleTable, addEmployee};