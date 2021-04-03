const Sequelize = require('sequelize');
const connection = new Sequelize('qa_plataform', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = connection;