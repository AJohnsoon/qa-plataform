const app = require('./routes');
const connection = require('./database/data');

connection.authenticate().then(() => {
        console.log('Connection success with (QA) database')
    })
    .catch((err) => {
        console.log(err, 'error to connecting database')
    })
    

module.exports = app;