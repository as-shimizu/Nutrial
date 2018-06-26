var express = require('express');
var router = express.Router();
var utils = require('../modules/util')

/* GET home page. */
router.get('/', utils.loginCheck, function(req, res, next) {
  console.log('into top.js');
  res.render('top', { title: 'top', loginName: req.session.loginName });
});

/* ボタン押下時処理 */
router.post('/', function(req, res, next) {
  console.log(req.body.createDay);
  if(req.body.createDay) {
    res.redirect('/createDay');
  } 
});

module.exports = router;
