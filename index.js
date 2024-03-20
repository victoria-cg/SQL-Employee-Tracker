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
  const addQuery = `INSERT INTO department (name) VALUES ("${dept_name}");`
  const [results, data] = await db.query(addQuery);
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
//TO DO: Async function to view all employees & joined with roles


//async function to add a role
//TO DO: figure out how to get the dept ID to populate to the role table: just call viewroles to see the entire joined table?
//use inquirer to iterate through array of object name values and change role id to title
async function addRole() {
  console.log("Adding role");
  const { title, salary, dept_name} = await inquirer.prompt(addRoleQuestions);
  // Insert role info into table
  //need to insert dept_name into dept datble instead and then join?
  const addQuery = `INSERT INTO role (title, salary, department_id) VALUES ("${title}", "${salary}", "${dept_name}");`
  const [results, data] = await db.query(addQuery);
  //call viewRoles to see the results of added info
 viewRoles()
}

//function allows usert to select an action to do using questions with inquirer.prompt
async function mainMenu() {
  const { menuChoice } = await inquirer.prompt(mainMenuQuestions);
  switch (menuChoice) {
    case "Add Department":
      addDepartment();
      break;
    case "View Department":
      viewDepartment();
      break;
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
      // Use must input MySQL password into empty string
      password: "",
      database: "employeeTracker_db",
    },
    console.log(`Connected to the employeeTracker_db database.`)
  );
  //calls main menu function so that menu questions are presented again to the user
  mainMenu();
}

app();
