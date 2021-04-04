const connection = require('../database/data');

describe('exemple of data connection', ()=>{
    test('should authentication database', async()=>{
    expect(connection.authenticate).toBeTruthy()
    })
})
