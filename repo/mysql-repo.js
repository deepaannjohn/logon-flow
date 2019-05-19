var mysql = require('mysql');
var config = require('../config/mysqlConfig')   

function mysqlRepo(){


this.create = function(req,res,callback){
    var connection = mysql.createConnection(config);
    var sql = "INSERT INTO credentials (emailId, password) VALUES ? ";
    var values = [ [req.query.emailId,req.query.password]  ];  
    connection.query(sql,[values],function (error, results, fields) {
    callback(req,res,{ data : results, method : 'insert'},error);
    });
    connection.end();
}

this.update = function(req,res,callback){
  var connection = mysql.createConnection(config);
  var sql = 'UPDATE credentials  SET password = ?  where emailId = ? ';
  var values = [ req.query.password, req.query.emailId ];  
  connection.query(sql,values,function (error, results, fields) {
  callback(req,res,{ data : results, method : 'insert'},error);
  });
  connection.end();
}

this.select = function(req,res,callback){
  var connection = mysql.createConnection(config);
  var emailId = req.query.emailId;
  connection.query('SELECT emailId from credentials where emailId =?',[emailId],function (error, results, fields) {
      callback(req,res,{ data : results, method : 'select'},error);
    });
    connection.end();
}

this.validate = function(req,res,callback){
  var connection = mysql.createConnection(config);
  var emailId = req.query.emailId;
  var passsword = req.query.password;
  var values = [emailId,passsword];
  var sql = 'SELECT * from credentials where emailId = ?  AND password = ?'
  connection.query(sql,values,function (error, results, fields) {
      callback(req,res,{ data : results, method : 'select'},error);
    });
    connection.end();
}
}


module.exports = new mysqlRepo;