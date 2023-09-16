'use strict';
require('dotenv').config()
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const db = {};

let sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'postgres',
    "dialectOptions": {
      "ssl": {
          "require": true,
          "rejectUnauthorized": false
      }
  }
  })

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

db.user = require('./user')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
