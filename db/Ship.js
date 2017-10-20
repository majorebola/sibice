'use strict';
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const db = require('./DB');

const Ship = db.define('ship', {
	name: DataTypes.STRING,
	code: DataTypes.STRING,
	description: DataTypes.TEXT,

	length: DataTypes.FLOAT,
	width: DataTypes.FLOAT,
	height: DataTypes.FLOAT,
	weight: DataTypes.FLOAT,

	crew: DataTypes.INTEGER,
	weapons: DataTypes.STRING,

	shipClass: DataTypes.STRING,
	image: DataTypes.STRING
}, {
	timestamps: false
});

module.exports = Ship;