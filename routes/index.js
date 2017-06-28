const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	let data = fs.readFileSync(path.join(__dirname, '..', 'data', 'planets.json'));
	let params = {
		showHeader: true,
		planets: JSON.parse(data),
		enableDesc: false
	};
  	res.render('index', params);
	// res.json(planets);
});

router.get('/planet/:planetId', function (req, res, next) {
	let data = fs.readFileSync(path.join(__dirname, '..', 'data', 'planets.json'));
	let planets = JSON.parse(data);
	let planet = planets[req.params.planetId];
	let params = {
		title: planet.name,
		planet: planet,
		enableDesc: true
	};
	res.render('singlePlanet', params)
});

router.get('/classification', function (req, res, next) {
	let data = fs.readFileSync(path.join(__dirname, '..', 'data', 'legend.json'));
	let json = JSON.parse(data);
	let params = {
		showHeader: true,
		lifeSustain: json.lifeSustain,
		types: json.type
};
	res.render('classification', params);
});

module.exports = router;
