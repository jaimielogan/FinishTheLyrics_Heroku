require('dotenv').config();
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {layout: 'layouthome.hbs'});
});

router.get('/play', function(req, res, next) {
  console.log(process.env.apiKey_lyrics);
  res.render('index', {layout: 'layout.hbs', apiKey_lyrics: process.env.apiKey_lyrics});
});

router.get('/FeelingInspired',function(req,res,next){
  res.render('index', {layout: 'layoutinspired.hbs'});
});

module.exports = router;
