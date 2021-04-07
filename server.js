const server = require('./app')

server.listen(3000, (error) => {
    if (error)
        console.log(error);
    console.log("server is running");    
});
