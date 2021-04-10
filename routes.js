const express = require('express');
const bodyParser = require('body-parser');
const router = express();
const questionModel = require('./database/Question');


router.set('view engine', 'ejs');
router.use(express.static(__dirname + '/views'));
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());


router.get('/', (req, res) => {
    res.render('answers', {});
});

router.get('/question', (req, res) => {
    res.render('question', {});
});

router.post('/saveQuestions', (req, res) => {
    const question = {
        titleQuestion: req.body.title,
        descriptionQuestion: req.body.description
    }

    questionModel.create({
        title: question.titleQuestion,
        description: question.descriptionQuestion
    }).then(() => {
        res.redirect('/');
    });
   
});


module.exports = router;