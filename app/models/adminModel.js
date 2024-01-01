const { DataTypes, UUID, Sequelize } = require("sequelize");
const sequelize = require("../utilsfunctions/dbConfig");

const Admin = sequelize.define("admin", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull : false
    }
 });

module.exports = Admin;