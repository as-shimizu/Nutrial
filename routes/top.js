var express = require('express');
var router = express.Router();

/* Session */
var loginCheck = function( req, res, next ){
    if( req.session.loginName ) {
        next();
     } else {
        res.render('login');
     }
};

/* GET home page. */
router.get('/', loginCheck, function(req, res, next) {
  console.log('into top.js');
  res.render('top', { title: 'top', loginName: req.session.loginName });
});

module.exports = router;
