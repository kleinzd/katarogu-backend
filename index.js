const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const app = express();

app.use(require("./api/routes"));

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});