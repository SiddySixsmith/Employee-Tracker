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
  await departmentQueries.createDept(results.department_name);
  console.log("\n","New Department Created","\n");
      console.table(results)
  });
};

async function createNewRole(){
  await inquirer.prompt(questions.newRoleQuestions)
  .then(async (results) => {
    await roleQueries.createRole(results.role_name, results.role_salary, results.department_id);
      console.log("\n","New Role Created","\n");
  });
};

async function createNewEmployee(){
  await inquirer.prompt(questions.newEmpQuesitons)
  .then( async(results) => {
    await employeeQueries.createEmployee(results.first_name, results.last_name, results.role_id, results.manager_id);
      console.log('\n',"New Employee added", '\n');
  });
};

async function deleteDepartment() {
  await inquirer.prompt(questions.deleteDepartment)
  .then((results) => {
      if (results.confirm) {
          departmentQueries.deleteDepartment(results.department_name);
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
          roleQueries.deleteRole(results.role_title);
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
          employeeQueries.deleteEmployee(results.first_name);
      } else {
          console.log("Aborting");
      }
  });
  startApp();
};

async function updateCurrentEmployee(){
  await inquirer.prompt(questions.updateEmployee)
  .then((results) => {
    employeeQueries.updateEmployee(results.employee_name, results.update_role_id)
  });
  startApp();
}