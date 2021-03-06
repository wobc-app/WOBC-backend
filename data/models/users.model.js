const db = require("../db.config.js");

const getUsers = () => {
  return db("users").column("username", "user_id");
};

const findBy = (filter) => {
  return db("users").where(filter).first();
};

module.exports = {
  getUsers,
  findBy,
};
