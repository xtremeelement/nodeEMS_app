const inquirer = require("inquirer");
let methodChoices = [
  "View Employees",
  "View Employees by Dept",
  "View Depts",
  "Add Employee",
  "Update Employee",
  "Delete Employee",
  "Add Dept",
  "Exit"
];
module.exports = function startApp() {
  inquirer
    .prompt({
      type: "list",
      name: "method",
      message: "Please select an option",
      choices: [
        methodChoices[0],
        methodChoices[1],
        methodChoices[3],
        methodChoices[4],
        methodChoices[5],
        methodChoices[6],
        methodChoices[7]
      ]
    })
    .then(method => {
      switch (method) {
        case method.name == methodChoices[0]:
          require("./viewEmployees")();
          break;
        case method.name == methodChoices[1]:
          require("./viewEmployeesDept")();
          break;
        case method.name == methodChoices[2]:
          require("./viewDepts")();
          break;
        case method.name == methodChoices[3]:
          require("./addEmp")();
          break;
        case method.name == methodChoices[4]:
          require("./updtEmp")();
          break;
        case method.name == methodChoices[5]:
          require("./delEmp")();
          break;
        case method.name == methodChoices[6]:
          require("./addDept")();
          break;
        case method.name == methodChoices[7]:
          require("./exitApp")();
          break;
      }
    });
};
