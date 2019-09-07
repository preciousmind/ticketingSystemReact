var express = require('express')
var router = express.Router()

//router.use('/', function(req, res){res.status(200).json({"msg":"Server started"})});
router.use('/ticket', require('./tickets'));
router.use('/user', require('./user'));

module.exports = router