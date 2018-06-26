// config.js

const cry = require('crypto');


const d = new Date();
const month = d.getMonth();
const day = d.getDay();
const year = d.getFullYear();
const currentDate = new Date(day, month, year);

const todaySecret = cry.randomBytes(48, function(err, buffer) { 
  var token = buffer.toString('hex');
  return token 
});

module.exports = {
  'secret': todaySecret()
}