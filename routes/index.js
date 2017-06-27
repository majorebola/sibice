const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	let data = fs.readFileSync(path.join(__dirname, '..', 'data', 'planets.json'));
	let planets = JSON.parse(data);
  	res.render('index', {planets: planets});
	// res.json(planets);
});

router.get('/:planetId', function (req, res, next) {
	let data = fs.readFileSync(path.join(__dirname, '..', 'data', 'planets.json'));
	let planets = JSON.parse(data);
	let planet = planets[req.params.planetId];
	res.render('singlePlanet', {planet: planet})
});

module.exports = router;
