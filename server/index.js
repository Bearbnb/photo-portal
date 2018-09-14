const express = require('express');
const app = express();
const controller = require('./controller.js');

app.use(express.static('../client'));


app.get('/house', (req, res) => {
	controller.getAllPhotos((data) => {
		console.log('data returned is:', data);
		res.send(data);
	});
});


app.listen(3001, () => {
	console.log('listening on port 3001');
});