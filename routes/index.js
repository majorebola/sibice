const express = require('express');
const fs = require('fs');
const path = require('path');
const Planet = require('../db/Planet');
const Weapon = require('../db/Weapon');
const Ship = require('../db/Ship');



const router = express.Router();

/**
 * Get all Planets
 */
router.get('/', function(req, res, next) {
	Planet.findAll().then(function(planets) {
		let params = {
			title: 'Sibice',
			showHeader: true,
			planets: planets,
			enableDesc: false
		};
		res.render('index', params);
	});
});

/**
 * Get single Planet
 */
router.get('/planet/:planetId', function (req, res, next) {
	Planet.findById(req.params.planetId).then(function(planet) {
		let params = {
			title: 'Sibice: ' + planet.name,
			planet: planet,
			enableDesc: true
		};
		res.render('singlePlanet', params)
	});
});

/**
 * Get Planet classification
 */
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

/**
 * Get Sibice History
 */
router.get('/history', function (req, res, next) {
	let data = fs.readFileSync(path.join(__dirname, '..', 'data', 'history.json'));
	let json = JSON.parse(data);
	let params = {
		showHeader: true,
		history: json.history
	};
	res.render('history', params);
});

/**
 * Get Known Ships
 */
router.get('/ships', function (req, res, next) {
	Ship.findAll().then((ships) => {
		let params = {
			showHeader: true,
			ships: ships
		};
		res.render('ships', params);
	});
});

/**
 * Get Known Weapons
 */
router.get('/weapons', function (req, res, next) {
	Weapon.findAll().then((weapons) => {
		let params = {
			showHeader: true,
			weapons: weapons
		};
		res.render('weapons', params);
	});
});

/**
 * Get single Weapon
 */
router.get('/weapon/:weaponId', function (req, res, next) {
	Weapon.findById(req.params.weaponId).then(function(weapon) {
		let params = {
			title: 'Sibice: ' + weapon.name,
			weapon: weapon,
			enableDesc: true
		};
		res.render('weapon', params)
	});
});


module.exports = router;
