const faker = require('faker');

const Sequelize = require('sequelize');
const connection = new Sequelize('etsy', 'root', 'mikamaus', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

// connection.authenticate((err) => {
//     if (err) {
//       console.log('got an error', err)
//     } else {
//       console.log('db connected')
//     }
// });

const Shop = connection.define('shops', {
  shop_name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  owner_name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

let name = faker.name.findName();
let companyName = faker.company.companyName();


connection.sync( {force: true})
.then(function() {
  Shop.create({
    shop_name: name,
    owner_name: companyName
  })
});

// module.exports = Shop