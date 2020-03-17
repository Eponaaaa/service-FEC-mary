const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mikamaus'
})

con.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected to mysql');
  con.query('CREATE DATABASE IF NOT EXISTS `etsymary`')
})

module.exports = con;