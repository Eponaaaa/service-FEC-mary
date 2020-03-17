const faker = require('faker');
const Sequelize = require('sequelize');
// const connections = require('./db.js');


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
  product_price: Sequelize.INTEGER,
  product_image: Sequelize.STRING
});

//establishes relationships between tables
Shop.hasMany(Product);
Product.belongsTo(Shop);

connection.sync({force: true})
.then(function() {
  //creates 10 shops
  for (var s = 0; s < 10; s++) {
    Shop.create({
      shop_name: faker.company.companyName(),
      established: faker.random.number({min: 2005, max: 2020}),
      location: faker.address.state(),
      shop_icon: `https://etsy-products-images.s3-us-west-2.amazonaws.com/20${s}.jpg`,
      sales: faker.random.number(400)
    })
  }
})
.then(function() {
  //creates 50 products
  for (var p = 1; p <= 50; p++) {
    Product.create({
      product_name: faker.commerce.product(),
      product_price: faker.random.number({min: 5, max: 200}),
      product_image: `https://etsy-products-images.s3-us-west-2.amazonaws.com/${p}.jpg`,
      shopId: faker.random.number({min:1, max:10})
    })
  }
  for (var p = 1; p <= 50; p++) {
    Product.create({
      product_name: faker.commerce.product(),
      product_price: faker.random.number({min: 5, max: 200}),
      product_image: `https://etsy-products-images.s3-us-west-2.amazonaws.com/${p}.jpg`,
      shopId: faker.random.number({min:1, max:10})
    })
  }
})
.catch(function(err) {
  console.log(err)
});