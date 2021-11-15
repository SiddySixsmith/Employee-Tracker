const db = require('../config/connection');
const cTable = require('console.table');

const createRole = async function (role_title, role_salary, department_id){ 
    db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [role_title, role_salary, department_id]);
};

async function readRoleTable(){
    const [rows] = await db
      .promise()
      .query(`SELECT * FROM role`);
    console.log('\n');
    console.log(cTable.getTable(rows));
    
  };

async function deleteRole(role_title) {
    db.query(`DELETE FROM role WHERE title = (?)`, [role_title]);
}
 



module.exports = {
    createRole,
    readRoleTable,
    deleteRole,
    
}