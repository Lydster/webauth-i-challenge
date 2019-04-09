const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findBy,
  findById,
  add
};

function find() {
  return db("users").select("id", "username", "password");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
///not working?? use async & await
async function add(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}
