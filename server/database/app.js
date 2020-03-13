const faker = require('faker');

const Sequelize = require('sequelize');
const connection = new Sequelize('etsy', 'root', 'mikamaus', {
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
    unique: true,
    allowNull: false
  },
  owner_name: Sequelize.STRING,
  established: Sequelize.INTEGER,
  location: Sequelize.STRING,
  shop_icon: Sequelize.STRING,
  sales: Sequelize.INTEGER
});


connection.sync( {force: true})
.then(function() {
  for (var i = 0; i <= 10; i++) {
    Shop.create({
      shop_name: faker.name.findName(),
      owner_name: faker.company.companyName(),
      established: faker.random.number({min: 2005, max: 2020}),
      location: faker.address.state(),
      // shop_icon: Sequelize.STRING,
      sales: faker.random.number(400)
    })
  }

});