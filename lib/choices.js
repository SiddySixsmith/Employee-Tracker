const db = require('../config/connection');


async function departmentList(){
    
    let deptListArr = [];
    let deptNameList = [];
    
    await db.promise().query("SELECT * FROM department;")
    .then(([rows, fields]) => {
    deptListArr = rows;
    }).catch(console.log);

    deptListArr.forEach(department => {
        let nameObj = {
            name: department.name
        }
        deptNameList.push(nameObj);
    });

    return deptNameList;
}

const employeeList = async () => {
    
    let employeeListArr = [];
    let employeeNameList = [];
    
    await db.promise().query("SELECT * FROM employee;")
    .then(([rows, fields]) => {
    employeeListArr = rows;
    }).catch(console.log);

    employeeListArr.forEach(employee => {
        let nameObj = {
            name: employee.first_name
        }
        employeeNameList.push(nameObj);
    });

    return employeeNameList;
};

const roleList = async () => {
    
    let roleListArr = [];
    let roleNameList = [];
    
    await db.promise().query("SELECT * FROM role;")
    .then(([rows, fields]) => {
        roleListArr = rows;
    }).catch(console.log);

    roleListArr.forEach(role => {
        let nameObj = {
            name: role.title
        }
        roleNameList.push(nameObj);
    });

    return roleNameList;
};

module.exports = { departmentList, employeeList, roleList }