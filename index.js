var express = require('express');
var app = express();

var fs = require('fs');

var bodyParser = require('body-parser');

app.use(express.static('public'));

app.set('view engine', 'ejs')


// app.get('/', function (req, res) {
// 	res.render('index.ejs', {
// 		arr: articles
// 	});
// });
app.get('/', function (req, res) {
	res.send('Hello world');
});

app.listen(3000);