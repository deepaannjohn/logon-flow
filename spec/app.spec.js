var request = require('request');
var validationService = require('../services/validation-service');
var http = require('http');

describe('credential api test cases : ', function(){
  beforeAll(function() {
    var app = require('../app');
    var http = require('http');
    var server = http.createServer(app);
    server.listen('3001');
  });

  it('credential / create api : emailId is not passed in the request : ',function(){
    var options = {
      url: 'http://localhost:3001/credential/create?password=abcde1234&repeatPassword=abcde1234',
      headers: {
        'Content-type': 'application/json'
      },
      json:true
    };
    request.get(options,function(err,res,body){
      expect(res.statusCode).toBe(500);
    })
  })

  it('credential / create api : password is not passed in the request : ',function(done){
    var options = {
      url: 'http://localhost:3001/credential/create?emailId=daj1@abc.com&repeatPassword=abcde1234',
      headers: {
        'Content-type': 'application/json'
      },
      json:true
    };
    request.get(options,function(err,res,body){
      expect(res.statusCode).toBe(500);
      done();
    })
  })

  it('credential / create api : repeatPassword is not passed in the request : ',function(done){
    var options = {
      url: 'http://localhost:3001/credential/create?emailId=daj1@abc.com&password=abcde1234',
      headers: {
        'Content-type': 'application/json'
      },
      json:true
    };
    request.get(options,function(err,res,body){
      expect(res.statusCode).toBe(500);
      done();
    })
  })

  it('credential / create api : create credentials',function(done){
    var name = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    var emailId = name+'@gmail.com';
    var url1 = 'http://localhost:3001/credential/create?emailId='+emailId+'&password=abcde1234&repeatPassword=abcde1234';
    var oldurl = 'http://localhost:3001/credential/create?emailId=emailId&password=abcde1234&repeatPassword=abcde1234';
    var options = {
      url: url1,
      headers: {
        'Content-type': 'application/json'
      },
      json:true
    };
    request.get(options,function(err,res,body){
      expect(res.statusCode).toBe(200);
      done();
    })
  })

  it('credential / validate api : emailId is not passed in the request',function(done){
    var options = {
      url: 'http://localhost:3001/credential/validate?password=abcde1234',
      headers: {
        'Content-type': 'application/json'
      },
      json:true
    };
    request.get(options,function(err,res,body){
      expect(res.statusCode).toBe(500);
      done();
    })
  })

  it('credential / validate api : password is not passed in the request',function(done){
    var options = {
      url: 'http://localhost:3001/credential/validate?emailId=daj2@abc.com',
      headers: {
        'Content-type': 'application/json'
      },
      json:true
    };
    request.get(options,function(err,res,body){
      expect(res.statusCode).toBe(500);
      done();
    })
  })


  it('credential / validate api : validate credentials',function(done){
    var options = {
      url: 'http://localhost:3001/credential/validate?emailId=daj2@abc.com&password=abcde1234',
      headers: {
        'Content-type': 'application/json'
      },
      json:true
    };
    request.get(options,function(err,res,body){
      expect(res.statusCode).toBe(200);
      done();
    })
  })

  it('credential / reset api : emailId is not passed in the request',function(done){
    var options = {
      url: 'http://localhost:3001/credential/reset',
      headers: {
        'Content-type': 'application/json'
      },
      json:true
    };
    request.get(options,function(err,res,body){
      expect(res.statusCode).toBe(500);
      done();
    })
  })


  it('credential / reset api : reset credentials',function(done){
    var options = {
      url: 'http://localhost:3001/credential/reset?emailId=daj1@abc.com',
      headers: {
        'Content-type': 'application/json'
      },
      json:true
    };
    request.get(options,function(err,res,body){
      expect(res.statusCode).toBe(200);
      done();
    })
  })

})

