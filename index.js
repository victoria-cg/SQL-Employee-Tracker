//Import mysql2 so that JS and MySQL can function together
//use mysql2/promise to allow asynchronous functions for easier/cleaner syntax
const mysql = require("mysql2/promise");
const inquirer = require("inquirer");
// console.log(inquirer)

//import inquirer questions from userInput.js using destructuring 
const {
  mainMenuQuestions,
  addDepartmentQuestions,
} = require("./lib/userInput");

//create empty database variable, defined inside async function at the bottom of this index.js file
var db;

async function addDepartment() {
  console.log("Adding department");
  const { dept_name } = await inquirer.prompt(addDepartmentQuestions);
  //add it to the table
  // INSERT INTO TABLE
  const addQuery = `INSERT INTO department (name) VALUES ("${dept_name}");`//use a prepared statement here to dynamically insert values for ids
  const [results, data] = await db.query(addQuery);
 viewDepartment()
}

async function viewDepartment() {
  console.log("Viewing department");
  const readQuery = `SELECT * FROM department;`;
  const [results, data] = await db.query(readQuery);
// console.log(results);
console.log(results)
// console.log(data);
mainMenu()
}

//either write SQL queries here or in a separate file that gets imported and run in 'app' function
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
