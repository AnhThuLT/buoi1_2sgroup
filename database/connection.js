const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"D0ng@yahoo.com",
  database: 'mydatabase'
});

module.exports = connection;