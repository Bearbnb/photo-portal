const express = require('express');
const app = express();
const controller = require('./controller.js');

app.get('/', (req, res) => {
	res.send('SUPPPPPPPPP')
});

app.get('/house', (req, res) => {
	controller.getAllPhotos((data) => {
		console.log('data returned is:', data);
		res.send(data);
	});
});


app.listen(3001, () => {
	console.log('listening on port 3001');
});