const Sequelize = require('sequelize');
const connection = require('./data');

const Question = connection.define('Questions',{   
    title: {
        type: Sequelize.STRING,
        allowNull: false,    
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Question.sync({force: false}).then(()=>{console.log('table (question) successfully created')});
