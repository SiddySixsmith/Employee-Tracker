const db = require('../config/connection');
const cTable = require('console.table');

const createDept = async function (departmentName){ 
    db.query(`INSERT INTO department (name) VALUES (?)`, [departmentName]);
};

async function readDeptTable(){
    const [rows] = await db
      .promise()
      .query(`SELECT * FROM department`);
    console.log('\n');
    console.log(cTable.getTable(rows));
    
  };

const updateDept = async function (updatedName, departmentName){
    db.query(`UPDATE department SET name = (?) WHERE name = (?)`, [updatedName, departmentName]);
}

const deleteDepartment = async function(departmentName){
    db.query(`DELETE FROM department WHERE name = (?)`, [departmentName]);
}
 



module.exports = {
    createDept,
    readDeptTable,
    updateDept,
    deleteDepartment
}