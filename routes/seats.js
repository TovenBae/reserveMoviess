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

/* GET -> JSON */
router.get('/apiget', function(req, res, next) {
	console.log(req.query);
  var oData = {};
  if (seats[req.query.x][req.query.y] === 2) {
    oData.message = "예약";
  } else if (seats[req.query.x][req.query.y] === 1) {
    oData.message = "비움";
  } else {
    oData.message = "자리없음"
  }
  	// res.render('seats', { title: 'Seats' });
  	res.send(oData);
});

/* GET -> String */
router.get('/apiget2', function(req, res, next) {
	console.log(req.query);
  var oData = {};
  if (seats[req.query.x][req.query.y] === 2) {
    oData.message = "예약";
  } else if (seats[req.query.x][req.query.y] === 1) {
    oData.message = "비움";
  } else {
    oData.message = "자리없음"
  }
  	// res.render('seats', { title: 'Seats' });
  	res.send(oData.message);
});

/* POST -> JSON */
router.post('/apipost', function(req, res, next) {
	console.log(req.body);
  var oData = {};
  seats[req.body.x][req.body.y] = 2;
  oData.message = "예약완료"
  	// res.render('seats', { title: 'Seats' });
  res.send(oData);
});

/* POST -> JSON */
router.post('/apipost2', function(req, res, next) {
  console.log(req.body);
  var oData = {};
  seats[req.body.x][req.body.y] = 2;
  oData.message = "예약완료"
  	// res.render('seats', { title: 'Seats' });
  res.send(oData.message);
});

module.exports = router;
module.exports.seats = seats;
