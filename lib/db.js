var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'Tiina',
	password:'',
	database:'kirjat'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;