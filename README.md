# SQL-Employee-Tracker

## Description

This app was a challenge for the UT/EdX bootcamp. This project allows the user to interact with and update a MySQL database using the command line interface with the inquirer and the MySQL2 packages. Working on this project allowed me to experience working with MySQL, including creating a new database, adding information to the database, and joining tables in the database. This project also created an opportunity for me to continue working with and expanding my knowledge of the inquirer node package.


## Installation

Once the project files are downloaded, run 'npm install' in the command line to install the required dependencies to run the app.

## Usage

Run the command 'node index.js" in the command line to run the application, then answer the questions on screen to interact with the database. See the video linked below for a demonstration.

https://drive.google.com/file/d/1T0soERx74T6ZfDtQ0i3j0ndr6_vmEjlI/view?usp=sharing

## Credits

Boot camp tutor Alexis Gonzalez:
Outlined structure for use of asynchronous functions in the index.js file to combine inquirer prompts and database connection, queries
Suggested use of switch and case inside of async functions
Use of ‘AUTO INCREMENT’ command for department.id in database schema.sql file
Outlined where foreign key relationships and self referencing foreign key relationship that can be null will need to go in the schema.sql file
Assisted with syntax for providing multiple inquirer prompt questions to a user at once in all userInput.js constants for user questions

Bootcamp class TA Walter Perry: 
Use of .map and inquirer list to get the IDs and department names in structuring the function to add roles to the database

Microsoft copilot AI:

Syntax for making .map work with async functions and inquirer in index.js to select the ID corresponding to the dept name selected, used in the addRole function in index.js

XPert AI: 
Syntax for defaultValue constraint
Debugging SQL syntax for schema.sql and seeds.sql files


Resources: 

Article on self-referencing foreign key: 

Subramaniam, S. (2017, November 9). Self Referential Foreign Key Constraint in RDBMS and Self Join. Medium. Retrieved April 2, 2024, from https://sudhass.medium.com/self-referencing-foreign-key-constraint-in-rdbms-and-self-join-b66186e672f7


MySql syntax:

MySQL2. (n.d.). MySQL2 | Quickstart. Retrieved April 2, 2024, from https://sidorares.github.io/node-mysql2/docs



Inquirer documentation for use of 'list' feature:

Boudrias, S. (2024, March 29). inquirer - npm. NPM. Retrieved April 2, 2024, from https://www.npmjs.com/package/inquirer


## License

This project uses an MIT license. More information available in the 'License' section of the repository or here: https://choosealicense.com/licenses/mit/

