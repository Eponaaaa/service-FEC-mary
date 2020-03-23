const mysql = require('mysql2');
const Sequelize = require('sequelize');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mikamaus'
});

con.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected to mysql');
  con.query('CREATE DATABASE IF NOT EXISTS etsymary');
  con.query('USE etsymary');
});


module.exports = con;
