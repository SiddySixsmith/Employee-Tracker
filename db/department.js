const db = require('../config/connection');
const cTable = require('console.table');

const createDept = async function (department_name){ 
    db.query(`INSERT INTO department (name) VALUES (?)`, [department_name]);
};

async function readDeptTable(){
    const [rows] = await db
      .promise()
      .query(`SELECT * FROM department`);
    console.log('\n');
    console.log(cTable.getTable(rows));
    
  };

  async function updateDept (updatedName, department_name){
    db.query(`UPDATE department SET name = (?) WHERE name = (?)`, [updatedName, department_name]);
}

async function deleteDepartment(department_name){
    db.query(`DELETE FROM department WHERE name = (?)`, [department_name]);
}
 



module.exports = {
    createDept,
    readDeptTable,
    updateDept,
    deleteDepartment
}