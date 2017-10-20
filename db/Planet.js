'use strict';
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const db = require('./DB');

const Planet = db.define('planet', {
	name: DataTypes.STRING,
	description: DataTypes.TEXT,
	diameter: DataTypes.INTEGER,
	inhabitants: DataTypes.INTEGER,
	abitableLands: DataTypes.FLOAT,
	orbitalPeriod: DataTypes.FLOAT,
	rotationPeriod: DataTypes.FLOAT,
	inclination: DataTypes.FLOAT,
	gravity: DataTypes.FLOAT,
	planetClass: DataTypes.STRING,
	image: DataTypes.STRING
}, {
	timestamps: false
});

// hasManyMoons

module.exports = Planet;