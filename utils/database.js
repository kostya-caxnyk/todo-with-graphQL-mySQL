const Sequelize = require('sequelize');

const DB_NAME = 'node-todo';
const USERNAME = 'root';
const PASSWORD = '12345678';

const sequelize = new Sequelize(DB_NAME, USERNAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
