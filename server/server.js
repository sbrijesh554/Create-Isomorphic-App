
//SAMPLE server middleware



var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var routes = require("./routes/router");
var https = require("https");


app.use(cors());
app.use(bodyParser.json()); 
app.use('/userdata',routes);

// for parsing application/json
// app.use(bodyParser.json()); 

// // for parsing application/xwww-
// app.use(bodyParser.urlencoded({ extended: true })); 
// //form-urlencoded

// // for parsing multipart/form-data
// app.use(upload.array()); 
// app.use(express.static('public'));

app.get('/randomnumber', function(req,res){
    var num = Math.floor(Math.random()*293928).toString();
    console.log(num);
    res;
    // res.sendStatus(500).send();
});

app.get('/first', function(req,res){
    var str = "";
    for(var i = 0; i<100; i++){
        str += 'first response text first response text'
    }

    res.send(str);
});
app.get('/second', function(req,res){
    var str = "";
    for(var i = 0; i<100; i++){
        str += 'second response text second response text'
    }

    res.send(str);
});
app.get('/third', function(req,res){
    data = "third";
    res.send(data);
});

app.listen(8081);

https.createServer(app).listen(8082);