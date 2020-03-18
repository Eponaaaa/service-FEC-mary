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

const connection = new Sequelize('etsymary', 'root', 'mikamaus', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});
connection
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = con;
// module.exports = connection;