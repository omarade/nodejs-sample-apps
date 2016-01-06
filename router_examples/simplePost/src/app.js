var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/samplePostRequest', function (request, response) {
	response.send('data received: ' + JSON.stringify(request.body) + '\n');
});

var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);
});