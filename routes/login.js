var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res, next) {
  let loginName = req.body.loginName;
  let password = req.body.password;

  if(loginName=="as-shimizu" && password=="as-shimizu") {
    console.log("loginName: " + loginName);
    console.log("password: " + password);
    
    // session
    req.session.loginName = loginName;
    req.session.password = password;
    res.redirect('/top');
  } else {
    res.render('login')
  }
});
module.exports = router;

