// const { Pool } = require("pg");
// const dotenv = require("dotenv");
// dotenv.config();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: 5432,
// });

// module.exports = pool;

// backend/db.js



// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("military_db", "gaevuha", "Gae$uha1979", {
//   host: "localhost",
//   dialect: "postgres",
//   logging: false, // або true для SQL-логів
// });

// module.exports = sequelize;


const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;