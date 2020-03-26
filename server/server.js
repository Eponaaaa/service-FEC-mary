const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database/db');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname + '/../public')));

const port = 3004;

app.get('/listing/:productId', (req, res) => {
  const qString = `SELECT shopId FROM products WHERE id=
  ${req.params.productId}`;
  console.log('req params in service proxy', req.params.productId);
  db.query(qString, (err, shopId) => {
    if (err) {
      console.error('Error getting shopId', err);
      res.sendStatus(500, 'try again later');
    }
    return db.query(`SELECT * FROM shops WHERE id=${shopId[0].shopId}`, (err, shopInfo) => {
      if (err) {
        console.error('error getting shop info', err);
        res.sendStatus(500, 'try again later');
      }
      return db.query(`SELECT * FROM products WHERE shopid=${shopId[0].shopId}`, (err, otherProducts) => {
        if (err) {
          console.error('error getting other products', err);
          res.sendStatus(500, 'try again later');
        }
        res.send({shopInfo, otherProducts});
      });
    });
  });
});


app.listen(port, () => {
  console.log(`MoreFrom service listening on port ${port}!`);
});