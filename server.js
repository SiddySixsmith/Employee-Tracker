const inquirer = require("inquirer")
const cTable = require('console.table');
const db = require("./config/connection");
const questions = require("./lib/questions");
const departmentQueries = require("./db/department")
const roleQueries = require("./db/role")
const employeeQueries = require("./db/employee");

const PORT = process.env.PORT || 3306;

 db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
  } else {
    console.log("\nconnected to Database\n");
    startApp();
  }
});
  
async function startApp(){
await inquirer.prompt(questions.MainQuestions)
  .then(async (result) =>  {
    switch (result.main) {
    case "View all employees":
      await employeeQueries.readEmployeeTable();
        startApp();
        break;

    case "View all departments":
        await departmentQueries.readDeptTable();
        startApp();
        break;

    case "View all roles":
      await roleQueries.readRoleTable();
      startApp()
        break;

    case "Add new employee":
        await createNewEmployee();
        startApp();
        break;

    case "Add new department":
      await createNewDepartment();
        startApp();
        break;
    case "Add new role":
      await  createNewRole();
        startApp();
        break;
    case "Update employee role":
      await updateCurrentEmployee();
        break;
    case "Delete a department":
      await deleteDepartment();
      break;
    case "Delete a role":
      await deleteRole();
      break;
    case "Delete an employee":
      await deleteEmployee();
      break;
    case "Exit":
    console.log("thanks got using my app");
    process.exit();
}
})
}

async function createNewDepartment() {
await inquirer.prompt(questions.newdeptQuestions)
.then(async(results) => {
  await departmentQueries.createDept(results.departmentName);
  console.log("\n","New Department Created","\n");
      console.table(results)
  });
};

async function createNewRole(){
  await inquirer.prompt(questions.newRoleQuestions)
  .then(async (results) => {
    await roleQueries.createRole(results.roleName, results.roleSalary, results.departmentId);
      console.log("\n","New Role Created","\n");
  });
};

async function createNewEmployee(){
  await inquirer.prompt(questions.newEmpQuesitons)
  .then( async(results) => {
    await employeeQueries.createEmployee(results.firstName, results.lastName, results.roleId, results.managerId);
      console.log('\n',"New Employee added", '\n');
  });
};

async function deleteDepartment() {
  await inquirer.prompt(questions.deleteDepartment)
  .then((results) => {
      if (results.confirm) {
          departmentQueries.deleteDepartment(results.departmentName);
      } else {
          console.log("Aborting");
      }
  });
  startApp();
};

async function deleteRole() {
  await inquirer.prompt(questions.deleteRole)
  .then((results) => {
      if (results.confirm) {
          roleQueries.deleteRole(results.roleTitle);
      } else {
          console.log("Aborting");
      }
  });
  startApp();
};

async function deleteEmployee(){
  await inquirer.prompt(questions.deleteEmployee)
  .then((results) => {
      if (results.confirm) {
          employee.deleteEmployee(results.employee_id);
      } else {
          console.log("Aborting");
      }
  });
  startApp();
};