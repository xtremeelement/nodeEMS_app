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
