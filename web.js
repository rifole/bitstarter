var express = require('express');
var app = express();
var file = fs.readFileSync('index.html', 'utf8');
var print = file.toString('utf8');

app.use(express.logger());

app.get('/', function(request, response) {
  response.send('print');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
