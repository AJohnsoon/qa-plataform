const express = require('express');
const router = express();
const questionModel = require('./database/Question');
const answerModel = require('./database/Answer');

router.set('view engine', 'ejs');
router.use(express.static(__dirname + '/views'));
router.use(express.urlencoded({extended: false}));
router.use(express.json());


router.get('/', (req, res) => {
    questionModel.findAll({raw: true, order: [
        ['id', 'DESC']
    ]}).then(questions => {
        res.render('answers', {
            questions: questions
        });
    });
});

router.get('/question', (req, res) => {
    res.render('question', {});
});

router.get('/question/:id', (req, res)=>{
    let id = req.params.id;
    questionModel.findOne({
        where: {id: id}
    }).then(questions=>{
        if(questions){
            answerModel.findAll({
                where: {questionId: questions.id},
                order:[['id', 'DESC']]
            }).then(answer =>{
                res.render('foldQuestion', {
                    foldQuestion: questions,
                    foldAnswer: answer
                })
            })
        }else{
            res.redirect('/')
        }
    })
})

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

router.post('/saveAnswers', (req,res)=>{
    const storeAnswers = {
        comment: req.body.discussTextArea,
        questionId: req.body.inputQuestionId
    }

    answerModel.create({
        comment: storeAnswers.comment,
        questionId: storeAnswers.questionId
    }).then(()=>{
        res.redirect('/question/'+storeAnswers.questionId);
    })
})

module.exports = router;