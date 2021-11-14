const db = require('../config/connection');
const cTable = require('console.table');

async function readEmployeeTable(){
    const [rows] = await db
      .promise()
      .query(`SELECT * FROM employee`);
    console.log('\n');
    console.log(cTable.getTable(rows));
  };
  
  const createEmployee = async (firstName, lastName, roleId, managerId) => { 
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [firstName, lastName, roleId, managerId]);
};

module.exports = {
    readEmployeeTable,
    createEmployee,
}