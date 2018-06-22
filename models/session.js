var pg = require('pg');
var dbConnect = require('../conf/dbConfig');
var dbUtil = require('./dbUtil');

module.exports = {
  deleteSession : function (loginName, callback) {
    var client = new pg.Client(dbConnect.dbConnectStr);
    var sql = "delete from SESSION where sess->> 'loginName'= '" + loginName + "';";
    var parameters = [null];
    console.log(sql);
    console.log(parameters);
    dbUtil.sqlExec(sql, parameters, function(error) {
      console.log("session");
      if(error) {
        console.log('error to delete session');
      } else {
        console.log('delete session from DB');
      }
      return callback(error, null);
    });
  }
}
