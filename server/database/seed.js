const faker = require('faker');
const Sequelize = require('sequelize');

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
  shopName: {
    type: Sequelize.STRING,
    unique: true
  },
  established: Sequelize.INTEGER,
  location: Sequelize.STRING,
  shopIcon: Sequelize.STRING,
  sales: Sequelize.INTEGER
});

const Product = connection.define('products', {
  productName: Sequelize.STRING,
  productPrice: Sequelize.INTEGER,
  productImage: Sequelize.STRING
});

//establishes relationships between tables
Shop.hasMany(Product);
Product.belongsTo(Shop);

connection.sync({force: true})
  .then(function() {
  //creates 10 shops
    for (var s = 0; s < 10; s++) {
      Shop.create({
        shopName: faker.company.companyName(),
        established: faker.random.number({min: 2005, max: 2020}),
        location: faker.address.state(),
        shopIcon: `https://etsy-products-images.s3-us-west-2.amazonaws.com/20${s}.jpg`,
        sales: faker.random.number(400)
      });
    }
  })
  .then(function() {
  //creates 50 products, then another 50 with the same images
    for (var p = 1; p <= 50; p++) {
      Product.create({
        productName: faker.commerce.product(),
        productPrice: faker.random.number({min: 5, max: 200}),
        productImage: `https://etsy-products-images.s3-us-west-2.amazonaws.com/${p}.jpg`,
        shopId: faker.random.number({min: 1, max: 10})
      });
    }
    for (var p = 1; p <= 50; p++) {
      Product.create({
        productName: faker.commerce.product(),
        productPrice: faker.random.number({min: 5, max: 200}),
        productImage: `https://etsy-products-images.s3-us-west-2.amazonaws.com/${p}.jpg`,
        shopId: faker.random.number({min: 1, max: 10})
      });
    }
  })
  .catch(function(err) {
    console.log('Error seeding database', err);
  });
