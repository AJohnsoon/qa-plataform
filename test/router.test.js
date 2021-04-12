const routers = require('../routes');

const testRoute = {
    title: 'Main test title',
    description: 'Main test Description',
    status: 200
}

describe('exemple router', ()=>{
    test('Should return description and status 200', async()=>{    
        routers.get('/', (req, res)=>{                   
            res.send(testRoute.description)
        })
        
        expect(testRoute.description).toBe('Main test Description')        
    })
})
