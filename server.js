const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const userRouter = require("./users/users-router");
const db = require("./database/dbConfig.js");
const Users = require("./users/users-model.js");
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors("headers"));

server.use("/api", userRouter);

server.get("/", (req, res) => {
  res.send("Server running on 100000000%!!! <3");
});

module.exports = server;
