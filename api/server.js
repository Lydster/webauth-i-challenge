const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const dbConfig = require("../database/dbConfig.js");

const userRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router.js");

const server = express();

const sessionConfig = {
  name: "lyd-cookie",
  secret: "no peaking at data",
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false,
  store: new KnexSessionStore({
    knex: dbConfig,
    tablename: "currentSessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60 * 10
  })
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.send("Server running on 100000000%!!! <3");
});

module.exports = server;
