const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	let data = fs.readFileSync(path.join(__dirname, '..', 'data', 'planets.json'));
	let params = {
		title: "Sibice: Stars In Binary InterConnection Effect",
		planets: JSON.parse(data),
		enableDesc: false
	};
  	res.render('index', params);
	// res.json(planets);
});

router.get('/:planetId', function (req, res, next) {
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

module.exports = router;
