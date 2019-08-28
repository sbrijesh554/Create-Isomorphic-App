var express = require('express');
var router = express.Router();
var services = require('../service/services'); 

router.post("/savedata", function(req, res){
    services.writeUserData(req.body, function(data){
        res.send(data);
    });
});

router.get("/getdata", function(req, resp){
    services.readUserData(function(data){
        res.json(data);
    })
});

module.exports = router;
