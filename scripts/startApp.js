const inquirer = require("inquirer");
let methodChoices = [
  "View Employees",
  "View Employees by Dept (not working)",
  "View Depts",
  "Add Employee (not working)",
  "Update Employee (not working)",
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
      choices: methodChoices
    })
    .then(res => {
      switch (res.method) {
        case methodChoices[0]:
          require("./viewEmployees")();
          break;
        case methodChoices[1]:
          require("./viewEmployeesDept")();
          break;
        case methodChoices[2]:
          require("./viewDepts")();
          break;
        case methodChoices[3]:
          require("./addEmp")();
          break;
        case methodChoices[4]:
          require("./updtEmp")();
          break;
        case methodChoices[5]:
          require("./delEmp")();
          break;
        case methodChoices[6]:
          require("./addDept")();
          break;
        case methodChoices[7]:
          require("./exitApp")();
          break;
        default:
          console.log("Broken");
          break;
      }
    });
};
