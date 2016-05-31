var express = require('express');
var router = express.Router();

var tasks = [
	{id : 1, name : "Fix that bug", isCompleted : false},
	{id : 2, name : "Master JavaScript", isCompleted : true},
	{id : 3, name : "Explore Node.js", isCompleted : false}
];

/* GET tasks page. */
router.get('/', function(req, res, next) {
	var viewData = {
		list : tasks
	};
  res.render('tasks/index', viewData);
  
});

router.get('/new', function(req, res, next){
	res.render('tasks/new');
});

router.post('/new', function(req, res, next){
	var newId = tasks.reduce(function(t1, t2){
		return t1.id > t2.id ? t1 : t2;
	}).id + 1;
	var newTask = {
		id : newId,
		name : req.body.newTaskName,
		isCompleted : false
	};
	tasks.push(newTask);
	res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
	var taskId = parseInt(req.params.id,10);
	var task = tasks.filter(function(task){
		return task.id === taskId;
	})[0];
	if (task)
		task.isCompleted = !task.isCompleted;
	res.redirect('/tasks');
});


module.exports = router;