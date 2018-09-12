var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3001/house",
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "61378abd-ecc0-4dbe-b226-43d5193629b8"
  }
}

$.ajax(settings).done(function (response) {
  console.log('response @ client: ', response);

  //figure out where to make response
});