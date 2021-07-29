var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
let counter = 0;
router.get('/posts', function(req, res, next) {
  res.json({a:1,b:2,counter:counter++});
  // res.render('index', { title: 'Express' });
});

module.exports = router;
