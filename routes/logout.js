var express = require('express');
var router = express.Router();
var session = require('../models/session.js');

/* Session */
var loginCheck = function( req, res, next ){
    if( req.session.loginName ) {
        next();
     } else {
        res.redirect('/');
     }
};

/* GET home page. */
router.post('/', loginCheck, function(req, res, next) {
  console.log('logout')
  session.deleteSession(req.session.loginName, function(error) {
    if(error) {
      res.render('top', { title: 'top', message: 'Failed to Logout' });
    } else {
      console.log('success logout');
      res.render('login', {message: "ログアウトしました。"});
    }
  });
});

module.exports = router;
