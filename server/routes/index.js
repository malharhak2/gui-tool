var express = require('express');
var router = express.Router();

var exampleScript = require('../js/exampleScript.js');
/* GET home page. */
router.get('/', function(req, res) {
	exampleScript();
  res.render('index', { title: 'Index' });
});

module.exports = router;
