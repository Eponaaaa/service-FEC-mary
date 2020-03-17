const faker = require('faker');
const mysql = require('mysql2');
const Sequelize = require('sequelize');

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

const Shop = connection.define('shops', {
  shop_name: {
    type: Sequelize.STRING,
    unique: true
  },
  established: Sequelize.INTEGER,
  location: Sequelize.STRING,
  shop_icon: Sequelize.STRING,
  sales: Sequelize.INTEGER
});

const Product = connection.define('products', {
  product_name: Sequelize.STRING,
  product_price: Sequelize.INTEGER
});

const Image = connection.define('images', {
  url: Sequelize.STRING
})

Shop.hasMany(Product);
Product.belongsTo(Shop);

Product.hasMany(Image);
Image.belongsTo(Product);


connection.sync({force: true})
.then(function() {
  for (var s = 0; s < 10; s++) {
    Shop.create({
      shop_name: faker.company.companyName(),
      established: faker.random.number({min: 2005, max: 2020}),
      location: faker.address.state(),
      shop_icon: `https://etsy-products-images.s3-us-west-2.amazonaws.com/10${s}.jpg`,
      sales: faker.random.number(400)
    })
  }
})
.then(function() {
  for (var i = 1; i <= 40; i++) {
    Image.create({
      url: `https://etsy-products-images.s3-us-west-2.amazonaws.com/${i}.jpg`
    })
  }
})
.then(function() {
  for (var p = 1; p <= 100; p++) {
    Product.create({
      product_name: faker.commerce.product(),
      product_price: faker.random.number({min: 5, max: 200}),
      shopId: faker.random.number({min:1, max:10})
    })
  }
})
.catch(function(err) {
  console.log(err)
});