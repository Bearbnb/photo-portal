const express = require('express');
const app = express();
const controller = require('./controller.js');


app.use(express.static(__dirname + '/../client/dist'));
//app.use("/", express.static('../client/dist'));


app.get('/house', (req, res) => {
	controller.getAllPhotos((data) => {
		console.log('data returned is:', data);
		res.send(data);
	});
});


app.listen(3001, () => {
	console.log('listening on port 3001');
});