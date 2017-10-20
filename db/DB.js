'use strict';
const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

let connection = {};
let configPath = path.join('db', 'config.json');
if(fs.existsSync(configPath)) {
	let config = fs.readFileSync(configPath, 'utf8');
	config = JSON.parse(config);
	connection = config[config.connection];
} else {
	connection = {
		schema: process.env.DB_SCHEMA,
		user: process.env.DB_USER,
		pw: process.env.DB_PW,
		host: process.env.DB_HOST
	}
}

module.exports = new Sequelize(connection.schema, connection.user, connection.pw, {
	host: connection.host,
	dialect: 'mysql',

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
});