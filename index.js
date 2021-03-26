const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));


app.get('/', (req, res)=>{

    const welcome = true
    const person = {
        name: "Allan Johnson", 
        office: "Sofware Engineer",
        years: 28,
        adress:{
            street: "Rua canela quadra B7",
            number: 17,
            cep: 53370440
        },
        level: 12
    }

    res.render('index', {
        name: person.name,
        ofc: person.office,
        year: person.years,
        level: person.level,
        message: welcome
    })
})

app.listen(port, (error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("server is running")
    }
});