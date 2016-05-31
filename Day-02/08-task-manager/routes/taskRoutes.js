var express = require('express');
var router = express.Router();

/* GET tasks page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.write('All the tasks will be listed here');
  res.end();
});

router.get('/new', function(req, res, next){
	res.write('A new task will be added here');
	res.end();
});

module.exports = router;