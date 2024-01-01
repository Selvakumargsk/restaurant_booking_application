const dotenv = require('dotenv')
const Sequelize  = require("sequelize");

dotenv.config();

const sequelize = new Sequelize(
 process.env.DATABASE,
 process.env.DB_USER,
 process.env.DB_PWD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
);

module.exports = sequelize;