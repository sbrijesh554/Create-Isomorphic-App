
var fs = require('fs');
const jwt = require('jsonwebtoken');
var users = require('../data/UserData');
const config = require('../config/config');
const jwtAuth = require('../config/jwtAuth');

var services = {
    writeUserData: function(userdata,callback){
        fs.writeFile("./data/UserData.txt", JSON.stringify(userdata), function(err){
            if(err){
                return callback(err);
            }
            return callback("Data saved successfully!!");
        });
    },

    readUserData: function(callback){
        fs.readFile('./data/UserData.txt','utf8', function(err, data){
            if(err){
                return callback(err);
            }
            else callback(data);
        })
    },

    authenticateUser: function(username, password, callback){
        let isUserRegistered = users.some(function(user){
            return (user.username == username && user.password == password);
        });
        if(!isUserRegistered){
            callback({
                success: false,
                message: "Invalid Credentials!!"
              });
        }
        else{
            let token = jwt.sign(username,
                config.secret
              );
              // return the JWT token for the future API calls
              callback({
                success: true,
                message: 'Authentication successful!',
                token: token
              });
        }
    },

    checkToken: function(reqObj, callback){
        const resp = jwtAuth.checkToken(reqObj);
        callback(resp);
    }
}

module.exports = services;