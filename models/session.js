var pg = require('pg');
var dbConnect = require('../conf/dbConfig');

module.exports = {
  deleteSession : function (loginName, callback) {
    var client = new pg.Client(dbConnect.dbConnectStr);
    var sql = "delete from SESSION where sess->> 'loginName'= '" + loginName + "';";
    console.log(sql);

    // DB更新
    client.connect(function (error) {
      if (error) {
        console.log('error at db connect');
        return callback(error);
      }
      client.query(sql, function (error, results) {
        if(error) {
          console.log('error to delete session');
          console.log(error);
          return callback(error);
        }
        console.log('delete session from DB');
        return callback(null);
      });
    });
  }
}
