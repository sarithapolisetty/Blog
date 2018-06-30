const express = require('express');
const QuizQuestionsAnswers = require('../questions.js');
const router = express.Router();


router.get('/', (req, res) => {
    const QuizQuestions = QuizQuestionsAnswers.QuizQuestions;
    const UserName = req.cookies.UserName;
    if (UserName) {
        res.render('quiz',
            {
                'UserName': UserName,
                'QuizQuestions': QuizQuestions
            }
        );
    } else {
        res.redirect('/');
    }
});
router.get('/results',  (req, res, next) => {
    const UserPercentageGrade = req.cookies.PercentageGrade;
    const UserLetterGrade = req.cookies.LetterGrade;
    if (UserPercentageGrade && UserLetterGrade) 
    {
        let str = "";
        if (UserLetterGrade === 'F') 
        {
            str = "Better Luck Next Time!!👍";
        } 
        else 
        {
            str = "Congratulations!👏";
        }
        res.render('results',
            {
                'str': str,
                'UserPercentageGrade': UserPercentageGrade,
                'UserLetterGrade': UserLetterGrade
            });
    } else {
        res.redirect('/');
    }
});

router.post('/', (req,res) => {
    const QuizQuestions = QuizQuestionsAnswers.QuizQuestions;
    const QuizAnswers = QuizQuestionsAnswers.QuizAnswers;
    let PercentageGrade = 0;
    let LetterGrade     = "";
    let Marks           = 0;
    const TotalQuestions = QuizQuestions.length;
    let i = 0;
    QuizQuestions.forEach(ques => {
        const Name = ques.id;
        const UserAns = req.body[Name];
        if (UserAns === undefined)
        {
            res.redirect('/quiz');
        }
        if (UserAns.toString() === QuizAnswers[i++].toString()) 
        {
            Marks += 1;
        }   
});
    PercentageGrade = ((Marks / TotalQuestions) * 100).toFixed(2);
    switch (true) {
        case (PercentageGrade < 20):
            LetterGrade = 'F';
            break;
        case (PercentageGrade < 40):
            LetterGrade = 'D';
            break;
        case (PercentageGrade < 60):
            LetterGrade = 'C';
            break;
        case (PercentageGrade < 80):
            LetterGrade = 'B';
            break;
        case (PercentageGrade < 90):
            LetterGrade = 'A';
            break;
        default:
            LetterGrade = 'A+';
            break;
    }
    res.cookie('PercentageGrade', PercentageGrade);
    res.cookie('LetterGrade', LetterGrade);
    res.redirect('/quiz/results');
});

module.exports = router;