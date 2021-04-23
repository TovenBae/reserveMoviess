var express = require('express');
var router = express.Router();

// 휴가 설정을 위한 변수 선언
var dayoffs = [
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
	console.log(dayoffs);
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
router.get('/getdayoff', function(req, res, next) {
	console.log(req.query);
  var oData = {
    message: 'SUCCESS',
    remainDayOff: 15
  };
  if (req.query.userid !== 'BSH') {
    oData.remainDayOff = 20
  }
  	// res.render('seats', { title: 'Seats' });
  	res.send(oData);
});

/* GET -> String */
router.get('/getdayoff2', function(req, res, next) {
	console.log(req.query);
  var oData = {
    message: 'SUCCESS',
    remainDayOff: 15
  };
  if (req.query.userid !== 'bsh') {
    oData.remainDayOff = 20
  }
  	// res.render('seats', { title: 'Seats' });
  	res.send(oData.remainDayOff);
});

/* POST -> JSON */
router.post('/setdayoff', function(req, res, next) {
	console.log(req.body);
  var oData = {
    message: 'SUCCESS'
  };
  res.send(oData);
});

/* POST -> String */
router.post('/setdayoff2', function(req, res, next) {
  console.log(req.body);
  var oData = {
    message: 'SUCCESS'
  };
  res.send(oData.message);
});

module.exports = router;
module.exports.dayoffs = dayoffs;
