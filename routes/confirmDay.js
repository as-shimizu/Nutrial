var express = require('express');
var router = express.Router();
var utils = require('../modules/util')
var exTable = require('../models/exTable')

/* GET home page. */
router.get('/', utils.loginCheck, function(req, res, next) {
  res.render('confirmDay', { 
    name: req.session.name,
    cal: req.session.cal
  });
});

/* ボタン押下時 */
router.post('/', function (req,res,next) {
  if(req.body.regist) {
    console.log(req.session.name, req.session.cal);
    var input = [{ name: req.session.name, cal: req.session.cal }];
    exTable.insert(input, function(error) {
      if(error) {
        res.redirct('/createDay', { message: "登録に失敗しました。" })
      }
      req.session.name = null;
      req.session.cal = null;
      res.redirect('top', { message: "登録しました。" })
    });
  } else if(req.body.back) {
    res.redirect('/createDay');
  }
});

module.exports = router;
