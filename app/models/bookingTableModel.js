const { DataTypes, UUID, Sequelize } = require("sequelize");
const sequelize = require("../utilsfunctions/dbConfig");

const BookingDetails = sequelize.define('BookingDetails' , {
    id: {
        type : DataTypes.BIGINT,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true
      },
    userId : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    customerName :{
        type : DataTypes.STRING,
        allowNull : false
    },
    phoneNumber :{
        type : DataTypes.STRING,
        allowNull : false
    },
    adults :{
        type : DataTypes.STRING,
        allowNull : false
    },
    children :{
        type : DataTypes.STRING,
        allowNull : false
    },
    bookingDate :{
        type : DataTypes.STRING,
        allowNull : false
    },
    bookingTime :{
        type : DataTypes.STRING,
        allowNull : false
    },
    tableNumber :{
        type : DataTypes.STRING,
        allowNull : false
    },

})

module.exports = BookingDetails;