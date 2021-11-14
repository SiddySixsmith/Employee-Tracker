const db = require('../config/connection');


async function departmentList(){
    
    let departmentArr = [];

    await db.promise().query('SELECT name FROM department;')
    .then(([rows, fields]) => {
        departmentArr = rows;
        });

    return departmentArr;
}

const roleList = async () => {
    
    let roleArr = [];

    await db.promise().query('SELECT title FROM role;')
    .then(([rows, fields]) => {
        roleArr = rows;
        });

    return roleArr;
}

const employeeList = async () => {
    
    let allArr = db.promise('SELECT * FROM employee;');

    const choices = allArr;

    let employeeArr = [];

    for (i = 0; i > choices; i++){
        let nameObj = {
            name: element.first_name + ' ' + element,last_name,
            value: element.id
        }
        employeeArr.push(nameObj);
    }

    return employeeArr;
}



module.exports = { departmentList, roleList, employeeList }