var express = require('express');
var router = express.Router();
var utils = require('../modules/util')
var exTable = require('../models/exTable')

/* GET home page. */
router.get('/', utils.loginCheck, function(req, res, next) {
  if(!req.session.input) {
    req.session.name = "";
    req.session.cal = "";
  }
  res.render('createDay', { 
    name: req.session.name,
    cal: req.session.cal
  });
});

/* ボタン押下時 */
router.post('/', function (req,res,next) {
  if(req.body.create) {
    // 入力値チェック
    if(req.body.name == null) {
      res.render('createDay', { message: "名前を入力してください。" });
    } 
    req.session.name = req.body.name;
    req.session.cal = req.body.cal;
    res.redirect('confirmDay');
  } else if(req.body.back) {
    res.redirect('/top');
  }
});

module.exports = router;
