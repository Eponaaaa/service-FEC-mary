const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./database/db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname + '/../public')));

const port = 4000;

app.get('/', (req, res) => {
  console.log('in server get req');
  res.send("hello")

});

app.listen(port, () => {
  console.log(`listening on port ${port}!`)
})