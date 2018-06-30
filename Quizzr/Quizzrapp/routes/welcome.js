const express = require("express");
const router = express.Router();

router.get('/', (req,res) => {
    res.render('welcome');
});

router.post('/',(req,res) => {
    const UserName = req.body.UserName;
    if(UserName)
    {
        res.cookie('UserName',UserName);
        res.redirect('/quiz');
    }
    else
    {
        res.redirect('/');

    }
});

module.exports = router;