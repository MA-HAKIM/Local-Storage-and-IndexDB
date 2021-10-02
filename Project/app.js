var express = require('express');
var app = express();
app.use(express.static(__dirname + '/www'));
app.listen(9090, ()=>{
    console.log("server running at port: 9090");
    console.log("To stop server = press CTRL + C ");
});