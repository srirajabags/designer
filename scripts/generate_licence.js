const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('./private.pem');

const token = jwt.sign(
  { 
    user: 'alice', 
    exp: Math.floor(Date.now() / 1000) + 86400 
  }, // 1 day expiration
  privateKey,
  { algorithm: 'RS256' }
);

console.log(token);
