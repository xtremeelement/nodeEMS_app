const db = require("../assets/connection");
const inquirer = require("inquirer");

module.exports = function addDept() {
  inquirer
    .prompt({
      type: "input",
      name: "deptName",
      message: "Enter which department to add\n"
    })
    .then(res => {
      db.getConnection(function(err, connection) {
        connection.query(
          "INSERT INTO department (name) VALUES(?)",
          [res.deptName],
          (err, res) => {
            if (err) throw err;
            console.table("Department Added");
            require("./startApp")();
          }
        );
      });
    });
};
