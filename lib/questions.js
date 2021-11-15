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
    name:"first_name"
  },
  {
    type:"input",
    message: "What is new employees last name",
    name:"last_name"
  },
  {
    type:"input",
    message: "What is new employees role id",
    name:"role_id"
},
{
  type:"input",
  message: "What is the manager id",
  name: "manager_id"
}
];

const newdeptQuestions = [
    {
        type: "input",
        message: "What is the name of the New Department?",
        name: "department_name"
    }
];

const newRoleQuestions = [
    {
        type: "input",
        message: "What is the Title of the New Role?",
        name: "role_name",
    },
    {
        type: "input",   
        message: "What is the Salary of the New Role?",
        name: "role_salary"
    },
    {
        type: "input",
        message: "What is the id of the Department this Role belongs too?",
        name: "department_id",
    },
];

const deleteEmployee = [
    {
        type: "list",
        name: "first_name",
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
        message: "Which Role do you wish to Delete?",
        choices: choices.roleList,
        name: "role_title",
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
        message: "Which Department do you wish to Delete?",
        choices: choices.departmentList,
        name: "department_name",
    },
    {
        type: "confirm",
        name: "confirm",
        message: "Are You Sure?"
    }
]

const updateEmployee = [
    {
        type: "list",
        message: "Which Employee do you wish to Update?",
        choices: choices.employeeList,
        name: "employee_name",
    },
    {
        type: "input",
        message: `What is the Employee's New Role id?`,
        name: "update_role_id",
    }
]

module.exports = {
    MainQuestions,
    newRoleQuestions,
    newdeptQuestions,
    newEmpQuesitons,
    deleteRole,
    deleteEmployee,
    deleteDepartment,
    updateEmployee
}