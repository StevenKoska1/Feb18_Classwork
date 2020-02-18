const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

const options = {
    url: 'https://restcountries.eu/rest/v2/name/eesti',
    method: 'GET'
};

request(options, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log(JSON.parse(body));
});







app.listen(3000, function(){
    console.log("Server is running on prot 3000");
    
   });