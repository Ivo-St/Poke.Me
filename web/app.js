var config = require('./config/config.js');
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', function (req, res) {
  res.send({test: 1})
});

server.listen(config.app.port, function () {
  console.log('Poke.Me app listening on port ' + config.app.port);
});
