var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'Hi',
  password : '7487',
  database : 'opentutorials'
});
 
connection.connect();
 
connection.query('SELECT * FROM author', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();