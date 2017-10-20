'use strict';
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const db = require('./DB');

const Weapon = db.define('weapon', {
	name: DataTypes.STRING,
	code: DataTypes.STRING,
	description: DataTypes.TEXT,

	type: DataTypes.STRING,
	length: DataTypes.FLOAT,
	weight: DataTypes.FLOAT,
	loaderSize: DataTypes.INTEGER,
	loaderWeight: DataTypes.INTEGER,

	maxRate: DataTypes.INTEGER,
	range: DataTypes.INTEGER,
	bonus: DataTypes.INTEGER,
	damage: DataTypes.STRING,

	image: DataTypes.STRING
}, {
	timestamps: false
});

module.exports = Weapon;