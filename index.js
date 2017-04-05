var express = require('express');
var app = express();

var fs = require('fs');

var bodyParser = require('body-parser');

app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('public'));

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
	var articles = fs.readFileSync('./data.json', 'utf-8');
	res.render('index.ejs', {
		articles: JSON.parse(articles)
	});
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', function (req, res) {
	if(req.body) {
		fs.writeFile("./text2.txt", JSON.stringify(req.body, null, 10), function() {
			console.log('body in')
		});
		res.end('hi');
	}
	res.end('nobody');
});

app.listen(3000);