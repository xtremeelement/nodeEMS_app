const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, (err, res) => {
  if (err) throw err;
  console.log(`Server running at http://localhost:${PORT}`);
  require("./scripts/startApp")();
});
