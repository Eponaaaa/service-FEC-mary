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
  db.query(qString, (err, shopInfo) => {
    if (err) {
      console.log('Error getting shopId', err);
    }
    res.send(shopInfo);
    // db.query(`SELECT * FROM shops WHERE id=${shopInfo.shopId}`, (err, shopInfo) => {
    //   if (err) {
    //     console.log('error getting shop info', err);
    //   }
    //   res.send(shopInfo);
    // });
  });
  //use productId to find the shop
    //get shop info and send it to client
  //use shopId to find other products that have the same shopId  and send it to client
    //store it in an array
  // res.send('asked for shop id based on product Id');

});

app.get('/', (req, res) => {
  console.log('in / app.get');
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});