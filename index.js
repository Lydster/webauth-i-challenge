const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const db = require("./database/dbConfig.js");
const Users = require("./users/users-model.js");
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors("headers"));

server.get("/", (req, res) => {
  res.send("Server running on 100000000%!!! <3");
});

const port = 5000;
server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
