var pg = require('pg');
var dbConnect = require('../conf/dbConfig');
var dbUtil = require('./dbUtil');

module.exports = {
  getLogin : function (loginName, password, callback) {
    var sql = "select is_login from login_user where login_name = $1 and password = $2;";
    var parameters = [[loginName, password]];
    console.log("[SQL]" + sql);
    dbUtil.sqlExec(sql, parameters, function(error,isLogin) {
      if(error) {
        console.log('error: connect DB');
        console.log(error);
        return callback(error, null)
      } else {
        if(isLogin) {
          return callback(error, 'isLogin true');
        } else {
          updateLogin(loginName, password,function(error) {
            if(error) {
              console.log('error: connect DB');
              return callback(error, null);
            } else {
              return callback(error, null);
            }
          });
        }
      }
    });
  },

  updateLogin : function(loginName, password, callback) {
    var sql = "update login_user set is_login = 'true', last_login_date = now() where login_name = $1 and password = $2;";
    var parameters = [[loginName, password]];
    console.log("[SQL]" + sql);
    dbUtil.sqlExec(sql, parameters, function(error) {
      if(error) {
        console.log('error: connect DB');
        console.log(error);
      }
      return callback(error);
    });
  }
}
