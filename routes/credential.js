var express = require('express');
var router = express.Router();
var credentialService =  require('../services/credential-service');

/* GET - create credential api. */
router.get('/create', function(req, res, next) {
  credentialService.createService(req,res);
});

/* GET - validate credential api. */
router.get('/validate', function(req, res, next) {
  credentialService.validateService(req,res);
});

/* GET reset credential api. */
router.get('/reset', function(req, res, next) {
  credentialService.resetService(req,res);
});

module.exports = router;
