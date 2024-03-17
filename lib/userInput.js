//write prompts for inquirer user questions here

const mainMenuQuestions = [{type:"list", message: "What do you want", name: "menuChoice", choices: ["Add Department", "View Department"]}]

const addDepartmentQuestions = [{type:'input', message: 'name of dept', name: 'dept_name'}]

module.exports = {mainMenuQuestions, addDepartmentQuestions}