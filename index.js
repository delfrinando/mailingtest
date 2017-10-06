// http://stackoverflow.com/questions/2404742/how-to-install-mongodb-on-windows

var http = require('http'),
	express = require('express'),
	mysql = require('mysql')
parser = require('body-parser');
var routes = require('./router/index');
var app = express();
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 8080);

app.get('/', function (req, res) {
	res.send('<html><body><p>Delfrinando Pranata</p></body></html>');
});

app.use('/api', routes);


http.createServer(app).listen(app.get('port'), function () {
	console.log('Server listening on port ' + app.get('port'));
});
