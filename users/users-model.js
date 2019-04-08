const db = require("../database/dbConfig.js");

module.exports = {
  find
};

function find() {
  return db("users").select("id", "username", "password");
}
