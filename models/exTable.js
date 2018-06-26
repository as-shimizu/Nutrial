var pg = require('pg');
var dbConnect = require('../conf/dbConfig');
var dbUtil = require('./dbUtil');

module.exports = {
  insert : function (input, callback) {
    var client = new pg.Client(dbConnect.dbConnectStr);
    var sql = "insert into exTable (name, cal) values ($1, $2)";
    var parameters = [input.name, input.cal];
    console.log(sql);
    dbUtil.sqlExec(sql, parameters, function(error) {
      if(error) {
        console.log('error to regist');
      } else {
        console.log('success for regist');
      }
      return callback(error, null);
    });
  }
}
