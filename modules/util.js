var express = require('express');
var router = express.Router();

module.exports = {
  loginCheck : function( req, res, next ){
    if( req.session.loginName ) {
        next();
     } else {
        res.render('login');
     }
  }
}
