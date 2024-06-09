const config = require('./config.json');
// const express = require("express");
// const app = express();
// const port = 8080
// app.listen(port, () => {
//   console.log(`server is running port port port ${port}`);
// });

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  config.development.database, 
  config.development.username,
  config.development.password, {
  host: config.development.host,
  dialect: config.development.dialect
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;

