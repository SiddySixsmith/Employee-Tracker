const choices = require('./choices');

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
        'Delete an employee',
        'Delete a department',
        'Delete a role',
        'Exit'
    ],
    name: "main"
};

const newEmpQuesitons = [
{
    type:"input",
    message: "What is new employees first name",
    name:"firstName"
  },
  {
    type:"input",
    message: "What is new employees last name",
    name:"lastName"
  },
  {
    type:"input",
    message: "What is new employees role id",
    name:"roleId"
},
{
  type:"input",
  message: "What is the manager id",
  name: "managerId"
}
];

const newdeptQuestions = [
    {
        type: "input",
        message: "What is the name of the New Department?",
        name: "departmentName"
    }
];

const newRoleQuestions = [
    {
        type: "input",
        name: "roleName",
        message: "What is the Title of the New Role?",
    },
    {
        type: "input",
        name: "roleSalary",
        message: "What is the Salary of the New Role?",
    },
    {
        type: "input",
        name: "deptId",
        message: "What is the id of the Department this Role belongs too?",
    },
];

const deleteEmployee = [
    {
        type: "list",
        name: "employee_name",
        message: "Which Employee do you wish to Delete?",
        choices: choices.employeeList
    },
    {
        type: "confirm",
        name: "confirm",
        message: "Are You Sure?"
    }
];
const deleteRole = [
    {
        type: "list",
        name: "roleTitle",
        message: "Which Role do you wish to Delete?",
        choices: choices.roleList
    },
    {
        type: "confirm",
        name: "confirm",
        message: "Are You Sure?"
    }
];
const deleteDepartment = [
    {
        type: "list",
        name: "departmentName",
        message: "Which Department do you wish to Delete?",
        choices: choices.departmentList
    },
    {
        type: "confirm",
        name: "confirm",
        message: "Are You Sure?"
    }
]

module.exports = {
    MainQuestions,
    newRoleQuestions,
    newdeptQuestions,
    newEmpQuesitons,
    deleteRole,
    deleteEmployee,
    deleteDepartment
}