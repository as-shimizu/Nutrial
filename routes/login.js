var express = require('express');
var router = express.Router();
var loginUser = require('../models/loginUser')
var crypto = require('crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res, next) {
  let loginName = req.body.loginName;
  let password = md5hex(req.body.password);

  loginUser.updateLogin(loginName, password, function(error,status) {
    if(error) {
      res.render('login', {message: "ログインに失敗しました。"})
    } else {
      console.log("loginName: " + loginName);
      // session
      req.session.loginName = loginName;
      res.redirect('/top');
    }
  });
});

function md5hex(str) {
  const md5 = crypto.createHash('md5')
  return md5.update(str, 'binary').digest('hex')
}
module.exports = router;
