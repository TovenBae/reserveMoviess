var express = require('express');
var router = express.Router();

// 자리 설정을 위한 변수 선언
var seats = [
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],  
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],  
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],  
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],  
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],  
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],  
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],  
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],  
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],  
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],  
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],  
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],  
];

router.use(function(req, res, next) {
	console.log('router use');
	console.log(seats);
	next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('called seats');
	console.log('views : ');

  	// res.render('seats', { title: 'Seats' });
  	res.send(seats);
});


module.exports = router;
module.exports.seats = seats;
