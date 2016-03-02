var http = require('http');
var express = require('express');
var env = require('../.env');
var app = express();

app.use(express.static(__dirname + '/../client'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(process.env.PORT || 3000);
console.log("Listening on port 3000");
