var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var layouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(layouts);

app.get('/', function(req,res) {
 res.render('index', {thing: 'thingthingthing'});
});

app.get('/articles', function(req,res) {
  res.render('articles/index.ejs', {taco: 'veggie tacos'});
})

app.get('/articles/new', function(req,res) {
  res.render('articles/new.ejs');
})

app.post('/articles', function(req,res) {
  res.send(req.body);
})

app.get('/greetings/:name/:lastname', function(req,res) {
  res.send(req.params.name + " " + req.params.lastname);
});

app.listen(3000);