
var fs = require('fs');

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
    }
}

module.exports = services;