const inquirer = require("inquirer")
const cTable = require('console.table');
const db = require("./config/connection");
const {getDepartmentTable, getEmployeeTable, getRoleTable, addEmployee} = require("./lib/queries");
const { roleOptions, employeeOptions, departmentOptions } = require("./lib/choices")


const PORT = process.env.PORT || 3306;

 db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
  } else {
    console.log("\nconnected to Database\n");
    startApp();
  }
});

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
    'Update employee role',
    'Exit'
  ],
    name: "main"
  };
  
async function startApp(){
await inquirer.prompt(MainQuestions)
  .then(async (result) =>  {
    switch (result.main) {
    case "View all employees":
        getEmployeeTable();
        startApp();
        break;

    case "View all departments":
        await getDepartmentTable();
        startApp();
        break;

    case "View all roles":
        getRoleTable();
        break;

    case "Add new employee":
        await addEmployee();
        startApp();
        break;

    case "Add new department":
        addDepartment();
        startApp();
        break;
    case "Add new role":
        addRole();
        startApp();
        break;
    case "Update employee role":
        updateEmpRole();
        startApp();
        break;
 /*   case "Update employee manager":
        updateEmpMngr();
        break;
    case "View all employees by manager":
        viewAllEmpByMngr();
        break;
    case "Delete employee":
        deleteEmp();
        break;
    case "View department budgets":
        viewDeptBudget();
        break;
    case "Delete role":
        deleteRole();
        break;
    case "Delete department":
        deleteDept();
        break; */
}
})
}
