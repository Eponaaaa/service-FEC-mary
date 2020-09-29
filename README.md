# Microservice: Shop Information

> This "Shop Information" module is a fullstack application that is meant to integrate with 3 other services to display various information based on a queried item. The "Shop Information" module extracts the itemId from the browser's address bar and queries the database for the information about the shop. The front end displays shop informations such as seller name and establishment as well as other items sold by the same seller.

## Technology Used and Challenges
Frontend: JavaScript, React.js, HTML, CSS, Jest/Enzyme, Webpack
Backend: Node.js, Express, MySql, Sequelize

This application was developed from the ground up but I knew it would be based on React.js and Node.js.
The first decision I had to make is what type of database to use. While I like to use MongoDB for it's flexibility, I choose to use MySql because I know I wanted to minimize writing and editing to the databse. I created two tables, one that stores information for an item, one that stores shop information. Each entry for an item would use the shopId from the shop table as a foreign key. This way one product could be deleted when sold or edit without having to modify the shop table as well. I used sequilze to make interfacing with the database cleaner and more readable. 

## Related Projects

  - Service: Photo Carousel https://github.com/Eponaaaa/fec-service-michael
  - Service: Item Details https://github.com/Eponaaaa/service-Ashby
  - Service: Reviews https://github.com/Eponaaaa/service-Epona-melvin
  - Proxy: https://github.com/Eponaaaa/proxy-FEC-mary
## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Running the code locally for development

Make sure to run "npm install"
I. Setting up the database
- open the server folder and open the database folder
- in the db.js file change username and password to your mysql configuration
- in the seed.js file change username and password to match your db.js file
- from your terminal, navigate to the root directory and type "npm run db:create" to create the database
- then type "npm run db:seed" to seed the database with data

II. Use webpack to bundle files
- from the root director type "npm run build"

III. To start Express server:
- from the root directory type "npm run start"
- if you need to adjust the the port the server is running on do so in the server.js file found in the server folder

VI. Enjoy yourself!
- if you want to make changes to the database data you can do so in the seed.js file
- if making changes to the React components, use "npm run watch" for webpack to compile your files as you change them



## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

