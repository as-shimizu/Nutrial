var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render(addMeal, {title: 食事登録画面});
});

module.exports = router;
