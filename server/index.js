const express = require('express');
const app = express();
const controller = require('./controller.js');

app.get('/house', (req, res) => {
	controller.getPhotos((data) => {
		console.log('data returned is:', data);
		res.send(data);
	});
});


app.listen(3001, () => {
	console.log('listening on port 3001');
});