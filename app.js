var express = require('express')
var app = express()
var HelloController = require("./controllers/HelloController")

app.use(express.static("public"));

app.set("view engine", "pug");

app.set("views", "./views");

app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
  console.log('Server listening on port 3000');
});

app.get('/', HelloController.getHelloView);
