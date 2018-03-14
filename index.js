const request = require('request');

let apiKey = '4b6b39dc8f6441d9486ff566b5d0e940';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;	

request(url, function(err, response, body) {
	if(err) {
		console.log('error', err);
	} else {
		console.log('body', body);
	}
});
