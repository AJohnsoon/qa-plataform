const express = require('express');
const bodyParser = require('body-parser');
const questionModel = require('./database/Question')
const connection = require('./database/data');
const app = express();
const port = 3000;

//database
connection.authenticate().then(() => {
        console.log('Connection success with (QA) database')
    })
    .catch((err)=>{
       console.log(err, 'error to connecting database') 
    })
//__________________________________________________

//routers
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.urlencoded({extended: false}));
//work to json (not in use)
app.use(bodyParser.json());


app.get('/', (req, res)=>{  
    res.render('answers', {});
});

app.get('/question', (req, res)=>{
    res.render('question', {});
});

//route that saves form data using body-parser 
app.post('/saveQuestions', (req, res)=>{
    const question = {
        titleQuestion: req.body.title,
        descriptionQuestion: req.body.description
    }

    res.send(question);
});

app.listen(port, (error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("server is running");
    }
});