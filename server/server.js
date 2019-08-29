
//SAMPLE server middleware



var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
// var multer = require('multer');
// var upload = multer();
var routes = require("./routes/router");



app.use(cors());
app.use(bodyParser.json()); 
app.use(routes);

// for parsing application/json
// app.use(bodyParser.json()); 

// // for parsing application/xwww-
// app.use(bodyParser.urlencoded({ extended: true })); 
// //form-urlencoded

// // for parsing multipart/form-data
// app.use(upload.array()); 
// app.use(express.static('public'));

app.listen(8081);