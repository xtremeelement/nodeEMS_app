const db = require("../assets/connection");
module.exports = function viewDepts() {
  db.getConnection(function(err, connection) {
    connection.query("SELECT * FROM department", (err, res) => {
      if (err) throw err;
      console.table(res);
    });
  });
  require("./startApp")();
};
