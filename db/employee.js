const db = require('../config/connection');
const cTable = require('console.table');
const choices = require("../lib/choices")

async function readEmployeeTable(){
    const [rows] = await db
      .promise()
      .query(`SELECT * FROM employee`);
    console.log('\n');
    console.log(cTable.getTable(rows));
  };
  
  const createEmployee = async (first_name, last_name, role_id, manager_id) => { 
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [first_name, last_name, role_id, manager_id]);
};

async function deleteEmployee(first_name){
  db.query(`DELETE FROM employee WHERE first_name = (?)`, [first_name]);
}

async function updateEmployee(employee_name, update_role_id){
  db.query(`UPDATE employee SET role_id = (?) WHERE first_name = (?)`, [update_role_id, employee_name]);

}

module.exports = {
    readEmployeeTable,
    createEmployee,
    deleteEmployee,
    updateEmployee
}