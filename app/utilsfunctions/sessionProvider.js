const jwt = require('jsonwebtoken');
require('dotenv').config();


const secretKey = process.env.jwt_SECRET;

function generateSessionToken(user) {
  const payload = {
    userId: user.id,
  };

  const options = {
    expiresIn: '1h',
  };
  return jwt.sign(payload, secretKey, options);
}


module.exports = { generateSessionToken };