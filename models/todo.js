const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const todo = sequelize.define('Todo', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isDone: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = todo;
