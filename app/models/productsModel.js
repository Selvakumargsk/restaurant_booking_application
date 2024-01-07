const { DataTypes } = require('sequelize');
const sequelize = require('../utilsfunctions/dbConfig');

const Product = sequelize.define('Product', {
  id : {
    type : DataTypes.BIGINT,
    primaryKey : true,
    autoIncrement : true,
  },  
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  liked : {
    type : DataTypes.BOOLEAN,
    defaultValue : false,
    allowNull : true,
  },
  active : {
    type : DataTypes.BOOLEAN,
    defaultValue : true,
    allowNull : true,
  }

});

module.exports = Product;
