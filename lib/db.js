var mysql = require('mysql');
var db = mysql.createConnection({
    host:'localhost',
    user:'GG',
    password:'7487',
    database:'opentutorials',
  });
  db.connect();
module.exports = db;

