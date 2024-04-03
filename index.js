//Import mysql2 so that JS and MySQL can function together
//use mysql2/promise to allow asynchronous functions for easier/cleaner syntax
const mysql = require("mysql2/promise");
const inquirer = require("inquirer");
// console.log(inquirer)

//import inquirer questions from userInput.js using destructuring 
const {
  mainMenuQuestions,
  addDepartmentQuestions,
  addRoleQuestions, 
  addEmployeeQuestions, 
  updateEmployeeQuestions
} = require("./lib/userInput");

//create empty database variable, defined inside async function at the bottom of this index.js file
var db;

//async function to add a department
async function addDepartment() {
  console.log("Adding department");
  const { dept_name } = await inquirer.prompt(addDepartmentQuestions);
  // Insert name into table
  const addQuery = `INSERT INTO department (name) VALUES ('${dept_name}');`
  const [results, data] = await db.query(addQuery);
  //print table to the console: this doesn't seem to work/show up in the console
  console.log(results)
  //call viewDepartment function to display table with new results of addQuery
 viewDepartment()
}

//async function to vew department table
async function viewDepartment() {
  console.log("Viewing department");
  const readQuery = `SELECT * FROM department;`;
  const [results, data] = await db.query(readQuery);
// console.log(results)
console.log(results)
// console.log(data); data is not what we want
//calls mainMenu function so that menu questions are presented again to the user after viewing deptartment table 
mainMenu()
}

//TO DO: Async function to view all roles & joined with depts
async function viewRoles() {
  console.log("Viewing roles");
  //read roles table joined with depts table based on matching ids
  const readQuery = `SELECT * FROM role JOIN department ON role.department_id = department.id;`;
  const [results, data] = await db.query(readQuery);
  //prints table in the console
console.log(results)
//asks the menu questions again 
mainMenu()
}

//Async function to view all employees & joined with roles
async function viewEmployees() {
  console.log("Viewing employees");
  //read employees table joined with roles table based on matching ids
  const readQuery = `SELECT * FROM employee JOIN role ON employee.role_id = role.id;`;
  const [results, data] = await db.query(readQuery);
  //prints table in the console
console.log(results)
//asks the menu questions again 
mainMenu()
}

//async function to add a role
//TO DO: figure out how to get the dept ID to populate to the role table: just call viewroles to see the entire joined table?
//use inquirer to iterate through array of object name values and change role id to title
async function addRole() {
  console.log("Adding role");
  //user answers inquirer questions to provide title and salary
  const { title, salary} = await inquirer.prompt(addRoleQuestions);
//query database to get department names and ids from the database 'department' table, put info in a variable
const currentDepartments = await db.query(`SELECT id, name FROM department`);
//use .map to make a dynamic list of department names, put in variable for inquirer to use
const deptChoices = currentDepartments.map(dept => dept.name)
//prompt question for user to choose dept name from list of existing departments
const {deptName} = await inquirer.prompt([{
  type: "list",
  message: "Which department does the new role belong to?",
  name: "deptName",
  choices: deptChoices
}]);

//look up dept name in the database department table that matches chosen dept name from user selection in const {deptName} inquirer prompt above
const chosenDept = currentDepartments.find(chosenDept => chosenDept.name === deptName);
//make a variable to get the id number for the chosen dept by using the ID corresponding to the dept name in the database found in const chosenDept 
const department_id = chosenDept.id;

  // Insert role info into table, use prepared statement '?' placeholder to prevent SQL injection
  const addQuery = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);`
  const [results, data] = await db.query(addQuery, [title, salary, department_id]);
  //call viewRoles to see the results of added info
 viewRoles()
}

//function allows usert to select an action to do using questions with inquirer.prompt
//cases match a selection and then call the related function
async function mainMenu() {
  const { menuChoice } = await inquirer.prompt(mainMenuQuestions);
  switch (menuChoice) {
    case "add a department":
      addDepartment();
      break;
    case "view all departments":
      viewDepartment();
      break;
    case "view all roles":
      viewRoles();
      break;
    case "view all employees":
      viewEmployees();
      break;
    case "add a role":
      addRole();
      break;
    case "add an employee":
      addEmployee();
      break;
    case "update an employee":
      updateEmployee();
    default:
      break;
  }
}
async function app() {
  console.log("Starting the App...");
  //Connect to database
  db = await mysql.createConnection(
    {
      host: "localhost",
      // MySQL username
      user: "root",
      // User must input MySQL password into empty string
      password: "N_CdV_1527",
      database: "employeeTracker_db",
    },
    console.log(`Connected to the employeeTracker_db database.`)
  );
  //calls main menu function so that menu questions are presented again to the user
  mainMenu();
}

app();
