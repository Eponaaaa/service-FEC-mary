const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./database/db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname + '/../public')));

const port = 4000;

app.get('/listing/:productId', (req, res) => {
  const qString = `SELECT shopId FROM products WHERE id=
  ${req.params.productId}`;
  db.query(qString, (err, shopId) => {
    if (err) {
      console.log('Error getting shopId', err);
    }
    return db.query(`SELECT * FROM shops WHERE id=${shopId[0].shopId}`, (err, shopInfo) => {
      if (err) {
        console.log('error getting shop info', err);
      }
      return db.query(`SELECT * FROM products WHERE shopid=${shopId[0].shopId}`, (err, otherProducts) => {
        if (err) {
          console.log('error getting other products', err);
        }
        res.send({shopInfo, otherProducts});
      });
    });
  });
});


app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});