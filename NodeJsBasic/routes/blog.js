var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('Display All Product');
    res.render("blog",{ title: 'blog' });
});
router.get('/add', function(req, res, next) {
    res.render("addblog",{ title: 'addblog' });
});
router.post('/add', function(req, res, next) {
    console.log(req.body.name);
    console.log(req.body.description);
    console.log(req.body.author);
});
module.exports = router;