var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('Display All Product');
    res.render("blog",{ title: 'blog' });
});
router.get('/add', function(req, res, next) {
    res.render("addblog",{ title: 'addblog' });
});
router.post('/add', [
    body("name","กรุณาระบุชื่อบทความ").not().isEmpty(),
    body("description","กรุณาระบุเนื้อหาบทความ").not().isEmpty(),
    body("author","กรุณาระบุชื่อผู้แต่ง").not().isEmpty()
] ,function(req, res, next) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const result = validationResult(req);
    var errors = result.errors;
    
    if (!result.isEmpty()) {
        res.render('addblog',{errors:errors}); //send error to view addblog

        // console.log(errors);

        // return res.status(400).json({ 
        //     errors: errors.array()
        // });
    }else{
        //insert to db
    }
    // console.log(req.body.name);
    // console.log(req.body.description);
    // console.log(req.body.author);
});
module.exports = router;