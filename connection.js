var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tiket',
  database: 'mailing'
});
module.exports = connection;