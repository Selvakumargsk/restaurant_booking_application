const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utilsfunctions/dbConfig'); 

function generateNumericOTP(length) {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    otp += digits.charAt(randomIndex);
  }
  return otp;
}

const validateOtp = sequelize.define('validateOtp', {
  id: {
    type: DataTypes.UUID, 
    defaultValue: DataTypes.UUIDV4,    
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail : true
    },
  },
  otp: {
    type: DataTypes.STRING,
  },
}, {
  hooks: {
    beforeCreate: async (validateOtp) => {
      validateOtp.otp = generateNumericOTP(6);
    },
  },
});


module.exports = validateOtp;
