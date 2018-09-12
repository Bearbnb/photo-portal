var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'student',
	password: 'student',
	database: 'listings'
});

connection.connect();

//write your query here to grab list of photos from database;

function getPhotos(id, callback) {
	connection.query(`SELECT * FROM houses WHERE id = ${id};`, function(err, results){
		if (err) {
			console.log('error @ controller');
			throw err;
		} else {
			console.log('results @ controller,' results);
			callback(results);
		}
	});
}
