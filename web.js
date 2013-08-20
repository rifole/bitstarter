var express = require('express');
var fs = require('fs');
var index_html = "index.html";
var about_html = 'about.html';
var contact_html = 'contact.html';
var services_html = 'services.html';


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var html = fs.readFileSync(index_html).toString();
    response.send(html);
});

app.get('/about', function(req,res){
    res.send(fs.readFileSync(about_html).toString());
});

app.get('/contact', function(req,res){
    res.send(fs.readFileSync(contact_html).toString());
});

app.get('/services', function(req,res){
    res.send(fs.readFileSync(services_html).toString());
});


var port = process.env.PORT || 8080
app.listen(port, function() {
  console.log("Listening on " + port);
});
