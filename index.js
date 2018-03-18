const request = require('request');
/*const argv = require('yargs').argv;*/
const express = require('express')
const app = express();
const apiKey = '4b6b39dc8f6441d9486ff566b5d0e940';
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('index', {weather: null, error: null});
});

app.post('/', function(req, res) {
	let city = req.body.city;
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

	request(url, function(err, response, body) {
		if(err){
      		res.render('index', {weather: null, error: 'Error, please try again'});
		} else {
			let weather = JSON.parse(body);
			console.log(weather);
			if(weather.main == undefined){
			    res.render('index', { weather: null, error: 'Error, please try again' });
			} else {
			    let weatherText = `It's ${weather.main.temp} celsius in ${weather.name}!`;
			    res.render('index', { weather: weatherText, error: null });
		  	}
		}
			
	});
});

app.listen(3000, function() {
	console.log('weatherapp listening on 3000!');
});
