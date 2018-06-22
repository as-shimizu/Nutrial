var pg = require('pg');
var dbConnect = require('../conf/dbConfig.js');
var async = require('async');

module.exports = {
  /**
  * DBアクセス
  **/
  sqlExec : function(sql, parameters, callback) {
    var client = new pg.Client(dbConnect.dbConnectStr);
    client.connect(function (error) {
      if(error) {
        client.end();
        return callback(error, null);
      }
      client.query('BEGIN', function (err, result) {
        async.eachSeries(parameters, function(parameter, next) {
          client.query({text : sql}, function (error, results) {
            if (error) {
              rollback(client);
              return callback(error, parameter);
            }
            if(result.command == 'SELECT') return callback(error, result.rows);
            next();
          });
        },
        function(error, result) {
          if(error) {
            rollback(client);
            return callback(error, null);
          }
          client.query('COMMIT', client.end.bind(client));
          console.log("D");
          return callback(error, null);
        });
      });
    });   
  }
}

function rollback(client) {  
  client.query('ROLLBACK', function() {
    client.end();
  });
}
