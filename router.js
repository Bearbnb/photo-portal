var request = require("request");


var data = {properties: []};
var options = { method: 'GET',
  url: 'http://localhost:3007/house',
  headers: 
   { 'Postman-Token': '74b159aa-6450-4cae-896c-a10335065000',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
    data.properties = JSON.parse(body);

  console.log(data.properties[0].photo_url);
});