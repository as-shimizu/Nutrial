var express = require('express');
var router = express.Router();


/* ボタン押下時処理 */
router.post('/', function(req, res, next) {
  if(req.body.addMeal) {
    res.redirect('/createDay');
  } else if(req.body.menuList) {
    res.redirect('/top');
  } else if(req.body.foodList) {
    res.redirect('/top');
  } else if(req.body.account) {
    res.redirect('/top');
  }
  res.render('/top');
});
module.exports = router;
