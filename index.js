const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));


app.get('/question', (req, res)=>{
    res.render('question', {})
})

app.get('/', (req, res)=>{
    res.render('answers', {})
})

app.listen(port, (error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("server is running")
    }
});