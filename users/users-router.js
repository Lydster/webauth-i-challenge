const router = require("express").Router();
const restricted = require("../auth/restricted-middleware.js");

const Users = require("./users-model.js");

router.get("/", (req, res) => {
  res.send("Server running on 100000000%!!! <3");
});

//GET USERS

router.get("/users", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "there was a problem getting the users" });
    });
});

module.exports = router;
