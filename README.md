# Project Name: More From Service

> Creating a service that uses a product number to fetch the matching shop data and display additional product items. Useful for e-commerce applications.

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

> Some usage instructions

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

