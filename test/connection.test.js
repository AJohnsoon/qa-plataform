const connection = require('../database/data');

describe('exemple of data connection', ()=>{
    test('test database', async()=>{
    connection.authenticate().then(() => {
        console.log('testing fake-database connection')
    })
    expect(connection).toBeTruthy()
    })
})