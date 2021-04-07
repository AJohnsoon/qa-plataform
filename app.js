const express = require('express');
const app = express();
const connection = require('./database/data');
const questionModel = require('./database/Question')


app.use(express.static(__dirname + '/views'));

connection.authenticate().then(() => {
        console.log('Connection success with (QA) database')
    })
    .catch((err)=>{
       console.log(err, 'error to connecting database') 
    })

module.exports = app;

