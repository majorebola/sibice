'use strict';
const Planet = require('./Planet');
const Ship = require('./Ship');
const Weapon = require('./Weapon');

sync();
function sync() {
	return Planet.sync().then(() => {
		return Ship.sync();
	}).then(() => {
		return Weapon.sync();
	});
}