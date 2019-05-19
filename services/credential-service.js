const responseHandler = require('../common/responseHandler');
var validateService = require('../services/validation-service');
var mysqlRepo = require('../repo/mysql-repo');
var generator = require('generate-password');

function credentialService(){
    var self = this;

    this.createService = function(req,res){
        if (validateService.validateEmail(req)){
            if (req.query.password === req.query.repeatPassword){
                if (validateService.validatePassword(req)){
                    mysqlRepo.select(req,res,(req,res,resp,err)=>{
            
                        if (err) {
                            responseHandler.sendError(res,err);
                        } 
                        else{
                            if (Object.keys(resp.data).length == 0){
                                mysqlRepo.create(req,res,this.callback);
                            }
                            else {
                                responseHandler.sendError(res,{ message : 'emailId already in use'});
                            }
                        }
                    });
                    
                } else{
                    responseHandler.sendError(res,{ results : 'invalid password'});
                }
            } else{
                responseHandler.sendError(res,{ results : 'passwords do not match'});
            }
            
        } else {
            responseHandler.sendError(res,{ results : 'invalid email address'});
        }
    }

    this.validateService = function(req,res){
        //call backend and validate 
        //select email id and password afrom mysql databse
        //if matching , success
        //if not, error
        mysqlRepo.validate(req,res,(req,res,resp,err)=>{
            if (err) {
                responseHandler.sendError(res,err);
            }
            else {
                if (Object.keys(resp.data).length == 0){
                    responseHandler.sendError(res, { results : { responseCode : 403 , message : 'emailId / password not correct'}});
                }
                else {
                    var message = 'welcome ' + req.query.emailId;
                    responseHandler.sendSuccess(res, {results: message});
                }

            }
        });

    }

    this.resetService = function(req,res){
        mysqlRepo.select(req,res,(req,res,resp,err)=>{
            
            if (err) {
                responseHandler.sendError(res,err);
            } 
            else{
                if (Object.keys(resp.data).length === 0){
                    responseHandler.sendError(res,{ message : 'emailId not registered'});
                }
                else {
                    var password = generator.generate({
                        length: 10,
                        numbers: true,
                        symbols: false
                    });
                    req.query.password=password;
                    mysqlRepo.update(req,res,this.callback);
                }
            }
        });

    }

    this.callback = function(req,res,resp,err){
        if (err) {
            responseHandler.sendError(res,err);
        } 
        else{
            responseHandler.sendSuccess(res, resp);
        }
    }
}

module.exports = new credentialService;