const connection = require('../database/data');

describe('exemple of data connection', ()=>{
    test('Should authenticate to database', async()=>{
    expect(connection.authenticate).toBeTruthy()
    })
})
