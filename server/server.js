var express = require('express');
var bodyParser = require('body-Parser');
var morgan = require('morgan');
var cors = require('cors');
var client = require('../database/redis-config').client;
var redis = require('../database/redis-config').redis;

var app = express();
// === Redis SandBox ===//
client.on("ready", function(){
  console.log('client ready!');
});

client.on("error", function(err){
  console.log("Error " + err);
});

client.set("test", "1234", redis.print);

client.get("test", function(err, succ){
  console.log(succ);
})
// ==================//
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.listen(3333, function(){
  console.log('Redis server listening on port 3333');
});
