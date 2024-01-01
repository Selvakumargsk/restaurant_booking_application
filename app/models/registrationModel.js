const { DataTypes, UUID, Sequelize } = require("sequelize");
const sequelize = require("../utilsfunctions/dbConfig");

const RegistrationDetails = sequelize.define('registerUser' , {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    password :{
        type : DataTypes.STRING,
        allowNull : false
    },
    confirmPassword : {
        type : DataTypes.STRING,
        validate: {
            notEmpty: true,
            confirmPasswordEqual: function (value) {
                if (value !== this.password) {
                    throw new Error('Passwords do not match');
                }
            },
        },
    }
})

module.exports = RegistrationDetails;