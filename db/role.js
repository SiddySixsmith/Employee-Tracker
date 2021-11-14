const db = require('../config/connection');
const cTable = require('console.table');

const createRole = async function (roleName, roleSalary, departmentId){ 
    db.query(`INSERT INTO role (title, salary, departmentId) VALUES (?, ?, ?)`, [roleName, roleSalary, departmentId]);
};

async function readRoleTable(){
    const [rows] = await db
      .promise()
      .query(`SELECT * FROM role`);
    console.log('\n');
    console.log(cTable.getTable(rows));
    
  };

async function deleteRole(roleTitle) {
    db.query(`DELETE FROM role WHERE title = (?)`, [roleTitle]);
}
 



module.exports = {
    createRole,
    readRoleTable,
    deleteRole,
    
}