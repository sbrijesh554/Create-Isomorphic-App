var express = require('express');
var router = express.Router();
var services = require('../service/services'); 

router.post("/authenticate", function(req,resp,next){
    const username = req.body.username;
    const password = req.body.password;
    services.authenticateUser(username,password,function(data){
        if(data.success) {
        resp.status(200).send(data);
        }
        else{
            resp.status(403).send(data);
        }
        next();
    })
});

router.get("/details", function(req,resp,next){
    let reqObj = {
        role : req.data.role,
        headers : req.headers
    }

    services.checkToken(reqObj,function(data){
        if(data.success) {
            //logic
            resp.status(200).send(data);
        }
        else{
            resp.status(403).send(data);
        }
        next();
    })
    
});






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
