//Import mysql2 so that JS and MySQL can function together
const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username
    user: 'root',
   // Use must input MySQL password into empty string
    password: '',
    database: 'employeeTracker_db'
  },
  console.log(`Connected to the employeeTracker_db database.`)
);


//either write SQL queries here or in a separate file that gets imported and run in 'app' function