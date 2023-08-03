var express = requrie('express');
var app = express();
var http = requrie('http').Server(app);
app.use(express.static(__dirmame +'/www'));

let server