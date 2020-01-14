const express = require("express");
const mysql = require("mysql");

const PORT = process.env.PORT || 3000;

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employees_db"
});

connection.connect(err, res => {
  if (err) throw err;
  console.log("Database Connected");
});

app.listen(PORT, (err, res) => {
  if (err) throw err;
  console.log(`Server running at http://localhost:${PORT}`);
});
