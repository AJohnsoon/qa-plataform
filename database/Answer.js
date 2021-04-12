const Sequelize = require('sequelize');
const connection = require('./data');

const Answer = connection.define("answers", {
    comment: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    questionId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }

})

Answer.sync({force: false}).then(()=>{console.log('table ANSWER successfully created')});
module.exports = Answer
