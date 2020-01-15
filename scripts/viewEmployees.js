const db = require("../assets/connection");

module.exports = function viewEmployees() {
  db.getConnection(function(err, connection) {
    connection.query("SELECT * FROM employee", (err, res) => {
      if (err) throw err;
      console.table(res);
      require("./startApp")();
    });
  });
};
