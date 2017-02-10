var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var layouts = require('express-ejs-layouts');
var db = require('./models');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(layouts);

app.get('/', function(req,res) {
 res.render('index', {thing: 'thingthingthing'});
});

app.get('/articles', function(req,res) {
  db.article.findAll().then(function(articles) {
    res.render('articles/index.ejs', {title: title, body: body});
  })
  
})

app.get('/articles/new', function(req,res) {
  res.render('articles/new.ejs');
})

app.post('/articles/new', function(req,res) {
  var title = req.body.title;
  var body = req.body.body;

  db.article.create(
    { title: article.title, body: article.body}
  ).then( function() {
    res.redirect('/articles');
  })
});

app.get('/articles/:id', function(req,res) {
  res.send();
});

app.get('/about', function(req,res) {
  res.render('sites/about.ejs');
})

app.get('/contact', function(req,res) {
  res.render('sites/contact.ejs');
})

app.listen(3000);