const db = require("../assets/connection");
const inquirer = require("inquirer");
module.exports = function delEmp() {
  db.getConnection(function(err, connection) {
    connection.query(
      "SELECT employee_id,first_name, last_name FROM employee",
      (err, res) => {
        if (err) throw err;
        let employees = [];
        for (let i = 0; i < res.length; i++) {
          employees.push(res[i].employee_id);
        }
        console.table(res);
        inquirer
          .prompt({
            type: "list",
            name: "employee",
            message: "Select which employee to delete",
            choices: employees
          })
          .then(answer => {
            console.log(answer.employee);
            connection.query(
              "DELETE FROM employee WHERE employee_id=?",
              [answer.employee],
              (err, res) => {
                if (err) throw err;
                console.log(`${answer.employee} successfully deleted`);
                require("./startApp")();
              }
            );
          });
        // console.table(res);
      }
    );
  });
};
