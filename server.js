const bodyParser = require('body-parser');
const server = require('./app')
const port = 3000;

server.set('view engine', 'ejs');
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());


server.get('/', (req, res) => {
    res.render('answers', {});
});

server.get('/question', (req, res) => {
    res.render('question', {});
});

server.post('/saveQuestions', (req, res) => {
    const question = {
        titleQuestion: req.body.title,
        descriptionQuestion: req.body.description
    }

    res.send(question);
});

server.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("server is running");
    }
});

module.exports = server