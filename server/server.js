
//SAMPLE server middleware



var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(cors());

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
    res.send(num);
});

app.listen(8081);