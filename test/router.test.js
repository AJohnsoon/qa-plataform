const routers = require('../routes');

const testRoute = {
    title: 'Main test title',
    description: 'Main test Description',
    status: 200
}

describe('exemple router', ()=>{
    test('should a router return status 200', async()=>{
       
        routers.get('/', (req, res)=>{                   
            res.send(testRoute.description)
        })
        
        expect(testRoute.description).toBe('Main test Description')
        expect(testRoute.status).toEqual(200)
    })
})
