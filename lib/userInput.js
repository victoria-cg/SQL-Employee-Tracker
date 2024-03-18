//write prompts for inquirer user questions here

//questions for inquirer.prompt to ask for the main menu 
const mainMenuQuestions = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "menuChoice",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update an employee",
    ],
  },
];

//Questions for inquirer to ask when adding a department
const addDepartmentQuestions = [
  {
    type: "input",
    message: "What is the name of the new department?",
    name: "name",
  },
];
//Questions for inquirer to ask when adding a role: title, salary, dept
const addRoleQuestions = [
  {
    type: "input",
    message: "What is the title of the new role?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the salary for the new role? (Enter a decimal value)",
    name: "salary",
  },
  {
    type: "input",
    message: "What is the department name of the new role?",
    name: "name",
  },
];
//Questions for inquirer to ask when adding an employee: first name, last name, role, manager
const addEmployeeQuestions = [
  { type: "input", message: "What is their first name?", name: "first_name" },
  { type: "input", message: "What is their last name?", name: "last_name" },
  { type: "input", message: "What is the title of their role?", name: "title" },
  { type: "input", message: "Who is their manager?", name: "manager_id" },
];
//Questions for inquirer to ask when updating an employee: select employee, update new role
//Does this employee update question get the necessary/correct data?
const updateEmployeeQuestions = [
    {type: "input", message: "What is the employee ID?", name: "id"},
    {type: "input", message: "What is their new role?"},
];


module.exports = {mainMenuQuestions, addDepartmentQuestions, addRoleQuestions, addEmployeeQuestions, updateEmployeeQuestions}