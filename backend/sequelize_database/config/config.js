const path = require('path');
require('dotenv').config({path: path.join(__dirname, '/../../.env')});

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    operatorsAliases: false,
   
  }
}
